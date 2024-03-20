let body = document.querySelector("body");
let mode = document.querySelector("#mode");
let boxes = document.querySelectorAll(".box");
let newgame = document.querySelector("#newgame");
let reset = document.querySelector("#reset");
let buttons = document.querySelectorAll("button");
let game = document.querySelector("#game");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");


let turnO = true;
// msgcontainer.classList.add("hide");

let currmode = "Dark Mode";
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6] // Diagonal
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(box.innerText === ""){
            if(turnO){
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
        }
        checkWinner();
    });

});

const showWinner = (winner) => {
    msg.innerText = ` Congratulations...!!! ${winner} is the winner`;
    msgcontainer.classList.remove("hide");
    for(box of boxes){
        box.disabled = true;
    }
}

const enablebox = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}

const checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
         
        if(pos1 != "" || pos2 != "" || pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                // console.log(`winner ${{pos1}}`);
                showWinner(pos1);
            }
        }
    }
    
}

const resetGame = () => {
    let turnO = true;
    enablebox();
    msgcontainer.classList.add("hide");
    msg.innerText = "Winner";
}

mode.addEventListener("click", () => {
    if(currmode === "Dark Mode"){
        mode.innerText = "Light Mode";
        mode.style.color = "black";
        mode.style.backgroundColor = "white";
        newgame.style.backgroundColor = "white";
        newgame.style.color = "black";
        game.style.backgroundColor = "white";
        reset.style.backgroundColor = "white";
        reset.style.color = "black";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        currmode = "Light Mode";
    }else if(currmode === "Light Mode"){
        mode.innerText = "Dark Mode";
        mode.style.color = "white";
        mode.style.backgroundColor = "black";
        newgame.style.backgroundColor = "black";
        newgame.style.color = "white";
        game.style.backgroundColor = "black";
        reset.style.backgroundColor = "black";
        reset.style.color = "white";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        currmode = "Dark Mode";
    } else {    
        console.log("Error");
    }});


    newgame.addEventListener("click", resetGame);
    reset.addEventListener("click", resetGame);