const input = document.getElementById('in');
const button = document.getElementById('btn');
const list = document.getElementById('list');

button.addEventListener('click', (event)=>{
    // console.log(input);
    console.log(input.value);

    const newTask = document.createElement('li');
    const innerText = document.createTextNode(input.value);

    newTask.appendChild(innerText);
    list.appendChild(newTask);

    input.value = "";
})

list.addEventListener('mouseover', (event)=>{
    // alert("hovered");
    
})