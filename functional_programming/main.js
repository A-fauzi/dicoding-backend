const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

// ====================== Contoh penulisan gaya imperatif =================================
const newNamesWithExmark = []

for (let i = 0; i < names.length; i++) {
    newNamesWithExmark.push(`${names[i]}!`)
}
console.log(newNamesWithExmark)

// ====================== Contoh penulisan gaya deklaratif =================================
const newNamesWithExmarkDeclarative = names.map((name) => `${name}!`)
console.log(newNamesWithExmarkDeclarative)

/*
    4 konsep besar yang ada di Functional Programming.
    Yakni Pure Function, Immutability, Recursive, dan High-Order Function.
 */