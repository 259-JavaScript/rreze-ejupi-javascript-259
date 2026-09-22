# Funksionet në JavaScript — Dita 2
### Parametrat, Return, Arrow Functions & Function Expression

---

## Funksionet me Parametra

```js
function mbledh(a, b) {
  let rezultati = a + b;
  console.log(rezultati);
}

mbledh(4, 7); // 11
```

- `a` dhe `b` te deklarimi i funksionit janë **parametrat** — placeholder-a.
- `4` dhe `7` gjatë thirrjes janë **argumentet** — vlerat e vërteta që dërgohen.
- Gjatë thirrjes së funksionit gjithmonë duhet t'i shtojmë numrat (ose vlerat) që duam të përdoren.

---

## Detyrë (2 në 1)

**Detyra A:**
> Krijoni një funksion i cili merr 3 parametra (numra) dhe i shumëzon ata ndërmjet vete për të arritur prodhimin final.

```js
function shumezo(a, b, c) {
  let rezultati = a * b * c;
  console.log(rezultati);
}

shumezo(2, 3, 4); // 24
```

**Detyra B:**
> Krijoni një funksion i cili merr 3 parametra (emrin, mbiemrin, moshën) dhe printon fjalinë:
> "Unë jam Filan Fisteku dhe jam X vjeçarë."

```js
function prezantohu(emri, mbiemri, mosha) {
  console.log("Unë jam " + emri + " " + mbiemri + " dhe jam " + mosha + " vjeçarë.");
}

prezantohu("Filan", "Fisteku", 22);
```

---

## Return

Deri më tani funksionet tona vetëm kanë printuar diçka direkt në console — asnjëra nuk ka kthyer një rezultat që pjesa tjetër e programit mund ta përdorë. Për këtë përdoret keyword-i `return`.

```js
function mbledh(a, b) {
  let rezultati = a + b;
  return rezultati;
}

let totali = mbledh(4, 7);
console.log(totali); // 11
```

Tani çdo thirrje e funksionit **kthen** vlerën `rezultati`. Kur ekzekutimi i kodit arrin te `return`, funksioni ndalet aty dhe kthehet vlera (në këtë rast, `rezultati`).

---

## Arrow Functions

Arrow functions janë një mënyrë e shkurtër dhe më e thjeshtë për të deklaruar funksione në JavaScript — përdorin një sintaksë më kompakte.

```js
// Function Declaration
function mbledh(a, b) {
  return a + b;
}

// Arrow Function — e njëjta logjikë, sintaksë më e shkurtër
const mbledhArrow = (a, b) => a + b;

console.log(mbledh(3, 4));      // 7
console.log(mbledhArrow(3, 4)); // 7
```

**Shembull tjetër, i njëjti funksion si arrow function:**

```js
const prezantohuArrow = (emri, mbiemri, mosha) =>
  `Unë jam ${emri} ${mbiemri} dhe jam ${mosha} vjeçarë.`;

console.log(prezantohuArrow("Jetë", "Krasniqi", 25));
```

---

## Function Declaration vs Function Expression

```js
// Function Declaration
function pershendet() {
  console.log("Përshëndetje!");
}

// Function Expression — funksion i ruajtur në një variabël
const pershendetExpression = function () {
  console.log("Përshëndetje!");
};

pershendet();
pershendetExpression();
```

Dallimi kryesor: një **Function Declaration** deklarohet me keyword-in `function` dhe një emër direkt; një **Function Expression** ruan një funksion (shpesh pa emër) brenda një variable, dhe e thërrasim përmes emrit të asaj variable.

---

## 🏆 Sfida Bonus (pikë ekstra)

**"Karta e Informacionit Personal"**

Shkruani një funksion të quajtur `krijoProfilin` që:

1. Pranon 4 parametra: `emri`, `mbiemri`, `mosha`, `qyteti`.
2. Përdor `return` (jo `console.log`) për të kthyer një fjali si:
   `"[Emri] [Mbiemri], [mosha] vjeç, jeton në [qyteti]."`
3. Shkruhet në **tri mënyra të ndryshme**:
   - si Function Declaration
   - si Function Expression
   - si Arrow Function

```js
// 1. Function Declaration
function krijoProfilin(emri, mbiemri, mosha, qyteti) {
  // logjika juaj këtu
}

// 2. Function Expression
const krijoProfilinExpression = function (emri, mbiemri, mosha, qyteti) {
  // logjika juaj këtu
};

// 3. Arrow Function
const krijoProfilinArrow = (emri, mbiemri, mosha, qyteti) => {
  // logjika juaj këtu
};
```

**Pikë ekstra mbi pikët ekstra:** Shtoni një parametër të 5-të, `gjuhaEPreferuar`, por jepini një vlerë default nëse dikush harron ta dërgojë atë kur thërret funksionin. Kush e gjen këtë vetë (default parameters) merr pikë shtesë, pasi kjo shkon përtej asaj që u mbulua në klasë.
