// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health, strength){
        super(health, strength);
        this.name = name;
    }

    // Bénéficie de la methode attack() {} du parent

    receiveDamage(damage){
        //Permets de reprendre le contenu de la methode receiveDamage du parent
        super.receiveDamage(damage);

        //On peut continuer à implémenter cette méthode
        if (this.health > 0){
            return this.name + " has received " + damage + " points of damage";
        } else {
            return this.name + " has died in act of combat";
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }

    // Bénéficie de la methode attack() {} du parent

    receiveDamage(damage){
        //Permets de reprendre le contenu de la methode receiveDamage du parent
        super.receiveDamage(damage);
    
        //On peut continuer à implémenter cette méthode
        if (this.health > 0){
            return "A Saxon has received " + damage + " points of damage";
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
    constructor() {
      this.vikingArmy = []
      this.saxonArmy = []
    }

    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let choosenSaxon = this.saxonArmy[randomIndexSaxon];
        let choosenViking = this.vikingArmy[randomIndexViking];
        let saxonDamage = choosenSaxon.receiveDamage(choosenViking.strength);

        if (choosenSaxon.health <= 0){
            this.saxonArmy.splice(randomIndexSaxon,1);
        }
        
        return saxonDamage;
    }
    saxonAttack(){
        let randomIndexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomIndexViking = Math.floor(Math.random() * this.vikingArmy.length);
        let choosenSaxon = this.saxonArmy[randomIndexSaxon];
        let choosenViking = this.vikingArmy[randomIndexViking];
        let vikingDamage = choosenViking.receiveDamage(choosenSaxon.strength);

        if (choosenViking.health <= 0){
            this.vikingArmy.splice(randomIndexViking,1);
        }

        return vikingDamage;
    }
    showStatus(){
        if (this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        if (this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        }
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle.";

        }
    }
}
