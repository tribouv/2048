var game = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
var gameTMP = game;
var compt = 0;
var score = 0;
var total = 1;
var randombot;
var okmoove = true;
var timeur = true;
var gameover = 0;
var repeat;
document.getElementById('score').innerHTML = "0";
startGame(1);

function scored(add)
{
	console.log(add);
    total = total + add;
    document.getElementById('score').innerHTML = total;

}

function boteur(param){
            for (var i = 0; i < 1; i++) {
                randombot = Math.floor(Math.random()*4+1);
                    if (randombot == 1) {MoveUp();}
                    if (randombot == 2) {MoveDown();}
                    if (randombot == 3) {MoveRight();}
                    if (randombot == 4) {MoveLeft();}
            };
            if (gameover == 0 ) {
            var repeat = setTimeout(function(){ boteur(); }, 250);
        	};
}

function checkGameOver(){
retu = false;
    for (var x = game.length - 1; x > 0; x--){
        for (var y = 0; y < game.length; y++) {
            if(game[y][x] == 0 || game[y][x] == game[y][x - 1]){
                retu = true;
            }
        }
    }
    for (var x = 0; x < game.length - 1; x++){
        for (var y = 0; y < game.length; y++) {
            if(game[y][x] == 0 || game[y][x] == game[y][x + 1]){
                 retu = true;
            }
        }
    }
    for (var y = 0; y < game.length - 1; y++){
        for (var x = 0; x < game.length; x++) {
            if(game[y][x] == 0 || game[y][x] == game[y + 1][x]){
                 retu = true;
            }
        }
    }
    for (var y = game.length - 1; y > 0; y--){
        for (var x = 0; x < game.length; x++) {
            if(game[y][x] == 0 || game[y][x] == game[y - 1][x]){
                 retu = true;
            }
        }
    }
    if(retu == false){
    	 document.getElementById('game').className = "GameoverON";
    	 document.getElementById('grid').style.opacity = "0.2";
    	 gameover = 1;
    	    
    }

}

function startGame(param){
	if (param != 1) {
		gameover = 0;
	}
	 clearInterval(repeat);
	total = 0;
	document.getElementById('score').innerHTML = total;
 	document.getElementById('game').className = "GameoverOFF";
 	document.getElementById('grid').style.opacity = "1";
    tab = 16;
    var gridgenerate ="";
    game = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
    var compt = 0;
    for (var i = 1; i <= tab; i++) {
        gridgenerate += "<div class='case' id="+i+"></div>";
    };
    document.getElementById('grid').innerHTML = gridgenerate;
    AddCase();
    AddCase();
    style();
}

function PositionRandom() {
    var nb = Math.random() * (3);
    return Math.round(nb);
};

function RandomNumber(){
    return Math.random() < 0.72 ? 2 : 4;
};


function AddCase(){
    var add = false;
    while(!add){
        var to1 = PositionRandom();
        var to2 = PositionRandom();
        if (game[to1][to2] == 0) {
            game[to1][to2] = RandomNumber();
            add = true;
        }
    }
    style();
}

function CheckRight(){
    var ret = false;
    //On bouge vers la droite
    for (var i = 0; i < 3; i++) {
        for (var x = 0; x < game.length - 1; x++) {
            for (var y = 0; y < game.length; y++) {
                if(game[y][x] != 0 && game[y][x + 1] == 0){
                    game[y][x + 1] = game[y][x];
                    game[y][x] = 0;
                    ret = true;
                }
            };
        };
    };
    //On met ensemble
    for (var x = game.length - 1; x > 0; x--){
        for (var y = 0; y < game.length; y++) {
            if(game[y][x] != 0 && game[y][x] == game[y][x - 1]){
            	scored(game[y][x] * 2);
            	console.log(game[y][x] * 2);
                game[y][x] *= 2;
                game[y][x - 1] = 0;
                ret = true;
            }
        }
    }
    //On bouge vers la droite
    for (var x = 0; x < game.length - 1; x++) {
        for (var y = 0; y < game.length; y++) {
            if(game[y][x] != 0 && game[y][x + 1] == 0){
                game[y][x + 1] = game[y][x];
                game[y][x] = 0;
                ret = true;
            }
        };
    };

    style();
    return ret;
}

function CheckLeft(){
    var ret = false;
    //On bouge vers la gauche
    for (var i = 0; i < 3; i++) {
        for (var x = game.length - 1; x > 0; x--) {
            for (var y = 0; y < game.length; y++) {
                if(game[y][x] != 0 && game[y][x - 1] == 0){
                    game[y][x - 1] = game[y][x];
                    game[y][x] = 0;
                    ret = true;
                }
            };
        };
    };
    //On met ensemble
    for (var x = 0; x < game.length - 1; x++){
        for (var y = 0; y < game.length; y++) {
            if(game[y][x] != 0 && game[y][x] == game[y][x + 1]){
            	scored(game[y][x] * 2);
            	console.log(game[y][x] * 2);
                game[y][x] *= 2;
                game[y][x + 1] = 0;
                ret = true;
            }
        }
    }
    //On bouge vers la gauche
    for (var x = game.length - 1; x > 0; x--) {
        for (var y = 0; y < game.length; y++) {
            if(game[y][x] != 0 && game[y][x - 1] == 0){
                game[y][x - 1] = game[y][x];
                game[y][x] = 0;
                ret = true;
            }
        };
    };

    style();
    return ret;
}

