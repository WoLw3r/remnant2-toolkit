import { ConsumableItem } from './types/ConsumableItem'

export const consumableItems: ConsumableItem[] = [
  {
    category: 'consumable',
    name: 'All-Seeing Eye',
    imagePath: '/items/consumables/allseeingeye.png',
    id: 'rw5Q9E',
    dlc: 'base',
    tags: [
      'Health',
      'Stamina',
      'Reduce Skill Cooldown',
      'Mod Power',
      'All Damage',
    ],
    description: `Grants a random buff or debuff. Lasts 3m.`,
    wikiLinks: [`https://remnant.wiki/All-Seeing_Eye`],
    location: { world: 'Losomn', dungeon: ['Morrow Parish'] },
  },
  {
    category: 'consumable',
    name: 'Ambit Ember',
    imagePath: '/items/consumables/ambitember.png',
    saveFileSlug: 'consumable_spice',
    id: '6lnae6',
    dlc: 'base',
    tags: ['Perfect Dodge', 'Neutral Dodge', 'Perfect Neutral Evade'],
    description: `Slightly increases Evade Window and Evade Speed by 15%. Lasts 60s.`,
    wikiLinks: [`https://remnant.wiki/Ambit_Ember`],
    location: { world: `N'Erud`, dungeon: 'World Drop' },
  },
  {
    category: 'consumable',
    name: 'Ammo Box',
    imagePath: '/items/consumables/ammocrate.png',
    id: 'v2usqs',
    dlc: 'base',
    tags: ['Ammo Reserves'],
    description: `Replenishes all reserve ammo.`,
    wikiLinks: [`https://remnant.wiki/Ammo_Box`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Antidote',
    imagePath: '/items/consumables/antidotesyringe.png',
    id: 'a34kjc',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description:
      'Removes CORRODED effect and increases ACID resistance by 15. Lasts 10m.',
    wikiLinks: [`https://remnant.wiki/Antidote`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Bandage',
    imagePath: '/items/consumables/bandage.png',
    id: 'elazod',
    dlc: 'base',
    tags: ['Grey Health', 'Heal'],
    description: `Stops BLEEDING and restores all Grey Health.`,
    wikiLinks: [`https://remnant.wiki/Bandage`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Binding Orb',
    imagePath: '/items/consumables/bindingorb.png',
    id: 'edaeta',
    dlc: 'base',
    tags: ['Grenade', 'Status Effect'],
    description:
      'When thrown, Device becomes an anchor and applies SLOW to all enemies within 4m. Lasts 20s.',
    externalTokens: [`Amplitude`],
    wikiLinks: [`https://remnant.wiki/Binding_Orb`],
    location: {
      world: `N'Erud`,
      dungeon: ['Ascension Spire'],
    },
  },
  {
    category: 'consumable',
    name: 'Black Tar',
    imagePath: '/items/consumables/blacktar.png',
    tags: ['Grenade'],
    id: 'nrdcko',
    dlc: 'base',
    description:
      'When thrown, explodes in a 4m radius dealing 30 damage and creating a puddle lasting 15s which applies TARRED for 30s to creatures inside.\n' +
      ' \n' +
      ' Ranged damage and other FIRE sources ignite TARRED entities, dealing 250 BURNING damage over 10s.',
    wikiLinks: [`https://remnant.wiki/Black_Tar`],
    location: { world: 'Losomn', dungeon: 'World Drop' },
  },
  {
    category: 'consumable',
    name: 'Blood Root',
    imagePath: '/items/consumables/bloodroot.png',
    id: 'bisl2l',
    dlc: 'base',
    tags: ['Heal'],
    description: `Regenerates 1.5 Health per second. Lasts 30s.`,
    wikiLinks: [`https://remnant.wiki/Blood_Root`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Brightstone',
    imagePath: '/items/consumables/brightstone.png',
    id: '937h03',
    dlc: 'base',
    tags: ['Grenade'],
    description:
      'When thrown, explodes in a 6m radius dealing 50 - 150 damage and leaving a mysterious Mist which causes enemies to receive 10% additional damage. Duration lasts 10s after enemies leave the Mist. Last 15s.',
    externalTokens: [`Amplitude`],
    wikiLinks: [`https://remnant.wiki/Brightstone`],
    location: { world: 'Yaesha', dungeon: ['The Forgotten Grove'] },
  },
  {
    category: 'consumable',
    name: 'Confidence Booster',
    imagePath: '/items/consumables/confidencebooster.png',
    id: 'al8yob',
    dlc: 'base',
    tags: ['Damage Reduction', 'Stagger'],
    description: `Reduces incoming damage by 10% and Stagger by 1. Lasts 20s.`,
    wikiLinks: [`https://remnant.wiki/Confidence_Booster`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Dried Fruit',
    imagePath: '/items/consumables/driedfruit.png',
    id: 'Y8ey65',
    dlc: 'base',
    tags: ['Heal'],
    description: `Regenerates 5% Health instantly.`,
    wikiLinks: [`https://remnant.wiki/Dried_Fruit`],
    location: { world: 'Any', dungeon: 'Quest' },
  },
  {
    category: 'consumable',
    name: 'Ethereal Orb',
    imagePath: '/items/consumables/etherealorb.png',
    id: 'ffjbc9',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description:
      'Removes OVERLOADED effect and increases SHOCK resistance by 15. Lasts 10m.',
    wikiLinks: [`https://remnant.wiki/Ethereal_Orb`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Faerie Needle',
    imagePath: '/items/consumables/faerieneedle.png',
    id: 'aqphr5',
    dlc: 'base',
    tags: ['Mod Power'],
    description: `Regenerates 10 Mod Power per second. Lasts 60s.`,
    wikiLinks: [`https://remnant.wiki/Faerie_Needle`],
    location: { world: 'Losomn', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Gul Serum',
    imagePath: '/items/consumables/gulserum.png',
    id: 'm1gznf',
    dlc: 'base',
    tags: ['Stamina'],
    description: `Reduces Stamina Consumption by 50%. Lasts 60s.`,
    wikiLinks: [`https://remnant.wiki/Gul_Serum`],
    location: { world: 'Yaesha', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Koara Pellet',
    imagePath: '/items/consumables/koarapellet.png',
    id: '1585ah',
    dlc: 'base',
    tags: ['Heal'],
    description: `Consume to restore 10% Max Health instantly.`,
    wikiLinks: [`https://remnant.wiki/Koara_Pellet`],
    location: { world: 'Yaesha', dungeon: 'World Drop' },
  },
  // * Removed due to not having a purpose in the toolkit
  // {
  //   category: 'consumable',
  //   name: 'Liquid Escape',
  //   imagePath: '/items/consumables/liquid_escape.png',
  //   id: 'xgdk68',
  //   description: `When consumed, the hero will be returned to the last activated checkpoint.`,
  //   wikiLinks: [`https://remnant.wiki/Liquid_Escape`],
  // },
  {
    category: 'consumable',
    name: 'Mud Rub',
    imagePath: '/items/consumables/mudrub.png',
    id: 'dvx5ib',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description: `Extinguishes BURNING effect and increases FIRE resistance by 15. Lasts 10m.`,
    wikiLinks: [`https://remnant.wiki/Mud_Rub`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Mystery Jerky',
    imagePath: '/items/consumables/mysteryjerkey.png',
    id: '6aasor',
    dlc: 'base',
    tags: ['Grey Health'],
    description:
      'Converts  6.66 Health into Grey Health per second. Last  15s.',
    wikiLinks: [`https://remnant.wiki/Mystery_Jerky`],
    location: { world: 'Ward 13', dungeon: 'Quest' },
  },
  {
    category: 'consumable',
    name: 'Oilskin Balm',
    imagePath: '/items/consumables/oilskinbalm.png',
    id: '0sec3n',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description:
      'Cures ROOT ROT Blight and increases Blight Resistance by 25. Lasts 10m.',
    wikiLinks: [`https://remnant.wiki/Oilskin_Balm`],
    location: { world: 'Yaesha', dungeon: ['The Forgotten Grove'] },
  },
  {
    category: 'consumable',
    name: 'Pipe Bomb',
    imagePath: '/items/consumables/pipebomb.png',
    id: 'kfwizc',
    dlc: 'base',
    tags: ['Grenade'],
    description:
      'When thrown, explodes in a 4m radius dealing 150 - 450 damage and applying BLEEDING, which deals an additional 250 - 750 BLEED damage over 30s.',
    externalTokens: [`Amplitude`, `Explosive Damage`],
    wikiLinks: [`https://remnant.wiki/Pipe_Bomb`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Poisoned Ambit Ember Capsule',
    imagePath: '/items/consumables/poisonedambitembercapsule.png',
    saveFileSlug: 'poisonedspice',
    id: '6awni8',
    dlc: 'base',
    description:
      'Use to equip the capsule which can be thrown by pressing FIRE. The capsule will detonate after 2s or upon hitting an enemy, releasing a chemical agent which dampens the psionic abilities of long-term Ambit Ember users.',
    wikiLinks: [`https://remnant.wiki/Poisoned_Ambit_Ember_Capsule`],
    location: {
      world: `N'Erud`,
      dungeon: ['Ascension Spire'],
    },
  },
  {
    category: 'consumable',
    name: 'Processed Koara',
    imagePath: '/items/consumables/processedkoarapellet.png',
    id: '4lvdgg',
    dlc: 'base',
    tags: ['Stamina'],
    description: `Decreases Stamina Recovery delay by 75% and Stamina Regen Penalty by 50%. Lasts 60s.`,
    wikiLinks: [`https://remnant.wiki/Processed_Koara`],
    location: { world: 'Yaesha', dungeon: 'World Drop' },
  },
  {
    category: 'consumable',
    name: 'Purified Salve',
    imagePath: '/items/consumables/purifiedsalve.png',
    id: 'wzi8il',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description:
      'Cures CURSE and increases Blight Resistance by 25. Lasts 10m.',
    wikiLinks: [`https://remnant.wiki/Purified_Salve`],
    location: { world: 'Losomn', dungeon: 'World Drop' },
  },
  {
    category: 'consumable',
    name: 'Rocket Fuel',
    imagePath: '/items/consumables/rocketfuel.png',
    id: 'rlpblq',
    dlc: 'base',
    tags: ['Fire Rate', 'Melee Attack Speed'],
    description: `Increases Fire Rate by 10% and Melee Attack Speed by 15%. Lasts 20s.`,
    wikiLinks: [`https://remnant.wiki/Rocket_Fuel`],
    location: { world: 'Ward 13', dungeon: 'Vendor' },
  },
  {
    category: 'consumable',
    name: 'Sweet Leaf',
    imagePath: '/items/consumables/sweetleaf.png',
    id: 'rlpblz',
    dlc: 'dlc2',
    tags: ['Damage Reduction'],
    description: `Grants 1 stack of BULWARK. Lasts 30s.`,
    wikiLinks: [`https://remnant.wiki/Sweet_Leaf`],
    location: { world: 'Yaesha', dungeon: 'World Drop' },
  },
  {
    category: 'consumable',
    name: 'Timeworn Unguent',
    imagePath: '/items/consumables/timewornunguent.png',
    id: 'li99wc',
    dlc: 'base',
    tags: ['Damage Reduction'],
    description:
      'Cures SUPPRESSION Blight and increases Blight Resistance by 25. Lasts 10m.',
    wikiLinks: [`https://remnant.wiki/Timeworn_Unguent`],
    location: {
      world: `N'Erud`,
      dungeon: ['Ascension Spire'],
    },
  },
]