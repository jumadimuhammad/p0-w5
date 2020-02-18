function changeVocals(str) {
  //code di sini

  var res = ''

  var kamus = 'abcdefghijklmnopqrstuvwxyz'

  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      for (var j = 0; j < kamus.length; j++) {
        if (str[i] === kamus[j]) {
          res += kamus[j + 1].toUpperCase()
        }
      }
    } else {
      res += str[i]
    }
  }

}

function reverseWord(str) {
  //code di sini
  var res = ''

  for (var k = str.length - 1; k >= 0; k--) {
    res += str[k]
  }
  return res
}

function setLowerUpperCase(str) {
  //code di sini

  var res = ''

  for (var l = 0; l < str.length; l++) {
    if (str[l] === str[l].toUpperCase()) {
      res += str[l].toLowerCase()
    } else {
      res += str[l]
    }
  }
  return res
}

function removeSpaces(str) {
  //code di sini
  var a = str.split('')
  var res = ''

  for (var i = 0; i < a.length; i++) {
    if (a[i] === ' ') {
      a.splice(i, 1)
      res = a
    }
  }

  return res.join('')
}

function passwordGenerator(name) {
  //code di sini

  var up = changeVocals(name)
  var re = reverseWord(up)
  var lo = setLowerUpperCase(re)
  var mo = removeSpaces(lo)

  return mo
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'