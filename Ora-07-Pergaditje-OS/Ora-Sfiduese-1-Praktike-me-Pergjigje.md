# Ora Sfiduese 1 — Praktikë
## Pyetjet + Zgjidhjet

---

Ky material përmban pyetjet e orës praktike (Ora Sfiduese 1), bashkë me një zgjidhje shembull nën secilën pyetje. Provoni t'i zgjidhni vetë pyetjet në VS Code para se të shihni zgjidhjen — përdoreni si material rishikimi para Ora Sfiduese 1.

## 1.

Deklaroni një variabël `buxheti` (numër), me vlerë sipas dëshirës. Duke përdorur `if/else`, printoni (`console.log`) `"Brenda buxhetit"` nëse `buxheti > 100`, përndryshe `"Jashtë buxhetit"`.

**Zgjidhja:**

```javascript
let buxheti = 500;

if(buxheti>100){
    console.log("Brenda buxhetit")
}else{
    console.log("Jashte buxhetit")
}
```

## 2.

Deklaroni një variabël `nota` (numër), me vlerë sipas dëshirës. Duke përdorur operatorin ternar, deklaroni një variabël `rezultati` që merr vlerën `"Kaluar"` nëse `nota >= 5`, përndryshe `"Nuk ka kaluar"`, dhe printojeni (`console.log`) `rezultati`-n.

**Zgjidhja:**

```javascript
let nota = 5;

let rezultati = nota>=5 ? "Kaluar" : "Nuk ka kaluar";

console.log(rezultati)
```

## 3.

Deklaroni një variabël `dita` (string, p.sh. `"e hënë"`). Duke përdorur `switch`, printoni një mesazh sipas ditës:

- `"hënë"` → `"Dita eshte e hene"`
- `"premte"` → `"Dita eshte e premte"`
- `"shtunë"` → `"Dita eshte e shtune"`
- çdo gjë tjetër (`default`) → `"Nuk eshte dite"`

**Zgjidhja:**

```javascript
let dita = "e hene";

switch(dita){
    case "e hene":
        console.log("Dita eshte e hene");
        break;
    case "e premte":
        console.log("Dita eshte e premte");
        break;
    case "e shtune":
        console.log("Dita eshte e shtune");
        break;
    default:
        console.log("Nuk eshte dite")
}
```

## 4.

Shkruani një funksion `shumezoDyNumra`, që pranon dy parametra `a` dhe `b`, dhe kthen (`return`) prodhimin (shumëzimin) e tyre. Thirreni funksionin me disa vlera dhe printoni rezultatin.

**Zgjidhja:**

```javascript
function shumezoDyNumra(a , b){
    let rezultati = a * b;
    return rezultati;
}

console.log(shumezoDyNumra(5,9));
```

## 5.

Deklaroni një variabël: `nota` (numër) me vlerë sipas dëshirës. Shkruani një funksion `kontrolloRezultatin`, që pranon notën si parametër dhe, duke përdorur `if/else`, kthen (`return`) `"Kaluar"` nëse `nota >= 5`, përndryshe `"Nuk ka kaluar"`. Thirreni funksionin me disa vlera dhe printoni rezultatin.

**Zgjidhja:**

```javascript
function kontrolloRezultatin(nota){
    if(nota>=5){
        return "kaluar"
    }else{
        return "nuk ka kaluar"
    }
}

console.log(kontrolloRezultatin(3))
```

## 6.

Shkruani një funksion `kontrolloSemaforin`, që pranon një parametër `ngjyra` dhe, duke përdorur `switch`, kthen mesazhin përkatës:

- `"e kuqe"` → `"Ndalo"`
- `"e verdhe"` → `"Përgatitu"`
- `"e gjelbert"` → `"Shko"`
- çdo gjë tjetër (`default`) → `"Ngjyrë e panjohur"`

Thirreni funksionin me disa vlera të ndryshme dhe printoni rezultatet në console.

**Zgjidhja:**

```javascript
function kontrolloSemaforin(ngjyra){
    switch(ngjyra){
        case "e kuqe":
            return "Ndalo"
        case "e verdhe":
            return "pergaditu"
        case "e gjelbert":
            return "shko";
        default:
            return "seshte ngjyre e semaforit";
        }
}

console.log(kontrolloSemaforin("e portokallt"));
```
