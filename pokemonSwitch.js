let percentAdded = 23;

Console.log("Right version?")



let initiate = () => {
    let mainScreenParent = document.getElementById("mainScreenParent");
    mainScreenParent.style.display="inline";
    let btn = document.getElementById("start");
    btn.style.display="none";
    let prev=document.getElementById("prev");
    prev.style.display="inline";
    let next=document.getElementById("next");
    next.style.display="inline";
    // let modal = document.getElementById("firstModal");
    // modal.style.display="block";
    // modal.style.left="13.65%";
    // modal.style.zIndex=1;
    // let modyButton = document.getElementById("modyButton");
    // modyButton.removeAttribute("id")
    // modyButton.style.backgroundColor="red";
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

    // if (event.keyCode === 13) {
    //     document.getElementById("myBtn").click();
    // }
});

setTimeout(initiate, 1200);

let hpNumber = document.getElementById("hpNumber");
let attackNumber = document.getElementById("attackNumber");
let defenseNumber = document.getElementById("defenseNumber");
let name = document.getElementById("name");
let talents = document.getElementById("listOfAbilities");
let image= document.getElementById("image");
let modyBody=document.getElementById("modyBody");

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
        // console.log(this.listOfPokemon);
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

// link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
link = "https://pokeapi.co/api/v2/pokemon/jigglypuff" 

// link = "https://pokeapi-nycda.firebaseio.com/pokemon/39.json"

function changePoke(link) {
    axios.get(link).then((response) => {
        console.log("Test")
        let allData = response.data;
        console.log(allData);
        let statistics = allData.stats;
        // console.log(statistics);

        // name 
        let pokeName = allData.name;
        // console.log(pokeName);
        // hp level
        let aychPee = statistics[5].base_stat;
        // attack level
        let pokeAttack = statistics[4].base_stat;
        // defense level
        let pokeDefense = statistics[3].base_stat;

        let pic = allData.sprites.front_default;

        // abilities - array of strings
        let arrayOfSkills = [];
        let skills = allData.abilities;
        skills.forEach((element) => {
            arrayOfSkills.push(element.ability.name)
        })

        let pokemon = new Pokemon(pokeName, aychPee, pokeAttack, pokeDefense, arrayOfSkills, pic);

        ben.add(pokemon);

        // ben.get(pokemon.pokeName)
        
    }).then( () => {

     

        image.src = ben.get(nameOfPokemon).picUrl;

        


        hpNumber.innerText=ben.get(nameOfPokemon).hp;


        attackNumber.innerText=ben.get(nameOfPokemon).attack;


        defenseNumber.innerText=ben.get(nameOfPokemon).defense;

        // let arrayOfSkills = document.getElementById("arrayOfSkills");
        // arrayOfSkills.innerText=ben.listOfPokemon.charmander.abilities;

        let lowerCaseName = ben.get(nameOfPokemon).name;

        let upperCaseName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);

        name.innerText=upperCaseName;
        // name.innerText=ben.get(nameOfPokemon).name;


        // talents.innerText=(ben.get(nameOfPokemon).abilities).toString()
        // modyBody.innerText=((ben.all()[i].abilities).join(", "))
        modyBody.innerText=(ben.get(nameOfPokemon).abilities).join(", ");

        let hpBar = document.getElementById("hpParent");
        let hpNumberText = hpNumber.innerText
        hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"
        
        let attackBar = document.getElementById("attackParent");
            let attackNumberText = attackNumber.innerText
            attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"
        
            let defenseBar = document.getElementById("defenseParent");
            let defenseNumberText = defenseNumber.innerText
            defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
    }
        
    )

};

changePoke(link);

nameOfPokemon = "charizard"
// link = "https://pokeapi-nycda.firebaseio.com/pokemon/6.json"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
changePoke(link);

nameOfPokemon = "pikachu"
// link = "https://pokeapi-nycda.firebaseio.com/pokemon/25.json"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// setTimeout(changePoke(link), 7500);
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

    // name.innerText = ben.all()[i].name;
    image.src = ben.all()[i].picUrl;
    hpNumber.innerText=ben.all()[i].hp;
    attackNumber.innerText=ben.all()[i].attack;
    defenseNumber.innerText=ben.all()[i].defense;
    modyBody.innerText=((ben.all()[i].abilities).join(", "));
    // talents.innerText = 

    // console.log((ben.all()[i].abilities).toString())
    
    // i++;

    // if (i>arrayofPoke.length-1) {
    //     i=0
    // }   

    let hpBar = document.getElementById("hpParent");
    let hpNumberText = hpNumber.innerText
    hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"

    let attackBar = document.getElementById("attackParent");
    let attackNumberText = attackNumber.innerText
    attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"

    let defenseBar = document.getElementById("defenseParent");
    let defenseNumberText = defenseNumber.innerText
    defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
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

    // name.innerText = ben.all()[i].name;
    image.src = ben.all()[i].picUrl;
    hpNumber.innerText=ben.all()[i].hp;
    attackNumber.innerText=ben.all()[i].attack;
    defenseNumber.innerText=ben.all()[i].defense;
    modyBody.innerText=((ben.all()[i].abilities).join(", "));
    // talents.innerText = (ben.all()[i].abilities).toString()

    let hpBar = document.getElementById("hpParent");
let hpNumberText = hpNumber.innerText
hpBar.style.width = ((hpNumberText/255)*100)+percentAdded + "%"

let attackBar = document.getElementById("attackParent");
    let attackNumberText = attackNumber.innerText
    attackBar.style.width = ((attackNumberText/190)*100)+percentAdded + "%"

    let defenseBar = document.getElementById("defenseParent");
    let defenseNumberText = defenseNumber.innerText
    defenseBar.style.width = ((defenseNumberText/230)*100)+percentAdded + "%"
    
};

// let hpBar = document.getElementById("hpParent");
// let hpNumberText = hpNumber.innerText
// hpBar.style.width = ((hpNumberText/255)*100) + "%"
// let abilitiesContainer = document.getElementById("abilitiesContainer");

// function displayAbilities() {
//     abilitiesContainer .style.display="inline";
// };

// let prev = document.getElementById("prev");
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

