# Aktiviteti 9 — Arrays
## Udhëzues

---

Deri tani, çdo herë që kishim një vlerë për të ruajtur, e vendosnim në një variabël: `let mosha = 25;`, `let qyteti = "Prishtinë";`. Por çka bëjmë kur duam të ruajmë **shumë** vlera të ngjashme njëherësh — p.sh. të gjithë ditët e javës, apo listën e frutave që dojmë të blejmë? Këtu na vjen në ndihmë **Array**.

## 1. Çfarë është një Array?

Një **Array** është një variabël më e madhe që mund të mbajë brenda saj shumë elemente njëherësh — pra një koleksion të dhënash. Kjo bën pjesë te ajo çka quhet **Data Structure**: një mënyrë e organizuar për të ruajtur dhe qasur të dhëna.

Në kod, një Array e dallojmë menjëherë sepse përdor kllapat katrore `[ ]`:

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];
console.log(frutat);
```

> 💡 Sa herë që shihni `[ ]` në JavaScript, dijeni që keni të bëni me një Array.

## 2. Indexing

Çdo element brenda një Array-i ka një pozitë të caktuar, të quajtur **Index**. Indexing-u në JavaScript fillon gjithmonë nga **0**, jo nga 1 — pra elementi i parë ka pozitën `0`, i dyti `1`, e kështu me radhë.

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];

console.log(frutat[0]); // "Mollë"
console.log(frutat[1]); // "Banane"
console.log(frutat[2]); // "Portokall"
```

> ⚠️ Nëse provoni të qaseni një pozitë që nuk ekziston (p.sh. `frutat[10]`), JavaScript nuk jep error — ju kthen `undefined`.

## 3. Ndryshimi i një Elementi

Për të ndryshuar vlerën e një elementi, i referohemi Index-it të tij dhe i japim një vlerë të re:

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];
frutat[1] = "Qershi";

console.log(frutat); // ["Mollë", "Qershi", "Portokall"]
```

## 4. Array.length

Vetia `length` na kthen numrin total të elementeve në Array:

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];
console.log(frutat.length); // 3
```

Nëse duam Index-in e elementit të **fundit**, e llogarisim si `frutat.length - 1`, sepse Indexing-u fillon nga 0.

> ⚠️ Mos e ngatërroni `length` (numri i elementeve) me Index-in e fundit — janë gjithmonë me diferencë 1.

## 5. Array Methods: push, pop, shift, unshift

Array-t në JavaScript sillen edhe si një **Stack** ("deck of cards") — mund t'i shtojmë ose t'i heqim elemente nga fillimi dhe nga fundi.

**Method-at që punojnë me fundin e Array-it:**

```javascript
let numrat = [1, 2, 3];

numrat.push(4);   // shton një element në FUND → [1, 2, 3, 4]
numrat.pop();     // heq elementin e FUNDIT → [1, 2, 3]
```

**Method-at që punojnë me fillimin e Array-it:**

```javascript
let numrat = [1, 2, 3];

numrat.unshift(0); // shton një element në FILLIM → [0, 1, 2, 3]
numrat.shift();    // heq elementin e PARË → [1, 2, 3]
```

`push()` dhe `unshift()` pranojnë parametrin që duam ta shtojmë; `pop()` dhe `shift()` nuk pranojnë asnjë parametër, sepse gjithmonë e dinë saktësisht cilin element ta heqin.

> 💡 `push()` dhe `pop()` janë më të shpejta se `shift()` dhe `unshift()`, sepse këto të fundit duhet të ri-Index-ojnë të gjithë Array-n pas çdo ndryshimi në fillim.

## 6. Arrays dhe Functions Bashkë

Array-t bëhen edhe më të fuqishëm kur i kombinojmë me Function-et që mësuam më parë:

```javascript
let vitetLindjes = [1990, 1967, 2008];

function llogaritMoshen(vitiLindjes) {
  return 2026 - vitiLindjes;
}

let mosha1 = llogaritMoshen(vitetLindjes[0]);
let mosha2 = llogaritMoshen(vitetLindjes[1]);

console.log(mosha1, mosha2);
```

### Detyrë

Krijoni një Array të quajtur `notat` me disa nota (numra). Shkruani një Function `notaMeELarte` që merr Array-n si parametër dhe printon në console notën më të lartë, duke krahasuar elementet me `if`.

## Përmbledhje e shpejtë

```javascript
let arr = [1, 2, 3];   // deklarim
arr[0];                 // qasje (Index fillon nga 0)
arr[0] = 9;              // ndryshim
arr.length;              // numri i elementeve
arr.push(x);  arr.pop();    // fund
arr.unshift(x); arr.shift(); // fillim
```

## Fjalë të shkurtra

- **Array** — variabël që mban shumë elemente njëherësh, brenda `[ ]`.
- **Index** — pozita e një elementi brenda një Array-i; fillon nga 0.
- **push()** — shton një element në fund të Array-it.
- **pop()** — heq elementin e fundit të Array-it.
- **shift()** — heq elementin e parë të Array-it.
- **unshift()** — shton një element në fillim të Array-it.
- **length** — numri total i elementeve në Array.

## 🎯 Sfida jote (pikë ekstra)

Krijoni një Array `numrat` me disa numra sipas dëshirës. Pa përdorur `Math.max()` apo `Math.min()`, shkruani kod që gjen dhe printon në console numrin **më të madh** dhe numrin **më të vogël** në Array, duke ecur nëpër elementet e tij dhe duke i krahasuar me `if`.
