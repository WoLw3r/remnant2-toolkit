import { type RelicFragmentItem } from '@/app/(items)/_types/relic-fragment-item';

export const relicFragmentItems: RelicFragmentItem[] = [
  {
    category: 'relicfragment',
    name: 'Ammo Reserves',
    imagePath: '/items/relicfragments/ammo-reserves-on.png',
    saveFileSlug: 'RelicFragment_AmmoReserves_C',
    color: 'yellow',
    id: '3aqiq5',
    dlc: 'base',
    tags: ['Ammo Reserves'],
    description: 'Ammo Reserves, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Armor Bonus',
    imagePath: '/items/relicfragments/generic-blue-on.png',
    saveFileSlug: 'RelicFragment_ArmorEffectiveness_C',
    color: 'blue',
    id: '7u1bma',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description: 'Armor Bonus, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
    armorPercent: 0.1,
  },
  {
    category: 'relicfragment',
    name: 'Artful Dodger',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_ArtfulDodger_C', // TODO Check
    color: 'legendary',
    id: '1n8874',
    dlc: 'base',
    tags: [],
    description:
      'All Dodges trigger Perfect Dodge Mechanics. Cooldown of 3 seconds.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Base Armor',
    imagePath: '/items/relicfragments/base-armor-on.png',
    saveFileSlug: 'RelicFragment_BaseArmor_C', // TODO Check this
    color: 'blue',
    id: 'h6sk9p',
    dlc: 'base',
    tags: ['Armor Increase'],
    description: 'Base Armor',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Base Health',
    imagePath: '/items/relicfragments/base-health-on.png',
    saveFileSlug: 'RelicFragment_BaseHealth_C', // TODO Check this
    color: 'blue',
    id: '6qz6t1',
    dlc: 'base',
    tags: ['Health'],
    description: 'Base Health',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Base Stamina',
    imagePath: '/items/relicfragments/base-stamina-on.png',
    saveFileSlug: 'RelicFragment_BaseStamina_C', // TODO Check this
    color: 'blue',
    id: '4gbcn0',
    dlc: 'base',
    tags: ['Stamina'],
    description: 'Base Stamina',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Bodyguard',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Bodyguard_C', // TODO Check
    color: 'legendary',
    id: '1d6g98',
    dlc: 'base',
    tags: [],
    description: 'Cannot be One-Shot while at Max Health Capacity.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Boundless Energy',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_BoundlessEnergy_C', // TODO Check
    color: 'legendary',
    id: '6myusj',
    dlc: 'base',
    tags: [],
    description: `Grants Infinite N'Erudian Energy.`,
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Brutality',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Brutality_C', // TODO Check
    color: 'legendary',
    id: 's6fkpj',
    dlc: 'base',
    tags: [],
    description: '100% increased outgoing and incoming damage.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Cast Speed',
    imagePath: '/items/relicfragments/casting-speed-on.png',
    saveFileSlug: 'RelicFragment_CastSpeed_C',
    color: 'yellow',
    id: '51y6ih',
    dlc: 'base',
    tags: ['Mod Cast Speed', 'Skill Cast Speed'],
    description: 'Casting Speed, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Consumable Duration',
    imagePath: '/items/relicfragments/consumable-duration-on.png',
    saveFileSlug: 'RelicFragment_ConsumableDuration_C',
    color: 'yellow',
    id: 'xqklut',
    dlc: 'base',
    description: 'Consumable Duration, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Critical Damage',
    imagePath: '/items/relicfragments/critical-damage-on.png',
    saveFileSlug: 'RelicFragment_CriticalDamage_C', // TODO Check this
    color: 'red',
    id: '0qxyqo',
    dlc: 'base',
    tags: ['Critical Damage'],
    description: 'Critical Damage',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Critical Situation',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_CriticalSituation_C', // TODO Check
    color: 'legendary',
    id: 'p66eoa',
    dlc: 'base',
    tags: [],
    description: 'Grants 25% to All Critical Chance.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Damage Reduction',
    imagePath: '/items/relicfragments/damage-reduction-on.png',
    saveFileSlug: 'RelicFragment_DamageReduction_C',
    color: 'blue',
    id: '1pddio',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description: 'Damage Reduction, +5% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Dark Omen',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_DarkOmen_C', // TODO Check
    color: 'legendary',
    id: 'w26htj',
    dlc: 'base',
    tags: [],
    description: 'Dodges become Mist Step, costing Health instead of Stamina.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Defensive Measures',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_DefensiveMeasures_C', // TODO Check
    color: 'legendary',
    id: 'y7d3aq',
    dlc: 'base',
    tags: [],
    description: 'Increases the Maximum Shield Capacity by +100%.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Evade Distance',
    imagePath: '/items/relicfragments/evade-distance-on.png',
    saveFileSlug: 'RelicFragment_EvadeDistance_C', // TODO Check this
    color: 'blue',
    id: 'qmc3th',
    dlc: 'base',
    tags: [],
    description: 'Evade Distance',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Evade Speed',
    imagePath: '/items/relicfragments/evade-speed-on.png',
    saveFileSlug: 'RelicFragment_EvadeSpeed_C', // TODO Check this
    color: 'blue',
    id: 'kp0rff',
    dlc: 'base',
    tags: [],
    description: 'Evade Speed',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Exhausted',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Exhausted_C', // TODO Check
    color: 'legendary',
    id: 'z2gbi3',
    dlc: 'base',
    tags: [],
    description: 'Grants +250% Overheat Decay Rate.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Explosive Damage',
    imagePath: '/items/relicfragments/explosive-damage-on.png',
    saveFileSlug: 'RelicFragment_ExplosiveDamage_C', // TODO Check this
    color: 'red',
    id: '73x1rg',
    dlc: 'base',
    tags: [],
    description: 'Explosive Damage',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Firearm Swap Speed',
    imagePath: '/items/relicfragments/weapon-swap-on.png',
    saveFileSlug: 'RelicFragment_WeaponSwapSpeed_C',
    color: 'yellow',
    id: 'h9e463',
    dlc: 'base',
    description: 'Weapon Swap, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Fleet Footed',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_FleetFooted_C', // TODO Check
    color: 'legendary',
    id: 'ky7tqc',
    dlc: 'base',
    tags: [],
    description: 'Increases Dodge Weight Threshold by 100.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Firearm Charge Time',
    imagePath: '/items/relicfragments/firearm-charge-time-on.png', // TODO
    saveFileSlug: 'RelicFragment_FirearmChargeTime_C', // TODO Check this
    color: 'red',
    id: '6tby7d',
    dlc: 'base',
    tags: [],
    description: 'Firearm Charge Time',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Full Hearted',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_FullHearted_C', // TODO Check
    color: 'legendary',
    id: 'kteco4',
    dlc: 'base',
    tags: [],
    description: 'Gain +100% Relic Capacity.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Gigantic',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Gigantic_C', // TODO Check
    color: 'legendary',
    id: 'ign3v0',
    dlc: 'base',
    tags: [],
    description: 'Grants +50 Health and Stamina.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'God Tear',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_GodTear_C', // TODO Check
    color: 'legendary',
    id: 'o8of2m',
    dlc: 'base',
    tags: [],
    description: 'Reduces Cheat Death Cooldowns by 50%.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Grey Health Conversion',
    imagePath: '/items/relicfragments/grey-health-conversion-on.png',
    saveFileSlug: 'RelicFragment_GreyHealthRate_C',
    color: 'blue',
    id: 'aci99s',
    dlc: 'base',
    tags: ['Grey Health'],
    description: 'Grey Health Rate, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Healing Effectiveness',
    imagePath: '/items/relicfragments/healing-effectiveness-on.png',
    saveFileSlug: 'RelicFragment_HealingEffectiveness_C',
    color: 'blue',
    id: 'y52c32',
    dlc: 'base',
    tags: ['Healing Effectiveness'],
    description: 'Healing Effectiveness, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Health Bonus',
    imagePath: '/items/relicfragments/health-bonus-on.png',
    saveFileSlug: 'RelicFragment_Health_C',
    color: 'blue',
    id: 'j87rzn',
    dlc: 'base',
    tags: ['Health'],
    description: 'Health, +15% (x1.15) at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
    healthPercent: 0.15,
  },
  {
    category: 'relicfragment',
    name: 'Health Regeneration',
    imagePath: '/items/relicfragments/health-regeneration-on.png',
    saveFileSlug: 'RelicFragment_HealthRegen_C', // TODO Check this
    color: 'blue',
    id: 'bzxa98',
    dlc: 'base',
    tags: [],
    description: '+1/s Health Regeneration',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Heat Generation',
    imagePath: '/items/relicfragments/heat-generation-on.png',
    saveFileSlug: 'RelicFragment_HeatGeneration_C', // TODO Check this
    color: 'yellow',
    id: '3ngjzr',
    dlc: 'base',
    tags: [],
    description: 'Heat Generation',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Heavy Drinker',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_HeavyDrinker_C', // TODO Check
    color: 'legendary',
    id: 'fant12',
    dlc: 'base',
    tags: [],
    description: 'Increases Concoction Limit by 5',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Hyperactive',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Hyperactive_C', // TODO Check
    color: 'legendary',
    id: 'g1iifk',
    dlc: 'base',
    tags: [],
    description: `Haste's bonus gains +100% effectiveness.`,
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Immovable',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Immovable_C', // TODO Check
    color: 'legendary',
    id: 'fieh22',
    dlc: 'base',
    tags: [],
    description: 'Cannot be staggered while Bulwark is active.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Impervious',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Impervious_C', // TODO Check
    color: 'legendary',
    id: '1mb66f',
    dlc: 'base',
    tags: [],
    description: 'Grants 20% Damage Reduction.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Insult to Injury',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_InsultToInjury_C', // TODO Check
    color: 'legendary',
    id: '503nnp',
    dlc: 'base',
    tags: [],
    description: 'All outgoing Status Effects now apply EXPOSED as well.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Jack of All Trades',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_JackOfAllTrades_C', // TODO Check
    color: 'legendary',
    id: 'tfmy98',
    dlc: 'base',
    tags: [],
    description: 'Grants 45% All Damage',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Luck of the Devil',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_LuckOfTheDevil_C', // TODO Check
    color: 'legendary',
    id: 'vma9nj',
    dlc: 'base',
    tags: [],
    description: 'Gain EXTREME luck.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Master Killer',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_MasterKiller_C', // TODO Check
    color: 'legendary',
    id: 'b3jspj',
    dlc: 'base',
    tags: [],
    description: 'Weakspot Damage gains a 1.25x multiplier.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Melee Critical Chance',
    saveFileSlug: 'RelicFragment_MeleeCritChance_C',
    imagePath: '/items/relicfragments/melee-critical-chance-on.png',
    color: 'red',
    id: 'm16fn9',
    dlc: 'base',
    tags: ['Critical Chance', 'Melee Critical Chance'],
    description: 'Melee Critical Chance, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Melee Damage',
    imagePath: '/items/relicfragments/melee-damage-on.png',
    saveFileSlug: 'RelicFragment_MeleeDamage_C',
    color: 'red',
    id: 'yu7d57',
    dlc: 'base',
    tags: ['Melee Damage'],
    description: 'Melee Damage, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Melee Speed',
    imagePath: '/items/relicfragments/melee-speed-on.png',
    saveFileSlug: 'RelicFragment_MeleeAttackSpeed_C',
    color: 'red',
    id: 't8jgpe',
    dlc: 'base',
    tags: ['Melee Attack Speed'],
    description: 'Melee Speed, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Mod Critical Chance',
    imagePath: '/items/relicfragments/mod-critical-chance-on.png',
    saveFileSlug: 'RelicFragment_ModCritChance_C', // TODO Check this
    color: 'red',
    id: 'iyp5r3',
    dlc: 'base',
    tags: [],
    description: 'Mod Critical Chance',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Mod Damage',
    imagePath: '/items/relicfragments/mod-damage-on.png',
    saveFileSlug: 'RelicFragment_ModDamage_C',
    color: 'red',
    id: 'zkr2us',
    dlc: 'base',
    tags: ['Mod Damage'],
    description: 'Mod Damage',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Mod Duration',
    imagePath: '/items/relicfragments/mod-duration-on.png',
    saveFileSlug: 'RelicFragment_ModDuration_C',
    color: 'yellow',
    id: 'c2t1p6',
    dlc: 'base',
    tags: ['Mod Duration'],
    description: 'Mod Duration, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Mod Generation',
    imagePath: '/items/relicfragments/mod-generation-on.png',
    saveFileSlug: 'RelicFragment_ModGeneration_C', // TODO Check this
    color: 'yellow',
    id: 'pk57hf',
    dlc: 'base',
    tags: [],
    description: 'Mod Generation',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Movement Speed',
    imagePath: '/items/relicfragments/movement-speed-on.png',
    saveFileSlug: 'RelicFragment_MovementSpeed_C', // TODO Check this
    color: 'yellow',
    id: 'c0hy5s',
    dlc: 'base',
    tags: ['Movement Speed'],
    description: '+10% Movement Speed',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Outlaw',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Outlaw_C', // TODO Check
    color: 'legendary',
    id: 'jf6i48',
    dlc: 'base',
    tags: [],
    description: 'Reloading reloads both equipped firearms.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Overpowered',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Overpowered_C', // TODO Check
    color: 'legendary',
    id: 's6n7x3',
    dlc: 'base',
    tags: [],
    description: 'Increases Mod Generation by 50%.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Peak Conditioning',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_PeakConditioning_C', // TODO Check
    color: 'legendary',
    id: '34g3gm',
    dlc: 'base',
    tags: [],
    description: 'Gain infinite stamina.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Physician',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Physician_C', // TODO Check
    color: 'legendary',
    id: 'qn0gc0',
    dlc: 'base',
    tags: [],
    description: 'Increases Healing Effectiveness by 100%.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Power Fantasy',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_PowerFantasy_C', // TODO Check
    color: 'legendary',
    id: 'udn5v4',
    dlc: 'base',
    tags: [],
    description: 'Grants 30% Explosive Critical Chance and Critical Damage.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Power Trip',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_PowerTrip_C', // TODO Check
    color: 'legendary',
    id: 'o3w3u5',
    dlc: 'base',
    tags: [],
    description: 'Doubles Mod Charges.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Prime Time',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_PrimeTime_C', // TODO Check
    color: 'legendary',
    id: '8140zw',
    dlc: 'base',
    tags: [],
    description: 'Enables Prime Perk for Secondary Archetypes.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Projectile Speed',
    imagePath: '/items/relicfragments/projectile-speed-on.png',
    saveFileSlug: 'RelicFragment_ProjectileSpeed_C', // TODO Check this
    color: 'yellow',
    id: 'xut36z',
    dlc: 'base',
    tags: ['Projectile Speed'],
    description: 'Projectile Speed',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ranged Critical Chance',
    saveFileSlug: 'RelicFragment_RangedCritChance_C',
    imagePath: '/items/relicfragments/ranged-critical-chance-on.png',
    color: 'red',
    id: 'dp184t',
    dlc: 'base',
    tags: ['Critical Chance'],
    description: 'Ranged Critical Chance, +7.5% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ranged Damage',
    imagePath: '/items/relicfragments/ranged-damage-on.png',
    saveFileSlug: 'RelicFragment_RangedDamage_C',
    color: 'red',
    id: 'wlnbc1',
    dlc: 'base',
    tags: ['Ranged Damage'],
    description: 'Ranged Damage, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Ranged Fire Rate',
    imagePath: '/items/relicfragments/ranged-fire-rate-on.png',
    saveFileSlug: 'RelicFragment_RangedFireRate_C',
    color: 'red',
    id: 'w8ruyt',
    dlc: 'base',
    tags: ['Fire Rate'],
    description: 'Ranged Fire Rate, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Reload Speed',
    imagePath: '/items/relicfragments/reload-speed-on.png',
    saveFileSlug: 'RelicFragment_ReloadSpeed_C', // TODO Check this
    color: 'yellow',
    id: '5wuf2j',
    dlc: 'base',
    tags: ['Reload Speed'],
    description: 'Reload Speed',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Reverberation',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Reverberation_C', // TODO Check
    color: 'legendary',
    id: 'qx4bbk',
    dlc: 'base',
    tags: [],
    description: 'Grants +200 Stamina per second.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Revive Speed',
    imagePath: '/items/relicfragments/revive-speed-on.png',
    saveFileSlug: 'RelicFragment_ReviveSpeed_C',
    color: 'blue',
    id: '0jam5w',
    dlc: 'base',
    description: 'Revive Speed, +25% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Sadistic',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Sadistic_C', // TODO Check
    color: 'legendary',
    id: '6onvd3',
    dlc: 'base',
    tags: [],
    description:
      'Status Effects have a 25% chance per tick to deal 50% more damage.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Sharpshooter',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Sharpshooter_C', // TODO Check
    color: 'legendary',
    id: '7mw049',
    dlc: 'base',
    tags: [],
    description: 'Increases Ranged Damage by 75%.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Shield Amount',
    imagePath: '/items/relicfragments/shield-amount-on.png',
    saveFileSlug: 'RelicFragment_ShieldEffectiveness_C',
    color: 'blue',
    id: 'alp59n',
    dlc: 'base',
    description: 'Shield Effectiveness, +20% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Shield Duration',
    imagePath: '/items/relicfragments/shield-duration-on.png',
    saveFileSlug: 'RelicFragment_ShieldDuration_C', // TODO Check this
    color: 'blue',
    id: 'f5mi7x',
    dlc: 'base',
    tags: [],
    description: 'Shield Duration',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Size Matters',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_SizeMatters_C', // TODO Check
    color: 'legendary',
    id: 'n0r6bv',
    dlc: 'base',
    tags: [],
    description: 'Doubles Magazine Size on non Single Shot Weapons.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Skill Cooldown',
    imagePath: '/items/relicfragments/skill-cooldown-on.png',
    saveFileSlug: 'RelicFragment_SkillCooldown_C',
    color: 'yellow',
    id: '2bqp66',
    dlc: 'base',
    tags: ['Reduce Skill Cooldown'],
    description: 'Skill Cooldown, -10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Skill Critical Chance',
    imagePath: '/items/relicfragments/skill-critical-chance-on.png',
    saveFileSlug: 'RelicFragment_SkillCritChance_C', // TODO Check this
    color: 'red',
    id: 'o5sd30',
    dlc: 'base',
    tags: [],
    description: 'Skill Critical Chance',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Skill Damage',
    imagePath: '/items/relicfragments/skill-damage-on.png',
    saveFileSlug: 'RelicFragment_SkillDamage_C',
    color: 'red',
    id: 'fuhykd',
    dlc: 'base',
    tags: ['Skill Damage'],
    description: 'Skill Damage, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Skill Duration',
    imagePath: '/items/relicfragments/skill-duration-on.png',
    saveFileSlug: 'RelicFragment_SkillDuration_C',
    color: 'yellow',
    id: '7c8uka',
    dlc: 'base',
    tags: ['Skill Duration'],
    description: 'Skill Duration, +10% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Soulmate',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Soulmate_C', // TODO Check
    color: 'legendary',
    id: 'zo1rt6',
    dlc: 'base',
    tags: [],
    description: 'Increases the maximum active summon limit by 1.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Spectrum',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Spectrum_C', // TODO Check
    color: 'legendary',
    id: 'wbu60g',
    dlc: 'base',
    tags: [],
    description:
      'Grants bonuses based on the colors of each row within this Prism.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Speed Demon',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_SpeedDemon_C', // TODO Check
    color: 'legendary',
    id: 'f80hyz',
    dlc: 'base',
    tags: [],
    description: 'Increases the Movement Speed Cap of all categories.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Stamina Bonus',
    imagePath: '/items/relicfragments/stamina-bonus-on.png',
    saveFileSlug: 'RelicFragment_Stamina_C',
    color: 'blue',
    id: 'qqmdc0',
    dlc: 'base',
    tags: ['Stamina'],
    description: 'Stamina, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
    staminaPercent: 0.15,
  },
  {
    category: 'relicfragment',
    name: 'Status Damage',
    imagePath: '/items/relicfragments/status-damage-on.png',
    saveFileSlug: 'RelicFragment_StatusDamage_C', // TODO Check this
    color: 'red',
    id: '32immt',
    dlc: 'base',
    tags: [],
    description: 'Status Damage',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Steel Plating',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_SteelPlating_C', // TODO Check
    color: 'legendary',
    id: 'nqq5t5',
    dlc: 'base',
    tags: [],
    description: 'Increases Armor by 100.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Traitor',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Traitor_C', // TODO Check
    color: 'legendary',
    id: 'cya6q1',
    dlc: 'base',
    tags: [],
    description: 'Maxes out Core Traits.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Unbreakable',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Unbreakable_C', // TODO Check
    color: 'legendary',
    id: '0xj2m6',
    dlc: 'base',
    tags: [],
    description: `All Damage taken is converted to Grey Health, and Grey Health's Hit Threshold is infinite.`,
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Unbridled',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Unbridled_C', // TODO Check
    color: 'legendary',
    id: 'p3trdc',
    dlc: 'base',
    tags: [],
    description: 'Reduces all Skill Cooldowns by Half.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Use Speed',
    imagePath: '/items/relicfragments/use-speed-on.png',
    saveFileSlug: 'RelicFragment_ConsumableSpeed_C',
    color: 'yellow',
    id: 'omefk5',
    dlc: 'base',
    tags: ['Relic Use Speed'],
    description: 'Consumable Speed, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Vaccinated',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_Vaccinated_C', // TODO Check
    color: 'legendary',
    id: '8jm01f',
    dlc: 'base',
    tags: [],
    description: 'Immune to Negative Status Effects.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Weakspot Damage',
    imagePath: '/items/relicfragments/weakspot-damage-on.png',
    saveFileSlug: 'RelicFragment_RangedWeakspotDamage_C',
    color: 'red',
    id: 'oszz4u',
    dlc: 'base',
    tags: ['Weakspot Damage'],
    description: 'Weakspot Damage, +15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Weapon Ideal Range',
    imagePath: '/items/relicfragments/weapon-ideal-range-on.png',
    saveFileSlug: 'RelicFragment_WeaponIdealRange_C', // TODO Check this
    color: 'yellow',
    id: 'i5kymp',
    dlc: 'base',
    tags: [],
    description: 'Weapon Ideal Range',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Weapon Spread',
    imagePath: '/items/relicfragments/weapon-spread-on.png',
    saveFileSlug: 'RelicFragment_WeaponSpread_C',
    color: 'yellow',
    id: 'oiiiu2',
    dlc: 'base',
    tags: ['Spread'],
    description: 'Weapon Spread, -15% at max level.',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
  {
    category: 'relicfragment',
    name: 'Wrecking Ball',
    imagePath: '/items/prisms/legendaryprism.png',
    saveFileSlug: 'RelicFragment_WreckingBall_C', // TODO Check
    color: 'legendary',
    id: 't2ro08',
    dlc: 'base',
    tags: [],
    description: 'Wrecking Ball',
    wikiLinks: [`https://remnant.wiki/Relic_Fragment`],
  },
];
