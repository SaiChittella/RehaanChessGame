// Chess Board
const board = document.querySelector(".board");
const letters = document.querySelector(".letters");
const numbers = document.querySelector(".numbers");

let boardLetters = [["a","b","c","d","e","f","g","h"],[1,2,3,4,5,6,7,8]];
let index=0;
let playerBlack = true;

for(let i=0; i<8; i++){
  let letter = document.createElement("li");
  letter.textContent = boardLetters[0][i];
  letters.appendChild(letter);
  let n = document.createElement("li");
  n.textContent = boardLetters[1][i];
  numbers.appendChild(n);
}
let square;

for(let i=0; i<64; i++){
  square = document.createElement("div");
  if(playerBlack) {
    square.classList.add("black");
    index++;
    playerBlack=!playerBlack;
  } else {
    square.classList.add("white");
    index++;
    playerBlack=!playerBlack;
  }
  board.appendChild(square);
  if(index===8){
    playerBlack=!playerBlack;
    index = 0;
  }
}

// Put Chess pieces
//
// let l = document.createElement("img");
// l.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTergXeEPLqMMsu60s0qIn2zvMmO0gKwizowg&usqp=CAU";
// board.appendChild(l);

// measurements to shift the pieces,
// top, left
let measurements = {
    '#white-rook-1': [87,0],
    '#white-knight-1': [87,12],
    '#white-bishop-1': [87, 25],
    '#white-queen': [87,37.5],
    '#white-king': [87,50],
    "#white-bishop-2": [87,62.5],
    "#white-knight-2": [87,75],
    "#white-rook-2": [87,87.5],
    "#white-pawns": [75.5,12.5],
}
let whitePieces = ["#white-rook-1", "#white-knight-1","#white-bishop-1","#white-queen","#white-king","#white-bishop-2","#white-knight-2","#white-rook-2"]
let whiteImages = ["ChessPieces/white-rook.png",
              "ChessPieces/white-knight.png",
              "ChessPieces/white-bishop.png",
              "ChessPieces/white-king.png",
              "ChessPieces/white-queen.png",
              "ChessPieces/white-bishop.png",
              "ChessPieces/white-knight.png",
              "ChessPieces/white-rook.png",
             ]
// let rook = document.querySelector("#white-queen");
// let rookImg = document.createElement("img");
// rookImg.src = "ChessPieces/white-queen.png";

// let temp = document.querySelector("#white-bishop-2");
// temp.style.position = "absolute";
// temp.style.top = measurements["#white-rook-1"][0] + "%";
// temp.style.top = "87%";
// temp.style.left = "50%";

// rook.appendChild(rookImg);

// show the white pieces


for(let i=0; i<whitePieces.length; i++){
  let piece = document.querySelector(whitePieces[i]);
  let pieceImg = document.createElement("img");
  pieceImg.src = whiteImages[i];


  let tempHolder = document.querySelector(whitePieces[i]);
  tempHolder.style.position = "absolute";
  tempHolder.style.top = measurements[whitePieces[i]][0] + "%";
  tempHolder.style.left = measurements[whitePieces[i]][1] + "%";

  piece.appendChild(pieceImg);
}

// show white pawns
let white = "#white-pawns-1";

// white pawn 1
let pawn1 = document.querySelector(white);
let pawnImg1 = document.createElement("img");
pawnImg1.src = "ChessPieces/white-pawn.png";

let temp1 = document.querySelector(white);
temp1.style.position = "absolute";
temp1.style.top = "75.5%";
temp1.style.left = "0.5%";
pawn1.appendChild(pawnImg1);

// white pawn 2
let pawn2 = document.querySelector("#white-pawns-2");
let pawnImg2 = document.createElement("img");
pawnImg2.src = "ChessPieces/white-pawn.png";

let temp2 = document.querySelector("#white-pawns-2");
temp2.style.position = "absolute";
temp2.style.top = "75.5%";
temp2.style.left = "13%";
pawn2.appendChild(pawnImg2);

