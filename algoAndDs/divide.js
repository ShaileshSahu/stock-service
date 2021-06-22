const divide = (dividend, divisor)=>{
	let dividendString = dividend.toString().split('-'),
		divisorString = divisor.toString().split('-');
	let diviSign='', divisorSign='';
	if (divisorString[0] == ''){
		divisor=parseInt(divisorString[1]);
		diviSign = '-';
	
	} 

	if (dividendString[0] == ''){
		dividend=parseInt(dividendString[1]);
		divisorSign= '-';
		dividend = dividend > 2147483648 ? 2147483648 : dividend;
	}
            



	
	let r = 0;
	while(dividend >= divisor){
		dividend = dividend-divisor;
		r++;
	}
	return (r ==0 || (diviSign == '' && divisorSign == '') || (diviSign == '-' && divisorSign == '-'))? (r> 2147483648)?2147483648:r)  :  (r> 2147483648)?-2147483648:-r);
}


console.log(divide(-2147483648,-1))
