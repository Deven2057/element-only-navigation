const changeBg =()=>{
  document.body.firstElementChild.style.background="gray"
  document.body.firstElementChild.style.color="white"
}
 changeBg()
let a=document.body.firstElementChild

const changeContainer =()=>{
  a.nextElementSibling.style.background="red"
  a.nextElementSibling.style.color="white"
}
changeContainer()

let b=document.body
console.log("first child of body is:", b.firstChild)
console.log("first element child of body is:", b.firstElementChild)


