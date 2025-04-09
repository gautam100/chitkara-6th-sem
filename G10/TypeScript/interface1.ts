interface prodInterface{
    name: string,
    price: number,
    description: string,
    isAvailable: boolean
}

let prodData:prodInterface[]= [
    {
        name: "I phone 15",
        price: 75000,
        description: "This is fake description ...",
        isAvailable: true
    },
    {
        name: "Samsung M-52",
        price: 25_000,
        description: "This is fake description ...",
        isAvailable: true
    },
    {
        name: "Xiomi-ABC",
        price: 18_000,
        description: "This is fake description ...",
        isAvailable: false
    }
];