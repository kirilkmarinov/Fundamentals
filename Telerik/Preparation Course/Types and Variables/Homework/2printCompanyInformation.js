let input = [
    'Telerik Academy',
'31 Al. Malinov, Sofia',
'+359 888 55 55 555',
'',
'http://telerikacademy.com/',
'Martin',
'Veshev',
'25',
'+359 2 981 981',
    
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////


print(gets());
print(`Address: ${gets()}`);
print(`Tel. ${gets()}`);
print(`Fax: ${gets()}`);
print(`Web site: ${gets()}`);
let name = gets();
let family = gets();
let age = gets();
let tel = gets();
print(`Manager: ${name} ${family} (age: ${age}, tel. ${tel})`);