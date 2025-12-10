ServerEvents.recipes(event => {
  event.remove({ id: 'create:crushing/raw_gold' })
  event.remove({ id: 'create:crushing/raw_gold_block' })
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": 'minecraft:raw_gold'
      }
    ],
    "processing_time": 250,
    "results": [
      {
        "id": "create:crushed_raw_gold"
      }
    ]
  });
  event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": 'minecraft:raw_gold_block'
      }
    ],
    "processing_time": 250,
    "results": [
      {
        "id": "create:crushed_raw_gold",
        "count": 9
      }
    ]
  });
})