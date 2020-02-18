// function totalDigitRekursif(angka) {
//     // you can only write your code here!
//   }

//   // TEST CASES
//   console.log(totalDigitRekursif(512)); // 8
//   console.log(totalDigitRekursif(1542)); // 12
//   console.log(totalDigitRekursif(5)); // 5
//   console.log(totalDigitRekursif(21)); // 3
//   console.log(totalDigitRekursif(11111)); // 5


var str = 'Sergei Dragunov'
var a = str.split('')
var res = ''

for (var i = 0; i < a.length; i++) {
	if (a[i] === ' ') {
		a.splice(i, 1)
		res = a
	}
}

console.log(res.join(''))