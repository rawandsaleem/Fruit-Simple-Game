// declaration of global variable to storge the object constructur Property
let fruit;

//declaration for the object constructor
function Fruit (name){
	this.name=name;

}

// object with methodes will controll the game
let StartGame={
	setGame:function(name) {
		this.choosenFruit(name);

	},
	choosenFruit : function(name){
		if (name==fruit.name){
			alert("You won \nplease refresh the page to play again!");
		}
		else {
			alert("You lost \nplease try again")
		}
	}
}

	// the function will generate randomlly the name of the fruit
	function fruitName(){
		let getFruit=document.querySelector(".fruit-name");
		let setChooseRandom=Math.floor(Math.random()*Math.floor(9));
		let setFruitName;

		switch (setChooseRandom){
			case (0) :
				fruit=new Fruit("Apple");
				break;
			case (1) :
				fruit=new Fruit("Banana");
				break;
			case (2) :
				fruit=new Fruit("Kiwi");
				break;
			case (3) :
				fruit=new Fruit("Mango");
				break;
			case (4) :
				fruit=new Fruit("Orange");
				break;
			case (5) :
				fruit=new Fruit("Pineapple");
				break;
			case (6) :
				fruit=new Fruit("Strawberry");
				break;
			case (7) :
				fruit=new Fruit("Watermelon");
				break;
			case (8) :
				fruit=new Fruit("Grape");
				break;
			
		}
		
		setFruitName=fruit.name;
		getFruit.innerHTML='<p class="text-center display-4">'+setFruitName+'</p>';
		

	}
	
