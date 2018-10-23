function updateSlider(slideAmount) {
  var xhttp = new XMLHttpRequest()
  var name = document.getElementById("name").value;
  if(!name){name = 'anonymous'}
  var voteResult = document.getElementById("result");
  var data = {
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
