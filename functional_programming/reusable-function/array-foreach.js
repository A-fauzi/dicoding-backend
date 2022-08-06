const names = ['Harry', 'Ron', 'Jeff', 'Thomas']

// ====================== Cara Imperatif ====================================
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}!`)
}

// ====================== Cara Deklaratif ====================================
names.forEach(name => {
    console.log(`Hello ${name}!`)
})

/*
    ketika menggunakan forEach,
    kita tidak bisa menggunakan operator break atau continue pada proses perulangan (Anda bisa melakukannya pada perulangan for).
    Hal ini juga berlaku ketika pada fungsi map dan filter.
 */

for(let i = 0; i < names.length; i++) {
    if(names[i] === 'Jeff') continue; // Bisa!

    console.log(`Hello, ${names[i]}!`);
}

names.forEach((name) => {
    if(name === 'Jeff') continue; // Tidak Bisa!
    console.log(`Hello, ${name}`);
});