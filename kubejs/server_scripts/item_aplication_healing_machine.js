ServerEvents.recipes(event => {
  event.remove({ id: 'cobblemon:healing_machine' })
  event.recipes.create.item_application('cobblemon:healing_machine', ['create:andesite_casing', 'minecraft:diamond']).id('cobblemon:healing_machine_manual_only')
})