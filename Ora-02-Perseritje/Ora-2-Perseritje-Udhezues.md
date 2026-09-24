# Rifreskim i Bazave të JavaScript
### Aktivitetet 1–7 (Moduli 1: JS Fundamentals) — A1, A2&3, A4, A5, A6&A7

---

## 1. JavaScript në Browser

JavaScript është gjuhë programuese që ekzekutohet në browser (client-side) dhe na lejon të krijojmë webfaqe interaktive dhe dinamike.

Kodi JS mund të lidhet në dy mënyra:

```html
<!-- internal script -->
<script>
  console.log("Kjo është internal script");
</script>
```

```html
<!-- external script -->
<script src="app.js" defer></script>
```

`defer` bën që kodi JS të ekzekutohet vetëm pasi të jetë ngarkuar plotësisht HTML-ja e faqes.

**Console** përdoret për të parë mesazhe, gjetur gabime dhe testuar kod:

```js
console.log("Mesazh normal");
console.warn("Ky është një warning");
console.error("Ky është një error");
```

---

## 2. Variablat & Tipet e të Dhënave

### Deklarimi i variablave

```js
let emri = "Arta";
const vitiLindjes = 2008;
var vjeter = "ende funksionon, por e shmangim";
```

- `let` — variabël që mund të ndryshojë vlerën
- `const` — variabël që NUK ndryshon më pasi inicializohet
- `var` — mënyra e vjetër, e shmangim për shkak të scope-it

### Rregullat e emërtimit

```js
// let 1emri = "gabim";       // ❌ nuk mund të fillojë me numër
// let emri-im = "gabim";     // ❌ pa karaktere speciale/hapësira
let emriIm = "mirë";          // ✅
```

JavaScript është **case-sensitive**: `test`, `Test` dhe `TEST` janë tri variabla të ndryshme.

### Tipet e të dhënave

```js
let mosha = 25;                 // Number
let qyteti = "Prishtinë";       // String
let eshteNxenes = true;         // Boolean
let makina;                     // Undefined
let kafsheShtepiake = null;     // Null (bosh me qëllim)
let numerIMadh = 9007199254740993n; // BigInt

console.log(typeof mosha, typeof qyteti, typeof eshteNxenes, typeof makina, typeof kafsheShtepiake, typeof numerIMadh);
```

Tipet ndahen në:
- **Primitive**: Number, String, Boolean, Undefined, Null, BigInt
- **Komplekse**: Array, Object

**Shembull profili me disa tipe:**

```js
let emri = "Blerim";
let mbiemri = "Krasniqi";
let eshtePunesuar = true;
let vitePervoje = 3;
let pagaPerOre = 12.5;

console.log(emri, mbiemri, eshtePunesuar, vitePervoje, pagaPerOre);
```

---

## 3. Konvertimi i Tipeve & `typeof`

```js
const numri = 42;
console.log(String(numri));       // "42"
console.log(String(true));        // "true"
console.log(Number("312"));       // 312
console.log(Number("abc"));       // NaN
console.log(Boolean(0));          // false
console.log(Boolean("përshëndetje")); // true
```

Vlerat **falsy** në JavaScript janë: `0`, `""`, `null`, `undefined`, `NaN`, `false`. Gjithçka tjetër është **truthy**.

`typeof` na tregon tipin e një vlere:

```js
let viti = 1990;
console.log(typeof viti);         // "number"

let vitiSiTekst = String(viti);
console.log(typeof vitiSiTekst);  // "string"
```

---

## 4. Operatorët & Kushtëzimet

### if / else

```js
let buxheti = 500;

if (buxheti > 800) {
  console.log("Blej laptopin");
} else {
  console.log("Buxhet i pamjaftueshëm");
}
```

### Kushte të shumëfishta (else if)

```js
let rezultati = 87;

if (rezultati >= 90) {
  console.log("Nota: A");
} else if (rezultati >= 80) {
  console.log("Nota: B");
} else if (rezultati >= 70) {
  console.log("Nota: C");
} else {
  console.log("Nota: F");
}
```

### Nested if/else

```js
let numri = 7;

if (numri > 0) {
  if (numri % 2 === 0) {
    console.log("Pozitiv dhe çift");
  } else {
    console.log("Pozitiv dhe tek");
  }
} else {
  console.log("Jo pozitiv");
}
```

### Operatori ternar

```js
let statusi = mosha >= 18 ? "I rritur" : "I mitur";
console.log(statusi);
```

**Shembull: e njëjta logjikë me if/else dhe me ternar**

```js
// Me if/else
let temperatura = 15;
if (temperatura > 20) {
  console.log("Ngrohtë");
} else {
  console.log("Ftohtë");
}

// E njëjta gjë me ternar
console.log(temperatura > 20 ? "Ngrohtë" : "Ftohtë");
```

## 🎯 Sfidat e tua

### Sfidë e lehtë

Deklaroni një variabël `mosha` (numër) dhe një tjetër `qytetiLindjes` (string), me vlera sipas dëshirës. Duke përdorur operatorin ternar, printoni `"I rritur"` ose `"I mitur"` bazuar në `mosha`. Pastaj, duke përdorur `typeof`, printoni tipin e secilës prej dy variablave.

### Sfidë më e vështirë

**"Kalkulatori i Notës & Zbritjes"**

Shkruani një funksion të quajtur `permbledhjaBlerjes` që:

1. Pranon dy parametra: `mesatarja` (numër) dhe `artikujtNeShporte` (numër).
2. Kthen një mesazh për statusin akademik bazuar në `mesatarja`:
   - `>= 4.5` → `"Sukses i shkëlqyeshëm"`
   - `>= 3.5` → `"Sukses shumë i mirë"`
   - `>= 2.5` → `"Sukses i mirë"`
   - `>= 2` → `"Sukses i mjaftueshëm"`
   - çdo gjë tjetër → `"Duhet përmirësim"`
3. Veç kësaj, llogarit një zbritje në një shportë ku çdo artikull kushton `0.80`:
   - Nëse `artikujtNeShporte > 3`, zbatoni 10% zbritje mbi totalin.
   - Përndryshe, pa zbritje.
4. I printon të dyja rezultatet në console në një mesazh të vetëm, të qartë, duke përdorur template literal.

**Pikë ekstra mbi pikët ekstra:** Rishkruajeni zgjidhjen tuaj si arrow function, përdorni operatorin ternar për logjikën e zbritjes në vend të if/else, dhe rishkruani logjikën e statusit akademik duke përdorur `switch` me rangje të grupuara në cases.

```js
// Skeleti fillestar — plotësojeni vetë
function permbledhjaBlerjes(mesatarja, artikujtNeShporte) {
  // logjika juaj këtu
}
```
