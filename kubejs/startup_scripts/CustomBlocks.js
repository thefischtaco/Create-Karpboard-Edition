//===========================================
//Apristone + bricks
StartupEvents.registry('block', event => {    
    
    event.create('apristone')
    .texture('cobblemoncardboard:block/apristone')
    .displayName('Apristone')
    .stoneSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)
    .hardness(1.0)
    .resistance(1.0);


        event.create('apristonebrick')
    .texture('cobblemoncardboard:block/apristonebrick')
    .displayName('Apristone Bricks')
    .stoneSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_iron_tool')
    .requiresTool(true)
    .hardness(1.0)
    .resistance(1.0);


    event.create('ancientrawgoldblock')
    .texture('cobblemoncardboard:block/ancientrawgoldblock')
    .displayName('Ancient Raw Gold Block')
    .stoneSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .requiresTool(true)
    .hardness(1.0)
    .resistance(1.0);


       event.create('incomplete_ancientrawgoldblock')
    .texture('cobblemoncardboard:block/incomplete_ancientrawgoldblock')
    .displayName('Incomplete Ancient Raw Gold Block')
    .stoneSoundType()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:needs_diamond_tool')
    .requiresTool(true)
    .hardness(1.0)
    .resistance(1.0);
})