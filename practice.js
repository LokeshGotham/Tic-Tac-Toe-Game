let boxes = document.querySelectorAll(".boxstyling");
let winnerContainer = document.querySelector(".winner-container");
let winnerMsg = document.querySelector(".winner-msg");
let newGameButton = document.querySelector("#NewGame");
let resetGameButton = document.querySelector("#resetButton");


let turn0=true;

let winnerPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const enableButtons=()=>{
    for(let box of boxes){
        box.innerHTML="";
        box.disabled=false;
        turn0=true;
    }
}
const disableButtons=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const resetGame =()=>{
    winnerContainer.classList.add("hide");
    enableButtons();
}

const checkDraw =()=>{

    for(let box of boxes){
        for(let pattern of winnerPatterns){
            console.log(pattern)        
        if (boxes[pattern[0]].innerHTML !== boxes[pattern[1]].innerHTML &&
            boxes[pattern[1]].innerHTML !== boxes[pattern[2]].innerHTML &&           
            
            boxes[0].innerText !== "" &&
            boxes[1].innerText !== "" &&
            boxes[2].innerText !== "" &&
            boxes[3].innerText !== "" &&
            boxes[4].innerText !== "" &&
            boxes[5].innerText !== "" &&
            boxes[6].innerText !== "" &&
            boxes[7].innerText !== "" &&
            boxes[8].innerText !== ""
        ){
            winnerMsg.innerHTML = `Oops!!! ,  Game is Drawn!!!!`
            winnerContainer.classList.remove("hide");
            disableButtons();
        }
    }
    }
     }


for(let box of boxes){
    box.addEventListener("click" , ()=>{
        if(turn0){
            box.innerHTML = "X";
            turn0=false;
        }
        else{
            box.innerHTML = "O";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        checkDraw();
    })
}

const showWinner = (winner) =>{
    winnerMsg.innerHTML = `Congratualtions ,  winner is , ${winner}`
    winnerContainer.classList.remove("hide");
    disableButtons();
}

const checkWinner = ()=>{
    for(let pattern of winnerPatterns){

        let pos1Val=boxes[pattern[0]].innerHTML;
        let pos2Val=boxes[pattern[1]].innerHTML;
        let pos3Val=boxes[pattern[2]].innerHTML;

        if(pos1Val!== "" , pos2Val!== "" , pos3Val!== "" ){
        if(pos1Val === pos2Val && pos2Val === pos3Val)
        {
            console.log("winner is + pos1")
            showWinner(pos1Val);
        }
    }
    }
}

newGameButton.addEventListener("click" , resetGame)
resetGameButton.addEventListener("click" , resetGame)



























// let boxes = document.querySelectorAll(".boxstyling");
// let winnermsg = document.querySelector(".winner-msg");

// let turn0=true;

// let winPatterns = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];

// for(let box of boxes){
//     box.addEventListener("click" , ()=>{
//         if(turn0){
//             box.innerText = "X";
//             turn0=false;
//         } 
//         else{
//             box.innerText = "O";
//             turn0=true;
//         }
//         box.disabled= true;
//         checkWinner();
//     }
// ) 
// }



// const checkWinner = ()=>{
//     for(let pattern of winPatterns){
//         if(boxes[pattern[0]].innerHTML!=="" && boxes[pattern[1]].innerHTML!== "" && boxes[pattern[2]].innerHTML!== "")
//             {
//             if(boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML=== boxes[pattern[2]].innerHTML)
//                 {
//                     winnermsg.innerText = " Hurrah!!! Congratulations Winner is " + boxes[pattern[0]].innerHTML + "/n loser is " ;
//                 }
//             }
// }
// }



// // const checkDraw = ()=>{
// //     for(let pattern of winPatterns){
// //         if(boxes[pattern[0]].innerHTML!=="" && boxes[pattern[1]].innerHTML!== "" && boxes[pattern[2]]!== ""){
// //             if(boxes[pattern[0]].innerHTML !== boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML !== boxes[pattern[2]].innerHTML)
// //                 {
// //                  console.log("winner is " , boxes[pattern[0]].innerHTML )
// //                 }
// //         }
// // // }
// // }

// // const checkDraw = ()=>{
// //     for(let pattern of winPatterns){
// //         if(boxes[pattern[0]].innerHTML!=="" && boxes[pattern[1]].innerHTML!== "" && boxes[pattern[2]]!== ""){
// //             if(boxes[pattern[0]].innerHTML !== boxes[pattern[1]].innerHTML && boxes[pattern[1]].innerHTML != boxes[pattern[2]].innerHTML){
// //                 console.log("Oops!!! Game is drawn")
// //             }
// //         }
// //     }
// // }




// // elseif()
// // {
// //     console.log("draw")
// // }

// // boxes[pattern[0]].innerHTML === boxes[pattern[1]].innerHTML === boxes[pattern[2]].innerHTML


//         // &&
//         // boxes[pattern[0]].innerText!=="" 
//         // && 
//         // boxes[pattern[1]].innerText!=="" 
//         // && 
//         // boxes[pattern[2]].innerText!=="")
//         // {
//         // console.log("winner");
//         // }
//         // else{
            
//         // }
       
        