// white pawn 3
let pawn3 = document.querySelector("#white-pawns-3");
let pawnImg3 = document.createElement("img");
pawnImg3.src = "ChessPieces/white-pawn.png";

let temp3 = document.querySelector("#white-pawns-3");
temp3.style.position = "absolute";
temp3.style.top = "75.5%";
temp3.style.left = "26%";
pawn3.appendChild(pawnImg3);

// white pawn 4
let pawn4 = document.querySelector("#white-pawns-4");
let pawnImg4 = document.createElement("img");
pawnImg4.src = "ChessPieces/white-pawn.png";

let temp4 = document.querySelector("#white-pawns-4");
temp4.style.position = "absolute";
temp4.style.top = "75.5%";
temp4.style.left = "38.5%";
pawn4.appendChild(pawnImg4);


// white pawn 5
let pawn5 = document.querySelector("#white-pawns-5");
let pawnImg5 = document.createElement("img");
pawnImg5.src = "ChessPieces/white-pawn.png";

let temp5 = document.querySelector("#white-pawns-5");
temp5.style.position = "absolute";
temp5.style.top = "75.5%";
temp5.style.left = "51%";
pawn5.appendChild(pawnImg5);


// white pawn 6
let pawn6 = document.querySelector("#white-pawns-6");
let pawnImg6 = document.createElement("img");
pawnImg6.src = "ChessPieces/white-pawn.png";

let temp6 = document.querySelector("#white-pawns-6");
temp6.style.position = "absolute";
temp6.style.top = "75.5%";
temp6.style.left = "63.5%";
pawn6.appendChild(pawnImg6);


// white pawn 7
let pawn7 = document.querySelector("#white-pawns-7");
let pawnImg7 = document.createElement("img");
pawnImg7.src = "ChessPieces/white-pawn.png";

let temp7 = document.querySelector("#white-pawns-7");
temp7.style.position = "absolute";
temp7.style.top = "75.5%";
temp7.style.left = "76%";
pawn7.appendChild(pawnImg7);


// white pawn 8
let pawn8 = document.querySelector("#white-pawns-8");
let pawnImg8 = document.createElement("img");
pawnImg8.src = "ChessPieces/white-pawn.png";

let temp8 = document.querySelector("#white-pawns-8");
temp8.style.position = "absolute";
temp8.style.top = "75.5%";
temp8.style.left = "88.5%";
pawn8.appendChild(pawnImg8);

// black pieces
let blackPieces = ["#black-rook-1", "#black-knight-1","#black-bishop-1","#black-queen","#black-king","#black-bishop-2","#black-knight-2","#black-rook-2"]
let blackImages = ["ChessPieces/black-rook.png",
              "ChessPieces/black-knight.png",
              "ChessPieces/black-bishop.png",
              "ChessPieces/black-king.png",
              "ChessPieces/black-queen.png",
              "ChessPieces/black-bishop.png",
              "ChessPieces/black-knight.png",
              "ChessPieces/black-rook.png",
             ]

for(let i=0; i<blackPieces.length; i++){
 let piece = document.querySelector(blackPieces[i]);
 let pieceImg = document.createElement("img");
 pieceImg.src = blackImages[i];
 piece.appendChild(pieceImg);
}

// show black pawns
// black pawn 1
let blackPawn1 = document.querySelector("#black-pawns-1");
let blackPawnImg1 = document.createElement("img");
blackPawnImg1.src = "ChessPieces/black-pawns.png";
blackPawn1.style.position = "absolute";
blackPawn1.style.top = "13%";
blackPawn1.style.left = "15%";
blackPawnImg1.draggable = true;

blackPawn1.appendChild(blackPawnImg1);

