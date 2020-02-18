/**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.
 
RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()
 
*/

//Tulislah Pseudocode disini

// SET dua 
// SET tiga
// SET hasil = false

// REPEAT UNTIL arr1.length = 0
// IF (arr1 == arr2) THEN
//     + arr2 ke dalam variabel dua

// REPEAT UNTIL dua.length = 0 THEN
// IF (tiga != dua)
//     + dua ke dalam tiga
// ELSE THEN
//     tiga = 2

// IF (arr1.length == tiga.length) THEN
//     hasil = true

// RETURN hasil

function subset(arr1, arr2) {
    //tulis function disini

    var dua = []
    var tiga = []

    var hasil = false

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                dua.push(arr2[j])
            }
        }
    }

    for (var k = 0; k < dua.length; k++) {

        var flag = false

        for (var n = 0; n < tiga.length; n++) {
            if (dua[k] === tiga[n]) {
                flag = true
                tiga[n] = dua[k]
            }
        }

        if (!flag) {
            tiga.push(dua[k])
        }

    }

    if (arr1.length === tiga.length) {
        hasil = true
    }

    return hasil

}


console.log(subset([3, 9, 5], [1, 3, 9, 5, 8, 44])); //true
console.log(subset([1, 3], [1, 3, 5, 7, 8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false