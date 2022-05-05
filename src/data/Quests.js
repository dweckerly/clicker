const Quests = [
    {
        'name': 'Terrible Troublesome Troll',
        'description': 'Defeat the troll terrorizing locals.',
        'icon': require('../assets/icons/quests/troll.png'),
        'requirements': {
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
            'might': 1,
            'magic': 3,
            'special': []
        },
        'reward': 25,
        'time': 1
    },
    {
        'name': 'Elusive Sea Monster',
        'description': 'A secretive sea monster is plaguing a quiet little port town.',
        'icon': require('../assets/icons/quests/sea-monster.png'),
        'requirements': {
            'might': 6,
            'magic': 4,
            'special': ['nautical']
        },
        'reward': 150,
        'time': 3
    },
    {
        'name': 'Prankster Fairies',
        'description': 'Fairies are tricking locals out of their goods and must be stopped.',
        'icon': require('../assets/icons/quests/fairy.png'),
        'requirements': {
            'might': 1,
            'magic': 3,
            'special': []
        },
        'reward': 25,
        'time': 1
    },
    {
        'name': 'Into the Goblin Caves',
        'description': 'Venture into the goblin caves and eliminate its denizens.',
        'icon': require('../assets/icons/quests/goblin.png'),
        'requirements': {
            'might': 10,
            'magic': 8,
            'special': ['subterranean']
        },
        'reward': 150,
        'time': 2
    },
    {
        'name': 'Troglodyte Treasure Trove',
        'description': 'Recover the stolen treasure hidden deep within the troglodyte den.',
        'icon': require('../assets/icons/quests/troglodyte.png'),
        'requirements': {
            'might': 15,
            'magic': 12,
            'special': ['subterranean']
        },
        'reward': 500,
        'time': 4
    },
]

export default Quests;