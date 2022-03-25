const Heroes = {
    "barbarian": require("../assets/icons/barbarian.png"),
    "dwarf": require("../assets/icons/dwarf.png"),
    "elf": require("../assets/icons/elf.png"),
    "knight": require("../assets/icons/knight.png"),
    "monk": require("../assets/icons/monk.png"),
    "nun": require("../assets/icons/nun.png"),
    "witch": require("../assets/icons/witch.png"),
    "wizard": require("../assets/icons/wizard.png")
}

const Classes = [
    {
        'name': 'Barbarian',
        'description': "",
        'title': {
            'placement': 'suffix',
            'name': ' the Barbarian'
        },
        'stats': {
            'hp': 4,
            'might': 5,
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
]

export default Heroes;