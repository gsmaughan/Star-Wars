window.onload = function loaded(){

var character;
var select = 0;
var defender = 0;
var defenderSelected = 0;
var dookuButton;
var vaderButton;
var maceButton;
var yodaButton;

var dookuHealthPoints = 110;
var vaderHealthPoints = 125;
var yodaHealthPoints = 100;
var maceHealthPoints = 120;

var vaderAttackPower = 10;
var dookuAttackPower = 8;
var yodaAttackPower = 9;
var maceAttackPower = 12;



	$("#vader").on("click", function(){
		
		if(select == 0){ //choose character
			character = "vader";
			selectCharacter(character);
			// select = 1;

		}
		if(select == 1){ //choose enemy
			defender = "vader";
				if(character == defender){
					return;
			}
			else{
				console.log(defender + " is the defender");
				chooseDefender(defender);
			}
		}
		if (defenderSelected == 1){
			return;
		}
		
	});
	$("#dooku").on("click", function(){
		
		if(select == 0){
			character = "dooku";
		selectCharacter(character);
		// select = 1;
		}
		if(select == 1){
			defender = "dooku";
			console.log(defender);
		
			if(character == defender){
				return;
		}
		
		console.log(defender + " is the defender on line 36");
		chooseDefender(defender);
		// select = 1;
		}
		if (defenderSelected == 1){
			return;
		}
		
		
	});
	$("#yoda").on("click", function(){
		if(select == 0){
			character = "yoda";
		selectCharacter(character);
		// select = 1;
		}
		if(select == 1){
			defender = "yoda";
			console.log(defender);
		
			if(character == defender){
				return;
		}
		
		console.log(defender + " is the defender on line 36");
		chooseDefender(defender);
		// select = 1;
		}
		if (defenderSelected == 1){
			return;
		}
		
	});
	$("#mace").on("click", function(){
		
		if(select == 0){
				character = "mace";
		selectCharacter(character);
		}
		if(select == 1){
			defender = "mace";
			if(character == defender){
				return;
		}
		
		
		console.log(defender + " is the defender on line 70");
		chooseDefender(defender);
		select = 1;
		}
		if (defenderSelected == 1){
			return;
		}
		
	});

	


	function selectCharacter(){  //function for moving potential enemies into a new div
		console.log(character + " is the character");

		if(character == "vader" && select == 0){ // vader if character

			dookuButton = $("#dooku").detach();
			yodaButton = $("#yoda").detach();
			maceButton = $("#mace").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			
			
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append(dookuButton);
			
			$(".enemy").append(yodaButton);

			$(".enemy").append(maceButton);

		}
		if(character == "dooku" && select == 0){ //dooku if character
			vaderButton = $("#vader").detach();
			yodaButton = $("#yoda").detach();
			maceButton = $("#mace").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append(vaderButton);

			$(".enemy").append(yodaButton);
			
			$(".enemy").append(maceButton);
			
		}
		if(character == "yoda" && select ==0){ //yoda if character

			vaderButton = $("#vader").detach();
			dookuButton = $("#dooku").detach();
			maceButton = $("#mace").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append(vaderButton);

			$(".enemy").append(dookuButton);
			
			$(".enemy").append(maceButton);
			
			console.log("select character works");
		}
		if(character == "mace" && select == 0){ //mace if character
			vaderButton = $("#vader").detach();
			yodaButton = $("#yoda").detach();
			dookuButton = $("#dooku").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append(vaderButton);
			
			$(".enemy").append(dookuButton);

			$(".enemy").append(yodaButton);
			
		}
		select = 1;
	} // end selectCharacter function

	function chooseDefender(defender){
		if(defenderSelected == 1){
			return;
		}

		if(defender == "dooku"){
			console.log(defender + " is the defender on line 198");
			$('.container').append('<div id="defenderTitle">DEFENDER</div>');
			$('.container').append('<div id="defender"></div>');
			$("#defender").append(dookuButton);
		}
		if(defender == "vader"){
			console.log(defender + " is the defender on line 198");
			$('.container').append('<div id="defenderTitle">DEFENDER</div>');
			$('.container').append('<div id="defender"></div>');
			$("#defender").append(vaderButton);
		}
		if(defender == "yoda"){
			console.log(defender + " is the defender on line 198");
			$('.container').append('<div id="defenderTitle">DEFENDER</div>');
			$('.container').append('<div id="defender"></div>');
			$("#defender").append(yodaButton);
		}
		if(defender == "mace"){
			console.log(defender + " is the defender on line 198");
			$('.container').append('<div id="defenderTitle">DEFENDER</div>');
			$('.container').append('<div id="defender"></div>');
			$("#defender").append(maceButton);
		}

		defenderSelected = 1;
		ready();
	}// end defender function

	function ready(){
		 $("#defender").append('<button id="attack">ATTACK</button');

			$("#attack").on("click", function(){
		
			fight(character, defender);
			// console.log("attack button works");
		
			});
	}

	function fight(){
			if(character == "vader" && defender == "dooku"){
				
				dookuHealthPoints = dookuHealthPoints - vaderAttackPower;
				vaderAttackPower = vaderAttackPower + 10;
					if (dookuHealthPoints <= 0){
						console.log("Vader health points: " + vaderHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				vaderHealthPoints = vaderHealthPoints - dookuAttackPower;
				

				
				console.log("Vader Health Points: " + vaderHealthPoints);
				console.log("Dooku Health Points: " + dookuHealthPoints);
				console.log("Vader Attack Power: " + vaderAttackPower);
			}
			if(character == "vader" && defender == "yoda"){
				
				yodaHealthPoints = yodaHealthPoints - vaderAttackPower;
				vaderAttackPower = vaderAttackPower + 10;
					if (yodaHealthPoints <= 0){
						console.log("__________________");
						console.log("Vader Attack Power: " + vaderAttackPower);
						console.log("Vader health points: " + vaderHealthPoints);
						console.log(defender + " is dead.");
						return;
					}

				vaderHealthPoints = vaderHealthPoints - yodaAttackPower;
				

				console.log("Vader Health Points: " + vaderHealthPoints);
				console.log("Yoda Health Points: " + yodaHealthPoints);
				console.log("Vader Attack Power: " + vaderAttackPower);
			}
			if(character == "vader" && defender == "mace"){

				maceHealthPoints = maceHealthPoints - vaderAttackPower;
				vaderAttackPower = vaderAttackPower + 10;
					if (maceHealthPoints <= 0){
						console.log("Vader health points: " + vaderHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				vaderHealthPoints = vaderHealthPoints - maceAttackPower;
				

				console.log("Vader Health Points: " + vaderHealthPoints);
				console.log("Mace Windu Health Points: " + maceHealthPoints);
				console.log("Vader Attack Power: " + vaderAttackPower);
			}
			if(character == "dooku" && defender == "vader"){
				
				vaderHealthPoints = vaderHealthPoints - dookuAttackPower;
				dookuAttackPower = dookuAttackPower + 8;
					if (vaderHealthPoints <= 0){
						console.log("Dooku health points: " + dookuHealthPoints)
						console.log("Dooku Attack Power: " + dookuAttackPower);
						console.log(defender + " is dead.");
						return;
					}

				dookuHealthPoints = dookuHealthPoints - vaderAttackPower;
				

				
				console.log("dooku Health Points: " + dookuHealthPoints);
				console.log("vader Health Points: " + vaderHealthPoints);
				console.log("dooku Attack Power: " + dookuAttackPower);
			}
			if(character == "dooku" && defender == "yoda"){
				
				yodaHealthPoints = yodaHealthPoints - dookuAttackPower;
				dookuAttackPower = dookuAttackPower + 8;
					if (yodaHealthPoints <= 0){
						console.log("Dooku health points: " + dookuHealthPoints)
						console.log("Dooku Attack Power: " + dookuAttackPower);
						console.log(defender + " is dead.");
						return;
					}

				dookuHealthPoints = dookuHealthPoints - yodaAttackPower;
				

				
				console.log("dooku Health Points: " + dookuHealthPoints);
				console.log("yoda Health Points: " + yodaHealthPoints);
				console.log("dooku Attack Power: " + dookuAttackPower);
			}
			if(character == "dooku" && defender == "mace"){
				
				maceHealthPoints = maceHealthPoints - dookuAttackPower;
				dookuAttackPower = dookuAttackPower + 8;
					if (maceHealthPoints <= 0){
						console.log("Dooku health points: " + dookuHealthPoints)
						console.log("Dooku Attack Power: " + dookuAttackPower);
						console.log(defender + " is dead.");
						return;
					}

				dookuHealthPoints = dookuHealthPoints - maceAttackPower;
				

				
				console.log("dooku Health Points: " + dookuHealthPoints);
				console.log("Mace Health Points: " + maceHealthPoints);
				console.log("dooku Attack Power: " + dookuAttackPower);
			}
			if(character == "yoda" && defender == "vader"){
				
				vaderHealthPoints = vaderHealthPoints - yodaAttackPower;
				yodaAttackPower = yodaAttackPower + 9;
					if (vaderHealthPoints <= 0){
						console.log("Yoda health points: " + yodaHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				yodaHealthPoints = yodaHealthPoints - vaderAttackPower;
				

				
				console.log("Yoda Health Points: " + yodaHealthPoints);
				console.log("vader Health Points: " + vaderHealthPoints);
				console.log("Yoda Attack Power: " + yodaAttackPower);
			}
			if(character == "yoda" && defender == "dooku"){
				
				dookuHealthPoints = dookuHealthPoints - yodaAttackPower;
				yodaAttackPower = yodaAttackPower + 9;
					if (dookuHealthPoints <= 0){
						console.log("Yoda health points: " + yodaHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				yodaHealthPoints = yodaHealthPoints - dookuAttackPower;
				

				
				console.log("Yoda Health Points: " + yodaHealthPoints);
				console.log("dooku Health Points: " + dookuHealthPoints);
				console.log("Yoda Attack Power: " + yodaAttackPower);
			}
			if(character == "yoda" && defender == "mace"){
				
				maceHealthPoints = maceHealthPoints - yodaAttackPower;
				yodaAttackPower = yodaAttackPower + 9;
					if (maceHealthPoints <= 0){
						console.log("Yoda health points: " + yodaHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				yodaHealthPoints = yodaHealthPoints - maceAttackPower;
				
				console.log("Yoda Health Points: " + yodaHealthPoints);
				console.log("mace Health Points: " + maceHealthPoints);
				console.log("Yoda Attack Power: " + yodaAttackPower);
			}
			if(character == "mace" && defender == "vader"){
				
				vaderHealthPoints = vaderHealthPoints - maceAttackPower;
				maceAttackPower = maceAttackPower + 9;
					if (vaderHealthPoints <= 0){
						console.log("mace health points: " + maceHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				maceHealthPoints = maceHealthPoints - vaderAttackPower;
				

				
				console.log("Mace Health Points: " + maceHealthPoints);
				console.log("vader Health Points: " + vaderHealthPoints);
				console.log("Mace Attack Power: " + maceAttackPower);
			}
			if(character == "mace" && defender == "dooku"){
				
				dookuHealthPoints = dookuHealthPoints - maceAttackPower;
				maceAttackPower = maceAttackPower + 9;
					if (dookuHealthPoints <= 0){
						console.log("mace health points: " + maceHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				maceHealthPoints = maceHealthPoints - dookuAttackPower;
				

				
				console.log("Mace Health Points: " + maceHealthPoints);
				console.log("Dooku Health Points: " + dookuHealthPoints);
				console.log("Mace Attack Power: " + maceAttackPower);
			}
			if(character == "mace" && defender == "yoda"){
				
				yodaHealthPoints = yodaHealthPoints - maceAttackPower;
				maceAttackPower = maceAttackPower + 9;
					if (yodaHealthPoints <= 0){
						console.log("mace health points: " + maceHealthPoints)
						console.log(defender + " is dead.");
						return;
					}

				maceHealthPoints = maceHealthPoints - yodaAttackPower;
				

				
				console.log("Mace Health Points: " + maceHealthPoints);
				console.log("Yoda Health Points: " + yodaHealthPoints);
				console.log("Mace Attack Power: " + maceAttackPower);
			}


	}

	

}//end widnow.onload