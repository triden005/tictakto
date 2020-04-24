console.log("my mega project");

var td=document.querySelectorAll("td");
var table=document.querySelector("table");
var display=document.querySelector(".display");

var turn=1;
var blue=[];
var red=[];
var gamecontrol=1;



for (var i=0;i<td.length ;i++){
	td[i].addEventListener("click",function () {
		if (gamecontrol==1){
			if (!this.classList.length){
				if (turn%2==0 ){
					this.classList.toggle("blue");
					this.classList.add("nohover");
					blue.push(parseInt(this.attributes.name.value));
				}
				else{
					this.classList.add("red");
					this.classList.add("nohover");
					red.push(parseInt(this.attributes.name.value));
				}

				turnchange();
				// console.log("change the turn "+turn);
				// console.log("clicked "+i);
				control();

			}
		}



	});
}

function turnchange () {
	table.classList.toggle("hblue");
	table.classList.toggle("hred");
	
	if(turn==5 || turn==7 || turn==9){
		if(check(red,red.length)){
			console.log("red wins");
			gamecontrol=234;
		}
		else{
			if(turn==9){
				console.log("its a draw");
				gamecontrol=404;
			}
			else
				console.log("gamegoing");
		}
	}
	else if(turn==6 || turn==8){
		if(check(blue,blue.length)){
			console.log("blue wins");
			gamecontrol=432;
		}
		else{
			console.log("game going");
		}
	
	}
	turn++;

}


function check(arr,size){
	var flag=0;
	arr.sort();
	for(var i=0;i<size-1;i++){
        for(var j=i+2;j<size;j++){
            if ((arr[i]+arr[j]*1.0)/2===(arr[i]+arr[j])/2){
                for(var k=i+1;k<j;k++){
                    if ((arr[i]+arr[j])/2===arr[k] && (arr[k]-arr[i]!=2 || arr[i]==3) &&(arr[k]-arr[i]!=1 ||arr[i]==1||arr[i]==4 ||arr[i]==7)){
                        flag=1;
                        console.log(i+" "+j);
                    }
                }
            }

        }
   }
   return flag;
}

function control () {
	if (gamecontrol!=1){
		
		if (gamecontrol==234){
			console.log("red wins");
			display.textContent="red wins!!";
			
		}

		else if (gamecontrol==432){
			console.log("blue wins");
			display.textContent="blue wins!!";
		}
		else if(gamecontrol==404){
			console.log("draw");
			display.textContent="its a draw!!"
		}
		transition(display);
	}
}


function reset(){
	table.classList.remove("hblue");
	table.classList.add("hred");
	for (var i=0;i<td.length;i++){
		td[i].classList.remove("red");
		td[i].classList.remove("blue");
		td[i].classList.remove("nohover");
		red=[];
		blue=[];
		turn=1;
		gamecontrol=1;
		display.textContent="         ";
		display.style.heigth="0px";
		display.style.fontSize="0px";

	}
}
function transition(thing){
	// for (var i = 10; i <=20; i++){
		thing.style.fontSize=25+"px";
		thing.style.height="20px";	
	
	// }

}