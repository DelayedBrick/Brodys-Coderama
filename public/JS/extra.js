
function remove1(spinner){
    document.querySelector(".spinner-" + spinner).style.visibility = "hidden";
    document.querySelector(".spinner-" + spinner).style.position = "absolute";
}
function remove2(spinner){
    document.querySelector(".spinner-" + spinner).style.visibility = "hidden";
    document.querySelector(".spinner-" + spinner).style.position = "absolute";
}
function remove3(spinner){
    document.querySelector(".spinner-" + spinner).style.visibility = "hidden";
    document.querySelector(".spinner-" + spinner).style.position = "absolute";
}
function remove4(spinner){
    document.querySelector(".spinner-" + spinner).style.visibility = "hidden";
    document.querySelector(".spinner-" + spinner).style.position = "absolute";
}
function remove5(spinner){
    document.querySelector(".spinner-" + spinner).style.visibility = "hidden";
    document.querySelector(".spinner-" + spinner).style.position = "absolute";
}
var num = "";
setInterval(function() {
    num = num + 1;
    document.querySelector(".progress-bar").style.width = num + "%";

}, 1000);
document.querySelector(".middle").type = "password";