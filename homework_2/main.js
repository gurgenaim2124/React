const users = [
    { name: 'Nino', age: 17 },
    { name: 'Saba', age: 22 },
    { name: 'Tako', age: 19 }
];

const adults = users.filter(n => n.age > 18)
console.log(adults)

const nino = users.map(name => { if (name.name === 'Nino') {
    return 'Nino is adult'
}
})
console.log(nino)

const ages = users.map(age => age.age)
const average = ages.reduce((acc, val)  =>  {
    return Math.round((acc + val) / users.length)
})

console.log(average, ages)
