const Classes = [
    {
        'name': 'Barbarian',
        'description': "",
        'icon': require("../assets/icons/classes/barbarian.png"),
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
        'special': {
            'name': 'Rage',
            'description': ''
        },
    },
    {
        'name': 'Dwarf',
        'description': "A stout warrior race that lives in deep mountain tunnels.",
        'icon': require("../assets/icons/classes/dwarf.png"),
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
        'special': {
            'name': 'Subterranean',
            'description': 'Highly skilled in navigating underground.'
        },
    },
    {
        'name': 'Elf',
        'description': "",
        'icon': require("../assets/icons/classes/elf.png"),
        'gender': 'female',
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
        'special': {
            'name': '',
            'description': ''
        },
    },
    {
        'name': 'Knight',
        'description': "",
        'icon': require("../assets/icons/classes/knight.png"),
        'gender': 'male',
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
        'special': {
            'name': '',
            'description': ''
        },
    },
    {
        'name': 'Monk',
        'description': "",
        'icon': require("../assets/icons/classes/monk.png"),
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
        'special': {
            'name': 'Holy',
            'description': 'Adept at dealing with undead foes.'
        },
    },
    {
        'name': 'Nun',
        'description': "",
        'icon': require("../assets/icons/classes/nun.png"),
        'gender': 'female',
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
        'special': {
            'name': 'Holy',
            'description': 'Adept at dealing with undead foes.'
        },
    },
    {
        'name': 'Witch',
        'description': "",
        'icon': require("../assets/icons/classes/witch.png"),
        'gender': 'female',
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
        'special': {
            'name': '',
            'description': ''
        },
    },
    {
        'name': 'Wizard',
        'description': "",
        'icon': require("../assets/icons/classes/wizard.png"),
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
        'special': {
            'name': '',
            'description': ''
        },
    },
]

export default Classes;