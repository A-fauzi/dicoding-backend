// Kelas ValidationError memiliki parameter constructor berupa message yang berisi pesan detail terkait erornya.
class CustomError extends Error{
    constructor(message) {
        super(message)
        this.name = "Validation Error!"
    }
}

let json = '{"age" : 30}'

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new CustomError('name is required!')
    }
    if (!user.age) {
        throw new CustomError('Age is required!')
    }
    console.log(user.name)
    console.log(user.age)
}catch (e) {
        if (e instanceof SyntaxError) {
            console.log(`JSON Syntax Error: ${e.message}`)
        } else if (e instanceof CustomError) {
            console.log(`Invalid data: ${e.message}`)
        } else if (e instanceof ReferenceError) {
            console.log(e.message)
        } else {
            console.log(e.stack)
        }
}
