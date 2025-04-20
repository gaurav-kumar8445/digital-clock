let boxes = document.querySelectorAll(".box");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let newbtn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#reset-btn");


let turno = true; //playerX, playerO
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const resetgame = () =>{
    turno = true;
    enableBoxes();
    msg.innerText="";
    msgcontainer.classList.add("hide"); 
    msgcontainer.classList.remove("winner"); // Ensure winner styles are removed

};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turno) {
            box.innerText = "o";
            turno = false;

        } else {
            box.innerText = "x"
            turno = true;
        };
        box.disabled = true;
        checkWinner();
    });
});


const disableBoxes =() =>{
for(let box of boxes){
    box.disabled =true;
}
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";
    }
    };


const showWinner = (winner) =>{
msg.innerText = `congratulations, Winner is  ${winner}`
msgcontainer.classList.add('winner');
}

const checkWinner = () => {
    for (let patterns of winPatterns) {
        let pos1val = boxes [patterns[0]].innerText;
        let pos2val = boxes [patterns[1]].innerText;
        let pos3val = boxes [patterns[2]].innerText;


        if(pos1val != "" && pos2val !="" && pos3val !=""){

            if(pos1val === pos2val && pos2val === pos3val){
                // console.log("Winner", pos1val);
                showWinner(pos1val);
                disableBoxes();
                return;
            }
        }
    }
};


newbtn.addEventListener("click", resetgame);

resetbtn.addEventListener("click", resetgame);












