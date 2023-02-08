let first:number = 5;
let second:number = 5;
console.log(first + second);

let he:string = "hello";
let names:string = " Vova";
let string:string = he+names;
console.log(string);

let a:string="1";
let b:string="2";

console.log(Number(a) + Number(b));

let count:number = 10;
let list: number[] =[];
for(let i = 0; i <count; i++){
	list[i] = Math.random()*(10-1) +1;
}

let sum:number =0;
let minimum = list[0];
let maximum = list[0];
for(let i=0; i<count; i++){
	if(i%2==0){
		sum+= list[i];
	}
   if(list[i]>maximum){
	   maximum = list[i];
   }
	if(list[i]<minimum){
		minimum = list[i];
	}

}
console.log(sum);
let sums:number =  maximum + minimum;
console.log("min "+ minimum);
console.log("max "+ maximum);
console.log("sum "+ sums);
console.log("");
let listString:string[] =[];

let listWords:string[]=['ДОКУМЕНТАЛЬНОСТЬ','ШУТОВСКОЙ','ВЫКЛАДЫВАТЬСЯ','МЗДА','УТРАМБОВЫВАТЬСЯ'];
for(let i=0; i<5; i++){
let s= Math.floor(Math.random()*(5-0)+ 0);
	listString[i] = listWords[s]
	console.log(listString[i]);
}