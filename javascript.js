const gridContainer = document.querySelector("#container");
const button = document.querySelector("#grid-button");
let squareNum = 16;
let currentOpacity = 0;
randomRGBNum = () => Math.floor(Math.random()*256);
randomRGB = () => `rgb(${randomRGBNum()},${randomRGBNum()},${randomRGBNum()})`;

function createGrid(){
    document.createAttribute("class","grid-div");
    for(let i=0; i<squareNum*squareNum; i++){
        const div = document.createElement("div");
        div.setAttribute("class", "grid-div");
        gridContainer.appendChild(div);
    };
    let gridDivs = document.querySelectorAll(".grid-div");
    let squareSize = 100/squareNum;
    gridDivs.forEach(div => {
        div.style.width=`${squareSize}%`;
        div.style.height=`${squareSize}%`;
    });
    addHoverEffect(gridDivs);
};

function addHoverEffect(gridDivs){
    gridDivs.forEach(div => {
        div.addEventListener("mouseenter", function(e){
            if(currentOpacity<=0.9){
                currentOpacity += 0.1;
            };
            e.target.style.backgroundColor=randomRGB();
            e.target.style.opacity=currentOpacity;
        });
    });
    gridDivs.forEach(div => {
        div.addEventListener("mouseleave", function(e){
            e.target.style.backgroundColor=randomRGB();
            setTimeout(() => {
                e.target.style.backgroundColor="";
            }, 1500);
        });
    });
};

function cleanGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    };
    currentOpacity = 0;
};

createGrid();

button.addEventListener("click", function(){
    button.classList.add("clicked");
    squareNum = prompt("Enter the the new number of squares in each side:","0-100");
    if(squareNum>0 && squareNum<101){
        cleanGrid();
        createGrid();
    } else{
        alert("Please enter a number between 0 and 100");
    }
});
button.addEventListener("transitionend", function(){
    button.classList.remove("clicked");
});

