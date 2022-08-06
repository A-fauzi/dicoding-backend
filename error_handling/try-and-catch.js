try {
    console.log('Awal Blok try')
    console.log('Akhir Blok try')
}catch (e) {
    // Jika tidak terjadi error maka kode ini akan di abaikan
    console.log(`this error is ${e}`)
}
/*
Kode di dalam blok try di atas tidak akan menghasilkan eror,
sehingga kode di dalam blok catch akan diabaikan dan tidak dijalankan.
Berikut ini adalah contoh kode yang menghasilkan eror:
 */
// ===================================================================================================================//

try {
    console.log('awal blok try!')
    errorCode
    console.log('akhir blok try!')
}catch (e) {
    console.log(`this error is | ${e}`)
}
/*
Baris kode (2) akan menghasilkan eror. Eksekusi kode di dalam blok try akan dihentikan,
sehingga baris kode (3) tidak akan tereksekusi.
Kemudian kode akan dilanjutkan ke baris (4) atau blok catch.
 */
// ==================================================================================================================//
try {
    console.log('Awal blok kode!')
    errr
    console.log('Akhir blok kode!')
}catch (e) {
    // Property object in error
    console.log(e.name)
    console.log(e.message)
    console.log(e.stack)
}
// ==================================================================================================================//
try {
    console.log("Awal blok try");
    ee
    console.log("Akhir blok try");
} catch (error) {
    console.log(error);
} finally {
    console.log("Akan tetap dieksekusi");
}