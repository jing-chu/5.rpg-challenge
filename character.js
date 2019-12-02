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
let logList = document.querySelector("#logList");
let createInfo = document.querySelector(".createInfo");
let stats1 = document.querySelector(".stats1");
let stats2 = document.querySelector(".stats2");
let createBtn = document.querySelector(".createBtn");
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
        document.querySelector("#info12").innerHTML = "Race: " + race1.options[race1.selectedIndex].text;
        document.querySelector("#info13").innerHTML = "Item: " + item1.options[item1.selectedIndex].text;
        document.querySelector("#info21").innerHTML = "Name: " + input2.value;       
        document.querySelector("#info22").innerHTML = "Race: " + race2.options[race2.selectedIndex].text;
        document.querySelector("#info23").innerHTML = "Item: " + item2.options[item2.selectedIndex].text;
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        let img4 = document.createElement("img");
        switch(race1.value){
            case "humans":
                img1.src = "human.png";
                let src11 = document.querySelector("#info14");
                src11.appendChild(img1);
                break;
            case "orcs":
                img1.src = "orc.png";
                let src12 = document.querySelector("#info14");
                src12.appendChild(img1);
                break;
            case "elves":
                img1.src = "elve.png";
                let src13 = document.querySelector("#info14");
                src13.appendChild(img1);
                break;
            case "vampires":
                img1.src = "vamp.png";
                let src14 = document.querySelector("#info14");
                src14.appendChild(img1);
                break;    
        }
        switch(race2.value){
            case "humans":
                img2.src = "human.png";
                let src21 = document.querySelector("#info24");
                src21.appendChild(img2);
                break;
            case "orcs":
                img2.src = "orc.png";
                let src22 = document.querySelector("#info24");
                src22.appendChild(img2);
                break;
            case "elves":
                img2.src = "elve.png";
                let src23 = document.querySelector("#info24");
                src23.appendChild(img2);
                break;
            case "vampires":
                img2.src = "vamp.png";
                let src24 = document.querySelector("#info24");
                src24.appendChild(img2);
                break;    
        }
        switch(item1.value){
            case "staff":
                img3.src = "staff.png";
                let src11 = document.querySelector("#info14");
                src11.appendChild(img3);
                break;
            case "boots":
                img3.src = "boots.png";
                let src12 = document.querySelector("#info14");
                src12.appendChild(img3);
                break;
            case "sword":
                img3.src = "sword.png";
                let src13 = document.querySelector("#info14");
                src13.appendChild(img3);
                break;
            case "bow":
                img3.src = "bow.png";
                let src14 = document.querySelector("#info14");
                src14.appendChild(img3);
                break;           
        }
        switch(item2.value){
            case "staff":
                img4.src = "staff.png";
                let src21 = document.querySelector("#info24");
                src21.appendChild(img4);
                break;
            case "boots":
                img4.src = "boots.png";
                let src22 = document.querySelector("#info24");
                src22.appendChild(img4);
                break;
            case "sword":
                img4.src = "sword.png";
                let src23 = document.querySelector("#info24");
                src23.appendChild(img4);
                break;
            case "bow":
                img4.src = "bow.png";
                let src24 = document.querySelector("#info24");
                src24.appendChild(img4);
                break;            
        }
        document.querySelector(".players").style.display = "none";
        document.querySelector(".createBtn").style.display = "none";
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

function raceHit(dmgA, dmgB, raceB){
    if (raceB == "humans")  
    {    
        console.log("dmgA+dmgB: " + dmgA + " + " + dmgB );  
        return [dmgA, dmgB*0.8];        
    } else if (raceB == "elves"){ 
        let r = Math.random();//30% chance to reflect the attack back to the opponent.
        if (r<=0.3) { 
            console.log("dmgA+dmgB: " + dmgA + " + " + dmgB  + " r: " + r);         
            return [dmgB*0.5, dmgB*0.5];                       
        } else {  
            console.log("dmgA+dmgB: " + dmgA + " + " + dmgB  + " r: " + r);          
            return [dmgA, dmgB];
        }        
    } else {  //vampires and orcs
        console.log("dmgA+dmgB: " + dmgA + " + " + dmgB );  
        return [dmgA, dmgB];
    }
}


