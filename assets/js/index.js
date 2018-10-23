function generateRandomString() {
  var text = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var length = 32
  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  return text
}
function updateSlider(slideAmount) {
  var xhttp = new XMLHttpRequest()
  var name = document.getElementById("name").value;
  if(!name){name = 'anonymous'}
  var voteResult = document.getElementById("result");
  var data = {
    "pkey": document.cookie,
    "name": name,
    "score": slideAmount
  }
  console.log(JSON.stringify(data))
  xhttp.open(
    "POST",
    "api"
  )
  xhttp.setRequestHeader(
    "Content-type",
    "application/json;charset=UTF-8"
  )
  xhttp.send(JSON.stringify(data))
  voteResult.innerHTML = slideAmount
}
if(!document.cookie){
  document.cookie = generateRandomString()
}
