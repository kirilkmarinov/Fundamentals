// Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}

// Examples:
// Input	                                        Output
// [
// 'Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'
//                                             ]	Hero: Hes
//                                                 level => 1
//                                                 items => Desolator, Sentinel, Antara
//                                                 Hero: Derek
//                                                 level => 12
//                                                 items => BarrelVest, DestructionSword
//                                                 Hero: Isacc
//                                                 level => 25
//                                                 items => Apple, GravityGun
// [
// 'Batman / 2 / Banana, Gun',
// 'Superman / 18 / Sword',
// 'Poppy / 28 / Sentinel, Antara'
//                                             ]	Hero: Batman
//                                                 level => 2
//                                                 items => Banana, Gun
//                                                 Hero: Superman
//                                                 level => 18
//                                                 items => Sword
//                                                 Hero: Poppy
//                                                 level => 28
//                                                 items => Sentinel, Antara


function invertory(input) {

    let hero = [];

    for (element of input) {
        let [name, level, items] = element.split(' / ');
        ///console.log(element);

        let heroPropertyes = {
            name: name,
            level: Number(level),
            items: items,
        }     
        hero.push(heroPropertyes);
    }
    //console.log(hero[2]);
    hero.sort((a,b)=> a.level-b.level);
    
    for (el of hero) {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }
}
invertory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);