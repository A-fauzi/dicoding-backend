/*
    Sama seperti fungsi array map(),
    alih-alih mengubah nilai objek secara langsung,
    terapkan perubahan tersebut pada nilai return dalam objek baru untuk merubah objek Immutable.
 */

const user = {
    firstname : 'Harry',
    lastname : 'Proter' // typo
}
const createUserWithNewLastname = (newLastName, user) => {
    return {...user, lastname: newLastName}
}
const newUserLastname = createUserWithNewLastname('Potter', user)
console.log(newUserLastname)