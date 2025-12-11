// priority: 0

PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('starting_items')) {
      event.player.stages.add('starting_items');
      event.player.give('ftbquests:book');
      event.player.give('16x farmersdelight:steak_and_potatoes');
      event.player.give('kubejs:dexrewards');

      // Announce to the server with colored text
      event.server.tell(
          Text.of(`A new player, ${event.player.username}, has joined for the first time!`)
              .green() // Sets text color to green
              .bold()  // Makes text bold
      );
  }
});
