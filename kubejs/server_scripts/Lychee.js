// priority: 10


ServerEvents.recipes((event) => {
  let yamlRecipe = (yaml) => event.custom(Lychee.toJSON(yaml))

    yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: minecraft:diamond
    block_in: minecraft:lightning_rod
    post:
      - type: delay
        s: 0.2
      - type: execute
        command: "weather clear"
      - type: execute
        command: "say Weather cleared"
    `).id('cardboard_edition:clear_weather')

  yamlRecipe(`
    type: 'lychee:block_interacting'
    item_in:
      item: fire_charge
    block_in: minecraft:lightning_rod
    post:
      - type: delay
        s: 0.2
      - type: execute
        command: "summon minecraft:lightning_bolt ~ ~ ~"
    `).id('cardboard_edition:summon_lightning')

  //Sheet Crafting - Brass
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: create:brass_ingot
      count: 1
    post:
      - type: drop_item
        id: create:brass_sheet
    `).id('cardboard_edition:sheet_crafting_brass')

  //Sheet Crafting - Iron
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:iron_ingot
      count: 1
    post:
      - type: drop_item
        id: create:iron_sheet
    `).id('cardboard_edition:sheet_crafting_iron')

  //Sheet Crafting - Gold
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:gold_ingot
      count: 1
    post:
      - type: drop_item
        id: create:golden_sheet
    `).id('cardboard_edition:sheet_crafting_gold')

  //Sheet Crafting - Copper
  yamlRecipe(`
    type: 'lychee:block_crushing'
    item_in:
      item: minecraft:copper_ingot
      count: 1
    post:
      - type: drop_item
        id: create:copper_sheet
    `).id('cardboard_edition:sheet_crafting_copper')

  yamlRecipe(`
    type: 'lychee:lightning_channeling'
    item_in:
      - item: minecraft:echo_shard
    post:
      - type: drop_item
        id: minecraft:sculk_catalyst
    `).id('cardboard_edition:sculk_catalyst')

})