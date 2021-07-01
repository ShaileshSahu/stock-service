var threeSum = function(values) {
    		let three = [];
            values = values.sort((x,y)=> x-y);
            for (let i = 0; i<values.length;i++){
                if (i!=0 && values[i] == values[i-1]) continue;
                let l = i+1;
                let r = values.length -1;
                while(l<r){
                    if (values[i]+values[l]+values[r] == 0) {
                        three.push([values[i], values[l], values[r]]);
                         ++l;
                         while(l<r && values[l] == values[l-1]) ++l;   
                    } else if (values[i] + values[l] + values[r] <0){
                        ++l;
                    } else --r;
                }
            }
            return three;
};

console.log(threeSum([-1,0,1,2,-1,-1]));
