

const isValid = function (s) {
	let stackArray = [];

	for (let i=0;i<s.length;i++){
	stackArray.push(s[i]);
	}

	let isValid = true, isRemStack = [];
	while(stackArray.length != 0){
		const value = stackArray.pop();
		if ( value == '[') {
			let value2= isRemStack.pop();
			 if(value2 !=']'){
				return false;
			 }
		} else 
		if ( value == '{'){
			 let value2= isRemStack.pop();
			 if(value2 !='}'){
				return false;
			 }
		} else 
			
		if ( value == '('){
			 let value2= isRemStack.pop();
			 if(value2 !=')'){
				return false;
			 }
		} else {
			isRemStack.push(value);
		
		}
			
		

	}
	if(isRemStack.length) return false;
	return isValid



}



console.log(isValid('{}[]'));
