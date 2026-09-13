let buxheti = 500;

//nese buxheti eshte mbi 800, "blej llaptopin", ndryshe "buxhet i pamjaftueshem"

if ( buxheti>800 ){
    console.log ("blej llaptopin")
}
else {
    console.log ("buxheti eshte i pamjaftueshem")
}

//operatori ternar

let age = 17;

if(age>=18){
    console.log("I rritur")
}else{
    console.log("jo i rritur")
}

let statusi = age >= 18 ? "I rritur" : "Jo i rritur";


let temperatura = 15;

if(temperatura>20){
    console.log("Ngrohte");
}else{
    console.log("Ftohte");
}

//SWITCH

let dita = "e Hene";

switch(dita){
    case "e Hene":
        console.log("Fillimi i javes");
        break;
    case "e Marte":
        console.log("e marte");
        break;
    case "e Merkure":
        console.log("e merkure");
        break;
    case "e enjte":
        console.log("e enjte");
        break;
    case "e Premte":
        console.log("e premte");
        break;
    case "e Shtune":
        console.log("e shtune");
        break;
    case "e Diel":
        console.log("e diel");
        break;
    default:
        console.log("Nuk eshte dite");
}

let shkronja = "h";
let isZanore;

switch(shkronjen){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
        isZanore = true;
        console.log(isZanore);
        break;
    default:
        isZanore = false;
        console.log(isZanore);
}




