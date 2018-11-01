function panggilRegExp() {
  let str = "abcdefghijklmnopqrstuvwxyz";

  return str.search(/o/)
}



function flagRegExp() {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let str2 = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz"

  console.log("/////////Flag i for Non Case-Sensitive//////////")
  console.log(str.search(/K/))
  console.log(str.search(/K/i)) //use flag i for Non-case-Sensitive
  console.log(str.search(/k/i)) //use flag i for Non-case-Sensitive
  console.log("/////////Flag g for search all data string//////////")
  console.log(str2.match(/c/g)) //use flag g for search all data string
  console.log(str2.match(/c/g)) //use flag g for search all data string


}

console.log(panggilRegExp())
console.log('--------------------------------')
flagRegExp()
