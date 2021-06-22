function uniqueString(str) {
	let strObj = {};
	for (let i = 0; i < str.length; i++) {
		if (strObj[str[i]]) {
			strObj[str[i]] = strObj[str[i]] + 1;
		} else strObj[str[i]] = 1;
	}

	for (let keys of Object.keys(strObj)) {
		if (strObj[keys] > 1) return false;
	}
	return true;
}

function isPermutationExist(str1, str2) {
	let str1Obj = {},
		str2Obj = {};

	for (let i = 0; i < str1.length; i++) {
		if (str1Obj[str1[i]]) {
			str1Obj[str1[i]] = str1Obj[str1[i]] + 1;
		} else str1Obj[str1[i]] = 1;
	}

	for (let i = 0; i < str2.length; i++) {
		if (str2Obj[str2[i]]) {
			str2Obj[str2[i]] = str2Obj[str2[i]] + 1;
		} else str2Obj[str2[i]] = 1;
	}

	for (let keys of Object.keys(str1Obj)) {
		if (str1Obj[keys] != str2Obj[keys]) return false;
	}
	return true;
}

function OnewayString(str1, str2) {
	for (let s2 of str2) {
		str1 = str1.replace(s2, "");
	}

	console.log(str1);
	return str1.length == 1 ? true : false;
}

function compressionString(str) {
	let strC = "",
		count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] == str[i + 1]) {
			count++;
		} else {
			count++;
			strC += str[i] + count;
			count = 0;
		}
	}
	return strC;
}

function isSubstring(str1, subStr1) {
	let found = 0,
		j = 0,
		isSubstringBoolean=true;
	for (let i = 0; i < subStr1.length; i++) {
		for (j = 0; j < str1.length; j++) {
			console.log(str1[j],subStr1[i]); 	
			if(found == 1) {
				if (str1[j] != undefined && str1[j] != subStr1[i]) {i=0; isSubStringBoolean=false;}
			} else {
			       if (str1[j] == subStr1[i]){
					found=1;
			       } 
			}


			}
	
	}

	
	return isSubstringBoolean;
}
console.log(isSubstring("shailesh",'sh'));
