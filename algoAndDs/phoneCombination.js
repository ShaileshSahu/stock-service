function letterCombination(digits) {
	let phnCombinationObj = {
		2: ["a","b","c"],
		3: ["d","e","f"],
		4: ["g","h","i"],
		5: ["j","k","l"],
		6: ["m","n","o"],
		7: ["p","q","r","s"],
		8: ["t", "u", "v"],
		9: ["w","x","y","z"]
	};

	let providedSeries = [];
	// n
	for (let st of digits) {
		providedSeries.push(phnCombinationObj[parseInt(st)]);
	}
        let actualCombination = [];
	
	for (let i=0; i<providedSeries.length;i++) {
		if (actualCombination.length) {
		let tmp = [];
		providedSeries[i].forEach( value => {
			actualCombination.forEach(value2 => {
				console.log('value', value, value2);
				tmp.push(value2+value);
			       
			});
		});
		actualCombination = tmp;
		}else {
			providedSeries[i].forEach(value => actualCombination.push(value));
			console.log('first time',actualCombination);
		}
	}
	return actualCombination;
}


console.log(letterCombination("23"));
