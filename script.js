let button = document.getElementById("btn")

button.addEventListener("click",function(){
    let word = document.getElementById("str").value;
    console.log(word);
    let count = word.length;
    console.log(count);
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML=`<h1>${count}</h1>`;
})