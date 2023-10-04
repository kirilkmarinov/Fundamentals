let input = [
    '18',
    '44',
];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
////////////////////////////////////////////////////////////////////////

let smsTotalAmount = Number(gets());
let minutesTotalAmount = Number(gets());

let addMinutePrice = 0.10;
let addMSMSPrice = 0.06;

let smsCount = smsTotalAmount - 20;

if (smsCount <= 0) {
    smsCount = 0;
}
let smsCost = smsCount * addMSMSPrice;


let minutesCount = minutesTotalAmount - 60;
if (minutesCount <= 0) {
    minutesCount = 0;
}
let minutesCost = minutesCount * addMinutePrice;


print(`${smsCount} additional messages for ${smsCost.toFixed(2)} levas`);

print(`${minutesCount} additional minutes for ${minutesCost.toFixed(2)} levas`);

let taxes = (smsCost + minutesCost) *0.2;

print(`${taxes.toFixed(2)} additional taxes`);

let totalBill = 12 + minutesCost + smsCost + taxes;

print(`${totalBill.toFixed(2)} total bill`);