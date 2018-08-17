function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function changeCircle(index) {
       
        const divX = document.querySelector(`#div-${index}`); 
        const height = getRandomInt (50 ,100);

        divX.style.bottom = `${ parseInt(Math.random()*22)}vw`; 
        divX.style.right = `${ parseInt(Math.random()*100)}vw`;


        divX.style.height =`${height}px`;
        divX.style.width =`${height}px`;
        divX.style["border-width"] = `${height/50}px`;

        const red = parseInt(Math.random() *256 ); 
        const green = parseInt(Math.random() *256 ); 
        const blue = parseInt(Math.random() *256 ); 

        divX.style["border-color"] =` rgb(${0}, ${green}, ${0})`;
      
}
function initialize() {
    let circleContainer = document.querySelector("#circle-container");

    for (let i=0; i < 14; i++){
        circleContainer.innerHTML +=`<div id="div-${i}" class="circle" style="background-image:url('images/img.jpg')"></div>`
        changeCircle(i);

        setInterval (function(){
            changeCircle(i);
        } , 2000)
}
}


