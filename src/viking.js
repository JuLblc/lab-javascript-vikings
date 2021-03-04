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
class War {}
