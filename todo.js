let con = document.getElementById('con');
let con2 = document.getElementById('con2');
let task = document.getElementById('task');

let list = new Object();

function add(){
	list['item' + Object.keys(list).length] = [task.value,false,Object.keys(list).length];
	display();
}

function display(){

	let string = ""
	let string2 = ""
	
console.log(list);

	Object.keys(list).forEach(function(key) {
		let index = list[key][2];

		if(list[key][1] == false){
			string = string +"<span >"+ list[key][0]+"</span>";
			string = string +
			 "<input type='checkbox' onclick='checky("+index+")' name ='item"+index+"' value=''>"+
			"<input type='button' value='delete' onclick='remove("+index+")'><br>";
		}

	});
		Object.keys(list).forEach(function(key) {
		let index = list[key][2];


		if(list[key][1] != false){
			string = string +"<span style='text-decoration: line-through '>"+ list[key][0]+"</span>";
			string = string+
			 "<input type='checkbox' onclick='checky("+index+")'  name ='item"+index+"' value='' checked>"+
			 "<input type='button' value='delete' onclick='remove("+index+")'><br>";
			string2 = string2+list[key][0]+"<br>";
		}

	});

	con.innerHTML  = string;
	
}

function checky(index){
	playSound();
	let check = list['item'+index][1]
	if(check==false){
		list['item'+index][1] = true;
	}else{
		list['item'+index][1] = false;
	}
	display();
}

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}

function remove(index){

  
	for(let i = 0; i<Object.keys(list).length; i++){

		if(index == list["item"+i][2]){
			
			alert("Index number: "+list["item"+i][2]);
			//remove function
			//list.splice(1, 1);
			//list.pop();
			//list.shift;

		}
	}
	//list.pop();
	//list.splice(1, 1);
	//list.pop();
	//list.shift;
/*
	for( var i = 0; i < Object.keys(list).length; i++){ 
   if ( list["item"+i][2] === 1) {
     list.splice(i, 1); 
     i--;
   }
}
*/

	display();
}
