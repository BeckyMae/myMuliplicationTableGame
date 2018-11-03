var userInput = 6
var tdloop = [];


var td = document.querySelectorAll("td");
function gameBoard(){
for (var i = 5; i < td.length; i++) {
  // td[i].innerHTML = (i);
  if (i%5 ===1 || i%5===2 || i%5===3 || i%5===4){
      td[i].classList.add("hidden");
      td[i].addEventListener("click", function(){
        this.classList.remove("hidden");});}};}

gameBoard();
