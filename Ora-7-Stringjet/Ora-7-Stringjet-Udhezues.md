# Aktiviteti 10 — Stringjet (String Operations)
## Udhëzues

---

Deri tani kemi përdorur strings (tekst) kryesisht për t'i printuar apo krahasuar. Por stringjet në JavaScript kanë shumë **metoda** të integruara që na lejojnë t'i "presim", t'i kërkojmë, t'i kombinojmë dhe t'i ndryshojmë ashtu siç na duhet — pa e prekur asnjëherë stringun origjinal.

> 💡 Pothuajse të gjitha metodat e stringjeve **nuk e ndryshojnë** stringun origjinal — gjithmonë kthejnë një vlerë (ose string) **të re**.

## 1. indexOf() dhe lastIndexOf()

`indexOf()` kthen pozitën ku shfaqet **për herë të parë** një vlerë e caktuar brenda stringut. `lastIndexOf()` bën të njëjtën gjë, por për shfaqjen e **fundit**.

```javascript
let fjalia = "Akademia jCoders eshte akademi e mire per jCoders e ardhshem";

console.log(fjalia.indexOf("jCoders"));     // pozita e shfaqjes së parë
console.log(fjalia.lastIndexOf("jCoders")); // pozita e shfaqjes së fundit
```

> ⚠️ Nëse vlera e kërkuar nuk gjendet fare, të dyja metodat kthejnë `-1`. Të dyja janë edhe **case-sensitive** — "JCoders" dhe "jCoders" trajtohen si tekste të ndryshme.

## 2. slice()

`slice()` "pret" një pjesë të stringut dhe e kthen si string të ri, sipas pozitës së fillimit dhe të mbarimit që i japim.

```javascript
let email = "trajner@jcoders.com";
let emri = email.slice(0, 7);

console.log(emri); // "trajner"
```

## 3. toLowerCase() dhe toUpperCase()

Këto na kthejnë të njëjtin string, por gjithë me shkronja të vogla ose gjithë me shkronja të mëdha:

```javascript
let qyteti = "Prishtinë";

console.log(qyteti.toLowerCase()); // "prishtinë"
console.log(qyteti.toUpperCase()); // "PRISHTINË"
```

## 4. replace() dhe concat()

`replace()` zëvendëson një pjesë të stringut me diçka tjetër. `concat()` bashkon dy a më shumë stringje në një të ri.

```javascript
let mesazhi = "JS eshte gjuhe interesante!";
console.log(mesazhi.replace("JS", "JavaScript"));

let emri = "Rreze";
let mbiemri = "Ejupi";
console.log(emri.concat(" ", mbiemri)); // "Rreze Ejupi"
```

## 5. includes(), startsWith(), endsWith()

Këto tri metoda kthejnë gjithmonë `true` ose `false`, prandaj janë shumë të përdorshme brenda kushteve `if`:

```javascript
let email = "nxenes@jcoders.com";

console.log(email.includes("@"));         // true
console.log(email.startsWith("nxenes"));  // true
console.log(email.endsWith(".com"));      // true
```

**Shembull: validim i thjeshtë emaili**

```javascript
let email = "nxenes@jcoders.com";

if (email.includes("@") && email.endsWith(".com")) {
  console.log("Email valid");
} else {
  console.log("Email jo valid");
}
```

## 6. split() dhe charAt()

`split()` e ndan stringun në copa (sipas një karakteri që i japim si "ndarës") dhe kthen një **array** me ato copa — pra stringjet dhe vargjet lidhen ngushtë me njëri-tjetrin!

```javascript
let lendet = "JavaScript;HTML;CSS";
let lendetArray = lendet.split(";");

console.log(lendetArray); // ["JavaScript", "HTML", "CSS"]
```

`charAt()` kthen karakterin që gjendet në një pozitë të caktuar (edhe këtu, indeksimi fillon nga 0):

```javascript
let fjala = "Kodim";
console.log(fjala.charAt(0)); // "K"
```

### Detyrë

Duke pasur `let numri = "+383 44 123 456";`, përdorni `startsWith()` brenda një `if` për të kontrolluar nëse numri fillon me prefiksin e Kosovës `"+383"`, dhe printoni në console një mesazh përkatës.

## Përmbledhje e shpejtë

```javascript
str.indexOf("x");  str.lastIndexOf("x"); // pozita (ose -1)
str.slice(start, end);                    // pjesë e re
str.toLowerCase();  str.toUpperCase();
str.replace("a", "b");
str1.concat(str2);
str.includes("x"); str.startsWith("x"); str.endsWith("x"); // true/false
str.split(",");     // → array
str.charAt(0);       // karakteri në pozitën 0
```

## Fjalë të shkurtra

- **String** — vlerë teksti; sekuencë karakteresh.
- **indexOf() / lastIndexOf()** — gjejnë pozitën e shfaqjes së parë/fundit të një vlere.
- **slice()** — nxjerr një pjesë të stringut si string i ri.
- **includes() / startsWith() / endsWith()** — kontrollojnë nëse stringu përmban, fillon ose mbaron me një vlerë; kthejnë `true`/`false`.
- **split()** — ndan stringun në një array, sipas një ndarësi.
- **charAt()** — kthen karakterin në një pozitë të caktuar.

## 🎯 Sfida jote (pikë ekstra)

Shkruani një funksion `numeroFjalet` që pranon një fjali (string) si parametër, e ndan atë në fjalë duke përdorur `split(" ")`, dhe kthen numrin total të fjalëve (`.length` mbi array-n e rezultuar). Testojeni funksionin me disa fjali të ndryshme.
