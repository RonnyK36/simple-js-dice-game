function getRandomImage() {
    var randomNumber = Math.ceil(Math.random() * 6);
    var randomImage = "images/dice" + randomNumber + ".png";
    var res = [randomNumber, randomImage]
    return res;
}


function setImage(index) {

    var image1 = document.querySelectorAll("img")[index];
    var res = getRandomImage();
    var image = res[1];
    image1.setAttribute('src', image);

    return res[0];

}

result1 = setImage(0);
result2 = setImage(1);



if (result1 > result2) {
    document.querySelector("h1").innerHTML = "⛳ Player 1 wins"

} else if (result2 > result1) {
    document.querySelector("h1").innerHTML = "Player 2 wins ⛳"

} else {
    document.querySelector("h1").innerHTML = "DRAW"

}