function itemHit(dmgA, dmgB, itmA, itmB) {
    if (itmB == "boots"){
        let r = Math.random();
        if (r <= 0.3){
            console.log("dmgA+dmgB: " + dmgA + " + " + dmgB  + " r: " + r);
            return [0, 0];
        } 
    }
    if (itmA == "sword"){
        console.log("dmgA+dmgB: " + dmgA + " + " + dmgB );
        return [dmgA, dmgB*1.3];
    } else if (itmA == "bow") {
        let r = Math.random();
        if (r<=0.3){
            console.log("dmgA+dmgB: " + dmgA + " + " + dmgB  + " r: " + r);
            return [dmgA, dmgB*2];
        }
    } else { //boots and staff
        console.log("dmgA+dmgB: " + dmgA + " + " + dmgB );
        return [dmgA, dmgB];
    }
} 

function itemHeal(healA, itmA){
    if (itmA == "staff"){
        return healA *1.2;
    } else {
        return healA;
    }
}


//abandoned
function raceRun(player,randomD1,randomD2){
    if(player == "player1"){
        if (player1.race == "humans"){  //20% less damage taken
            player1.currenthealth -= randomD2 * 0.8;
            console.log("p1-human-20% less damage taken + randomD: " + randomD2)
        } else if (player1.race == "elves"){  
            let r = Math.random(); //30% chance to reflect the attack back to the opponent. They take damage equal to 50% of the original hit.
            if (r<=0.3) {
                player2.currenthealth -= randomD2 * 0.5;
                player1.currenthealth -= randomD2 * 0.5;
                console.log("p1-elves+randomD: " + randomD2 + "chance: "+ r)                
            } else {
                console.log("p1-elves+randomD: " + randomD2 + "chance: "+ r)
            }
        } 
    } else {
        if (player2.race == "humans"){
            player2.currenthealth -= randomD1 * 0.8;
            console.log("p2-human-20% less damage taken + randomD: " + randomD1)
            console.log(player2.currenthealth + "/" + player1.currenthealth)
        } else if (player2.race == "elves"){
            let r = Math.random();
            if (r<=0.3) {
                player1.currenthealth -= randomD1 * 0.5;
                player2.currenthealth -= randomD1 * 0.5;
                console.log("p2-elves+randomD: " + randomD1 + "chance: "+ r)
                console.log(player2.currenthealth + "/" + player1.currenthealth)
            } else {
                console.log("p2-elves+randomD: " + randomD1 + "chance: "+ r)
                console.log(player2.currenthealth + "/" + player1.currenthealth)
            }
        }
    }
}
//abandoned
function items(player,randomD1,randomD2,randomH1,randomH2){
    if(player == "player1"){
        if(player1.item == "boots"){  //30% chance to dodge an attack
            let rboots1 = Math.random();
            if (rboots1>0.3) {
                //player1.currenthealth -= randomD2;
                console.log("p1-boots: 30% chance to dodge an attack: " + randomD2 + "chance: " + rboots1);
            } else {                
                console.log("p1-boots: 30% chance to dodge an attack: " + rboots1);
                return [0,0,0,0];
            }
        } else if (player1.item == "staff") {  //20% increase in healing
            player1.currenthealth += randomH1 * 1.2;
            console.log("p1-staff:20% increase in healing +randomH: " + randomH1)
        } else if (player1.item == "sword") {   //  30% more damage
            player2.currenthealth -= randomD1 * 1.3;
            console.log("p1-sword: 30% more damage: " + randomD1)
        } else {
            let r = Math.random();
            if (r<0.3) { //30% chance to attack twice
                player2.currenthealth -= randomD1 * 2;
                console.log("p1-bow:30% chance to attack twice: " + randomD1 + " Chance: " + r);
            } else {
                player2.currenthealth -= randomD1;
                console.log("p1-bow:30% chance to attack twice: " + randomD1 + " Chance: " + r);
            }
        }
    } else {
        if(player2.item == "boots"){ 
            rboots2 = Math.random();
            if (rboots2 > 0.3) {
                player2.currenthealth -= randomD1;
                console.log("p2-boots: 30% chance to dodge an attack: " + randomD1 + "chance: " + rboots2);
            } else {
                console.log("p2-boots: 30% chance to dodge an attack: " + rboots2)
            }
        } else if (player2.item == "staff") {
            player2.currenthealth += randomH2 * 1.2;
            console.log("p2-staff:20% increase in healing +randomH: " + randomH2)
        } else if (player2.item == "sword") {
            player1.currenthealth -= randomD2 * 1.3;
            console.log("p2-sword: 30% more damage: " + randomD2)
        } else {
            let r = Math.random();
            if (r < 0.3) {
                player1.currenthealth -= randomD2 * 2;
                console.log("p2-bow:30% chance to attack twice: " + randomD2 + " Chance: " + r);
            } else {
                player1.currenthealth -= randomD2;
                console.log("p2-bow:30% chance to attack twice: " + randomD2 + " Chance: " + r)
            }
        }
    }
    return randomD1,randomD2,randomH1,randomH2
}

