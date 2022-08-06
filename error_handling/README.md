# Error Handling
## Try and Catch
> Untuk menangani eror pada JavaScript, gunakan try dan catch.

> catch memiliki satu parameter bernama error (nama variabel bisa diubah). Variabel error tersebut merupakan sebuah object yang menyimpan detail informasi dari error yang terjadi.
Object error memiliki beberapa properti utama di dalamnya, yaitu:
name : Nama error yang terjadi.
message : Pesan tentang detail error.
stack : Informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk debugging karena terdapat informasi baris mana yang menyebabkan error.

## try-catch-finally
> Selain try dan catch, ada satu blok lagi yang ada dalam mekanisme error handling pada JavaScript, yaitu finally. Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
