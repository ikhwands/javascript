function panggilShift() {
  var kota = ["jakarta", "bandung", "bekasi", "makasar", "surabaya"];
  var kecamatan = ['sukaluyu','ancol','buahbatu','dago','antapani'];

  console.log(kota);
  console.log(kecamatan);

  console.log('================================')
  // kota = kota.shift();

  var kota2 = kota.shift()
  console.log(kota2)

  console.log('###########################')

  // var kecamatan = kecamatan.shift();
  var kecamatan2 = kecamatan.shift();
  kecamatan3 = kecamatan.shift();
  kecamatan4 = kecamatan.shift();
  kecamatan5 = kecamatan.shift();
  var kecamatan6 = kecamatan.shift();


  return kecamatan
}

console.log(panggilShift())
