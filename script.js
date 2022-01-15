const input = document.getElementById('in');
const button = document.getElementById('btn');
const list = document.getElementById('list');
let tempObj;

button.addEventListener('click', (event)=>{
    const newTask = document.createElement('li');
    const innerText = document.createTextNode(input.value);

    newTask.appendChild(innerText);
    list.appendChild(newTask);

    input.value = "";
})

list.addEventListener('mousemove', (event)=>{
    if(event.target.tagName == 'LI' && !event.target.classList.contains('finished')){
        event.target.classList.add('getting-finished');
    }

    if(event.target.tagName == 'LI' && event.target.classList.contains('finished')){
        event.target.classList.add('revive-again');
    }
})

list.addEventListener('mouseout', (event)=>{
    if(event.target.tagName == 'LI'){
        event.target.classList.remove('getting-finished', 'revive-again');
    }
})

list.addEventListener('click', (event)=>{
    if(event.target.tagName == 'LI' && event.target.classList.contains('finished')){
        event.target.classList.remove('finished');
    } else {
        event.target.classList.add('finished');
    }
})