// white pawn 2
let blackPawn2 = document.querySelector("#black-pawns-2");
let blackPawnImg2 = document.createElement("img");
blackPawnImg2.src = "ChessPieces/black-pawns.png";
blackPawn2.style.position = "absolute";
blackPawn2.style.top = "13%";
blackPawn2.style.left = "1%";

blackPawn2.appendChild(blackPawnImg2);

// white pawn 3
let blackPawn3 = document.querySelector("#black-pawns-3");
let blackPawnImg3 = document.createElement("img");
blackPawnImg3.src = "ChessPieces/black-pawns.png";
blackPawn3.style.position = "absolute";
blackPawn3.style.top = "13%";
blackPawn3.style.left = "28%";
blackPawn3.appendChild(blackPawnImg3);

// white pawn 4
let blackPawn4 = document.querySelector("#black-pawns-4");
let blackImg4 = document.createElement("img");
blackImg4.src = "ChessPieces/black-pawns.png";
blackPawn4.style.position = "absolute";
blackPawn4.style.top = "13%";
blackPawn4.style.left = "40%";
blackPawn4.appendChild(blackImg4);

// white pawn 5
let blackPawn5 = document.querySelector("#black-pawns-5");
let blackPawnImg5 = document.createElement("img");
blackPawnImg5.src = "ChessPieces/black-pawns.png";
blackPawn5.style.position = "absolute";
blackPawn5.style.top = "13.5%";
blackPawn5.style.left = "53%";
blackPawn5.appendChild(blackPawnImg5);


// white pawn 6
let blackPawn6 = document.querySelector("#black-pawns-6");
let blackPawnImg6 = document.createElement("img");
blackPawnImg6.src = "ChessPieces/black-pawns.png";
blackPawn6.style.position = "absolute";
blackPawn6.style.top = "14.5%";
blackPawn6.style.left = "66.5%";
blackPawn6.appendChild(blackPawnImg6);


// white pawn 7
let blackPawn7 = document.querySelector("#black-pawns-7");
let blackPawnImg7 = document.createElement("img");
blackPawnImg7.src = "ChessPieces/black-pawns.png";
blackPawn7.style.position = "absolute";
blackPawn7.style.top = "14.5%";
blackPawn7.style.left = "80%";
blackPawn7.appendChild(blackPawnImg7);


// white pawn 8
let blackPawn8 = document.querySelector("#black-pawns-8");
let blackPawnImg8 = document.createElement("img");
blackPawnImg8.src = "ChessPieces/black-pawns.png";
blackPawn8.style.position = "absolute";
blackPawn8.style.top = "14.5%";
blackPawn8.style.left = "90%";
blackPawn8.appendChild(blackPawnImg8);

// Actual Game Logic


// display blue when hovering over chess pieces and get rid when not.

// white ChessPieces

// white pawns
dictOfColors = {
  "#white-pawns-1": "black",
  "#white-pawns-2": "white",
  "#white-pawns-3": "black",
  "#white-pawns-4": "white",
  "#white-pawns-5": "black",
  "#white-pawns-6": "white",
  "#white-pawns-7": "black",
  "#white-pawns-8": "white",
}
document.querySelector("#white-pawns-1").addEventListener("mouseover", highlightSquare1);
document.querySelector("#white-pawns-2").addEventListener("mouseover", highlightSquare2);
document.querySelector("#white-pawns-3").addEventListener("mouseover", highlightSquare3);
document.querySelector("#white-pawns-4").addEventListener("mouseover", highlightSquare4);
document.querySelector("#white-pawns-5").addEventListener("mouseover", highlightSquare5);
document.querySelector("#white-pawns-6").addEventListener("mouseover", highlightSquare6);
document.querySelector("#white-pawns-7").addEventListener("mouseover", highlightSquare7);
document.querySelector("#white-pawns-8").addEventListener("mouseover", highlightSquare8);
//
//
document.querySelector("#white-pawns-1").addEventListener("mouseout", unHighlightSquare1);
document.querySelector("#white-pawns-2").addEventListener("mouseout", unHighlightSquare2);
document.querySelector("#white-pawns-3").addEventListener("mouseout", unHighlightSquare3);
document.querySelector("#white-pawns-4").addEventListener("mouseout", unHighlightSquare4);
document.querySelector("#white-pawns-5").addEventListener("mouseout", unHighlightSquare5);
document.querySelector("#white-pawns-6").addEventListener("mouseout", unHighlightSquare6);
document.querySelector("#white-pawns-7").addEventListener("mouseout", unHighlightSquare7);
document.querySelector("#white-pawns-8").addEventListener("mouseout", unHighlightSquare8);