hit1.addEventListener("click",function(){ 
    let ply2Dmg = player2.damage(); 
    let ply1Dmg = 0;  
    heal1.disabled = true; 
    hit1.disabled = true; 
    let li = document.createElement("li");    
    li.innerHTML = "player1 chooses HIT";
    logList.appendChild(li); 
    [ply1Dmg, ply2Dmg]=itemHit(0, ply2Dmg, player1.item, player2.item);
    [ply1Dmg, ply2Dmg]=raceHit(ply1Dmg, ply2Dmg, player2.race);
    player1.currenthealth = player1.currenthealth-ply1Dmg;
    player2.currenthealth = player2.currenthealth-ply2Dmg;
    health1.value = player1.currenthealth;
    health2.value = player2.currenthealth;
    console.log("p1currenthealth: " + player1.currenthealth);
    console.log("p2currenthealth: " + player2.currenthealth);
    if (player1.currenthealth <= 0 || player2.currenthealth <= 0) {
        alert("game over");
        sixBtn.style.display = "none";
        log.style.display = "none";
        healthBars.style.display = "none";
        document.querySelector(".players").style.display = "flex";
        document.querySelector(".createBtn").style.display = "flex";
        input1.value = "";
        input2.value = "";
        let info1 = document.querySelector("#info1");
        let info2 = document.querySelector("#info2");
        while (info1.hasChildNodes()) {  
            info1.removeChild(info1.firstChild);
        }
        while (info2.hasChildNodes()) {  
            info2.removeChild(info2.firstChild);
        }
        while (logList.hasChildNodes()) {
            logList.removeChild(logList.firstChild);
        }       
        for (let i=1; i<=4; i++){
            let li = document.createElement("li");
            info1.appendChild(li);
            li.id = "info1" + String(i);
        }
        for (let j=1; j<=4; j++){
            let lij = document.createElement("li");
            info2.appendChild(lij);
            lij.id = "info2" + String(j);
        }        
    }
});

hit2.addEventListener("click",function(){
    let ply1Dmg = player1.damage(); 
    let ply2Dmg = 0;  
    heal2.disabled = true;  
    hit2.disabled = true;
    let li = document.createElement("li");
    li.innerHTML = "player2 chooses HIT";
    logList.appendChild(li); 
    [ply2Dmg, ply1Dmg]=itemHit(0, ply1Dmg, player2.item, player1.item);
    [ply2Dmg, ply1Dmg]=raceHit(ply2Dmg, ply1Dmg, player1.race);
    player1.currenthealth = player1.currenthealth-ply1Dmg;
    player2.currenthealth = player2.currenthealth-ply2Dmg;
    health1.value = player1.currenthealth;
    health2.value = player2.currenthealth;
    console.log("p1currenthealth: " + player1.currenthealth);
    console.log("p2currenthealth: " + player2.currenthealth);
    
    if (player1.currenthealth <= 0 || player2.currenthealth <= 0) {
        alert("game over");
        sixBtn.style.display = "none";
        log.style.display = "none";
        healthBars.style.display = "none";
        document.querySelector(".players").style.display = "flex";
        document.querySelector(".createBtn").style.display = "flex";
        input1.value = "";
        input2.value = "";
        let info1 = document.querySelector("#info1");
        let info2 = document.querySelector("#info2");
        while (info1.hasChildNodes()) {  
            info1.removeChild(info1.firstChild);
        }
        while (info2.hasChildNodes()) {  
            info2.removeChild(info2.firstChild);
        }
        while (logList.hasChildNodes()) {
            logList.removeChild(logList.firstChild);
        }       
        for (let i=1; i<=4; i++){
            let li = document.createElement("li");
            info1.appendChild(li);
            li.id = "info1" + String(i);
        }
        for (let j=1; j<=4; j++){
            let lij = document.createElement("li");
            info2.appendChild(lij);
            lij.id = "info2" + String(j);
        }        
    }
});

