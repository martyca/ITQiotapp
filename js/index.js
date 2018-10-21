function updateSlider(slideAmount) {
    var name = document.getElementById("name").value;
    if(!name){name = 'anonymous'}
    var voteResult = document.getElementById("result");
    voteResult.innerHTML = slideAmount
    console.log(slideAmount, name);
}
