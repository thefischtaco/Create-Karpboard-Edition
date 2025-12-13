// Visit the wiki for more info - https://kubejs.com/
StartupEvents.registry('item', event => {
  event.create('dexrewards')
    .texture('cobblemoncardboard:item/dexrewards')
    .displayName('§cDex §cRewards')
    .tooltip('Right-click this item to open Dex Rewards')
    .unstackable()
    .use((level, player, hand) => {
      return true; // Permite usar imediatamente
    })
    .finishUsing((itemstack, level, entity) => {
      if (entity.isPlayer()) {
        entity.runCommandSilent('dexrewards')
      }
      return itemstack; // Retorna o item atualizado
    })
})
