# Aktiviteti 11–12 — Loops (For & While)
## Udhëzues

---

> ⚠️ **Shënim:** Sllajdet për Aktivitetin 11&12 ("Loop — For loop, while loop") nuk u gjetën në Google Drive, te dosja Module 1 - JavaScript Fundamentals (ekzistojnë vetëm në listën "Lista e Aktiviteteve" si referencë, jo si prezantim i veçantë). Ky udhëzues është rindërtuar bazuar në skenarin e njohur të aktivitetit dhe njohuritë standarde të kurrikulës. Ju lutem rishikojeni para se ta përdorni në klasë.

Deri tani, sa herë që na është dashur të përsërisim një veprim, e kemi shkruar atë disa herë me dorë — p.sh. `pershendet(); pershendet(); pershendet();`. Po nëse duam ta përsërisim një veprim 100 herë, apo aq herë sa ka elemente një Array? Këtu na vjen në ndihmë **Loop** — na lejon të përsërisim një bllok kodi pa e shkruar atë çdo herë nga fillimi.

## 1. For Loop

`for` është Loop-i më i përdorur kur e dimë **saktësisht** sa herë duam të përsëritim diçka. Ka tri pjesë, të ndara me `;`:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Përsëritja numër:", i);
}
```

- `let i = 0` — vlera fillestare (counter-i).
- `i < 5` — kushti; Loop-i vazhdon përderisa kushti është `true`.
- `i++` — çka ndodh me `i` pas çdo përsëritjeje (këtu, shtohet me 1).

> 💡 `i++` është njësoj si `i = i + 1`, thjesht e shkurtuar.

## 2. While Loop

`while` përdoret kur nuk e dimë saktësisht sa herë do të përsëritet Loop-i, por e dimë **kushtin** që duhet të mbetet i vërtetë:

```javascript
let bateria = 100;

while (bateria > 0) {
  console.log("Bateria:", bateria + "%");
  bateria = bateria - 20;
}

console.log("Bateria mbaroi!");
```

> ⚠️ Mos harroni ta ndryshoni variablën brenda `while` (këtu, `bateria`) — përndryshe kushti mbetet gjithmonë `true` dhe krijoni një **Infinite Loop** që "ngrin" browser-in.

## 3. break dhe continue

`break` ndërpret Loop-in menjëherë, ndërsa `continue` e "kalon" përsëritjen aktuale dhe vazhdon me tjetrën:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // ndalon Loop-in sapo i bëhet 5
  }
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // kalon numrat çift, s'i printon
  }
  console.log(i);
}
```

## 4. Loop-imi nëpër Array

Loop-et dhe Array-t punojnë shumë mirë bashkë — mund të ecim nëpër çdo element të një Array duke përdorur `i` si Index:

```javascript
let frutat = ["Mollë", "Banane", "Portokall"];

for (let i = 0; i < frutat.length; i++) {
  console.log(frutat[i]);
}
```

Vini re që përdorëm `frutat.length` në kusht, në vend që të shkruajmë numrin `3` direkt — kështu, nëse Array-i ndryshon madhësi më vonë, Loop-i përshtatet vetë.

### Detyrë

Duke pasur `let numrat = [4, 8, 15, 16, 23, 42];`, përdorni një `for` Loop për të printuar në console vetëm numrat çift nga ky Array (ndihmë: `numrat[i] % 2 === 0`).

## Përmbledhje e shpejtë

```javascript
for (let i = 0; i < n; i++) { }   // kur e dimë sa herë

while (kushti) { }                 // kur s'e dimë sa herë

break;      // ndalon Loop-in
continue;   // kalon përsëritjen aktuale

for (let i = 0; i < arr.length; i++) {
  arr[i];   // ecim nëpër Array
}
```

## Fjalë të shkurtra

- **Loop** — bllok kodi që përsëritet automatikisht, pa e rishkruar dorazi.
- **for** — Loop i përdorur kur dihet saktësisht numri i përsëritjeve.
- **while** — Loop i përdorur kur Loop-i varet nga një kusht.
- **break** — ndërpret Loop-in menjëherë.
- **continue** — kalon përsëritjen aktuale dhe vazhdon me tjetrën.
- **Infinite Loop** — Loop pa fund, sepse kushti mbetet përherë `true`.

## 🎯 Sfida jote (pikë ekstra)

Shkruani një Function `mbledhElNjeArray` që pranon një Array numrash si parametër, dhe duke përdorur një `for` Loop (jo `push`, jo Method-a të gatshme), llogarit dhe kthen shumën e të gjithë elementeve të tij.
