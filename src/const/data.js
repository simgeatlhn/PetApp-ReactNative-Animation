const pets = [
    {
        pet: 'cats',
        pets: [
            {
                id: '1',
                name: 'Lily',
                image: require('../assets/cat-van.jpg'),
                type: 'Van-Cat',
                age: '2 years old',
            },
            {
                id: '2',
                name: 'Chivas',
                image: require('../assets/cat-baby.jpg'),
                type: 'Baby-Cat',
                age: '1 years old',
            },
            {
                id: '3',
                name: 'Doby',
                image: require('../assets/cat-sphynx.jpg'),
                type: 'Sphynx',
                age: '2 years old',
            },
        ],
    },
    {
        pet: 'dogs',
        pets: [
            {
                id: '1',
                name: 'Oscar',
                image: require('../assets/dog-golden.jpg'),
                type: 'Golden',
                age: '1 years old',
            },
            {
                id: '2',
                name: 'Max',
                image: require('../assets/dog-husky.jpg'),
                type: 'Husky',
                age: '2 years old',
            },
        ],
    },
];

export default pets;