heal1.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerHTML = "player1 chooses HEAL";
    logList.appendChild(li);
    let hl = player1.heal();    
    console.log("randomheal :" + hl) 
    if (player1.item == "staff"){
        items("player1", 0, hl);
    } else {
        player1.currenthealth = player1.currenthealth + hl;
    }
    if (player1.currenthealth > player1.maxHealth){
        console.log("player1.currenthealth: " + player1.currenthealth);
        player1.currenthealth = player1.maxHealth;
    }
    health1.value = player1.currenthealth;
    health2.value = player2.currenthealth;
    console.log("p2-currenthealth: " + player2.currenthealth)
    console.log("p1-currenthealth: " + player1.currenthealth)
});

heal2.addEventListener("click",function(){
    player2.heal();
    let li = document.createElement("li");    
    li.innerHTML = "player2 chooses HEAL";
    logList.appendChild(li);
    let hl = player2.heal();     
    console.log("randomheal :" + hl)
    if (player2.item == "staff") {
        items("player2", 0, hl);
    } else {
        player2.currenthealth = player2.currenthealth + hl;
    }   
    if (player2.currenthealth > player2.maxHealth){
        console.log("player1.currenthealth: " + player2.currenthealth);
        player2.currenthealth = player2.maxHealth;
    }
    health2.value = player2.currenthealth;
    health1.value = player1.currenthealth;
    console.log("p2-currenthealth: " + player1.currenthealth)
    console.log("p1-currenthealth: " + player2.currenthealth)
});

yield1.addEventListener("click",function(){
    alert("game over");//gameOver();
    let li = document.createElement("li"); 
    log.innerHTML = "player1 chooses YIELD";
    logList.appendChild(li);

    sixBtn.style.display = "none";
    log.style.display = "none";
    healthBars.style.display = "none";
    document.querySelector(".players").style.display = "flex";
    document.querySelector(".createBtn").style.display = "flex";
    input1.value = "";
    input2.value = "";
    let info1 = document.querySelector("#info1");
    let info2 = document.querySelector("#info2");
    while (info1.hasChildNodes()) {  
        info1.removeChild(info1.firstChild);
    }
    while (info2.hasChildNodes()) {  
        info2.removeChild(info2.firstChild);
    }
    while (logList.hasChildNodes()) {
        logList.removeChild(logList.firstChild);
    }
    for (let i=1; i<=4; i++){
        let li = document.createElement("li");
        info1.appendChild(li);
        li.id = "info1" + String(i);
    }
    for (let j=1; j<=4; j++){
        let lij = document.createElement("li");
        info2.appendChild(lij);
        lij.id = "info2" + String(j);
    }
});

yield2.addEventListener("click",function(){
    alert("game over");//gameOver();
    let li = document.createElement("li"); 
    log.innerHTML = "player2 chooses YIELD";
    logList.appendChild(li);
    sixBtn.style.display = "none";
    log.style.display = "none";
    healthBars.style.display = "none";
    document.querySelector(".players").style.display = "flex";
    document.querySelector(".createBtn").style.display = "flex";
    input1.value = "";
    input2.value = "";
    let info1 = document.querySelector("#info1");
    let info2 = document.querySelector("#info2");
    while (info1.hasChildNodes()) {  
        info1.removeChild(info1.firstChild);
    }
    while (info2.hasChildNodes()) {  
        info2.removeChild(info2.firstChild);
    }
    while (logList.hasChildNodes()) {
        logList.removeChild(logList.firstChild);
    }
    for (let i=1; i<=4; i++){
        let li = document.createElement("li");
        info1.appendChild(li);
        li.id = "info1" + String(i);
    }
    for (let j=1; j<=4; j++){
        let lij = document.createElement("li");
        info2.appendChild(lij);
        lij.id = "info2" + String(j);
    }
});

