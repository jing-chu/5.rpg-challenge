//Use this script to generate your characte

function Person(name,race,item){
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){
        let randomH = getRndInteger(this.min, this.maxHealing);
        return randomH;        
       // this.currenthealth += heal; 
        //if( this.currenthealth >= this.maxHealth) {
            //this.currenthealth = 100;
        //}  
    };

    this.damage = function(){
        let randomD= getRndInteger(this.min, this.maxDamage);  
        return randomD;
        //this.currenthealth -= damage;
        //if (this.currenthealth <=0) {
            //alert("game over");//gameOver();
        //}
    };

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}

let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let item1 = document.getElementById("items1");
let race1 = document.getElementById("races1");
let item2 = document.getElementById("items2");
let race2 = document.getElementById("races2");
let log = document.querySelector(".log");
let logList = document.getElementById("logList");
let createInfo = document.querySelector(".createInfo");
let stats1 = document.querySelector(".stats1");
let stats2 = document.querySelector(".stats2");
let createBtn = document.querySelector(".createBtn");
let playBtn = document.querySelector(".playBtn");
let sixBtn = document.querySelector(".sixBtn");
let healthBars = document.querySelector(".healthBars");
let health1 = document.querySelector("#health1");
let health2 = document.querySelector("#health2");
let hit1 = document.getElementById("hit1");
let heal1 = document.getElementById("heal1");
let yield1 = document.getElementById("yield1");
let hit2 = document.getElementById("hit2");
let heal2 = document.getElementById("heal2");
let yield2 = document.getElementById("yield2");
let player1;
let player2;


sixBtn.style.display = "none";
log.style.display = "none";
healthBars.style.display = "none";



