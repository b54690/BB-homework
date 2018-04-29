// Variables
//Declare the global variable hero and assign it an object. This object has the following keys and values:

//1. `name` which is a string (you choose the name)
//2. `heroic` which is a boolean
//4. `health` which is a number
//5. `weapon` which is an object (it has some stats in the form keys and values)
//6. `weapon` has a key `type` which is a string
//7. `weapon` has a key `damage` which is a number

var hero = {
  name: 'Captain Kingsday',
  heroic: true,
  inventory: [{type: 'gun', damage:'100'}, {type: 'blaster', damage:'100'}],
  health: 45,
  weapon: {type: 'Axe', damage: 45},
}

// Game logic

//`rest` is a function that restores a creatures health to 10
//1. `rest` should have one parameter: `creature`. You can assume that creature has the same structure as your `hero` object
//2. modify the `health` of the `creature` object by assigning it `10`
//3. return the `creature`object from the function

var creature = {
  inventory: [],
  health: 32,
}

function rest(creature) {
  creature.health = 10;
  return(creature);
}

//`pickUpItem` is a function that adds an item to the inventory of a creature
//1. `pickUpItem` should have two parameters: `creature` and `item`. You can assume that creature has the same structure as your `hero` object and that `item` has the same structure as a `weapon` object.
//2. modify the `inventory` of the `creature` by adding the item to it.
//3. return the `creature` object from the function

var item = [{type: 'gun', damage:'100'}];

function pickUpItem(creature, item) {
  creature.inventory.push(item);
  return(creature);
  console.log(creature);
}

//`dealDamage` is a function that subtracts one creatures weapon damage from another creatures health
//1. `dealDamage` should have two parameters: `attacker` and `defender`. You can assume that both have the same structure as your `hero` object.
//2. modify the `health` value of the `defender` object by subtracting the value of the attacker's weapon damage.
//3. return the `defender` object from this function.


function dealDamage(attacker, defender) {
  defender.health = defender.health - attacker.weapon.damage;
  return(defender);
}

//`equipWeapon` is a function that takes a changes the weapon of the creature to one that is in their inventory and removes that weapon from their inventory.
//1. `equipWeapon` should have two parameters. `creature` and `index`. You can assume that creature has the same structure as your `hero` object and that `index` is a number.
//2. modify the `weapon` of the `creature` by assigning it the value of the `index`th element of the `inventory`
//3. modify the creature's `inventory` by removing the `index`th element from it
//4. return the `creature` object from the function

index = 0

function equipWeapon(creature, index) {
  creature.weapon = creature.inventory[index];
  creature.inventory.shift(index);
  return(creature);
  console.log(creature);
}

//HARRY COMMMENT!!!!!
//Not sure what instrutions 2 and 3 are easking for...my thinking in my code is that the index variable would define a weapon as an index of the inventory Array i.e. inventory[i]

//`doBattle` is a function that takes two creatures, the first of which is a hero, which deal damage to each other until one of them dies.
//1. `doBattle` should have two parameters `heroicCreature` and `creature`. You can assume that both have the same structure as your `hero` object.
//2. make a guard clause which checks if `heroicCreature` is `heroic`. If `heroicCreature` is not `heroic` return `null` from this function.
//3. while `heroicCreature` and `creature` have health above zero they take turns dealingDamage to eachother: `heroicCreature` deals damage to `creature` first. If `creature` survives it deals damage to `heroicCreature`.
//4. at the end of `doBattle` check if `heroicCreature` has health above zero; if so return it from the function. Otherwise give the user feedback about the death of their hero with a popup.


function doBattle(heroicCreature, creature) {
  if (heroicCreature.heroic !== true) {
    return null;
  }
  while (heroicCreature.health > 0 && creature.health > 0) {
    dealDamage(heroicCreature, creature);
    dealDamage(creature, heroicCreature);
  }
  if (heroicCreature.health > 0) {
    return heroicCreature.health;
    console.log(heroicCreature.health);
  }
  else window.alert(`Heroic Creature has met his match : (`);
}//HARRY COMMENT - assertion fails in the console, although this seems to work via console.log. I suspect that the syntax of the fucntion may be
//causing it to error out. I have tried a few things to resolve error but none of them have wokred in the time.

// UI

//Add a picture of a bed or an inn to your page. When it is clicked by the user the `rest` function should get called with `hero` as an argument.
//Put a console.log in your code to verify that `rest` gets called correctly.

//Add a picture of a weapon to the page. When it is clicked by the user the `pickUpItem` should get called with `hero` as a first argument.
//The second argument should be an object. The object should have a `type` key with a string value and a `damage` key with a number value (like a weapon object).
//Put a console.log in your code to verify that `pickUpItem` gets called correctly.

//Add a picture of an enemy to the page. When it gets clicked by the user the `doBattle` function should get called with `hero` as a first argument.
//The second argument should be an object (the enemy). This object needs a `health` key with a number value and a `weapon` key which is an object.
//This `weapon` object has a `damage` value which should be a number. Put a console.log in your code to verify that `doBattle` gets called correctly.

//Add a picture of a backpack When it gets clicked by the user the `equipWeapon` function should get called with `hero` as the first argument.
//The second argument should be `window.prompt()` that asks the user for the index of the weapon they want to equip.
//Put a console.log in your code to verify that `doBattle` gets called correctly.

//Link an external stylesheet and make all the pictures the same size.

//Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script

function displayStats(hero){
  var statsElement = document.getElementById('stats');
  statsElement.innerText = (`Name: ${hero.name}\nHealth: ${hero.health}\nWeapon Type: ${hero.weapon.type}\nWeapon Damage: ${hero.weapon.damage}`);
}

//Write a `displayInventory` function that iterates over your hero's inventory and writes it to the page.
//Add a couple of weapons to you hero's inventory to see if it works. Call it at the end of your script


function displayInventory(hero) {
  var inventElement = document.getElementById('invent');
  for(var i = 0; i < hero['inventory'].length; i++) {
  inventElement.innerText = (hero['inventory'][i])
  }
}//HARRY COMMENT - displayInventory is working with console.log (so I know it works), but creates an [object Object] error when passing to the innerText function.
//have looked at Google explanations with no luck in time limit. : (

//Write an `updateStats` function that calls `displayStats` and `displayInventory`.
//Call `updateStats` when a picture is clicked in addition to the function that is already being called.

function updateStats() {
  displayStats(hero);
  displayInventory(hero);
}

//Create a form that allow users to change the name of their hero.

//function submitNameChange(hero) {
//var heroSelection = inputField.value;
//if (heroSelection !== hero.name) {
//window.alert('Hero does not exist')}
//HARRY COMMENT - this is as far as I managed to get in the time
