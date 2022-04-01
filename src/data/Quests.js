const Quests = [
    {
        'name': 'Terrible Troublesome Troll',
        'description': 'Defeat the troll terrorizing locals.',
        'icon': require('../assets/icons/quests/troll.png'),
        'requirements': {
            'hp': 10,
            'might': 5,
            'magic': 3,
            'special': []
        },
        'reward': 50,
        'time': 1
    },
    {
        'name': 'Big Bad Gnome',
        'description': 'Capture a wiley gnome running amok.',
        'icon': require('../assets/icons/quests/bad-gnome.png'),
        'requirements': {
            'hp': 1,
            'might': 1,
            'magic': 3,
            'special': []
        },
        'reward': 10,
        'time': 1
    },
    {
        'name': 'Elusive Sea Monster',
        'description': 'A secretive sea monster is plaguing a quite seaside town.',
        'icon': require('../assets/icons/quests/sea-monster.png'),
        'requirements': {
            'hp': 10,
            'might': 6,
            'magic': 4,
            'special': ['Nautical']
        },
        'reward': 75,
        'time': 1
    },
    {
        'name': 'Prankster Fairies',
        'description': 'Fairies are tricking locals out of their goods and must be stopped.',
        'icon': require('../assets/icons/quests/fairy.png'),
        'requirements': {
            'hp': 1,
            'might': 1,
            'magic': 8,
            'special': []
        },
        'reward': 25,
        'time': 1
    },
    {
        'name': 'Into the Goblin Caves',
        'description': 'Venture into the goblin caves and eliminate them.',
        'icon': require('../assets/icons/quests/goblin.png'),
        'requirements': {
            'hp': 15,
            'might': 10,
            'magic': 8,
            'special': ['Subterranean']
        },
        'reward': 100,
        'time': 1
    },
    {
        'name': 'Troglodyte Treasure Trove',
        'description': 'Recover the stolen treasure hidden deep in the troglodyte den.',
        'icon': require('../assets/icons/quests/troglodyte.png'),
        'requirements': {
            'hp': 20,
            'might': 15,
            'magic': 12,
            'special': ['Subterranean']
        },
        'reward': 500,
        'time': 1
    },
]

export default Quests;