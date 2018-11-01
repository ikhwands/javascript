function panggilFilter(){
  var arr = [1,2,3,4,5]
  //var arrGanjil =[]

/*Menggunakan for
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      arrGanjil.push(arr[i])
    }
  }*/

  //Menggunakan filter
  var arrGanjil = arr.filter(function(el){
    return el % 2 !== 0
  })
    
  console.log(arrGanjil)
}

panggilFilter()
