let arr = [];
let x = 'X';
let o = 'O';
let player1;
let player2;
let point1 = 0;
let point2 = 0;
let count;


start();

function start() {
    count = 1;
    player1 = player1 == undefined ?  prompt('Player 1 i daxil edin?', x) : player1;
    player2 = player2 == undefined ?  prompt('Player 2 i daxil edin?', o) : player2;
    document.getElementById("show").innerHTML = `Player1 : ${player1} - ${point1} <br/> Player2 : ${player2} - ${point2} `;
    Arr();
    Table();

}



function Table() {
    let tr = "";

    for (let i = 0; i < 3; i++) {
        tr += `<tr>`;

        for (let j = 0; j < 3; j++) {
            tr += `<td onclick="Click(${i},${j})" > ${arr[i][j] == undefined ? " " : arr[i][j]} </td>`;
        }

        tr += `</tr>`;
    }

    document.getElementById("tbl").innerHTML = tr;
}


function Arr() {
    for (let i = 0; i < 3; i++) {
        arr[i] = [];
    }
}


function Click(i, j) {
    if (arr[i][j] == undefined) {
        if (count % 2 == 0) {
            arr[i][j] = o;
        } else {
            arr[i][j] = x;
        }
        count++;
        Table();
     setTimeout(() => {
        Check();
     }, 400);
    }
}


function Check() {
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] != undefined && arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2]) {
            Finish(arr[i][0]);
        }
    }
    for (let i = 0; i < 3; i++) {
        if (arr[0][i] != undefined && arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i]) {
            Finish(arr[0][i]);
        }
    };
    if (arr[0][0] != undefined && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) {
        Finish(arr[0][0]);
     }

     if (arr[0][2] != undefined && arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]) {
        Finish(arr[0][2]);
     }

     if(count == 10){
         alert('Beraber');
         start();
     }
    
}
function Finish(win){
    let netice =  win == player1 ? `${player1} won` : `${player2} won`;
    alert(netice);
    win == player1 ? point1++ : point2++;
    start();
}