// document.querySelector("#AClass").addEventListener("mouseover", test);
// document.querySelector("#AClass").addEventListener("mouseout", test2);

// function test(){
//   document.querySelector("#" + this.id).style.backgroundColor = "blue";
// }
// function test2(){
//   document.querySelector("#" + this.id).style.backgroundColor = "";
// }

function highlightSquare1() {
  let l = document.querySelector("#white-pawns-1");
  l.style.backgroundColor = "blue";
}
function highlightSquare2() {
  let l = document.querySelector("#white-pawns-2");
  l.style.backgroundColor = "blue";
}
function highlightSquare3() {
  let l = document.querySelector("#white-pawns-3");
  l.style.backgroundColor = "blue";
}
function highlightSquare4() {
  let l = document.querySelector("#white-pawns-4");
  l.style.backgroundColor = "blue";
}
function highlightSquare5() {
  let l = document.querySelector("#white-pawns-5");
  l.style.backgroundColor = "blue";
}
function highlightSquare6() {
  let l = document.querySelector("#white-pawns-6");
  l.style.backgroundColor = "blue";
}
function highlightSquare7() {
  let l = document.querySelector("#white-pawns-7");
  l.style.backgroundColor = "blue";
}
function highlightSquare8() {
  let l = document.querySelector("#white-pawns-8");
  l.style.backgroundColor = "blue";
}

function unHighlightSquare1(){
  let l = document.querySelector("#white-pawns-1");
  l.style.backgroundColor = dictOfColors["#white-pawns-1"];
}
function unHighlightSquare2() {
  let l = document.querySelector("#white-pawns-2");
  l.style.backgroundColor = dictOfColors["#white-pawns-2"];
}
function unHighlightSquare3() {
  let l = document.querySelector("#white-pawns-3");
  l.style.backgroundColor = dictOfColors["#white-pawns-3"];
}
function unHighlightSquare4() {
  let l = document.querySelector("#white-pawns-4");
  l.style.backgroundColor = dictOfColors["#white-pawns-4"]
}
function unHighlightSquare5() {
  let l = document.querySelector("#white-pawns-5");
  l.style.backgroundColor = dictOfColors["#white-pawns-5"]
}
function unHighlightSquare6() {
  let l = document.querySelector("#white-pawns-6");
  l.style.backgroundColor = dictOfColors["#white-pawns-6"]
}
function unHighlightSquare7() {
  let l = document.querySelector("#white-pawns-7");
  l.style.backgroundColor = dictOfColors["#white-pawns-7"]
}
function unHighlightSquare8() {
  let l = document.querySelector("#white-pawns-8");
  l.style.backgroundColor = dictOfColors["#white-pawns-8"]
}

// rest of the white pieces
document.querySelector("#white-rook-1").addEventListener("mouseover", rook1);
document.querySelector("#white-knight-1").addEventListener("mouseover", knight1);
document.querySelector("#white-bishop-1").addEventListener("mouseover", bishop1);
document.querySelector("#white-queen").addEventListener("mouseover", queen);
document.querySelector("#white-king").addEventListener("mouseover", king);
document.querySelector("#white-bishop-2").addEventListener("mouseover", bishop2);
document.querySelector("#white-knight-2").addEventListener("mouseover", knight2);
document.querySelector("#white-rook-2").addEventListener("mouseover", rook2);


