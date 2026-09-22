
function pershendet(){
    console.log("Pershendetje!!!")
}


pershendet();

pershendet();

//Variabla globale

let vlera = 5;


function printVlera(){
    console.log(vlera)
}

printVlera()


function hello(){
    let mesazhi = "ky eshte nje mesazh";
    console.log(mesazhi)
}

hello()





function mbledhja(a, b){
    let rezultati = a + b;
    return rezultati;
}

//Arrow Function

const mbledhArrow = (a, b) => { a + b };


mbledhja(3,5);

// Krijoni një funksion i cili merr 3 parametra (numra) dhe i shumëzon 
// ata ndërmjet vete për të arritur prodhimin final.


//Krijoni një funksion i cili merr 3 parametra (emrin, mbiemrin, moshën) 
// dhe printon fjalinë: "Unë jam Filan Fisteku dhe jam X vjeçarë."

let Filan = "Filan";

function identiteti(emri, mbiemri, mosha){
    console.log("Une jam" + emri + mbiemri + "dhe jam" + mosha + "vjeçarë.")
}

identiteti("Filan", "Fisteku",20);





function mbledhjaR(a,b){
    let rezultatiR = a + b;
    return rezultatiR;
}

let shuma = mbledhjaR(5,8);

console.log(shuma);


function prodhimi(a, b, c){
    let rezultati = a* b* c;
    console.log(rezultati);
}

