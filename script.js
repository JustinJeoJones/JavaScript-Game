"use strict"
class player{//the user
    constructor(name){
        this.name = name;
        this.hp = 40;
    }
    heal(){
        this.hp = 40;
    }
    hurt(damage){
        this.hp = this.hp - damage;
    }
}
class grant{// the bad guy
    constructor(){
        this.name = "Grant";
        this.hp = 10;
    }
    heal(){
        this.hp = 10;
    }
    hurt(damage){
        this.hp = this.hp - damage;
    }
}
function getDamage(){ //returns random number from 1-5
    return Math.floor((Math.random() * 5) + 1);
}
function startCombat(username){//loops 3 fights against grant
    let user = new player(username);
    console.log("A very angry grant wants to fight.")
    let enemy = new grant();
    let count = 0;
    while (count <= 3){
        let dmg = getDamage();
        enemy.hurt(dmg);
        console.log(user.name + " did " + dmg + " to Grant. Grant hp:" + enemy.hp);
        if (enemy.hp<= 0){
            count = count + 1;
            enemy.heal();
            console.log("You have beat a grant.")
            if (count >= 3)
            {
                break;
            }
        }
        dmg = getDamage();
        user.hurt(dmg);console.log("Grant did " + dmg + " to "+user.name +". " +user.name +" hp:" + user.hp);
        if (user.hp<=0){
            console.log(user.name + " has died.");
            break;
        }
    }
}
function startgame(){//gets info then starts game
    let start = prompt("Would you like to play?");
    start = start.toLowerCase();
    if (start == "yes"){ 
        let name = prompt("What is your name?");
        startCombat(name);
    }  
}