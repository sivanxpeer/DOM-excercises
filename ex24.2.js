function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const snorlaxAttacks=["thick fat","immunity"];
const snorlax =new Pokemon("Snorlax","normal",snorlaxAttacks);


const jigglypuffAttacks=["cute charm","competetive"];
const jigglypuff=new Pokemon("Jigglypuff","fairy",jigglypuffAttacks);

const squirtleAttacks=["torrent","competetive"];
const squirtle=new Pokemon("Squirtle","water",squirtleAttacks);


Pokemon.prototype.callPokemon=function(){
    console.log(`I choose you, ${this.name}!`);
}

Pokemon.prototype.attack = function(attackNumber){
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
}

squirtle.callPokemon();
jigglypuff.callPokemon();
snorlax.callPokemon();


squirtle.attack(1);
jigglypuff.attack(0);
snorlax.attack(0);
    