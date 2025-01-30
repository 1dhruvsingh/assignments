let counter = 0;

function updateCounter(){
    console.log(counter);
    document.getElementById("counter-display").innerText=counter;
    counter++;
}

setInterval(updateCounter,1000);

document.body.innerHTML= '<h1 id="counter-display">0</h1>';