document.querySelector("#white-rook-1").addEventListener("mouseout", rookOff1);
document.querySelector("#white-knight-1").addEventListener("mouseout", knightOff1);
document.querySelector("#white-bishop-1").addEventListener("mouseout", bishopOff1);
document.querySelector("#white-queen").addEventListener("mouseout", queenOff);
document.querySelector("#white-king").addEventListener("mouseout", kingOff);
document.querySelector("#white-bishop-2").addEventListener("mouseout", bishopOff2);
document.querySelector("#white-knight-2").addEventListener("mouseout", knightOff2);
document.querySelector("#white-rook-2").addEventListener("mouseout", rookOff2);

function rook1() {
  document.querySelector("#white-rook-1").style.backgroundColor = "blue";
}
function knight1(){
  document.querySelector("#white-knight-1").style.backgroundColor = "blue";
}
function bishop1() {
  document.querySelector("#white-bishop-1").style.backgroundColor = "blue";
}
function queen(){
  document.querySelector("#white-queen").style.backgroundColor = "blue";
}
function king(){
  document.querySelector("#white-king").style.backgroundColor = "blue";
}
function bishop2() {
  document.querySelector("#white-bishop-2").style.backgroundColor = "blue";
}
function knight2() {
  document.querySelector("#white-knight-2").style.backgroundColor = "blue";
}
function rook2() {
  document.querySelector("#white-rook-2").style.backgroundColor = "blue";
}

function rookOff1() {
  document.querySelector("#white-rook-1").style.backgroundColor = "white";
}
function knightOff1() {
  document.querySelector("#white-knight-1").style.backgroundColor = "black";
}
function bishopOff1(){
  document.querySelector("#white-bishop-1").style.backgroundColor = "white";
}
function queenOff(){
  document.querySelector("#white-queen").style.backgroundColor = "black";
}
function kingOff(){
  document.querySelector("#white-king").style.backgroundColor = "white";
}
function bishopOff2() {
  document.querySelector("#white-bishop-2").style.backgroundColor = "black";
}
function knightOff2() {
  document.querySelector("#white-knight-2").style.backgroundColor = "white";
}
function rookOff2(){
  document.querySelector("#white-rook-2").style.backgroundColor = "black";
}

// white pieces logic
dictOfAllPieces = {
  "white-pawns-1": "pawn1",
  "white-pawns-2": "pawn2",
  "white-pawns-3": "pawn3",
  "white-pawns-4": "pawn4",
  "white-pawns-5": "pawn5",
  "white-pawns-6": "pawn6",
  "white-pawns-7": "pawn7",
  "white-pawns-8": "pawn8",
  "white-rook-1": "rook",
  "white-rook-2": "rook",
  "white-knight-1": "knight",
  "white-knight-2": "knight",
  "white-bishop-1": "bishop",
  "white-bishop-2": "bishop",
  "white-king": "king",
  "white-queen": "queen",
}
currentPositionWhite = {
  'pawn1' : {"firstMove": true, "positionColumns": "A", "positionRows": "7"},
  'pawn2': {"firstMove": true, "positionColumns": "B", "positionRows": "7"},
  'pawn3': {"firstMove": true, "positionColumns": "C", "positionRows": "7"},
  'pawn4': {"firstMove": true, "positionColumns": "D", "positionRows": "7"},
  "pawn5": {"firstMove": true, "positionColumns": "E", "positionRows": "7"},
  "pawn6": {"firstMove": true, "positionColumns": "F", "positionRows": "7"},
  "pawn7": {"firstMove": true, "positionColumns": "G", "positionRows": "7"},
  "pawn8": {"firstMove": true, "positionColumns": "H", "positionRows": "7"},
  "rook1": {"positionColumns": "A", "positionRows": "8"},
}
document.querySelector("#white-pawns-1").addEventListener("click", movePiece);
document.querySelector("#white-pawns-2").addEventListener("click", movePiece);
document.querySelector("#white-pawns-3").addEventListener("click", movePiece);
document.querySelector("#white-pawns-4").addEventListener("click", movePiece);
document.querySelector("#white-pawns-5").addEventListener("click", movePiece);
document.querySelector("#white-pawns-6").addEventListener("click", movePiece);
document.querySelector("#white-pawns-7").addEventListener("click", movePiece);
document.querySelector("#white-pawns-8").addEventListener("click", movePiece);

