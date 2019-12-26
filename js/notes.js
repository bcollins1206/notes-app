document.querySelector('#submit').addEventListener('click',(event)=>{
  event.preventDefault()
board()

})
document.querySelector('#clearN').addEventListener('click',(event)=>{
  event.preventDefault()
  clearNote()
})
document.querySelector('#clearM').addEventListener('click',(event)=>{
  event.preventDefault()
  clearMsg()
})
const board = ()=>{
  let alert = document.querySelector('#msg').value
  document.querySelector('#msg').value = ''
  document.querySelector('#display').innerHTML = ''
  if(alert == '' || alert == null){
    document.querySelector('#display').innerHTML = "Please Enter Message"
    return false
  }
  let button = document.createElement('button')
  button.setAttribute('class',"list-group-item list-group-item-action bg-dark text-light note text-truncate")
  button.addEventListener('click',()=>{
    document.querySelector('#letter').innerHTML = alert
  })
  button.innerHTML = alert
  document.querySelector('#list').appendChild(button)


}
const clearNote = ()=>{
  document.querySelector('#list').innerHTML = ''
}
const clearMsg = ()=>{
  document.querySelector('#letter').innerHTML = ''
  document.querySelector('#display').innerHTML = ''
}
