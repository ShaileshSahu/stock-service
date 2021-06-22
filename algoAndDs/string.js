

function strStr(haystack, needle) {
    let count = 0,j=0;
    for (let i = 0; i < needle.length;i++){
        for(j;j<haystack.length;j++){
            if (needle[i] == haystack[j]){
             ++count;
             		console.log('break', needle[i], needle[j]);
		    break;
            }
		console.log('still running that block');
        }

        if(count==0) {
                count=-1;
                break;
        }

    }

    return count;
};

console.log(strStr("aaaaa","bba"));