document.querySelector("#white-rook-1").addEventListener("click", movePiece);


let pawn;
let piece;

function movePiece(){
  pawn = document.querySelector("#" + this.id + " img")  
  // alert(this.id)
  // alert("F: " + dictOfAllPieces[this.id])
  findAllLegalMoves(dictOfAllPieces[this.id]);
  piece = this.id;
  // findAllLegalMoves("pawn1")
}

function findAllLegalMoves(currentPiece){
  // pawn regular moves 
  if(currentPiece.charAt(0) === 'p'){
    if(currentPositionWhite[currentPiece]["firstMove"]) {
      // alert("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) + 1))
      // alert("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1))

      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1)).style.border = '5px solid red';
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 2)).style.border = '5px solid red';
      currentPositionWhite[currentPiece]["firstMove"] = false;

      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1)).addEventListener("click", appendToDiv);
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 2)).addEventListener("click", appendToDiv);
    } else {
      // alert("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1))        
      document.querySelector("#bugFix").addEventListener("click", test1);
    }

    function test1() {
      // alert("H")
      // document.querySelector(".A4").style.border = "5px solid red";
      // document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1)).addEventListener("click", appendToDiv);    
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1)).style.border = '5px solid red';
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1)).addEventListener("click", appendToDiv);
    }
    
    function appendToDiv() {
      // alert(piece)
      currPiece = document.querySelector("." + this.classList);
      currentPositionWhite[currentPiece];
      let s = String(this.classList);
      // alert(currentPiece]["positionColumns"])
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1)).style.border = '';
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 1)).style.backgroundColor = '';
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]) - 2)).style.border = '';
      currentPositionWhite[currentPiece]["positionColumns"] = s.charAt(0);
      currentPositionWhite[currentPiece]["positionRows"] = s.charAt(1);
      document.querySelector("#" + piece).style.position = "absolute";
      document.querySelector("#" + piece).style.height = "100%";
      document.querySelector("#" + piece).style.width = "100%";
      document.querySelector("#" + piece).style.top = "0%";
      document.querySelector("#" + piece).style.left = "0%";

      // document.querySelector(".A5").appendChild(document.querySelector("#white-pawns-1"));
      // if(document.querySelector("#" + piece).style.backgroundColor === "black" && document.querySelector(".A5").style.backgroundColor === "black") {
      //   alert("Hello")
      // }
      // alert()
      document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]))).appendChild(document.querySelector("#" + piece));
      // document.querySelector("#" + piece).style.border = "4px solid red";        

      document.querySelector(".A1").style.backgroundColor = "black";
      let img = document.createElement("img");
      if(hasImage(document.querySelector(".A1"))) {
        img.src = "ChessPieces/black-rook.png";
        document.querySelector(".A1").appendChild(img);
      }
      // let img = document.createElement("img");
      document.querySelector(".A2").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".A2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".A2").appendChild(img);

      }

      document.querySelector(".A3").style.backgroundColor = "black";
      document.querySelector(".A4").style.backgroundColor = "white";
      document.querySelector(".A5").style.backgroundColor = "black";
      document.querySelector(".A6").style.backgroundColor = "white";
      document.querySelector(".A7").style.backgroundColor = "black";
      document.querySelector(".A8").style.backgroundColor = "white";

      if(hasImage(document.querySelector(".A8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-rook.png";
        document.querySelector(".A8").appendChild(img);
      }

      document.querySelector(".B1").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".B1"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-knight.png";
        document.querySelector(".B1").appendChild(img);
      }  
      
      document.querySelector(".B2").style.backgroundColor = "black";
      if(hasImage(document.querySelector(".B2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".B2").appendChild(img);
      }  
      
      document.querySelector(".B3").style.backgroundColor = "white";
      document.querySelector(".B4").style.backgroundColor = "black";
      document.querySelector(".B5").style.backgroundColor = "white";
      document.querySelector(".B6").style.backgroundColor = "black";
      document.querySelector(".B7").style.backgroundColor = "white";
      document.querySelector(".B8").style.backgroundColor = "black";

      if(hasImage(document.querySelector(".B8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-knight.png";
        document.querySelector(".B8").appendChild(img);
      }

      document.querySelector(".C1").style.backgroundColor = "black";
      if(hasImage(document.querySelector(".C1"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-bishop.png";
        document.querySelector(".C1").appendChild(img);
      }  
      
      document.querySelector(".C2").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".C2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".C2").appendChild(img);
      }  
      
      document.querySelector(".C3").style.backgroundColor = "black";
      document.querySelector(".C4").style.backgroundColor = "white";
      document.querySelector(".C5").style.backgroundColor = "black";
      document.querySelector(".C6").style.backgroundColor = "white";
      document.querySelector(".C7").style.backgroundColor = "black";
      document.querySelector(".C8").style.backgroundColor = "white";

      if(hasImage(document.querySelector(".C8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-bishop.png";
        document.querySelector(".C8").appendChild(img);
      }

      document.querySelector(".D1").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".D1"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-king.png";
        document.querySelector(".D1").appendChild(img);
      } 
      
      document.querySelector(".D2").style.backgroundColor = "black";
      if(hasImage(document.querySelector(".D2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".D2").appendChild(img);
      }
      
      document.querySelector(".D3").style.backgroundColor = "white";
      document.querySelector(".D4").style.backgroundColor = "black";
      document.querySelector(".D5").style.backgroundColor = "white";
      document.querySelector(".D6").style.backgroundColor = "black";
      document.querySelector(".D7").style.backgroundColor = "white";
      document.querySelector(".D8").style.backgroundColor = "black";
      
      if(hasImage(document.querySelector(".D8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-king.png";
        document.querySelector(".D8").appendChild(img);
      }

      document.querySelector(".E1").style.backgroundColor = "black";

      if(hasImage(document.querySelector(".E1"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-queen.png";
        document.querySelector(".E1").appendChild(img);
      } 
      
      document.querySelector(".E2").style.backgroundColor = "white";      
      if(hasImage(document.querySelector(".E2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".E2").appendChild(img);
      } 
            
      document.querySelector(".E3").style.backgroundColor = "black";
      document.querySelector(".E4").style.backgroundColor = "white";
      document.querySelector(".E5").style.backgroundColor = "black";
      document.querySelector(".E6").style.backgroundColor = "white";
      document.querySelector(".E7").style.backgroundColor = "black";
      document.querySelector(".E8").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".E8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-queen.png";
        document.querySelector(".E8").appendChild(img);
      }
      
      document.querySelector(".F1").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".F1"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-bishop.png";
        document.querySelector(".F1").appendChild(img);
      } 
      
      document.querySelector(".F2").style.backgroundColor = "black";
      if(hasImage(document.querySelector(".F2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".F2").appendChild(img);
      } 

      document.querySelector(".F3").style.backgroundColor = "white";
      document.querySelector(".F4").style.backgroundColor = "black";
      document.querySelector(".F5").style.backgroundColor = "white";
      document.querySelector(".F6").style.backgroundColor = "black";
      document.querySelector(".F7").style.backgroundColor = "white";
      document.querySelector(".F8").style.backgroundColor = "black";
      if(hasImage(document.querySelector(".F8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-bishop.png";
        document.querySelector(".F8").appendChild(img);
      }

      document.querySelector(".G1").style.backgroundColor = "black";

      if(hasImage(document.querySelector(".G1"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-knight.png";
        document.querySelector(".G1").appendChild(img);
      } 
      
      
      document.querySelector(".G2").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".G2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".G2").appendChild(img);
      }       

      document.querySelector(".G3").style.backgroundColor = "black";
      document.querySelector(".G4").style.backgroundColor = "white";
      document.querySelector(".G5").style.backgroundColor = "black";
      document.querySelector(".G6").style.backgroundColor = "white";
      document.querySelector(".G7").style.backgroundColor = "black";
      document.querySelector(".G8").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".G8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-knight.png";
        document.querySelector(".G8").appendChild(img);
      }
      document.querySelector(".H1").style.backgroundColor = "white";
      if(hasImage(document.querySelector(".H1"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-rook.png";
        document.querySelector(".H1").appendChild(img);
      } 
      
      document.querySelector(".H2").style.backgroundColor = "black";
      if(hasImage(document.querySelector(".H2"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/black-pawns.png";
        document.querySelector(".H2").appendChild(img);
      } 
            
      document.querySelector(".H3").style.backgroundColor = "white";
      document.querySelector(".H4").style.backgroundColor = "black";
      document.querySelector(".H5").style.backgroundColor = "white";
      document.querySelector(".H6").style.backgroundColor = "black";
      document.querySelector(".H7").style.backgroundColor = "white";
      document.querySelector(".H8").style.backgroundColor = "black";
      if(hasImage(document.querySelector(".H8"))) {
        img = document.createElement("img");
        img.src = "ChessPieces/white-rook.png";
        document.querySelector(".H8").appendChild(img);
      }
      if(document.querySelector("." + currentPositionWhite[currentPiece]["positionColumns"] + (parseInt(currentPositionWhite[currentPiece]["positionRows"]))).style.backgroundColor === "white"){
        if(dictOfColors["#" + piece] === "black"){
          dictOfColors["#" + piece] = "white";
        }
      } else {
        if(dictOfColors["#" + piece] === "white"){
          dictOfColors["#" + piece] = "black";
        }   
      }

      
      // alert("A6 Color: " + document.querySelector(".A6").style.backgroundColor)

      // document.querySelector(".A5").id = "white-pawns-1";
      // document.querySelector("#white-pawns-1").appendChild(pawn);
      // currPiece.appendChild(pawn);
    }
  } else if(currentPiece.charAt(0) === 'r'){
    
    let alphabet = ["A","B","C","D","E","F","G","H"];
    for(let i=1; i<=7; i++){
      if(document.querySelector(whitePieces[i]).contains(document.querySelector("." + alphabet[i] + 8))){
        break;
      }
      document.querySelector(".A" + i).style.border = "5px solid red";
    }
    for(let i=0; i<8; i++){
      // document.querySelector(".G8").style.border = "5px solid red";
      if(document.querySelector(whitePieces[i]).contains(document.querySelector("." + alphabet[i] + 8))){
        break;
      } else {
        document.querySelector("." + alphabet[i] + 8).style.border = "5px solid red";
      }      
    }
  }
}

function pawnReachesLast() {
  // display options
}

function hasImage(div) {
  for(let i=0; i<div.childNodes.length - 1; i++){
    if(div.childNodes[i].tagName === "IMG") {
      return false;
    }
  }
  return true;
}


// // black ChessPieces
//  
// document.querySelector("#black-pawns-8").addEventListener("mouseout", test);
//
// function test(){
//   alert("hello")
//   document.querySelector("#black-pawns-8").style.backgroundColor = "blue";
// }

/*
  Bugs to fix:
    1) Chess piece diasppearing
    2) Chess pieces appearing twice when fixing disapearing
    3) Pawn Bug: doesn't go up, button makes two highlights when dealing with two pawns

*/