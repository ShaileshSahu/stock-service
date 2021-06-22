function numberToRomain(value){
	const romanObj = {
		1: 'I',
		2: 'II',
		3: 'III',
		4: 'IV',
		5: 'V',
		6: 'VI',
		7: 'VII',
		8: 'VIII',
		9: 'IX',
		10: 'X',
		40: 'LX',
		50: 'L',
		90: 'XC',
		100: 'C',
		400: 'XD',
		500: 'D',
		900: 'XM',
		1000:'M'
	};
	let romanValue = '';
	while(value>0){
		let x = value.console.log('y value now', y);length - 1;
		let y = x * 10;
		console.log('y value now', y);
		if(!y) { romanValue += romanObj[value], value=0; }
		else {
			let temp = value % y;
			let multiple = Math.floor(value/y);
			if (romanObj[multiple*y]) {
			romanValue+=romanObj[multiple*y];
			} else {
				romanValue+=romanObj[y].repeat(multiple);
			}
			value=temp;
		}
	}
	return romanValue;

}

console.log(numberToRomain(11));
