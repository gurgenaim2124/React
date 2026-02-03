// დავალება 1 : პროდუქტები

const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Mouse', price: 25, inStock: false },
    { name: 'Keyboard', price: 75, inStock: true }
];

const product = products.filter(product => product.inStock = true)
console.log(product)

const productPrices = products.map(price => price.price)
console.log(productPrices)

const total = productPrices.reduce((acc, val) => {
    return acc + val;
}, 0 )
console.log(total)