const sizes = [
    {
        id: 1,
        name: 'Pequeno',
        price: '10.00',
        preparation_time: '5'
    },
    {
        id: 2,
        name: 'Médio',
        price: '13.00',
        preparation_time: '7'
    },
    {
        id: 3,
        name: 'Grande',
        price: '15.00',
        preparation_time: '10'
    },
]

const flavors = [

    {
        id: 1,
        name: 'Morango',
        preparation_time: '0'
    },
    {
        id: 2,
        name: 'Banana',
        preparation_time: '0'
    },
    {
        id: 3,
        name: 'Kiwi',
        preparation_time: '5'
    }

]

const customizations = [
    {
        id: 1,
        name: 'Granola',
        price: '0.00',
        preparation_time: '0'
    },
    {
        id: 2,
        name: 'Leite Ninho',
        price: '3.00',
        preparation_time: '0'
    },
    {
        id: 3,
        name: 'Paçoca',
        price: '3.00',
        preparation_time: '3'
    },

]

module.exports = {

    sizes,
    flavors,
    customizations

}