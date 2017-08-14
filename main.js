let calculator=document.getElementById('calculator');
let button=document.getElementsByClassName('button');
let result=document.getElementById('result');
let array = [];


for(var i=0; i<button.length;i++){
  button[i].addEventListener('click', callBack);
}
function callBack(e) {
  result.textContent+=e.target.innerHTML;
  if(e.target.innerHTML === "=" ) {

    let sum = eval(array.join(""));
    
    array=[sum];
    result.textContent=sum;

  }else if (e.target.innerHTML==='clear') {
    array=[];
    result.textContent= "";
  }else {
  array.push(e.target.innerHTML)
console.log(array);
}

}
console.log(array)
