let json = '{"age" : 28}'

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError('Name is required!')
    }
    console.log(user.name)
    console.log(user.age)
}catch (e) {
    console.log(`JSON Error : ${e.message}`)
}
/*
Ketika properti user.name tidak memiliki nilai, maka program akan menghasilkan SyntaxError.
Di dalamnya kita bisa menentukan pesan yang dapat membantu menjelaskan apa eror yang terjadi.
 */
//====================================================================================================================//

let json2 = '{"name" : "Akhmad", "age" : 25}'

try {
    let user = JSON.parse(json2)

    if (!user.name) {
        throw new SyntaxError('Name is required!')
    }
    errorCode

    console.log(user.name)
    console.log(user.age)
}catch (e) {
    console.log(`JSON Error: ${e.message}`)
}
/*
Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”.
 */
// =================================================================================================================//

//  menampilkan pesan eror sesuai eror yang muncul
try {
    let user = JSON.parse(json2)

    if (!user.name) {
        throw new SyntaxError('Name is required!')
    }
    errorCode

    console.log(user.name)
    console.log(user.age)
}catch (e) {
    if (e instanceof SyntaxError) {
        console.log(`JSON Error: ${e.message}`)
    } else if (e instanceof ReferenceError) {
        console.log(e.message)
    } else {
        console.log(e.stack)
    }
}
/*
Dengan operator instanceOf,
kita bisa mendapatkan tipe dari eror yang terjadi.
Dari sana kita bisa membuat percabangan bagaimana cara menangani erornya.
 */

