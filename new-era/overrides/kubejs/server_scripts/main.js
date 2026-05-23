ServerEvents.recipes(event => {
    event.shapeless(Item.of('drivebywire:wire'),[
        'powergrid:insulated_copper_wire',
        'minecraft:iron_nugget',
        'minecraft:iron_nugget'

    ]);
    event.shapeless(Item.of('drivebywire:wire_cutter'),[
        'minecraft:shears',
        'minecraft:blue_wool'
    ]);
    event.shapeless(Item.of('drivebywire:controller_hub'),[
        'create:linked_controller',
        'create:brass_casing'
    ]);
     event.shapeless(Item.of('drivebywire:tweaked_controller_hub'),[
        'create_tweaked_controllers:tweaked_linked_controller',
        'create:brass_casing'
    ]);
     event.shapeless(Item.of('drivebywire:backup_block'),[
        'minecraft:black_concrete',
        'minecraft:bone_meal'
    ]);
});
