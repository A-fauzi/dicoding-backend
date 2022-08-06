const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort()
console.log(months)

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

/*
    Contoh pengurutan di atas didasarkan pada pengurutan bentuk tipe data string.
    Oleh karena itu, ketika kita ingin mengurutkan sesuai dengan kriteria yang kita inginkan (berdasarkan tanggal ataupun berdasarkan nilai siswa) maka kita perlu membuat compare function tersendiri.
 */
const compareNumber = (a, b) => {
    return a - b
}
const sorting = array1.sort(compareNumber)
console.log(sorting)