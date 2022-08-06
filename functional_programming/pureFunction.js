// let PI = 3.14 | declaration variable tidak digunakan
// nilai PI di pindah langsung dalam return agar tidak sengaja terubah
/*
    Selain dilarang untuk bergantung terhadap nilai luar,
    pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja.
 */

const hitungLuasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari)
}
console.log(hitungLuasLingkaran(4))
console.log(hitungLuasLingkaran(4))
console.log(hitungLuasLingkaran(8))
console.log(hitungLuasLingkaran(8))


// other example pure function with destructuring
const createPersonWithAge = (age, person) => {
    return {...person, age}
}
const person = {
    name: 'Bobo'
}
const newPerson = createPersonWithAge(18, person)

console.log({
    person,
    newPerson
})