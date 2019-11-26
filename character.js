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
        let heal = getRndInteger(this.min, this.maxHealing);
        return heal;        
       // this.currenthealth += heal; 
        //if( this.currenthealth >= this.maxHealth) {
            //this.currenthealth = 100;
        //}  
    };

    this.damage = function(){
        let damage = getRndInteger(this.min, this.maxDamage);  
        return damage;
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
    races("player1",player1.damage());
    //races("player2",player2.damage());
    console.log(player1)
    console.log(player1.race)
    console.log(player1.item)
    console.log(player1.damage())
    console.log(player1.heal())
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function races(player,randomD){
    if(player == "player1"){
        if (player1.race == "Humans"){
            this.currenthealth -= randomD * 0.2;
            console.log("hello")
            console.log(player1.race)
            console.log(this.currenthealth)
        } else if (player1.race == "Orcs"){
            this.maxHealth = maxHealth * 1.4;
        } else if (player1.race == "Elves"){
            if (Math.floor(Math.random())<=0.3) {
                player2.currenthealth -= randomD * 0.5;
                player1.currenthealth -= randomD * 0.5;
            }
        } else {
            player2.maxHealth = player2.currenthealth * 0.9;
        }       
    } else {
        if (player2.race == "Humans"){
            this.currenthealth -= randomD * 0.2;
        } else if (player2.race == "Orcs"){
            this.maxHealth = maxHealth * 1.4;
        } else if (player2.race == "Elves"){
            if (Math.floor(Math.random())<=0.3) {
                player1.currenthealth -= randomD * 0.5;
                player2.currenthealth -= randomD * 0.5;
            }
        } else {
            player1.maxHealth = player1.currenthealth * 0.9;
        }
        //console.log(player2.race)
    }

}

function items(player,randomD,randomH){
    if(player == "player1"){
        if(player1.item == "Boots"){
            if (Math.floor(Math.random())>0.3) {
                player1.currenthealth -= randomD;
            } 
        } else if (player1.item == "Staff") {
            player1.currenthealth += randomH * 1.2;
        } else if (player1.item == "Sword") {
            player1.currenthealth -= randomD * 1.3;
        } else {
            if (Math.floor(Math.random())<0.3) {
                player2.currenthealth -= randomD * 2;
            } 
        }
    } else {
        if(player2.item == "Boots"){
            if (Math.floor(Math.random())>0.3) {
                player1.currenthealth -= randomD;
            } 
        } else if (player2.item == "Staff") {
            player1.currenthealth += randomH * 1.2;
        } else if (player2.item == "Sword") {
            player1.currenthealth -= randomD * 1.3;
        } else {
            if (Math.floor(Math.random())<0.3) {
                player1.currenthealth -= randomD * 2;
            } 
        }
    }
}

hit1.addEventListener("click",function(){
    player2.damage();
    let li = document.createElement("li");
    logList.appendChild(li);
    li.innerHTML = "player1 chooses HIT";
    items("player1",player1.damage(),player1.heal());
    health2.style.value = player2.currenthealth;

});

hit2.addEventListener("click",function(){
    player1.damage();
    let li = document.createElement("li");
    logList.appendChild(li);
    li.innerHTML = "player2 chooses HIT";
});

heal1.addEventListener("click",function(){
    player1.heal();
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

