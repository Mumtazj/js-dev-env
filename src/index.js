import numeral from 'numeral';

const couresValue = numeral(1000).format('$0,0.00');
console.log(`${couresValue}`);
