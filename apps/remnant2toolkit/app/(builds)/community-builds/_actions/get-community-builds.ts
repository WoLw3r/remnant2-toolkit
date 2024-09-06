'use server';

import { Prisma, prisma } from '@repo/db';
import { bigIntFix } from '@repo/utils';

import {
  communityBuildsCountQuery,
  communityBuildsQuery,
} from '@/app/(builds)/_libs/build-filters/community-builds';
import { getOrderBySegment } from '@/app/(builds)/_libs/build-filters/get-order-by';
import {
  amuletFilterToId,
  limitByAmuletSegment,
} from '@/app/(builds)/_libs/build-filters/limit-by-amulet';
import {
  archetypeFiltersToIds,
  limitByArchetypesSegment,
} from '@/app/(builds)/_libs/build-filters/limit-by-archetypes';
import {
  buildTagsFilterToValues,
  limitByBuildTagsSegment,
} from '@/app/(builds)/_libs/build-filters/limit-by-build-tags';
import { limitByCollectionSegment } from '@/app/(builds)/_libs/build-filters/limit-by-collection';
import { limitByPatchAffected } from '@/app/(builds)/_libs/build-filters/limit-by-patch-affected';
import { limitToQualityBuilds } from '@/app/(builds)/_libs/build-filters/limit-by-quality';
import { limitByReferenceLink } from '@/app/(builds)/_libs/build-filters/limit-by-reference-link';
import { limitByReleasesSegment } from '@/app/(builds)/_libs/build-filters/limit-by-release';
import {
  limitByRelicSegment,
  relicFilterToId,
} from '@/app/(builds)/_libs/build-filters/limit-by-relic';
import {
  limitByRingsSegment,
  ringsFilterToIds,
} from '@/app/(builds)/_libs/build-filters/limit-by-rings';
import { limitByTimeConditionSegment } from '@/app/(builds)/_libs/build-filters/limit-by-time-condition';
import { limitToBuildsWithVideo } from '@/app/(builds)/_libs/build-filters/limit-by-video';
import {
  limitByWeaponsSegment,
  weaponFiltersToIds,
} from '@/app/(builds)/_libs/build-filters/limit-by-weapons';
import { type BuildListRequest } from '@/app/(builds)/_types/build-list-request';
import { type BuildListResponse } from '@/app/(builds)/_types/build-list-response';
import { getSession } from '@/app/(user)/_auth/services/sessionService';

export async function getCommunityBuilds({
  buildListFilters,
  itemsPerPage,
  orderBy,
  pageNumber,
  timeRange,
}: BuildListRequest): Promise<BuildListResponse> {
  const session = await getSession();
  const userId = session?.user?.id;

  const {
    amulet,
    archetypes,
    buildTags,
    handGun,
    longGun,
    melee,
    rings,
    searchText,
    releases,
    relic,
    patchAffected,
    withCollection,
    withQuality,
    withVideo,
    withReference,
  } = buildListFilters;

  if (releases.length === 0) return { builds: [], totalBuildCount: 0 };

  const archetypeIds = archetypeFiltersToIds({ archetypes });
  const weaponIds = weaponFiltersToIds({
    longGun,
    handGun,
    melee,
  });

  const amuletId = amuletFilterToId({ amulet });
  const relicId = relicFilterToId({ relic });
  const ringIds = ringsFilterToIds({ rings });
  const tagValues = buildTagsFilterToValues(buildTags);
  const trimmedSearchText = searchText.trim();

  const whereConditions = Prisma.sql`
  WHERE Build.isPublic = true
  ${limitByAmuletSegment(amuletId)}
  ${limitByArchetypesSegment(archetypeIds)}
  ${limitByBuildTagsSegment(tagValues)}
  ${limitByReleasesSegment(releases)}
  ${limitByRelicSegment(relicId)}
  ${limitByRingsSegment(ringIds)}
  ${limitByTimeConditionSegment(timeRange)}
  ${limitByWeaponsSegment(weaponIds)}
  ${limitByReferenceLink(withReference)}
  ${limitToBuildsWithVideo(withVideo)}
  ${limitToQualityBuilds(withQuality)}
  ${limitByCollectionSegment(withCollection, userId)}
  ${limitByPatchAffected(patchAffected)}
  `;

  const orderBySegment = getOrderBySegment(orderBy);

  try {
    // First, get the Builds
    const [builds, totalBuildsCountResponse] = await Promise.all([
      communityBuildsQuery({
        userId,
        itemsPerPage,
        pageNumber,
        orderBySegment,
        whereConditions,
        searchText: trimmedSearchText,
      }),
      communityBuildsCountQuery({
        whereConditions,
        searchText: trimmedSearchText,
      }),
    ]);

    // Then, for each Build, get the associated BuildItems
    for (const build of builds) {
      const [buildItems, buildTags] = await Promise.all([
        prisma.buildItems.findMany({
          where: { buildId: build.id },
        }),
        prisma.buildTags.findMany({
          where: { buildId: build.id },
        }),
      ]);

      build.buildItems = buildItems;
      build.buildTags = buildTags;
    }

    const totalBuildCount = totalBuildsCountResponse[0]?.totalBuildCount ?? 0;

    return bigIntFix({
      builds,
      totalBuildCount,
    });
  } catch (e) {
    if (e) {
      console.error(e);
    }
    throw new Error('Failed to get community builds, please try again.');
  }
}