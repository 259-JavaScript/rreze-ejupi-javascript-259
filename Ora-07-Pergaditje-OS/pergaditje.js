// Detyra 1:
// Deklaroni një variabël buxheti (numër), me vlerë sipas dëshirës. 
// Duke përdorur if/else, printoni (console.log) "Brenda buxhetit" nëse buxheti > 100,
//  përndryshe "Jashtë buxhetit".



let buxheti = 500;

if(buxheti>100){
    console.log("Brenda buxhetit")
}else{
    console.log("Jashte buxhetit")
}













// Detyra 2:
// Deklaroni një variabël nota (numër), me vlerë sipas dëshirës. 
// Duke përdorur operatorin ternar, deklaroni një variabël rezultati që merr vlerën "Kaluar" nëse nota >= 5, 
// përndryshe "Nuk ka kaluar", dhe printojeni (console.log) rezultati-n.

let nota = 5;

let rezultati = nota>=5 ? "Kaluar" : "Nuk ka kaluar";

console.log(rezultati)




// Detyra 3:
// Deklaroni një variabël dita (string, p.sh. "e hënë"). 
// Duke përdorur switch, printoni një mesazh sipas ditës:


// "hënë" → "Dita eshte e hene"
// "premte" → "Dita eshte e premte"
// "shtunë" → "Dita eshte e shtune"
// çdo gjë tjetër (default) → "Nuk eshte dite"


let dita = "e hene";

switch(dita){
    case "e hene":
        console.log("Dita eshte e hene");
        break;
    case "e premte":
        console.log("Dita eshte e premte");
        break;
    default:
        console.log("Nuk eshte e hene ose e premte")
}





// Detyra 4:
// Shkruani një funksion shumezoDyNumra, që pranon dy parametra a dhe b,
// dhe kthen (return) prodhimin (shumëzimin) e tyre. 
// Thirreni funksionin me disa vlera dhe printoni rezultatin.

function shumezoDyNumra(a , b){
    let rezultati = a * b;
    return rezultati;
}

console.log(shumezoDyNumra(5,9));


// Detyra 5:
// Deklaroni nje variabel: nota (numër) me vlere sipas dëshirës. 
// Shkruani një funksion kontrolloRezultatin, që pranon noten si parametër dhe, duke përdorur if/else, 
// kthen (return) "Kaluar" nëse nota >= 5, përndryshe "Nuk ka kaluar". 
// Thirreni funksionin me disa vlera dhe printoni rezultatin.



function kontrolloRezultatin(nota){
    if(nota>=5){
        return "kaluar"
    }else{
        return "nuk ka kaluar"
    }
}

console.log(kontrolloRezultatin(3))




// Detyra 6:
//Shkruani një funksion kontrolloSemaforin, që pranon një parametër ngjyra dhe, duke përdorur switch, 
// kthen mesazhin përkatës:

// "e kuqe" → "Ndalo"
// "e verdhë" → "Përgatitu"
// "e gjelbër" → "Shko"
// çdo gjë tjetër (default) → "Ngjyrë e panjohur"

// Thirreni funksionin me disa vlera të ndryshme dhe printoni rezultatet në console.

function kontrolloSemaforin(ngjyra){
    switch(ngjyra){
        case "e kuqe":
            return "Ndalo"
        case "e verdhe":
            return "pergaditu"
        case "e gjelbert":
            return "shko";
        default:
            return "seshte ngjyre e semaforit";
        }
}

console.log(kontrolloSemaforin("e portokallt"));

