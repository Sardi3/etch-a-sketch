for(let i=0; i<16*16; i++){
    const div = document.createElement("div");
    div.setAttribute("class", "grid-div");
    document.querySelector("#container").appendChild(div);
};

let gridDivs = document.querySelectorAll(".grid-div");

gridDivs.forEach(div => {
    div.addEventListener("mouseenter", function(e){
        e.target.style.backgroundColor="#ff7b25";
    });
});

gridDivs.forEach(div => {
    div.addEventListener("mouseleave", function(e){
        e.target.style.backgroundColor="#feb236";
        setTimeout(() => {
            e.target.style.backgroundColor="";
        }, 1500);
    });
});