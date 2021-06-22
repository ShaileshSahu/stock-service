function prefixWords(combination) {
	let prefix = "", currentCursor=0, currentCount  = combination[0].length;
	let firstLetter = combination[0];
	while(currentCount>0) {
		for(let i = 1; i<combination.length;i++){
			if (firstLetter[currentCursor] != combination[i][currentCursor]){currentCount=0;break;}
		}
		if(currentCount) prefix+=firstLetter[currentCursor];
		currentCursor++;
		currentCount--;
	}
	return prefix;
}

console.log(prefixWords(["dog","racecar","car"]));
