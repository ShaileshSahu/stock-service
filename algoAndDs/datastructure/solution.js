var coinChange = function(coins, amount) {
       coins = coins.sort(function(a, b){return a - b});

    let change=0, preserveAmount=amount;
    if (amount==0 ) return change;
    let i = coins.length-1
    let k=coins.length-1;
    while(amount>0 && k>=0){
        let partialAmount = amount - coins[i];
        if (partialAmount >=0) {
            amount = partialAmount, change++;
        }
        else {
            i--;
            if(i<0 && amount>0){
                console.log('I ran', amount, coins[i])
                k--;
                i=k;
                amount = preserveAmount;
            }
        }
    }
	console.log(amount);
	return amount>0 ? -1 : change; 
};
console.log(coinChange([186,419,83,408], 6249));
