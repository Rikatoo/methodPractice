// Да се създаде функция, която да създава елемент с дадени деца. 
function createElementWithKids() {
    var arrayArgs = Array.prototype.slice.call(arguments);
    var parent = document.createElement(arrayArgs[0]);
    document.body.appendChild(parent);
    for (var index = 1; index < arrayArgs.length; index++) {
        parent.appendChild(document.createElement(arrayArgs[index]));
    }
}

// Да се създаде функция, която изкарва стойностите на всички инпут-и в нови параграфи.
function createParagraphs() {  // показва го и изчезва
    var newEl = document.createElement("P")
    document.body.appendChild(newEl);
    newEl.textContent = document.getElementById("text").value;
}

// Да се създаде функция, която по даден масив с елементи ги създава и ги пъха в див. Да се модифицира да работи с многомерни масиви.
var array = ['div','p','img',['p','img', 'p']];


// Да се създаде конструткор за човек - име, години и снимка. Да се добави метод, който да съдава див с елементи с данните за този обект. Да се тества.
function Person(name, age, pic) {
    this.name = name;
    this.age = age;
    this.picture = pic;
}

Person.prototype.create = function () {
    var div = document.createElement("DIV");
    var divInDiv = document.createElement("DIV");
    var nameP = document.createElement("P");
    var ageP = document.createElement("P");
    var pic = document.createElement("IMG");
    document.body.appendChild(div);
    div.appendChild(divInDiv);
    divInDiv.appendChild(nameP);
    divInDiv.appendChild(ageP);
    div.appendChild(pic);
    div.style.width = "350px";
    div.style.height = "250px";
    div.style.backgroundColor = "khaki";
    divInDiv.style.width = "100px";
    divInDiv.style.height = "250px";
    divInDiv.style.cssFloat = "left";
    nameP.textContent = 'Name: ' + this.name;
    ageP.textContent = 'Age: ' + this.age;
    pic.style.cssFloat = "left";
    pic.style.width = "250px";
    pic.style.height = "250px";
    pic.src = this.picture;
}

// Да се направи количка от продукти - при добавяне, махане да се рефрешва и на екрана.
// not finished
var cart = {
    item : []
}

function addToCart (a) {
    var c = document.createElement("div");
    cart.item.push(a);
    var a = document.createElement("p");
    c.appendChild(a);
    a.style.cssFloat = 'left';
    a.textContent = a.name + ' : ' + a.price + ' лв.';
    var b = document.createElement('p');
    b.style.cssFloat = 'left';
    c.appendChild(b);
    b.textContent = 'X';
    b.style.color = 'red';
    b.onclick = cartDiv.remove("div");
}

var item = {
    name : 'Шопска салата',
    price : 5,
}
var cartDiv = document.getElementById("cart");
var itemDisplay = document.createElement("p");
cartDiv.appendChild(itemDisplay);
itemDisplay.textContent = item.name + ' : ' + item.price + ' лв.';
itemDisplay.style.cssFloat = 'left';
var button = document.createElement("button");
cartDiv.appendChild(button);
button.style.cssFloat = 'left';
button.onclick = addToCart(item);
