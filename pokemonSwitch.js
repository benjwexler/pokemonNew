let percentAdded = 26;

console.log("Right version?")

let initiate = () => {
    let mainScreenParent = document.getElementById("mainScreenParent");
    mainScreenParent.style.display="inline";
    let btn = document.getElementById("start");
    btn.style.display="none";
    let prev=document.getElementById("prev");
    prev.style.display="inline";
    let next=document.getElementById("next");
    next.style.display="inline";
}

let pushCount = 0;

let fake = document.getElementById("fake");
fake.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("modyButton").click();
    if (pushCount===0){
    document.getElementById("pushaT").play()
    pushCount++
    } ;

});

setTimeout(initiate, 1200);

let hpNumber = document.getElementById("hpNumber");
let attackNumber = document.getElementById("attackNumber");
let defenseNumber = document.getElementById("defenseNumber");
let name = document.getElementById("name");
let mobileName = document.getElementById("borderTop");
let talents = document.getElementById("listOfAbilities");
let image= document.getElementById("image");
let mobilePic = document.getElementById("mobilePic");
let modyBody=document.getElementById("modyBody");
let graphHP = document.getElementById("graphHP");
let hpBar = document.getElementById("hpParent");
let attackBar = document.getElementById("attackParent");
let graphAttack = document.getElementById("graphAttack");
let defenseBar = document.getElementById("defenseParent");
let graphDefense = document.getElementById("graphDefense");

class Pokemon {
    constructor(name, hp, attack, defense, abilities, picUrl) {
        this.name = name
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.picUrl = picUrl
    }
};

class Trainer {
    constructor() {
        this.listOfPokemon = {};
    }
    all() {

        return Object.values(this.listOfPokemon);
    };

    get(nameOfPoke) {
        return (this.listOfPokemon[nameOfPoke])

    }
    add(pokemonObject) {
        this.listOfPokemon[pokemonObject.name] = pokemonObject
    }
};

let ben = new Trainer(); 

let nameOfPokemon = "jigglypuff";

link = "https://pokeapi.co/api/v2/pokemon/jigglypuff" 
link = "https://fizal.me/pokeapi/api/39.json"



function changePoke(link) {
    axios.get(link).then((response) => {

        let allData = response.data;

        let statistics = allData.stats;

        let pokeName = allData.name;

        let aychPee = statistics[5].base_stat;

        let pokeAttack = statistics[4].base_stat;

        let pokeDefense = statistics[3].base_stat;

        let pic = allData.sprites.front_default;

        let arrayOfSkills = [];
        let skills = allData.abilities;
        skills.forEach((element) => {
            arrayOfSkills.push(element.ability.name)
        })

        let pokemon = new Pokemon(pokeName, aychPee, pokeAttack, pokeDefense, arrayOfSkills, pic);

        ben.add(pokemon);

        
    }).then( () => {

        image.src = ben.get(nameOfPokemon).picUrl;
        mobilePic.src = ben.get(nameOfPokemon).picUrl;

        hpNumber.innerText=ben.get(nameOfPokemon).hp;

        attackNumber.innerText=ben.get(nameOfPokemon).attack;

        defenseNumber.innerText=ben.get(nameOfPokemon).defense;

        let lowerCaseName = ben.get(nameOfPokemon).name;

        let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

        name.innerText=upperCaseName;

        modyBody.innerText=(ben.get(nameOfPokemon).abilities).join(", ");

        
        
        let hpNumberText = hpNumber.innerText
        hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"
        graphHP.style.height = ((hpNumberText/255)*100)+percentAdded + "%"
        
       
            let attackNumberText = attackNumber.innerText
            attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"
            graphAttack.style.height = ((hpNumberText/255)*100)+percentAdded + "%"
        
           
            let defenseNumberText = defenseNumber.innerText
            defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
            graphDefense.style.height = ((defenseNumberText/230)*100)+percentAdded + "%"
    }
        
    )

};

changePoke(link);

nameOfPokemon = "charizard"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
link = "https://fizal.me/pokeapi/api/6.json"
changePoke(link);

nameOfPokemon = "pikachu"

link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
link = "https://fizal.me/pokeapi/api/25.json"

changePoke(link);
setTimeout(ben.all(), 1000);

i=0


function slideNext(){

    let arrayofPoke = ben.all()

    if (i>arrayofPoke.length-2) {
        i=0;
    } else {
    i++
    }

    let lowerCaseName = ben.all()[i].name;

    let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

    name.innerText=upperCaseName;
    mobileName.innerText=upperCaseName;

    image.src = ben.all()[i].picUrl;
    mobilePic.src = ben.all()[i].picUrl;
    hpNumber.innerText=ben.all()[i].hp;
    attackNumber.innerText=ben.all()[i].attack;
    defenseNumber.innerText=ben.all()[i].defense;
    modyBody.innerText=((ben.all()[i].abilities).join(", "));


    let hpNumberText = hpNumber.innerText
    hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"
    graphHP.style.height = ((hpNumberText/255)*100)+percentAdded + "%"


    let attackNumberText = attackNumber.innerText
    attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"
    graphAttack.style.height = ((attackNumberText/190)*100)+percentAdded + "%"


    let defenseNumberText = defenseNumber.innerText
    defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
    graphDefense.style.height = ((defenseNumberText/230)*100)+percentAdded + "%"
}

function slidePrev(){

    let arrayofPoke = ben.all()

    if (i<1) {
        i=arrayofPoke.length-1
    } else {
        i--;
    }

    let lowerCaseName = ben.all()[i].name;

    let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

    name.innerText=upperCaseName;
    mobileName.innerText=upperCaseName;

    image.src = ben.all()[i].picUrl;
    mobilePic.src = ben.all()[i].picUrl;
    hpNumber.innerText=ben.all()[i].hp;
    attackNumber.innerText=ben.all()[i].attack;
    defenseNumber.innerText=ben.all()[i].defense;
    modyBody.innerText=((ben.all()[i].abilities).join(", "));


let hpNumberText = hpNumber.innerText
hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"
graphHP.style.height = ((hpNumberText/255)*100)+percentAdded + "%"


    let attackNumberText = attackNumber.innerText
    attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"
    graphAttack.style.height = ((attackNumberText/190)*100)+percentAdded + "%"


    let defenseNumberText = defenseNumber.innerText
    defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
    graphDefense.style.height = ((defenseNumberText/230)*100)+percentAdded + "%"
    
};

window.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 37) {
        document.getElementById("prev").click();
    }
    if (event.keyCode === 38) {
        document.getElementById("modyButton").click();
        if (pushCount===0){
            document.getElementById("pushaT").play()
            pushCount++
            } ;        

    }
    if (event.keyCode === 39) {
        document.getElementById("next").click();
    }

    if (event.keyCode === 40) {
        document.getElementById("closeButton").click();
    }
});

