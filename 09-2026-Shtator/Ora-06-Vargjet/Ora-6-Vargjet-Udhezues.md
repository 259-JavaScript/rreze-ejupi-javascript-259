# Aktiviteti 9 — Vargjet (Arrays)
## Udhëzues

---

Deri tani, çdo herë që kishim një vlerë për të ruajtur, e vendosnim në një variabël: `let mosha = 25;`, `let qyteti = "Prishtinë";`. Por çka bëjmë kur duam të ruajmë **shumë** vlera të ngjashme njëherësh — p.sh. të gjithë ditët e javës, apo listën e frutave që dojmë të blejmë? Këtu na vijnë në ndihmë **vargjet (arrays)**.

## 1. Çfarë janë Vargjet?

Një **array** është një variabël më e madhe që mund të mbajë brenda saj shumë elemente njëherësh — pra një koleksion të dhënash. Kjo bën pjesë te ajo çka quhet **data structure**: një mënyrë e organizuar për të ruajtur dhe qasur të dhëna.

Array-t njihen edhe si "vargje" ose "lista", dhe në kod i dallojmë menjëherë sepse përdorin kllapat katrore `[ ]`:

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];
console.log(frutat);
```

> 💡 Sa herë që shihni `[ ]` në JavaScript, dijeni që keni të bëni me një array.

## 2. Indeksimi (Indexing)

Çdo element brenda një array-i ka një pozitë të caktuar, të quajtur **index**. Indeksimi në JavaScript fillon gjithmonë nga **0**, jo nga 1 — pra elementi i parë ka pozitën `0`, i dyti `1`, e kështu me radhë.

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];

console.log(frutat[0]); // "Mollë"
console.log(frutat[1]); // "Banane"
console.log(frutat[2]); // "Portokall"
```

> ⚠️ Nëse provoni të qaseni një pozitë që nuk ekziston (p.sh. `frutat[10]`), JavaScript nuk jep error — ju kthen `undefined`.

## 3. Ndryshimi i një Elementi

Për të ndryshuar vlerën e një elementi, i referohemi pozitës së tij dhe i japim një vlerë të re:

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];
frutat[1] = "Qershi";

console.log(frutat); // ["Mollë", "Qershi", "Portokall"]
```

## 4. Array.length

Vetia `length` na kthen numrin total të elementeve në array:

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];
console.log(frutat.length); // 3
```

Nëse duam pozitën e elementit të **fundit**, e llogarisim si `frutat.length - 1`, sepse indeksimi fillon nga 0.

> ⚠️ Mos e ngatërroni `length` (numri i elementeve) me indeksin e fundit — janë gjithmonë me diferencë 1.

## 5. Metodat e Array-it: push, pop, shift, unshift

Array-t në JavaScript sillen edhe si një **stack** ("deck of cards") — mund t'i shtojmë ose t'i heqim elemente nga fillimi dhe nga fundi.

**Metodat që punojnë me fundin e array-it:**

```javascript
let numrat = [1, 2, 3];

numrat.push(4);   // shton një element në FUND → [1, 2, 3, 4]
numrat.pop();     // heq elementin e FUNDIT → [1, 2, 3]
```

**Metodat që punojnë me fillimin e array-it:**

```javascript
let numrat = [1, 2, 3];

numrat.unshift(0); // shton një element në FILLIM → [0, 1, 2, 3]
numrat.shift();    // heq elementin e PARË → [1, 2, 3]
```

`push()` dhe `unshift()` pranojnë parametrin që duam ta shtojmë; `pop()` dhe `shift()` nuk pranojnë asnjë parametër, sepse gjithmonë e dinë saktësisht cilin element ta heqin.

> 💡 `push()` dhe `pop()` janë më të shpejta se `shift()` dhe `unshift()`, sepse këto të fundit duhet të rindeksojnë të gjithë array-n pas çdo ndryshimi në fillim.

## 6. Vargjet dhe Funksionet Bashkë

Vargjet bëhen edhe më të fuqishëm kur i kombinojmë me funksionet që mësuam më parë:

```javascript
let vitetLindjes = [1990, 1967, 2008];

function llogaritMoshen(vitiLindjes) {
  return 2026 - vitiLindjes;
}

let mosha1 = llogaritMoshen(vitetLindjes[0]);
let mosha2 = llogaritMoshen(vitetLindjes[1]);

console.log(mosha1, mosha2);
```

## Përmbledhje e shpejtë

```javascript
let arr = [1, 2, 3];   // deklarim
arr[0];                 // qasje (index fillon nga 0)
arr[0] = 9;              // ndryshim
arr.length;              // numri i elementeve
arr.push(x);  arr.pop();    // fund
arr.unshift(x); arr.shift(); // fillim
```

## 🎯 Sfidat e tua

### Sfidë e lehtë

Krijoni një array të quajtur `notat` me disa nota (numra). Shkruani një funksion `notaMeELarte` që merr array-n si parametër dhe printon në console notën më të lartë, duke krahasuar elementet me `if`.

### Sfidë më e vështirë

Krijoni një array `numrat` me disa numra sipas dëshirës. Pa përdorur `Math.max()` apo `Math.min()`, shkruani kod që gjen dhe printon në console numrin **më të madh** dhe numrin **më të vogël** në array, duke ecur nëpër elementet e tij dhe duke i krahasuar me `if`.
