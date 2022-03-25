const Classes = [
    {
        'name': 'Barbarian',
        'description': "",
        'icon': require("../assets/icons/classes/barbarian.png"),
        'gender': 'male',
        'title': {
            'placement': 'suffix',
            'name': ' the Barbarian'
        },
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
        'title': {
            'placement': 'suffix',
            'name': ' the Dwarf'
        },
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
        'title': {
            'placement': 'suffix',
            'name': ' the Elf'
        },
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
        'title': {
            'placement': 'prefix',
            'name': 'Sir '
        },
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
        'title': {
            'placement': 'prefix',
            'name': 'Brother '
        },
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
        'title': {
            'placement': 'prefix',
            'name': 'Sister '
        },
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
        'title': {
            'placement': 'suffix',
            'name': ' the Witch'
        },
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
        'title': {
            'placement': 'suffix',
            'name': ' the Wizard'
        },
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