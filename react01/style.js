function colorChange(index){
    let card = document.getElementsByClassName('card')[index];
    card.style.backgroundColor = "#eee";
}
const new_div = document.createElement('div');
new_div.style.backgroundColor = "#eee";
new_div.style.width = "100px";
new_div.style.height = "100px";
document.body.appendChild(new_div);