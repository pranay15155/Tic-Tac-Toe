let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetgame=()=>{
    turn0=true;
    for (let box of boxes) {
      box.disabled = false;
      box.innerText="";
      msgContainer.classList.add("hide");
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
        box.innerText = "O";
        turn0=false;
        box.style.color = "blue";
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const showwinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(let box of boxes){
        box.disabled=true;
    }
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
 
        if(p1!="" && p2!="" && p3!=""){
            if (p1===p2 && p2===p3 ) {
                console.log("winner",p1);
                showwinner(p2);
            }
        }
    }
}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click", resetgame);
