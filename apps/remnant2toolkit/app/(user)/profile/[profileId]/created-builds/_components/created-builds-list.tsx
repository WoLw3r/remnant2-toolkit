// TODO This page is rerendering way too many times

'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Pagination } from '@/app/_components/pagination';
import { usePagination } from '@/app/_hooks/use-pagination';
import { BuildCard } from '@/app/(builds)/_components/build-card';
import { BuildList } from '@/app/(builds)/_components/build-list';
import { CreateBuildCard } from '@/app/(builds)/_components/create-build-card';
import { DEFAULT_BUILD_FILTERS } from '@/app/(builds)/_components/filters/build-filters';
import { BuildVisibilityFilter } from '@/app/(builds)/_components/filters/secondary-filters/build-visibility-filter';
import { useBuildVisibilityFilter } from '@/app/(builds)/_components/filters/secondary-filters/build-visibility-filter/use-build-visibility-filter';
import { OrderByFilter } from '@/app/(builds)/_components/filters/secondary-filters/order-by-filter';
import { useOrderByFilter } from '@/app/(builds)/_components/filters/secondary-filters/order-by-filter/use-order-by-filter';
import { TimeRangeFilter } from '@/app/(builds)/_components/filters/secondary-filters/time-range-filter';
import { useTimeRangeFilter } from '@/app/(builds)/_components/filters/secondary-filters/time-range-filter/use-time-range-filter';
import { type BuildListFilters } from '@/app/(builds)/_components/filters/types';
import { parseUrlFilters } from '@/app/(builds)/_components/filters/parse-search-params';
import { useBuildListState } from '@/app/(builds)/_hooks/use-build-list-state';
import { CreatedBuildCardActions } from '@/app/(user)/profile/_components/created-build-card-actions';
import { getUserCreatedBuilds } from '@/app/(user)/profile/[profileId]/created-builds/_actions/get-user-created-builds';

interface Props {
  isEditable: boolean;
  profileId: string;
  buildFiltersOverrides?: Partial<BuildListFilters>;
  onToggleLoadingResults: (isLoading: boolean) => void;
}

export function CreatedBuildsList({
  buildFiltersOverrides,
  isEditable,
  profileId,
  onToggleLoadingResults,
}: Props) {
  const defaultFilters = useMemo(() => {
    return buildFiltersOverrides
      ? { ...DEFAULT_BUILD_FILTERS, ...buildFiltersOverrides }
      : DEFAULT_BUILD_FILTERS;
  }, [buildFiltersOverrides]);

  const searchParams = useSearchParams();
  const [buildListFilters, setBuildListFilters] = useState(
    parseUrlFilters(searchParams, defaultFilters),
  );

  const { buildListState, setBuildListState } = useBuildListState();
  const { builds, isLoading } = buildListState;

  const itemsOnThisPage = builds.length;
  const itemsPerPage = isEditable ? 15 : 16;

  const { orderBy, handleOrderByChange } = useOrderByFilter('newest');
  const { timeRange, handleTimeRangeChange } = useTimeRangeFilter('all-time');
  const { buildVisibility, handleBuildVisibilityChange } =
    useBuildVisibilityFilter('all');

  const {
    currentPage,
    firstVisibleItemNumber,
    lastVisibleItemNumber,
    isNextPageDisabled,
    pageNumbers,
    handleNextPageClick,
    handlePreviousPageClick,
    handleSpecificPageClick,
  } = usePagination({
    itemsPerPage,
    itemsOnThisPage,
  });

  useEffect(() => {
    setBuildListFilters(parseUrlFilters(searchParams, defaultFilters));
    setBuildListState((prevState) => ({ ...prevState, isLoading: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    onToggleLoadingResults(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // Whenever loading is set to true, we should update the build items
  useEffect(() => {
    const getItemsAsync = async () => {
      if (!isLoading) return;
      const response = await getUserCreatedBuilds({
        buildListFilters,
        featuredBuildsOnly: false,
        itemsPerPage,
        orderBy,
        pageNumber: currentPage,
        timeRange,
        profileId,
        buildVisibility,
      });
      setBuildListState((prevState) => ({
        ...prevState,
        isLoading: false,
        builds: response.builds,
      }));
    };
    getItemsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      <BuildList
        currentPage={currentPage}
        isLoading={isLoading}
        isWithQuality={buildListFilters.withQuality}
        label="Created Builds"
        firstVisibleItemNumber={firstVisibleItemNumber}
        lastVisibleItemNumber={lastVisibleItemNumber}
        onPreviousPage={handlePreviousPageClick}
        onNextPage={handleNextPageClick}
        pagination={
          <Pagination
            isLoading={isLoading}
            currentPage={currentPage}
            firstVisibleItemNumber={firstVisibleItemNumber}
            lastVisibleItemNumber={lastVisibleItemNumber}
            isNextPageDisabled={isNextPageDisabled}
            pageNumbers={pageNumbers}
            onPreviousPage={handlePreviousPageClick}
            onNextPage={handleNextPageClick}
            onSpecificPage={handleSpecificPageClick}
          />
        }
        headerActions={
          <div className="flex w-full flex-col items-end justify-end gap-x-2 gap-y-1 sm:flex-row sm:gap-y-0">
            <div className="w-full max-w-[250px]">
              <TimeRangeFilter
                isLoading={isLoading}
                value={timeRange}
                onChange={(value) => {
                  handleTimeRangeChange(value);
                  setBuildListState((prevState) => ({
                    ...prevState,
                    isLoading: true,
                  }));
                }}
              />
            </div>
            <div className="w-full max-w-[250px]">
              <OrderByFilter
                isLoading={isLoading}
                value={orderBy}
                onChange={(value) => {
                  handleOrderByChange(value);
                  setBuildListState((prevState) => ({
                    ...prevState,
                    isLoading: true,
                  }));
                }}
              />
            </div>
            {isEditable ? (
              <div className="w-full max-w-[250px]">
                <BuildVisibilityFilter
                  value={buildVisibility}
                  onChange={handleBuildVisibilityChange}
                  isLoading={isLoading}
                />
              </div>
            ) : null}
          </div>
        }
      >
        {isEditable ? <CreateBuildCard /> : null}

        {itemsOnThisPage > 0 ? (
          builds.map((build) => (
            <div key={`${build.id}${build.variantIndex}`} className="w-full">
              <BuildCard
                build={build}
                isLoading={isLoading}
                showBuildVisibility={true}
                footerActions={
                  isEditable ? (
                    <CreatedBuildCardActions
                      build={build}
                      onDelete={(buildId: string) => {
                        setBuildListState((prevState) => ({
                          ...prevState,
                          builds: prevState.builds.filter(
                            (b) => b.id !== buildId,
                          ),
                        }));
                      }}
                    />
                  ) : undefined
                }
              />
            </div>
          ))
        ) : (
          <div className="col-span-full flex w-full items-center justify-center py-8">
            <h2 className="text-primary-400 text-2xl font-bold">
              No builds found. Try adjusting your filters.
            </h2>
          </div>
        )}
      </BuildList>
    </>
  );
}
