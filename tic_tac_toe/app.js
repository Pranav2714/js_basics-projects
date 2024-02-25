let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let winMsg=document.querySelector("#win-msg");
let hidemsg=document.querySelector(".hide");
let msgcont=document.querySelector(".msg-cont");
let count =0;
let isWinner=false;

// let turn0=false;
let turnX=true;
const winPatterns=[
[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6],
];

const disableBoxes=()=>{
 for(let box of boxes){
    box.disabled=true;
 }
};
const enableBoxes=()=>{
    for(let box of boxes){
       box.disabled=false;
    }
   };
boxes.forEach((box)=>{
box.addEventListener("click",()=>{

     if(turnX===true){
        box.innerText="X";
      turnX=false;
      count++;
     }
     else{
        box.innerText="O";
        turnX=true;
        count++;
     }
     reset.addEventListener("click",()=>{
        box.innerHTML="";
        turnX=true;
        enableBoxes(); 
        msgcont.classList.add("hide");
        isWinner=false;
        count=0;
       });
    box.disabled=true;
    checkWinner();
});
});
const printWinner=(winner)=>{
    isWinner=true;
    disableBoxes();
    winMsg.innerText=`Congratulations! Player ${winner} won`;
    msgcont.classList.remove("hide");
  
};
const checkWinner=()=>{
 for(let patterns of winPatterns){
    let pos1=boxes[patterns[0]].innerText;
    let pos2=boxes[patterns[1]].innerText;
    let pos3=boxes[patterns[2]].innerText;
    if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2&& pos2==pos3){
            
             printWinner(pos1);
             
            console.log("Winner");
        }
        else {
            checkDraw();
        }
    }
}
};

const checkDraw=()=>{
 if(count===9 && isWinner===false ){
    winMsg.innerText=`OOPS! it's a DRAW`;
    msgcont.classList.remove("hide");
    count=0;
 }
}

