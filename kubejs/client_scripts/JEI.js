RecipeViewerEvents.removeEntries('item', event => {
	event.remove('/spawn_egg/')
	event.remove('/chipped/')
	event.remove('@simpletms')
	event.remove('@cobblemonpokemonbadges')

	event.remove('minecraft:tipped_arrow')
	event.remove('minecraft:lingering_potion')
	event.remove('minecraft:splash_potion')
	event.remove('minecraft:painting')
	event.remove('minecraft:suspicious_stew')
	event.remove('minecraft:goat_horn')
})

RecipeViewerEvents.addEntries('item', event => {
	event.add('simpletms:tr_blank')
  	event.add('simpletms:tm_blank')

	event.add('chipped:botanist_workbench')
	event.add('chipped:glassblower')
	event.add('chipped:carpenters_table')
	event.add('chipped:loom_table')
	event.add('chipped:mason_table')
	event.add('chipped:alchemy_bench')
	event.add('chipped:tinkering_table')
	event.add('chipped:watering_can')
	event.add('chipped:alchemy_book')
	event.add('chipped:saw')
	event.add('chipped:needles')
	event.add('chipped:chisel')
	event.add('chipped:multimeter')
	
	event.add('create:chromatic_compound')
})