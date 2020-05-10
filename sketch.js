var defaultBoxNum = 25;
var defaultRow = (600 - (defaultBoxNum - 1)) / defaultBoxNum;
var defaultColumn = (600 - (defaultBoxNum - 1)) / defaultBoxNum; 
var boxes = Math.pow(defaultBoxNum,2);

for (let i= 0; i <boxes; i++){
    let addSquares = document.createElement("div");
    addSquares.setAttribute("class","grid-item");
    addSquares.style.opacity = "0";
    addSquares.style.backgroundColor= "";
    document.querySelector("#display-area").appendChild(addSquares);
};

function boxTwo (){
    var boxNum = prompt("Enter Number of Boxes", "1-100")
    
    function removeNoder() {
      let nodeList = document.querySelectorAll(".grid-item");
      for (let i = 0; i < nodeList.length; i++){
          nodeList[i].remove();
      }

    };
    removeNoder();

    console.log(boxNum);
    
    const boxLength = (600 - (boxNum - 1)) / boxNum;
    const boxWidth = (600 - (boxNum - 1)) / boxNum;

    const totalBoxes = boxNum * boxNum;
    console.log(boxLength);
    console.log(boxWidth);
    console.log(totalBoxes);
    
    for (let i= 0; i <totalBoxes; i++){
    let addSquares = document.createElement("div");
    addSquares.setAttribute("class","grid-item");
    addSquares.style.opacity = "0";
    document.querySelector("#display-area").appendChild(addSquares);
}
    document.getElementById("display-area").style.gridTemplateColumns = `repeat(${boxNum}, ${boxLength}px`;
    
    for (let i=0; i<totalBoxes; i++){
    document.getElementsByClassName("grid-item")[i].style.width = `${boxWidth}px`;
    document.getElementsByClassName("grid-item")[i].style.height = `${boxLength}px`;
    };
    getDark();
};

function colorBoxes(){
    clearGrid();
    const newBackground = document.querySelectorAll(".grid-item");
    for (let i=0; i<newBackground.length; i++){
    newBackground[i].addEventListener("mouseenter",randomColor);
    };
};
function randomColor(e){ 
    e.currentTarget.style.backgroundColor= "#"+Math.floor(Math.random()*16777215-15).toString(16);
    e.currentTarget.style.opacity= 1;
};


function clearGrid(){
    const clearGridItems = document.querySelectorAll(".grid-item");
    for (let i=0; i<clearGridItems.length; i++){
    clearGridItems[i].style.backgroundColor="";
    clearGridItems[i].style.opacity="0";
    clearGridItems[i].removeEventListener("mouseenter", randomColor);
    clearGridItems[i].removeEventListener("mouseenter", gridDark);
    };
}

function getDark() {
    clearGrid();
    const newBackground = document.querySelectorAll(".grid-item");
    for (let i=0; i<newBackground.length; i++){
    newBackground[i].addEventListener("mouseenter", gridDark);
    };
};

function gridDark(e) {
    let newBackgroundStyle = e.currentTarget.style.backgroundColor= "rgb(0,0,0)";
    let newOpacity = e.currentTarget.style.opacity;
    console.log(newBackgroundStyle);
    newOpacity = parseFloat(newOpacity);

    if (newOpacity >=0){
        newOpacity = newOpacity +0.1;
        e.currentTarget.style.opacity = `${newOpacity}`;
    } else {
        return;
    };
};

function mono(){
    clearGrid();
    const newBackground = document.querySelectorAll(".grid-item");
    for (let i=0; i<newBackground.length; i++){
    newBackground[i].addEventListener("mouseenter", gridDark);
    }
}

var boxNumber = document.getElementById("boxSizeInput").addEventListener("click", boxTwo);
var randomColourBtn = document.getElementById("randomColor").addEventListener("click", colorBoxes);
var clearGridBtn = document.getElementById("clearGrid").addEventListener("click", clearGrid);
var monoBtn = document.getElementById("mono").addEventListener("click", mono);

getDark();