interface prodInterface{
    name: string,
    price: number,
    isAvailable: boolean,
    description: string
}

let prodData:prodInterface[] = [
    {
        name: "IPhone-15",
        price: 75_000,
        isAvailable: true,
        description: "Some fake description..."
    },
    {
        name: "Samsung M-52",
        price: 25_000,
        isAvailable: true,
        description: "Some fake description..."
    },
    {
        name: "Xiomi-XYZ",
        price: 22_000,
        isAvailable: true,
        description: "Some fake description..."
    }
]

/*

npx create-react-app hello-world --template typescript

*/