function panggilBilanganLipatLima() {
  var bilanganLipatLima = []
  for (var i; i < 10; i++){
    if (i % 2 === 0 ){
      bilanganLipatLima.push(i);
    }
  }
  return bilanganLipatLima
}

console.log(panggilBilanganLipatLima())
