function sum(values){
	let arr = [];
	for (let i = 0 ; i < values.length; i++) {
		for (let j =i+1; j < values.length; j++) {
			for (let k = j+1; k< values.length; k++){
			 if (values[i]+values[j]+values[k] == 0) {
				let should = true;	
				arr.forEach( b => {
					let x = [...b];
					let a = x.indexOf(values[i]);
					if ( a != -1) {
					 x.splice(a,1);
						a = x.indexOf(values[j]);
						if (a !=-1) {
					 x.splice(a,1);
						a = x.indexOf(values[k]);
if(a!=-1){should=false}					
						}
					}

				});	
				 if(should)
				 	arr.push([values[i],values[j], values[k]]);
			 }
			}
		}
	}
	return arr;
}

//
console.log(sum([-1,0,1,2,-1,-4]))


console.log(sum([-1,0,1,2,-1,-4]));
// T 
// // THIS
console.log(sum([-1,0,1,2,-1,-4]));
// T ciw console.log(sum([1,0,1,-2,-1,-4]));
//dadlkdsdalksaddlksdasdaskl
consoelll.log(sum([-1,0,1,2,-1,-4]));
// T FIRIIIIIIIIIIIIIST console.log(sum([-1,0,1,2,-1,-4]));
// // HIS IS TYE FIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]));
console.log(sum([-1,0,1,2,-1,-4]));
// TFIRST  console.log(sum([-1,0,1,2,-1,-4]));
// // THIS IW T.EFIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]))FIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]))FIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]))FIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]))FIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]))FIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]));;;;;; 
console.log(sum([-1,0,1,2,-1,-4]));
// T FIRST console.log(sum([-1,0,1,2,-1,-4]));
// // THIS IS TYE FIRST ELEMENT console.log(sum([-1,0,1,2,-1,-4]));
