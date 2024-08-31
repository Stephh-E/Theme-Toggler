

function allowDrop(event){
    event.preventDefault();
}

function DragEvent(event){
    event.dataTransfer.setData("text", event.target.id);

}

function drop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

let diceElement = document.getElementById("diceImage");
diceElement.addEventListener("dragstart", (event) => DragEvent(event));
diceElement.draggable = true;

let diceRollingArea = document.getElementById("diceRollingArea");
