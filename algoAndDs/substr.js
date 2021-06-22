function strStr(haystack, needle){
    let index = 0, i=0,j=0,jReset=0; found=0,temp='';
    
    for (i=0; i< needle.length;i++) {
        if(haystack.length==0 || haystack.length < needle.length) return -1;
        while( j < haystack.length) {
            
            if (found == 1){
                if (haystack[j] == needle[i]){
                    temp+=haystack[j];
			j++;
                    console.log(temp, needle);
                    if (temp == needle) return index;
                    break;
                } else {
                	temp='';
			index=-1;
                    found=0;
                    i=0;
                    jReset++;
			j=jReset;
		}    
            } else {
            if (haystack[j] == needle[i]){
		temp+=haystack[j];
                
		index = j;
                j++;
                found=1;
                break;
            } else {
                j++;
                index=-1;
            }    
            }
            
            
        }
    }
	
    return temp == needle ? index : -1;
};

        
      console.log(strStr("mississippi"
,"issipi" ));