createBtn.addEventListener("click",function(){
    player1 = new Person(input1.value,race1.value,item1.value );
    player2 = new Person(input2.value,race2.value,item2.value );
    if(input1.value == "" || input2.value == ""){
        createInfo.innerHTML = "Error: Please input the names!"
    } else if (input1.value == input2.value) {
        createInfo.innerHTML = "Error: The two names cannot be the same!"
    } else {
        createInfo.innerHTML = "";
        document.querySelector("#info11").innerHTML = "Name: " + input1.value;
        document.querySelector("#info12").innerHTML = "Item: " + item1.options[item1.selectedIndex].text;
        document.querySelector("#info13").innerHTML = "Race: " + race1.options[race1.selectedIndex].text; 
        document.querySelector("#info21").innerHTML = "Name: " + input2.value;
        document.querySelector("#info22").innerHTML = "Item: " + item2.options[item2.selectedIndex].text;
        document.querySelector("#info23").innerHTML = "Race: " + race2.options[race2.selectedIndex].text;  
        
        document.querySelector(".players").style.display = "none";
        sixBtn.style.display = "flex";
        log.style.display = "flex";
        healthBars.style.display = "flex";
    }
    raceInitial("player1",player1.damage());
    raceInitial("player2",player2.damage());
    health1.value = player1.currenthealth;
    health2.value = player2.currenthealth;
    health1.max = player1.maxHealth;
    health2.max = player2.maxHealth;
    console.log(player1)
    console.log(player2)
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function raceInitial(player){
    if (player == "player1"){
        if(player1.race == "orcs") {
            player1.maxHealth =  player1.maxHealth * 1.4;
            player1.currenthealth = player1.maxHealth;
        } else if (player1.race == "vampires") {
            player2.maxHealth = player2.maxHealth * 0.9;
            player2.currenthealth = player2.maxHealth;
        }
    } else {
        if (player == "player2"){
            if(player2.race == "orcs") {    //40% more max health
                player2.maxHealth =  player2.maxHealth * 1.4;
                player2.currenthealth = player2.maxHealth;
            } else if (player2.race == "vampires") {   //10% lifesteal from opponents current health at start of the vampire's turn.
                player1.maxHealth = player1.maxHealth * 0.9;
                player1.currenthealth = player1.maxHealth;
            }
        }
    }
}

function raceRun(player,randomD){
    if(player == "player1"){
        if (player1.race == "humans"){  //20% less damage taken
            this.currenthealth -= randomD * 0.2;
            console.log("p1-human-20% less damage taken + randomD: " + randomD)
        } else if (player1.race == "elves"){  
            let r = Math.random(); //30% chance to reflect the attack back to the opponent. They take damage equal to 50% of the original hit.
            if (r<=0.3) {
                player2.currenthealth -= randomD * 0.5;
                player1.currenthealth -= randomD * 0.5;
                console.log("p1-elves+randomD: " + randomD + "chance: "+ r)
            }
        } 
    } else {
        if (player2.race == "humans"){
            this.currenthealth -= randomD * 0.2;
            console.log("p2-human-20% less damage taken + randomD: " + randomD)
        } else if (player2.race == "elves"){
            let r = Math.random();
            if (r<=0.3) {
                player1.currenthealth -= randomD * 0.5;
                player2.currenthealth -= randomD * 0.5;
                console.log("p2-elves+randomD: " + randomD + "chance: "+ r)
            }
        }
    }

}

function items(player,randomD,randomH){
    if(player == "player1"){
        if(player1.item == "boots"){  //30% chance to dodge an attack
            let r = Math.random();
            if (r>0.3) {
                player1.currenthealth -= randomD;
                console.log("p1-boots: 30% chance to dodge an attack" + r)
            } else {
                console.log("p1-boots: 30% chance to dodge an attack" + r)
            }
        } else if (player1.item == "staff") {  //20% increase in healing
            player1.currenthealth += randomH * 1.2;
            console.log("p1-staff:20% increase in healing +randomH: " + randomH)
        } else if (player1.item == "sword") {   //  30% more damage
            player2.currenthealth -= randomD * 1.3;
            console.log("p1-sword: 30% more damage: " + randomD)
        } else {
            let r = Math.random();
            if (r<0.3) { //30% chance to attack twice
                player2.currenthealth -= randomD * 2;
                console.log("p1-bow:30% chance to attack twice: " + randomD + " Chance " + r);
            } else {
                player2.currenthealth -= randomD;
                console.log("p1-bow:30% chance to attack twice: " + randomD + " Chance " + r);
            }
        }
    } else {
        if(player2.item == "boots"){ 
            let r = Math.random();
            if (r > 0.3) {
                player1.currenthealth -= randomD;
                console.log("p2-boots: 30% chance to dodge an attack" + r)
            } else {
                console.log("p1-boots: 30% chance to dodge an attack" + r)
            }
        } else if (player2.item == "staff") {
            player1.currenthealth += randomH * 1.2;
            console.log("p2-staff:20% increase in healing +randomH: " + randomH)
        } else if (player2.item == "sword") {
            player2.currenthealth -= randomD * 1.3;
            console.log("p2-sword: 30% more damage: " + randomD)
        } else {
            let r = Math.random();
            if (r < 0.3) {
                player1.currenthealth -= randomD * 2;
                console.log("p2-bow:30% chance to attack twice: " + randomD + " Chance " + r);
            } else {
                player1.currenthealth -= randomD;
                console.log("p2-bow:30% chance to attack twice: " + randomD + " Chance " + r)
            }
        }
    }
}

hit1.addEventListener("click",function(){
    //if (player2.item == "boots") 
    let li = document.createElement("li");
    logList.appendChild(li);
    li.innerHTML = "player1 chooses HIT";   
    raceRun("player1", player1.damage())
    items("player1", player1.damage(), 0);
    health2.value = player2.currenthealth;
    console.log("p2-currenthealth: " + player2.currenthealth)

});

hit2.addEventListener("click",function(){
    let li = document.createElement("li");
    logList.appendChild(li);
    li.innerHTML = "player2 chooses HIT";
});

heal1.addEventListener("click",function(){
    let li = document.createElement("li");
    logList.appendChild(li);
    li.innerHTML = "player1 chooses HEAL";
});

heal2.addEventListener("click",function(){
    player2.heal();
    let li = document.createElement("li");
    logList.appendChild(li);
    li.innerHTML = "player2 chooses HEAL";
});

yield1.addEventListener("click",function(){
    alert("game over");//gameOver();
    log.innerHTML = "player1 chooses YIELD";
});

yield2.addEventListener("click",function(){
    alert("game over");//gameOver();
    log.innerHTML = "player2 chooses YIELD";
});

