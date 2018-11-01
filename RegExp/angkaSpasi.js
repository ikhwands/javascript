function panggilRegexp(value) {
  //var ambilData = value.match(/\w/g); //flag \w/g untuk mengambil semua data kecuali spasi
  var ambilData = value.match(/\d/g); //flag \d/g untuk mengambil data angka saja
  console.log(ambilData)
}
panggilRegexp("Bulan ke 1 sd ke 4");
