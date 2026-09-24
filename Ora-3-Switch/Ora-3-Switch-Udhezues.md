
---

## Switch Statement

`switch` bën të njëjtën punë si if/else, por është më i pastër kur kontrollojmë një variabël kundrejt shumë vlerave të sakta.

```js
let dita = "e Martë";

switch (dita) {
  case "e Hënë":
    console.log("Fillimi i javës");
    break;
  case "e Martë":
    console.log("Dita e dytë");
    break;
  case "e Shtunë":
  case "e Diel":
    console.log("Fundjavë!");
    break;
  default:
    console.log("Ditë e zakonshme");
}
```

- `break` ndalon ekzekutimin e switch-it pasi të plotësohet një case. Pa `break`, ekzekutimi "bie" (fall-through) te case-i tjetër.
- `default` ekzekutohet kur asnjë case nuk plotësohet, dhe nuk ka nevojë për `break` sepse është gjithmonë i fundit.
- Disa `case` mund të grupohen njëra pas tjetrës (siç u tregua me e Shtunë/e Diel) për të ndarë të njëjtin kod.

**Shembull: e njëjta logjikë me if/else dhe me switch**

```js
// Me if/else
let nota = 4;
if (nota === 5) {
  console.log("Shkëlqyeshëm");
} else if (nota === 4) {
  console.log("Shumë mirë");
} else if (nota === 3) {
  console.log("Mirë");
} else {
  console.log("Duhet përmirësim");
}

// E njëjta gjë me switch
switch (nota) {
  case 5:
    console.log("Shkëlqyeshëm");
    break;
  case 4:
    console.log("Shumë mirë");
    break;
  case 3:
    console.log("Mirë");
    break;
  default:
    console.log("Duhet përmirësim");
}
```

## 🎯 Sfidat e tua

### Sfidë e lehtë

Deklaroni një variabël `stina` (string, p.sh. `"verë"`). Duke përdorur `switch`, printoni një mesazh të ndryshëm për `"verë"`, `"dimër"`, `"vjeshtë"`, `"pranverë"`, dhe një mesazh `default` për çdo vlerë tjetër.

### Sfidë më e vështirë

Deklaroni një variabël `muaji` (numër nga 1 deri 12). Duke përdorur `switch`, gruponi muajt sipas stinës (siç u tregua me `"e Shtunë"`/`"e Diel"` te shembulli i ditëve) dhe printoni stinën përkatëse: `12, 1, 2` → `"Dimër"`; `3, 4, 5` → `"Pranverë"`; `6, 7, 8` → `"Verë"`; `9, 10, 11` → `"Vjeshtë"`. Shtoni edhe një `default` për vlera jashtë intervalit 1–12.
