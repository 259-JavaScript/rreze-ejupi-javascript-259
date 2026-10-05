

let years = [1990, 1967, 2000, 2010, 2011, 2013, 2014];

function calcAge(birthYear){
    return 2026 - birthYear;
}

let age1 = calcAge(years[5])
let age2 = calcAge(years[2])

console.log(age1)
console.log(age2)

// Keni një array cmimet që përmban çmimet e produkteve: 1200, 450, 980
// Të krijohet një variabël tarifaETransportit me vlerë 150
// Le të krijohet një funksion cmimiPerfundimtar i cili pranon një parametër 
// brenda tij që mund të emërtohet cmimi
// Të krijohet logjika që funksioni të kthejë ("return") vlerën:
// "cmimi + tarifaETransportit"
// Pastaj të krijohen 3 variabla: totali1, totali2, totali3
// Brenda këtyre variablave të thirret funksioni cmimiPerfundimtar me parametër 
// duke u bazuar në elementet e array