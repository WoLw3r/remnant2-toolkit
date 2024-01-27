'use client'

import {
  InformationCircleIcon,
  ListBulletIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Masonry } from 'masonic'
import { useIsClient } from 'usehooks-ts'
import ItemDescription from './ItemDescription'
import { Item } from '../types'
import { TraitItem } from '../types/TraitItem'
import { MutatorItem } from '../types/MutatorItem'
import { GenericItem } from '../types/GenericItem'
import { ArmorItem } from '../types/ArmorItem'
import ArmorInfo from './ArmorInfo'
import ItemInfo from './ItemInfo'
import { WeaponItem } from '../types/WeaponItem'
import WeaponInfo from './WeaponInfo'
import { cn } from '@/lib/classnames'

interface MasonryBuildItem {
  index: number
  data: Item
  width: number
  onMoreInfoClick: (item: Item) => void
}

function MasonryCard({ data: item, onMoreInfoClick }: MasonryBuildItem) {
  if (!item) return null

  const { imagePath, category, name, description, wikiLinks } = item

  return (
    <div className="col-span-1 flex flex-col divide-y divide-green-800 rounded-lg border border-green-500 bg-black text-center shadow">
      <div className="flex flex-1 flex-col p-4">
        <button
          onClick={() => onMoreInfoClick(item)}
          className="text-md font-bold text-purple-500 hover:text-purple-300 hover:underline"
        >
          <Image
            className={cn(
              'mx-auto mb-2 h-auto w-24 flex-shrink-0 rounded-full',
              TraitItem.isTraitItem(item) && 'h-24 w-auto',
              WeaponItem.isWeaponItem(item) && 'h-auto w-32',
            )}
            width={150}
            height={150}
            src={`https://${process.env.NEXT_PUBLIC_IMAGE_URL}${imagePath}`}
            alt={`${name} icon`}
            loading="eager"
          />

          {name}
        </button>
        <dl className="mt-0 flex flex-grow flex-col justify-start text-xs">
          <dt className="sr-only">Item Category</dt>
          <dd className="text-xs text-gray-500">{category}</dd>
          {!ArmorItem.isArmorItem(item) && (
            <>
              <dt className="sr-only">Description</dt>
              <dd className="mt-3 whitespace-pre-line text-left text-xs text-gray-200">
                <ItemDescription description={description ?? ''} />
              </dd>
            </>
          )}

          {(MutatorItem.isMutatorItem(item) || TraitItem.isTraitItem(item)) && (
            <dd className="mt-3 whitespace-pre-line text-left text-xs text-gray-200">
              <strong>At Max Level: </strong>
              {item.maxLevelBonus || 'No max level bonus found.'}
            </dd>
          )}

          {GenericItem.isGenericItem(item) && item.cooldown && (
            <dd className="mt-3 whitespace-pre-line text-left text-xs text-gray-200">
              <strong>Cooldown</strong>: {item.cooldown}s
            </dd>
          )}
        </dl>
        {ArmorItem.isArmorItem(item) && (
          <div className="mt-1">
            <ArmorInfo item={item} />
          </div>
        )}
        {WeaponItem.isWeaponItem(item) && (
          <div className="mt-1">
            <WeaponInfo item={item} />
          </div>
        )}
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-green-800">
          <div className="flex w-0 flex-1">
            <button
              onClick={() => onMoreInfoClick(item)}
              className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-1 rounded-br-lg border border-transparent py-4 text-xs font-semibold text-gray-200"
            >
              <InformationCircleIcon
                className="h-4 w-4 text-green-400"
                aria-hidden="true"
              />
              More Info
            </button>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            {wikiLinks && wikiLinks[0] && (
              <Link
                target="_blank"
                href={wikiLinks[0]}
                className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-1 rounded-br-lg border border-transparent py-4 text-xs font-semibold text-gray-200"
              >
                <ListBulletIcon
                  className="h-4 w-4 text-green-400"
                  aria-hidden="true"
                />
                Wiki
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

type Props = {
  items: Item[]
}

export default function MasonryItemList({ items }: Props) {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const infoOpen = selectedItem !== null

  const isClient = useIsClient()

  function handleMoreInfoClick(item: Item) {
    setSelectedItem(item)
  }

  if (!isClient) return null

  return (
    <>
      <ItemInfo
        item={selectedItem}
        open={infoOpen}
        onClose={() => setSelectedItem(null)}
      />
      {items.length > 0 && (
        <div className="flex w-full flex-col items-center justify-center p-4">
          <h2 className="my-4 text-4xl font-bold text-green-500">Items</h2>
          <Masonry
            key={new Date().getTime()}
            items={items}
            render={({ index, data, width }) => (
              <MasonryCard
                index={index}
                data={data}
                width={width}
                onMoreInfoClick={handleMoreInfoClick}
              />
            )}
            columnGutter={8}
            rowGutter={8}
          />
        </div>
      )}
    </>
  )
}
