StartupEvents.registry('item', event => {
  // If you want to specify a different texture location you can do that too, like this:

//
event.create('harmony').unstackable().texture('cobblemoncardboard:item/harmony').displayName('Harmony_Plate')// This texture would be located at kubejs/assets/mobb/textures/item/lava.png
event.create('eclipsed').unstackable().texture('cobblemoncardboard:item/eclipsed').displayName('Eclipsed_Plate')
event.create('titan').unstackable().texture('cobblemoncardboard:item/titan').displayName('Titan_Plate')
event.create('frostwing').unstackable().texture('cobblemoncardboard:item/frostwing').displayName('Frostwing_Plate')

//Legend Plate
event.create('incomplete_legend_plate_stage1', 'create:sequenced_assembly').unstackable().texture('cobblemoncardboard:item/incomplete_legend_plate_stage1').displayName('Incomplete Legend Plate')

//Rusted Sword + Shield
event.create('incomplete_rusted_sword', 'create:sequenced_assembly').unstackable().texture('cobblemoncardboard:item/incomplete_rusted_sword').displayName('Incomplete Rusted_Sword')
event.create('incomplete_rusted_shield', 'create:sequenced_assembly').unstackable().texture('cobblemoncardboard:item/incomplete_rusted_shield').displayName('Incomplete Rusted_Shield')
})