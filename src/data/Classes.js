const Classes = [
    {
        'name': 'Barbarian',
        'description': "",
        'icon': require("../assets/icons/classes/barbarian.png"),
        'cost': 10,
        'gender': 'male',
        'titles': [
            {
                'placement': 'suffix',
                'name': ' the Barbarian'
            },
            {
                'placement': 'suffix',
                'name': ' the Brute'
            },
            {
                'placement': 'prefix',
                'name': 'Wildman '
            },
        ],
        'stats': {
            'hp': 4,
            'might': 6,
            'magic': 0
        },
        'special': ["rage"],
    },
    {
        'name': 'Dwarf',
        'description': "A stout warrior race that lives in deep mountain tunnels.",
        'icon': require("../assets/icons/classes/dwarf.png"),
        'cost': 20,
        'gender': 'male',
        'titles': [
            {
                'placement': 'suffix',
                'name': ' the Dwarf'
            },
            {
                'placement': 'suffix',
                'name': ' of Stone'
            },
        ],
        'stats': {
            'hp': 5,
            'might': 4,
            'magic': 1
        },
        'special': ["subterranean"],
    },
    {
        'name': 'Elf',
        'description': "",
        'icon': require("../assets/icons/classes/elf.png"),
        'gender': 'female',
        'cost': 30,
        'titles': [
            {
                'placement': 'suffix',
                'name': ' the Elf'
            },
            {
                'placement': 'suffix',
                'name': ' the Fair'
            },
            {
                'placement': 'suffix',
                'name': ' of the Forest'
            },
        ],
        'stats': {
            'hp': 2,
            'might': 4,
            'magic': 4
        },
        'special': ["pathfinder", "naturalist"],
    },
    {
        'name': 'Knight',
        'description': "",
        'icon': require("../assets/icons/classes/knight.png"),
        'gender': 'male',
        'cost': 40,
        'titles': [
            {
                'placement': 'prefix',
                'name': 'Sir '
            },
            {
                'placement': 'suffix',
                'name': ' the Honorable'
            },
        ],
        'stats': {
            'hp': 4,
            'might': 5,
            'magic': 1
        },
        'special': ["protector"],
    },
    {
        'name': 'Monk',
        'description': "",
        'icon': require("../assets/icons/classes/monk.png"),
        'cost': 15,
        'gender': 'male',
        'titles': [
            {
                'placement': 'prefix',
                'name': 'Brother '
            },
        ],
        'stats': {
            'hp': 4,
            'might': 3,
            'magic': 3
        },
        'special': ["holy", "protector"],
    },
    {
        'name': 'Nun',
        'description': "",
        'icon': require("../assets/icons/classes/nun.png"),
        'gender': 'female',
        'cost': 15,
        'titles': [
            {
                'placement': 'prefix',
                'name': 'Sister '
            },
        ],
        'stats': {
            'hp': 3,
            'might': 3,
            'magic': 4
        },
        'special': ["holy", "protector"],
    },
    {
        'name': 'Witch',
        'description': "",
        'icon': require("../assets/icons/classes/witch.png"),
        'gender': 'female',
        'cost': 25,
        'titles': [
            {
                'placement': 'suffix',
                'name': ' the Witch'
            },
            {
                'placement': 'suffix',
                'name': ' the Crone'
            },
        ],
        'stats': {
            'hp': 3,
            'might': 1,
            'magic': 6
        },
        'special': ["arcane"],
    },
    {
        'name': 'Wizard',
        'description': "",
        'icon': require("../assets/icons/classes/wizard.png"),
        'cost': 30,
        'gender': 'male',
        'titles': [
            {
                'placement': 'suffix',
                'name': ' the Wizard'
            },
            {
                'placement': 'suffix',
                'name': ' the Magician'
            },
            {
                'placement': 'prefix',
                'name': 'Magi '
            },
        ],
        'stats': {
            'hp': 2,
            'might': 2,
            'magic': 6
        },
        'special': ["arcane"],
    },
]

export default Classes;