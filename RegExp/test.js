function Regexp() {
 let data = "Belajar Satu Tahun Bersama Niomic";

 console.log(/Satu/.test(data))
}





function panggilRegexp(value){
  var hasil = "";

  if(/Belajar html/.test(value)===true){
    console.log(value);
  } else if (/Belajar Javascript/.test(value)===true){
    console.log(value);
  } else if(/Belajar css/.test(value)===true){
    console.log(value);
  } else if(/Belajar php/.test(value)===true){
    console.log(value);
  }




}

panggilRegexp("Belajar html");
panggilRegexp("Belajar Javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");
