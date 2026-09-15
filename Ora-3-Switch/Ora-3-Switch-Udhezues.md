
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
