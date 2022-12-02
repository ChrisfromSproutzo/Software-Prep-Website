const h2 = document.createElement("h2")
h2.textContent="Intro"
document.querySelector("body").appendChild(h2);



function textAppears(){
    var text = document.getElementById("secretText")
    if (text.style.display ==="none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";

}
}

function MarfredAppears(){
    var secret = document.getElementById("secretImage")
    if (secret.style.display ==="none") {
        secret.style.display = "block";
    } else {
        secret.style.display = "none";
}
    var notSecret = document.getElementById("defaultImage")
if (notSecret.style.display ==="none") {
    notSecret.style.display = "block";
} else {
    notSecret.style.display = "none";

}
}



//function toggleText() {
//    var text = document.getElementById("demo");
//    if (text.style.display === "none") {
//        text.style.display = "block";
//    } else {
//        text.style.display = "none";
//    }
//    }