function CheckUp(){
    var ret = false;
    //On bouge vers le haut
    for (var i = 0; i < 3; i++) {
        for (var y = game.length - 1; y > 0; y--) {
            for (var x = 0; x < game.length; x++) {
                if(game[y][x] != 0 && game[y - 1][x] == 0){
                    game[y - 1][x] = game[y][x];
                    game[y][x] = 0;
                    ret = true;
                }
            };
        };
    };
    //On met ensemble
    for (var y = 0; y < game.length - 1; y++){
        for (var x = 0; x < game.length; x++) {
            if(game[y][x] != 0 && game[y][x] == game[y + 1][x]){
               	scored(game[y][x] * 2);
               	console.log(game[y][x] * 2);
                game[y][x] *= 2;
                game[y + 1][x] = 0;
                ret = true;
            }
        }
    }
    //On bouge vers le haut
    for (var y = game.length - 1; y > 0; y--) {
        for (var x = 0; x < game.length; x++) {
            if(game[y][x] != 0 && game[y - 1][x] == 0){
                game[y - 1][x] = game[y][x];
                game[y][x] = 0;
                ret = true;
            }
        };
    };

    style();
    return ret;
}


function CheckDown(){
    var ret = false;
    //On bouge vers le bas
    for (var i = 0; i < 3; i++) {
        for (var y = 0; y < game.length - 1; y++) {
            for (var x = 0; x < game.length; x++) {
                if(game[y][x] != 0 && game[y + 1][x] == 0){
                    game[y + 1][x] = game[y][x];
                    game[y][x] = 0;
                    //ret = true;
                }
            };
        };
    };
    //On met ensemble
    for (var y = game.length - 1; y > 0; y--){
        for (var x = 0; x < game.length; x++) {
            if(game[y][x] != 0 && game[y][x] == game[y - 1][x]){
            	scored(game[y][x] * 2);
            	console.log(game[y][x] * 2);
                game[y][x] *= 2;
                game[y - 1][x] = 0;
                ret = true;
            }
        }
    }
    //On bouge vers le bas
    for (var y = 0; y < game.length - 1; y++) {
        for (var x = 0; x < game.length; x++) {
            if(game[y][x] != 0 && game[y + 1][x] == 0){
                game[y + 1][x] = game[y][x];
                game[y][x] = 0;
                //ret = true;
            }
        };
    };

    style();
    return ret;
}


	function MoveLeft(){
		document.getElementById('gauche').style.color = "red";
		setTimeout(function(){ document.getElementById('gauche').style.color = "white"; }, 50);
	    var somethingHasMoved = false;
	    console.log("Left");
	    gameTMP = game;
	    somethingHasMoved = somethingHasMoved | CheckLeft();
	    if(somethingHasMoved) {
	        AddCase();
	    }
	    checkGameOver();
	    
	// }else {okmoove = true;}
		
};

function MoveRight(){
	document.getElementById('droite').style.color = "red";
	setTimeout(function(){ document.getElementById('droite').style.color = "white"; }, 50);
    var somethingHasMoved = false;
    console.log("Right");
    gameTMP = game;
    somethingHasMoved = somethingHasMoved | CheckRight();
    if(somethingHasMoved) {
        AddCase();
    }
    checkGameOver();
}

function MoveUp(){
	document.getElementById('haut').style.color = "red";
	setTimeout(function(){ document.getElementById('haut').style.color = "white"; }, 50);
    var somethingHasMoved = false;
    console.log("Up");
    gameTMP = game;
    somethingHasMoved = somethingHasMoved | CheckUp();
    if(somethingHasMoved) {
        AddCase();
    }
    checkGameOver();
    setTimeout
}

function MoveDown(){
	document.getElementById('bas').style.color = "red";
	setTimeout(function(){ document.getElementById('bas').style.color = "white"; }, 50);
    var somethingHasMoved = false;
    console.log("Down");
    gameTMP = game;
    somethingHasMoved = somethingHasMoved | CheckDown();
    if(somethingHasMoved) {
        AddCase();
    }
}

window.onkeyup = function(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 37:
                //-Move left
                MoveLeft();
                break;
                case 39:
                //-Move right
                MoveRight();
                break;
                case 38:
                //-Move up
                MoveUp();
                break;
                case 40:
                //-Move down
                MoveDown();
                break;
                default:
                break;
            }
        };

haut = document.getElementById("haut");
bas = element = document.getElementById("bas");
droite = element = document.getElementById("droite");
gauche = element = document.getElementById("gauche");
NG = element = document.getElementById("NG");
document.getElementById("bot").addEventListener("click", boteur);

haut.onclick =  MoveUp;
bas.onclick = MoveDown;
droite.onclick = MoveRight;
gauche.onclick = MoveLeft;
NG.onclick = startGame;

//style des cases
function style(){
    var change;
    compt = 0;
    for (var i = 0; i < game.length; i++) {
        for (var u = 0; u < game[i].length; u++) {
            if (game[i][u] > 0) 
            {
                if (game[i][u] > 2048){
                    change = 2048;
                }else{
                    change = game[i][u];
                }
                var doc = document.getElementById(compt + u + 1);
                if(doc){
                    doc.className = "case case-"+change;
                    doc.innerHTML = change;
                }
            };
            if (game[i][u] == 0) 
            {
                var doc = document.getElementById(compt + u + 1);
                if(doc){
                    doc.className = "case";
                    doc.innerHTML = "";
                }
                
            };
        };
        compt = compt + 4;
    };
};