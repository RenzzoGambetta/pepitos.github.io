var b = document.getElementById("Button");
var r = document.getElementById("result");
var t = document.getElementById("total");
b.addEventListener("click", enter, contar);
var money = 0;

class Bill {
    constructor (v, a,) {
        this.image = new Image();
        this.value = v;
        this.amount = a
        this.image.src = imageM[this.value];
    }
    display(){
        r.innerHTML += "<img src=" + this.image.src + " />";
        give = [];
    }
}

var imageM = [];
 imageM[5] = "fifth_project/5.jpg";
 imageM[10] = "fifth_project/10.jpg";
 imageM[20] = "fifth_project/20.jpg";
 imageM[50] = "fifth_project/50.jpg";
 imageM[100] = "fifth_project/100.jpg";
var cash = []
var give = []
cash.push( new Bill(100, 5));
cash.push( new Bill(50, 5));
cash.push( new Bill(20, 5));
cash.push( new Bill(10, 5));
cash.push( new Bill(5, 5));
var div = 0;
var paper = 0;

function enter() {
    contar();
    var m = document.getElementById("Money");
    money = m.value;
    for (d of cash) {
    if (totalM >= money > 0) {
        div = Math.floor(money / d.value);
        if (div > d.amount) {
            paper = d.amount;
        }
        else {
            paper = div;
        }
        for (i = 0; i < paper; i++) {
            give.push( new Bill(d.value, 1));
        }
        money = money - (d.value * paper);
        d.amount = d.amount - paper;
    }
    }
    if (money == 0) {
        r.innerHTML += "<p> your withdrawal is: <br />";
            for (g of give) {
                if (g.amount > 0) {
                    g.display();
                }
            }
        r.innerHTML += "</p>";
    }
    else if (money > 0) {
        alert("Error: I can't give you this amount");
        for (d of cash) {
            for (g of give) {
                if (d.value == g.value) {
                    d.amount = d.amount + g.amount;
                } 
            }
        }
        give = [];
    }
    console.log(cash);
    totalM = 0;
    contar();
    if (totalM == 0) {
        var e = document.getElementById("error");
        e.innerHTML = " <strong>Error: No balance (traduccion: el cajero esta misio) <strong/>";
    }
    totalM = 0;
}

var totalM = 0;
function contar() {
    for (d of cash) {
        if (d.amount > 0) {
            totalM = totalM + (d.value * d.amount)
        }
    }
    console.log(totalM);
    t.innerHTML = "<strong> Balance: </strong>" + totalM;
}
contar();
t.innerHTML = "<strong> Balance: </strong>" + totalM;
