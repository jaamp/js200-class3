var player1 = {
    name: 'Merlin',
    health: 10,
};
var player2 = {
    name: 'Morgan',
    health: 10,
};
Attack(player1, player2, 2, 4);


function Attack(attacker, defender, baseDamage, variableDamage)
    {
    let totalDamage = baseDamage + RollDie(variableDamage);
    defender.health = defender.health - totalDamage;
    console.log(attacker.name + ' hits ' + defender.name + ' for ' + totalDamage + ' points damage.\n\n');
    console.log(defender.name + ' has ' + defender.health + ' health points remaining');
    }

function RollDie(variableDamage)
    {
        return Math.ceil(Math.random() * variableDamage);
    };
