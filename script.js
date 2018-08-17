function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function changeCircle(index) {
        const bottom =  parseInt(Math.random()*40); 
        const left =  parseInt(Math.random()*200);
        const right =  parseInt(Math.random()*200); 
        const divX = document.querySelector(`#div-${index}`); 

        divX.style.bottom = `${bottom}vh`;
        divX.style.right = `${right}vh`;
        divX.style.left = `${left}vh`;

        const height = getRandomInt (40 ,100);
  

        // divX.innerHTML = height;

        divX.style.height =`${height}px`;
        divX.style.width =`${height}px`;
        // divX.style["font-size"] = `${height/3}px`;
        divX.style["border-width"] = `${height/50}px`;

        const red = parseInt(Math.random() *256 ); 
        const green = parseInt(Math.random() *256 ); 
        const blue = parseInt(Math.random() *256 ); 

        divX.style["border-color"] =` rgb(${0}, ${green}, ${0})`;
        // divX.style.color =` rgb(${red}, ${green}, ${blue})`;
        // divX.style.background =` rgb(${red}, ${green}, ${blue})`;
      
}
function initialize() {
    let circleContainer = document.querySelector("#circle-container");

    for (let i=0; i < 20; i++){
        circleContainer.innerHTML +=`<div id="div-${i}" class="circle" style="background-image:url('images/img.jpg')"></div>`
        changeCircle(i);

        setInterval (function(){
            changeCircle(i);
        } , 2000)
}
}


