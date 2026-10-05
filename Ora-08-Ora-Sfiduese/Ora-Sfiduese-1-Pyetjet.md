# Ora Sfiduese 1
## Pyetjet

---

Kjo është ora e parë sfiduese — teston gjithçka që kemi mësuar deri tani: `console.log`, variablat dhe tipet e të dhënave, operatorët (brenda `if/else`), `if/else`, `switch`, dhe funksionet (parametra, `return`). Pyetjet 1-3 testojnë çdo koncept veç e veç; pyetjet 4-5 i kombinojnë ato bashkë.

Shkruani kodin tuaj në VS Code, testojeni në browser/console para se ta dërgoni, dhe më pas ngjisni (copy-paste) përgjigjet tuaja në Google Form — një përgjigje për secilën pyetje.

## 1.

Deklaroni një variabël `temperatura` (numër), me vlerë sipas dëshirës. Duke përdorur `if/else` (pa funksion, pa `switch`), printoni (`console.log`) `"Ngrohtë"` nëse `temperatura > 20`, përndryshe `"Ftohtë"`.

## 2.

Deklaroni një variabël `ngjyra` (string, p.sh. `"e kuqe"`). Duke përdorur `switch` (pa funksion, pa `if/else`), printoni një mesazh sipas ngjyrës së semaforit:

- `"e kuqe"` → `"Ndalo"`
- `"e verdhë"` → `"Përgatitu"`
- `"e gjelbër"` → `"Shko"`
- çdo gjë tjetër (`default`) → `"Ngjyrë e panjohur"`

## 3.

Shkruani një funksion `mblidhDyNumra` (pa `if/else`, pa `switch`), që pranon dy parametra `a` dhe `b`, dhe **kthen** (`return`) shumën e tyre. Thirreni funksionin me disa vlera dhe printoni rezultatin.

## 4.

Tani t'i kombinojmë. Ju kujtohet shembulli `mosha >= 18 ? "I rritur" : "I mitur"` që bëmë me ternar? Tani ta shkruajmë si funksion, me `if/else` në vend të ternarit.

Deklaroni dy variabla: `mosha` (numër) dhe `emri` (string), me vlera sipas dëshirës. Shkruani një funksion `kontrolloMoshen`, që pranon `mosha` si parametër dhe, duke përdorur `if/else` (me operatorin `>=`), **kthen** (`return`) `"I rritur"` nëse mosha është 18 ose më shumë, përndryshe `"I mitur"`. Printoni një përshëndetje me `emri`, dhe printoni edhe rezultatin e `kontrolloMoshen(mosha)`.

## 5.

Ju kujtohet `switch`-i që bëmë me notat (5, 4, 3, default)? Tani ta shndërrojmë në funksion.

Shkruani një funksion `notaMeFjale`, që pranon një parametër `nota` (numër) dhe, duke përdorur `switch`, **kthen** notën me fjalë:

- `5` → `"Shkëlqyeshëm"`
- `4` → `"Shumë mirë"`
- `3` → `"Mirë"`
- çdo gjë tjetër (`default`) → `"Duhet përmirësim"`

Thirreni funksionin me disa vlera të ndryshme dhe printoni rezultatet në console.

## 6.

Çfarë janë vlerat **falsy** në JavaScript? Përmendni të paktën 3 shembuj, dhe shpjegoni me fjalët tuaja pse janë të rëndësishme kur shkruajmë kushte `if`.
