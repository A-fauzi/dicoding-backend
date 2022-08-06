/*
    Higher-Order Function menjadi bagian konsep pada paradigma FP.
    Higher-Order Function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.
 */

const hello = () => {
    console.log('Hello!')
}
const say = (someFunction) => {
    someFunction()
}
const sayHello = () => {
    return () => {
        console.log('Hello!')
    }
}

hello()
say(hello)
sayHello()()

// ===================== Contoh pembuatan fungsi map() sendiri, menggunakan higher order function ===================
const names = ['Harry', 'Ron', 'Jeff', 'Thomas']
const arrayMap = (arr, action) =>{
    const loopTrough = (arr, action, newArray = [], index = 0) => {
        const item = arr[index]
        if (!item) return newArray
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1)
    }
    return loopTrough(arr, action)
}
const newNames = arrayMap(names, (name) => `${name}!`)
console.log({
    names,
    newNames
})


