
ServerEvents.recipes(event => {

  //Crafting Recipes

  //Apristone
  event.custom({
  "type": "create:haunting",
  "ingredients": [
    {
      "item": 'create:crushed_raw_gold'
    }
  ],
  "results": [
    {
      "id": 'minecraft:raw_gold'
    }
  ]
});
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": {
        "item": "cobblemon:green_apricorn"
      },
      "B": {
        "item": "cobblemon:red_apricorn"
      },
      "C": {
        "item": "cobblemon:yellow_apricorn"
      },
      "D": {
        "item": "cobblemon:blue_apricorn"
      },
      "E": {
        "item": "cobblemon:pink_apricorn"
      },
      "F": {
        "item": "cobblemon:black_apricorn"
      },
      "G": {
        "item": "cobblemon:white_apricorn"
      },
      "H": {
        "item": "minecraft:stone"
      },

    },
    "pattern": [
      "AHB",
      "CDE",
      "FHG"
    ],
    "result": {
      "count": 8,
      "id": "kubejs:apristone"
    }

  });

  //Apristone Brick
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": {
        "item": 'kubejs:apristone'
      },
    },
    "pattern": [
      "AA",
      "AA"
    ],
    "result": {
      "count": 4,
      "id": 'kubejs:apristonebrick'
    }

  });




  //Cornerstone Mask
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": {
        "item": "cobblemon:black_tumblestone"
      },
      "B": {
        "item": "minecraft:netherite_helmet"
      },
      "C": {
        "item": "mega_showdown:rock_tera_shard"
      },

    },
    "pattern": [
      "ACA",
      "CBC",
      "ACA"
    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:cornerstone_mask"
    }

  });

  //Star Core
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": {
        "item": 'cobblemon:poison_gem'
      },
      "B": {
        "item": 'minecraft:nether_star'
      },
      "C": {
        "item": 'mega_showdown:wishing_star'
      },
      "D": {
        "item": 'cobblemon:dragon_gem'
      },
    },
    "pattern": [
      " AAA ",
      "ADBDA",
      "ABCBA",
      "ADBDA",
      " AAA "
    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:star_core'
    }

  });

  //Prison Bottle
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": {
        "item": 'createcasing:chorium_ingot'
      },
      "B": {
        "item": 'minecraft:quartz'
      },
      "C": {
        "item": 'cobblemon:psychic_gem'
      },
      "D": {
        "item": 'minecraft:gold_ingot'
      },
    },
    "pattern": [
      "AAA",
      " B ",
      "BCB",
      "DBD"
    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:prison_bottle'
    }

  });

  //Hearthflame Mask
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": {
        "item": "cobblemon:tumblestone"
      },
      "B": {
        "item": "minecraft:netherite_helmet"
      },
      "C": {
        "item": "mega_showdown:fire_tera_shard"
      },

    },
    "pattern": [
      "ACA",
      "CBC",
      "ACA"
    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:hearthflame_mask"
    }

  });



  //Wellspring Mask
  event.custom({
    "type": "minecraft:crafting_shaped",
    "key": {
      "A": {
        "item": "cobblemon:sky_tumblestone"
      },
      "B": {
        "item": "minecraft:netherite_helmet"
      },
      "C": {
        "item": "mega_showdown:water_tera_shard"
      },

    },
    "pattern": [
      "ACA",
      "CBC",
      "ACA"
    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:wellspring_mask"
    }

  });

  //////

  ///Mechanical Crafting///

  ///Basic Mechanical Crafting///

  //Trial Key
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:tuff'
      },
      "B": {
        "item": 'minecraft:copper_ingot'
      },
      "C": {
        "item": 'minecraft:netherite_ingot'
      },
    },
    "pattern": [
      "ACA",
      " B ",
      " B "
    ],
    "result": {
      "count": 1,
      "id": 'minecraft:trial_key'
    }

  });

  //Ominous Trial Key
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:trial_key'
      },
      "B": {
        "item": 'minecraft:wither_skeleton_skull'
      },
      "C": {
        "item": 'minecraft:prismarine_crystals'
      },
      "D": {
        "item": 'minecraft:breeze_rod'
      },
      "E": {
        "item": 'minecraft:prismarine_shard'
      },
    },
    "pattern": [
      "BAB",
      "CDC",
      "EDE"
    ],
    "result": {
      "count": 1,
      "id": 'minecraft:ominous_trial_key'
    }

  });

  //Nether Star
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:wither_skeleton_skull'
      },
      "B": {
        "item": 'minecraft:soul_sand'
      },
      "C": {
        "item": 'minecraft:diamond_sword'
      },
      "D": {
        "item": 'minecraft:crossbow'
      },
    },
    "pattern": [
      "AAA",
      "BBB",
      "CBD"
    ],
    "result": {
      "count": 1,
      "id": 'minecraft:nether_star'
    }

  });

  //Pokeball Swapper Token
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'cobblemon:poke_ball'
      },
      "B": {
        "item": 'minecraft:iron_ingot'
      },
      "C": {
        "item": 'minecraft:gold_ingot'
      },
    },
    "pattern": [
      "CBC",
      "BAB",
      "CBC"
    ],
    "result": {
      "count": 1,
      "id": 'cobblemoncreatified:pokeball_swapper_token'
    }

  });

  //Keystone
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:polished_rose_quartz"
      },
      "B": {
        "item": "createaddition:electrum_ingot"
      },
      "C": {
        "item": "minecraft:diamond"
      },
      "D": {
        "item": "create:refined_radiance"
      },
      "E": {
        "item": "minecraft:emerald"
      },
    },
    "pattern": [
      "AAA",
      "CDC",
      "BEB"
    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:keystone"
    }

  });



  ///Plates///

  //Draco Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:dragon_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:draco_plate"
    },
    "show_notification": false

  });

  //Dread Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:dark_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:dread_plate"
    },
    "show_notification": false

  });

  //Earth Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:ground_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:earth_plate"
    },
    "show_notification": false

  });

  //Fist Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:fighting_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:fist_plate"
    },
    "show_notification": false

  });

  //Flame Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:fire_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:flame_plate"
    },
    "show_notification": false

  });

  //Icicle Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:ice_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:icicle_plate"
    },
    "show_notification": false

  });

  //Insect Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:bug_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:insect_plate"
    },
    "show_notification": false

  });

  //Iron Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:steel_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:iron_plate"
    },
    "show_notification": false

  });

  //Meadow Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:grass_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:meadow_plate"
    },
    "show_notification": false

  });

  //Mind Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:psychic_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:mind_plate"
    },
    "show_notification": false

  });

  //Pixie Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:fairy_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:pixie_plate"
    },
    "show_notification": false

  });

  //Sky Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:flying_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:sky_plate"
    },
    "show_notification": false

  });

  //Splash Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:water_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:splash_plate"
    },
    "show_notification": false

  });

  //Spooky Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:ghost_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:spooky_plate"
    },
    "show_notification": false

  });

  //Stone Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:rock_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:stone_plate"
    },
    "show_notification": false

  });

  //Toxic Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:poison_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:toxic_plate"
    },
    "show_notification": false

  });

  //Zap Plate
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": "create:sturdy_sheet"
      },
      "B": {
        "item": "cobblemon:electric_gem"
      }
    },
    "pattern": [
      "AAA",
      "ABA",
      "AAA",

    ],
    "result": {
      "count": 1,
      "id": "mega_showdown:zap_plate"
    },
    "show_notification": false

  });
  /////

  //Blank Z Crystal  

  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'createqol:shadow_steel_block'
      },
      "B": {
        "item": 'createqol:shadow_radiance'
      },
      "C": {
        "item": 'create:shadow_steel'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:blank_z'
    },
    "show_notification": false

  });

  /////
  //Lustrous Globe
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:lustrous_orb'
      },
      "C": {
        "item": 'minecraft:echo_shard'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:lustrous_globe'
    },
    "show_notification": false

  });
  /////

  //Reveal Glass
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'create:iron_sheet'
      },
      "B": {
        "item": 'minecraft:glass_pane'
      },
      "C": {
        "item": 'cobblemon:electric_gem'
      },
      "D": {
        "item": 'cobblemon:rock_gem'
      },
      "E": {
        "item": 'cobblemon:flying_gem'
      },
      "F": {
        "item": 'cobblemon:fairy_gem'
      }
    },
    "pattern": [
      "ADA",
      "EBC",
      "AFA",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:reveal_glass'
    },
    "show_notification": false

  });
  /////

  //Blank Mega Stone 
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'createqol:refined_radiance_block'
      },
      "B": {
        "item": 'minecraft:diamond_block'
      },
      "C": {
        "item": 'create:refined_radiance'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:mega_stone'
    },
    "show_notification": false

  });

  /////

  //Wishing Star
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'create:rose_quartz'
      },
      "B": {
        "item": 'minecraft:diamond_block'
      },
      "C": {
        "item": 'create_enchantment_industry:super_experience_block'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:wishing_star'
    },
    "show_notification": false

  });

  /////

  //Sparklin Stone light
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'createqol:shadow_radiance'
      },
      "B": {
        "item": 'minecraft:amethyst_shard'
      },
      "C": {
        "item": 'minecraft:end_crystal'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:sparkling_stone_light'
    },
    "show_notification": false

  });

  //Sparklin Stone Dark
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'createqol:shadow_radiance'
      },
      "B": {
        "item": 'minecraft:quartz'
      },
      "C": {
        "item": 'minecraft:end_crystal'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:sparkling_stone_dark'
    },
    "show_notification": false

  });

  //Deoxys Meteorite
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:end_stone'
      },
      "B": {
        "item": 'cobblemon:psychic_gem'
      },
      "C": {
        "item": 'createcasing:chorium_ingot'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:deoxys_meteorite'
    },
    "show_notification": false

  });
  /////

  //Poke Gems

  // Psychic Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:psychic_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:psychic_gem'
    },
    "show_notification": false

  });

  // Ghost Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:ghost_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:ghost_gem'
    },
    "show_notification": false

  });

  // Grass Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:grass_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:grass_gem'
    },
    "show_notification": false

  });

  // Fire Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:fire_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:fire_gem'
    },
    "show_notification": false

  });

  // Water Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:water_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:water_gem'
    },
    "show_notification": false

  });

  // Normal Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:normal_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:normal_gem'
    },
    "show_notification": false

  });

  // Electric Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:electric_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:electric_gem'
    },
    "show_notification": false

  });

  // Dragon Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:dragon_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:dragon_gem'
    },
    "show_notification": false

  });

  // Poison Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:poison_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:poison_gem'
    },
    "show_notification": false

  });

  // Dark Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:dark_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:dark_gem'
    },
    "show_notification": false

  });

  // Ice Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:ice_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:ice_gem'
    },
    "show_notification": false

  });

  // Fighting Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:fighting_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:fighting_gem'
    },
    "show_notification": false

  });

  // Ground Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:ground_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:ground_gem'
    },
    "show_notification": false

  });

  // Flying Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:flying_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:flying_gem'
    },
    "show_notification": false

  });

  // Bug Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:bug_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:bug_gem'
    },
    "show_notification": false

  });

  // Rock Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:rock_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:rock_gem'
    },
    "show_notification": false

  });

  // Steel Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:steel_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:steel_gem'
    },
    "show_notification": false

  });

  // Fairy Gem
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:amethyst_shard'
      },
      "B": {
        "item": 'mega_showdown:fairy_tera_shard'
      },
      "C": {
        "item": 'minecraft:lapis_lazuli'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'cobblemon:fairy_gem'
    },
    "show_notification": false

  });
  /////

  //Poke memorys
  // Psychic memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:psychic_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:psychic_memory'
    },
    "show_notification": false

  });

  // Ghost memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:ghost_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:ghost_memory'
    },
    "show_notification": false

  });

  // Grass memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:grass_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:grass_memory'
    },
    "show_notification": false

  });

  // Fire memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:fire_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:fire_memory'
    },
    "show_notification": false

  });

  // Water memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:water_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:water_memory'
    },
    "show_notification": false

  });

  // Electric memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:electric_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:electric_memory'
    },
    "show_notification": false

  });

  // Dragon memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:dragon_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:dragon_memory'
    },
    "show_notification": false

  });

  // Poison memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:poison_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:poison_memory'
    },
    "show_notification": false

  });

  // Dark memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:dark_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:dark_memory'
    },
    "show_notification": false

  });

  // Ice memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:ice_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:ice_memory'
    },
    "show_notification": false

  });

  // Fighting memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:fighting_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:fighting_memory'
    },
    "show_notification": false

  });

  // Ground memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:ground_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:ground_memory'
    },
    "show_notification": false

  });

  // Flying memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:flying_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:flying_memory'
    },
    "show_notification": false

  });

  // Bug memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:bug_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:bug_memory'
    },
    "show_notification": false

  });

  // Rock memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:rock_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:rock_memory'
    },
    "show_notification": false

  });

  // Steel memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:steel_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:steel_memory'
    },
    "show_notification": false

  });

  // Fairy memory
  event.custom({
    "type": "create:mechanical_crafting",
    "accept_mirrored": false,
    "key": {
      "A": {
        "item": 'minecraft:iron_ingot'
      },
      "B": {
        "item": 'cobblemon:fairy_gem'
      },
      "C": {
        "item": 'create:iron_sheet'
      }
    },
    "pattern": [
      "CAC",
      "ABA",
      "CAC",

    ],
    "result": {
      "count": 1,
      "id": 'mega_showdown:fairy_memory'
    },
    "show_notification": false

  });
  /////


  ///Compacting Recipes///
  /// Compacted Plates
  event.recipes.create.compacting('kubejs:harmony', ['mega_showdown:flame_plate', 'mega_showdown:splash_plate', 'mega_showdown:meadow_plate', 'mega_showdown:zap_plate']).superheated();
  event.recipes.create.compacting('kubejs:titan', ['mega_showdown:fist_plate', 'mega_showdown:earth_plate', 'mega_showdown:iron_plate', 'mega_showdown:stone_plate']).superheated();
  event.recipes.create.compacting('kubejs:frostwing', ['mega_showdown:insect_plate', 'mega_showdown:icicle_plate', 'mega_showdown:sky_plate', 'mega_showdown:draco_plate']).superheated();
  event.recipes.create.compacting('kubejs:eclipsed', ['mega_showdown:toxic_plate', 'mega_showdown:mind_plate', 'mega_showdown:spooky_plate', 'mega_showdown:dread_plate']).superheated();

  /////

  //Sequenced Assemblies

  ///Basic Assemblies///
  //Red Orb
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": 'mega_showdown:keystone' },
    "loops": 32,
    "results": [{ "id": "mega_showdown:red_orb" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "mega_showdown:red_orb" }, { "item": 'create_things_and_misc:crushed_magma' }],
        "results": [{ "id": "mega_showdown:red_orb" }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": "mega_showdown:red_orb" }, { "item": 'minecraft:magma_cream' }],
        "results": [{ "id": "mega_showdown:red_orb" }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": "mega_showdown:red_orb" }, {
          "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava",
          "results": [{ "id": "mega_showdown:red_orb" }]
        }],
        "results": [{ "id": "mega_showdown:red_orb" }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{"item": "mega_showdown:red_orb"}],
        "results": [{"id": "mega_showdown:red_orb"}]
      },
    ],
    "transitional_item": { "id": "mega_showdown:red_orb" }
  });
  /////
  //Blue Orb
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": 'mega_showdown:keystone' },
    "loops": 32,
    "results": [{ "id": 'mega_showdown:blue_orb' }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'mega_showdown:blue_orb' }, { "item": "minecraft:prismarine_shard" }],
        "results": [{ "id": 'mega_showdown:blue_orb' }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'mega_showdown:blue_orb' }, { "item": 'minecraft:prismarine_crystals' }],
        "results": [{ "id": 'mega_showdown:blue_orb' }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": 'mega_showdown:blue_orb' }, {
          "type": "neoforge:single", "amount": 500, "fluid": "minecraft:water",
          "results": [{ "id": 'mega_showdown:blue_orb' }]
        }],
        "results": [{ "id": 'mega_showdown:blue_orb' }]
      },
      {
        "type": "create:pressing",
        "ingredients": [
          {
            "item": 'mega_showdown:blue_orb'
          }
        ],
        "results": [
          {
            "id": 'mega_showdown:blue_orb'
          }
        ]
      },
    ],
    "transitional_item": { "id": 'mega_showdown:blue_orb' }
  });

  //Legend Plate
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": 'mega_showdown:pixie_plate' },
    "loops": 1,
    "results": [{ "id": "mega_showdown:legend_plate" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'mega_showdown:pixie_plate' }, { "item": 'kubejs:harmony' }],
        "results": [{ "id": 'kubejs:incomplete_legend_plate_stage1' }]
      },

      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'kubejs:incomplete_legend_plate_stage1' }, { "item": 'kubejs:titan' }],
        "results": [{ "id": 'kubejs:incomplete_legend_plate_stage1' }]
      },

      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'kubejs:incomplete_legend_plate_stage1' }, { "item": 'kubejs:frostwing' }],
        "results": [{ "id": 'kubejs:incomplete_legend_plate_stage1' }]
      },

      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'kubejs:incomplete_legend_plate_stage1' }, { "item": 'kubejs:eclipsed' }],
        "results": [{ "id": 'kubejs:incomplete_legend_plate_stage1' }]
      },

      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'kubejs:incomplete_legend_plate_stage1' }, { "item": 'mega_showdown:stellar_tera_shard' }],
        "results": [{ "id": 'kubejs:incomplete_legend_plate_stage1' }]
      },

      {
        "type": "create:pressing",
        "ingredients": [{ "item": 'kubejs:incomplete_legend_plate_stage1' }],
        "results": [{ "id": "mega_showdown:legend_plate" }]
      },
    ],
    "transitional_item": { "id": 'kubejs:incomplete_legend_plate_stage1' }

  });
  /////

  //Rusted Shield
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": "cobblemon:ability_shield" },
    "loops": 10,
    "results": [{ "id": "mega_showdown:rusted_shield" }],
    "sequence": [
      { "type": "create:deploying", "ingredients": [{ "item": "cobblemon:ability_shield" }, { "tag": "create:sandpaper" }], "results": [{ "id": 'kubejs:incomplete_rusted_shield' }] },
      {
        "type": "create:filling",
        "ingredients": [{ "item": 'kubejs:incomplete_rusted_shield' }, {
          "type": "neoforge:single", "amount": 500, "fluid": "minecraft:water",
          "results": [{ "id": 'kubejs:incomplete_rusted_shield' }]
        }],
        "results": [{ "id": 'kubejs:incomplete_rusted_shield' }]
      }

    ],
    "transitional_item": { "id": 'kubejs:incomplete_rusted_shield' }
  });

  //Rusted Sword
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": 'minecraft:netherite_sword' },
    "loops": 10,
    "results": [{ "id": "mega_showdown:rusted_sword" }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'minecraft:netherite_sword' }, { "tag": "create:sandpaper" }],
        "results": [{ "id": 'kubejs:incomplete_rusted_sword' }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": 'kubejs:incomplete_rusted_sword' }, {
          "type": "neoforge:single", "amount": 500, "fluid": "minecraft:water",
          "results": [{ "id": 'kubejs:incomplete_rusted_sword' }]
        }],
        "results": [{ "id": 'kubejs:incomplete_rusted_sword' }]
      }

    ],
    "transitional_item": { "id": 'kubejs:incomplete_rusted_sword' }
  });
  /////

  //Ancient Debris
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": 'minecraft:raw_gold_block' },
    "loops": 10,
    "results": [{ "id": 'kubejs:ancientrawgoldblock' }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'minecraft:raw_gold_block' }, { "item": 'minecraft:nether_wart_block' }],
        "results": [{ "id": 'kubejs:incomplete_ancientrawgoldblock' }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": 'kubejs:incomplete_ancientrawgoldblock' }, {
          "type": "neoforge:single", "amount": 1000, "fluid": "minecraft:lava",
          "results": [{ "id": 'kubejs:ancientrawgoldblock' }]
        }],
        "results": [{ "id": 'kubejs:incomplete_ancientrawgoldblock' }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": 'kubejs:ancientrawgoldblock' }],
        "results": [{ "id": 'kubejs:incomplete_ancientrawgoldblock' }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'kubejs:ancientrawgoldblock' }, { "item": 'minecraft:soul_sand' }],
        "results": [{ "id": 'kubejs:ancientrawgoldblock' }]
      }

    ],
    "transitional_item": { "id": 'kubejs:incomplete_ancientrawgoldblock' }
  });

  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": { "item": 'kubejs:incomplete_ancientrawgoldblock' },
    "loops": 9,
    "results": [{ "id": 'kubejs:ancientrawgoldblock' }],
    "sequence": [
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'minecraft:raw_gold_block' }, { "item": 'minecraft:nether_wart_block' }],
        "results": [{ "id": 'kubejs:incomplete_ancientrawgoldblock' }]
      },
      {
        "type": "create:filling",
        "ingredients": [{ "item": 'kubejs:incomplete_ancientrawgoldblock' }, {
          "type": "neoforge:single", "amount": 1000, "fluid": "minecraft:lava",
          "results": [{ "id": 'kubejs:ancientrawgoldblock' }]
        }],
        "results": [{ "id": 'kubejs:incomplete_ancientrawgoldblock' }]
      },
      {
        "type": "create:pressing",
        "ingredients": [{ "item": 'kubejs:ancientrawgoldblock' }],
        "results": [{ "id": 'kubejs:incomplete_ancientrawgoldblock' }]
      },
      {
        "type": "create:deploying",
        "ingredients": [{ "item": 'kubejs:ancientrawgoldblock' }, { "item": 'minecraft:soul_sand' }],
        "results": [{ "id": 'kubejs:ancientrawgoldblock' }]
      }

    ],
    "transitional_item": { "id": 'kubejs:incomplete_ancientrawgoldblock' }
  });

  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": 'kubejs:ancientrawgoldblock' },
      {
        "type": "neoforge:components", "amount": 1000, "components":
        {
          "create:potion_fluid_bottle_type": "regular",
          "minecraft:potion_contents": { "potion": "minecraft:strength" }
        },
        "fluids": "create:potion"
      }
    ],
    "results": [
      {
        "id": 'minecraft:ancient_debris'
      }
    ]
  });
  /////

  ///Fossils///  
  //Fossils 1-3
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "cobblemon:capture_sherd"
    },
    "loops": 16,
    "results": [{
      "chance": 0.33,
      "id": "cobblemon:old_amber_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:sail_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:fossilized_bird"
    }],
    "sequence": [
      { "type": "create:filling", "ingredients": [{ "item": "cobblemon:capture_sherd" }, { "type": "neoforge:single", "fluid": "minecraft:water", "amount": 1000 }], "results": [{ "id": "cobblemon:capture_sherd" }] },
      { "type": "create:deploying", "ingredients": [{ "item": "cobblemon:capture_sherd" }, { "tag": "create:sandpaper" }], "results": [{ "id": "cobblemon:capture_sherd" }] }

    ],
    "transitional_item": {
      "id": "cobblemon:capture_sherd"
    }
  });

  //Fossils 4-6
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "cobblemon:dome_sherd"
    },
    "loops": 16,
    "results": [{
      "chance": 0.33, "id": "cobblemon:dome_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:fossilized_drake"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:armor_fossil"
    }],
    "sequence": [
      { "type": "create:filling", "ingredients": [{ "item": "cobblemon:dome_sherd" }, { "type": "neoforge:single", "fluid": "minecraft:water", "amount": 1000 }], "results": [{ "id": "cobblemon:dome_sherd" }] },
      { "type": "create:deploying", "ingredients": [{ "item": "cobblemon:dome_sherd" }, { "tag": "create:sandpaper" }], "results": [{ "id": "cobblemon:dome_sherd" }] }

    ],
    "transitional_item": {
      "id": "cobblemon:dome_sherd"
    }
  });

  //Fossils 7-10
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "cobblemon:nostalgic_sherd"
    },
    "loops": 16,
    "results": [{
      "chance": 0.33, "id": "cobblemon:fossilized_fish"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:helix_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:cover_fossil"
    }],
    "sequence": [
      { "type": "create:filling", "ingredients": [{ "item": "cobblemon:nostalgic_sherd" }, { "type": "neoforge:single", "fluid": "minecraft:water", "amount": 1000 }], "results": [{ "id": "cobblemon:nostalgic_sherd" }] },
      { "type": "create:deploying", "ingredients": [{ "item": "cobblemon:nostalgic_sherd" }, { "tag": "create:sandpaper" }], "results": [{ "id": "cobblemon:nostalgic_sherd" }] }

    ],
    "transitional_item": {
      "id": "cobblemon:nostalgic_sherd"
    }
  });

  //Fossils 11-14
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "cobblemon:suspicious_sherd"
    },
    "loops": 16,
    "results": [{
      "chance": 0.33, "id": "cobblemon:fossilized_dino"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:jaw_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:skull_fossil"
    }],
    "sequence": [
      { "type": "create:filling", "ingredients": [{ "item": "cobblemon:suspicious_sherd" }, { "type": "neoforge:single", "fluid": "minecraft:water", "amount": 1000 }], "results": [{ "id": "cobblemon:suspicious_sherd" }] },
      { "type": "create:deploying", "ingredients": [{ "item": "cobblemon:suspicious_sherd" }, { "tag": "create:sandpaper" }], "results": [{ "id": "cobblemon:suspicious_sherd" }] }

    ],
    "transitional_item": {
      "id": "cobblemon:suspicious_sherd"
    }
  });

  //Fossils 15-18
  event.custom({
    "type": "create:sequenced_assembly",
    "ingredient": {
      "item": "cobblemon:bygone_sherd"
    },
    "loops": 16,
    "results": [{
      "chance": 0.33, "id": "cobblemon:root_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:claw_fossil"
    },
    {
      "chance": 0.33,
      "id": "cobblemon:plume_fossil"
    }],
    "sequence": [
      { "type": "create:filling", "ingredients": [{ "item": "cobblemon:bygone_sherd" }, { "type": "neoforge:single", "fluid": "minecraft:water", "amount": 1000 }], "results": [{ "id": "cobblemon:bygone_sherd" }] },
      { "type": "create:deploying", "ingredients": [{ "item": "cobblemon:bygone_sherd" }, { "tag": "create:sandpaper" }], "results": [{ "id": "cobblemon:bygone_sherd" }] }

    ],
    "transitional_item": {
      "id": "cobblemon:bygone_sherd"
    }
  });
  /////


  ///Tumblestone Farming///

  ///Black Tumblestone

  //Stage 1 -- Small Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:black_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:small_budding_black_tumblestone" }]
  })

  //Stage 2 -- Medium Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:small_budding_black_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:medium_budding_black_tumblestone" }]
  })

  //Stage 3 -- Large Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:medium_budding_black_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:large_budding_black_tumblestone" }]
  })

  //Stage 4 -- Tumblestone Cluster
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:large_budding_black_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:black_tumblestone_cluster" }]
  })

  //Stage 5 -- Tumblestone
  event.custom({
    "type": "create:milling",
    "processing_time": 150,
    "ingredients": [{ "item": "cobblemon:black_tumblestone_cluster" }],
    "results": [{ "count": 4, "id": "cobblemon:black_tumblestone" }]
  })


  ///Tumblestone

  //Stage 1 -- Small Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:small_budding_tumblestone" }]
  })

  //Stage 2 -- Medium Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:small_budding_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:medium_budding_tumblestone" }]
  })

  //Stage 3 -- Large Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:medium_budding_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:large_budding_tumblestone" }]
  })

  //Stage 4 -- Tumblestone Cluster
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:large_budding_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:tumblestone_cluster" }]
  })

  //Stage 5 -- Tumblestone
  event.custom({
    "type": "create:milling",
    "processing_time": 150,
    "ingredients": [{ "item": "cobblemon:tumblestone_cluster" }],
    "results": [{ "count": 4, "id": "cobblemon:tumblestone" }]
  })


  ///Sky Tumblestone

  //Stage 1 -- Small Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:sky_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:small_budding_sky_tumblestone" }]
  })

  //Stage 2 -- Medium Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:small_budding_sky_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:medium_budding_sky_tumblestone" }]
  })

  //Stage 3 -- Large Budding
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:medium_budding_sky_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:large_budding_sky_tumblestone" }]
  })

  //Stage 4 -- Tumblestone Cluster
  event.custom({
    "type": "create:filling",
    "ingredients": [
      { "item": "cobblemon:large_budding_sky_tumblestone" },
      { "type": "neoforge:single", "amount": 500, "fluid": "minecraft:lava" }],
    "results": [{ "id": "cobblemon:sky_tumblestone_cluster" }]
  })

  //Stage 5 -- Tumblestone
  event.custom({
    "type": "create:milling",
    "processing_time": 150,
    "ingredients": [{ "item": "cobblemon:sky_tumblestone_cluster" }],
    "results": [{ "count": 4, "id": "cobblemon:sky_tumblestone" }]
  })

  /////

})
