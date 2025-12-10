// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


RecipeViewerEvents.removeEntries('item', event => {
	event.remove('mega_showdown:star_core')
})