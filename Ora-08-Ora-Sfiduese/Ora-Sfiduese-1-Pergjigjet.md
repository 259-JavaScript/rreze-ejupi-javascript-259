# Ora Sfiduese 1 — Përgjigjet (vetëm për trajnerin)

Ky file është gitignored — jo për studentët. Përgjigje shembull + shënime vlerësimi për Pyetjet.md.

Mbulon: `console.log`, variablat, tipet e të dhënave, operatorët (brenda `if/else`), `if/else`, `switch`,
funksionet (parametra, `return`). Pyetjet 1-3 testojnë çdo koncept veç e veç; 4-5 i kombinojnë; 6 është
teori.

## 1. (shembull zgjidhjeje)

```javascript
let temperatura = 25;

if (temperatura > 20) {
  console.log("Ngrohtë");
} else {
  console.log("Ftohtë");
}
```

**Çfarë të kontrolloni:** variabla `temperatura` e deklaruar; `if/else` (jo `switch`, jo funksion — qëllimi
ishte të praktikohet vetëm `if/else`); operatori `>` përdoret saktë.

## 2. (shembull zgjidhjeje)

```javascript
let ngjyra = "e kuqe";

switch (ngjyra) {
  case "e kuqe":
    console.log("Ndalo");
    break;
  case "e verdhë":
    console.log("Përgatitu");
    break;
  case "e gjelbër":
    console.log("Shko");
    break;
  default:
    console.log("Ngjyrë e panjohur");
}
```

**Çfarë të kontrolloni:** variabla `ngjyra` (string); `switch` (jo `if/else`, jo funksion); `break` i
pranishëm te çdo `case`; `default` i pranishëm.

## 3. (shembull zgjidhjeje)

```javascript
function mblidhDyNumra(a, b) {
  return a + b;
}

console.log(mblidhDyNumra(5, 3)); // 8
```

**Çfarë të kontrolloni:** funksioni pranon dy parametra dhe përdor `return` (jo `console.log` brenda
funksionit); nuk ka `if/else` apo `switch` brenda — qëllimi ishte vetëm funksioni.

## 4. (shembull zgjidhjeje)

```javascript
let mosha = 20;
let emri = "Rreze";

function kontrolloMoshen(mosha) {
  if (mosha >= 18) {
    return "I rritur";
  } else {
    return "I mitur";
  }
}

console.log("Përshëndetje, " + emri + "!");
console.log(kontrolloMoshen(mosha)); // "I rritur"
```

**Çfarë të kontrolloni:** dy variabla (`mosha` numër, `emri` string); funksioni përdor `if/else` (jo
ternar) dhe `return`; operatori `>=` përdoret saktë; të dyja `console.log`-et janë të pranishme.

## 5. (shembull zgjidhjeje)

```javascript
function notaMeFjale(nota) {
  switch (nota) {
    case 5:
      return "Shkëlqyeshëm";
    case 4:
      return "Shumë mirë";
    case 3:
      return "Mirë";
    default:
      return "Duhet përmirësim";
  }
}

console.log(notaMeFjale(5)); // "Shkëlqyeshëm"
console.log(notaMeFjale(4)); // "Shumë mirë"
console.log(notaMeFjale(2)); // "Duhet përmirësim"
```

**Çfarë të kontrolloni:** funksioni pranon `nota` dhe përdor `return` brenda çdo `case`; `default` mbulon
çdo vlerë tjetër; funksioni thirret me disa vlera dhe rezultatet printohen. Pranohet edhe `if/else` në
vend të `switch` nëse logjika është korrekte, por qëllimi ishte praktikimi i `switch`.

## 6. (çfarë të kërkoni në përgjigje)

Përgjigje e mirë përmend të paktën 3 nga këto vlera falsy: `0`, `""` (string bosh), `null`, `undefined`,
`NaN`, `false`. Dhe shpjegon diçka si: "sepse brenda një `if (vlera)`, nëse vlera është falsy, kodi brenda
`if`-it nuk ekzekutohet — trajtohet sikur kushti të ishte `false`". Nuk pritet kod — mjafton shpjegimi me
fjalë.
