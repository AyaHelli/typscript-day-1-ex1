let firstname:string="Johns";
firstname="anna"
console.log(firstname);
let num:number=12
console.log(num)

let numbers:number[]=[12,15,4,7,9]
console.log(numbers);

let names:Array<string>=["john","anna","Mike"];
console.log(names);

let diffrent:any[]=["john",34,"anna",true];
console.log(diffrent);

// Array on obj
let animals:{name:string;type:string;age:number;adopted:boolean}[]=[
    {name:"Mashnoaa",age:58,type:"dog", adopted:true},
    {name:"yaser",age:45,type:"cat" ,adopted:true},
    {name:"fadwa",age:62,type:"nothing",adopted:false}
];
console.log(animals);

let people:Array<{firstname:string;age:number;email?:string}>=[
    {firstname:"john",age:7,email:"john@mail.com"},
    {firstname:"roni",age:31}
];
console.log(people);
// Loop
for (let index=0;index<numbers.length;index++){
    const element=numbers[index];
    console.log(element)
}
const result=document.getElementById("result") as HTMLElement;
console.log(result);

animals.forEach((animal)=>{
    result.innerHTML+=` 
<p> Name:${animal.name}</p>
<p> Name:${animal.age}</p>
<p> Name:${animal.type}</p>
<p> Name:${animal.adopted ? "yes" :"No"}</p>
<hr>
    `;

});
// object
let obj:{name:string; age: number }={
    name:"John",
    age:28
};
for(let[Key,value]of Object.entries(obj)){
    console.log(`${Key}:${value}`)};

// funktion
// ex1
let numm:number[]=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<numm.length;i++){
    for( let k=0; k<numm.length;k++){
   let print = document.getElementById("print")as HTMLElement ;
   print.innerHTML +=
     `${numm[i]} X ${numm[k]} = ${numm[i]*numm[k]} <br>`
     }}

