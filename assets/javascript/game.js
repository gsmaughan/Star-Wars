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

var attackButton;



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
			if(defenderSelected > 1){

				$("#defender").append(dookuButton);
				fight();
				
			}
			else{
				$('.container').append('<div id="defenderTitle">DEFENDER</div>');
				$('.container').append('<div id="defender"></div>');
				$("#defender").append(dookuButton);
				}
			}
			
		if(defender == "vader"){
			console.log(defender + " is the defender on line 198");
			if(defenderSelected > 1){

				$("#defender").append(vaderButton);
				fight();
				
			}
			else{
				$('.container').append('<div id="defenderTitle">DEFENDER</div>');
				$('.container').append('<div id="defender"></div>');
				$("#defender").append(vaderButton);
			}
			
		}
		if(defender == "yoda"){
			console.log(defender + " is the defender on line 198");
			if(defenderSelected > 1){

				$("#defender").append(yodaButton);
				fight();
				
			}
			else{
				$('.container').append('<div id="defenderTitle">DEFENDER</div>');
				$('.container').append('<div id="defender"></div>');
				$("#defender").append(yodaButton);
				}
			}
			
		if(defender == "mace"){
			console.log(defender + " is the defender on line 198");
			if(defenderSelected > 1){

				$("#defender").append(maceButton);
				fight();
				
			}
			else{
				$('.container').append('<div id="defenderTitle">DEFENDER</div>');
				$('.container').append('<div id="defender"></div>');
				$("#defender").append(maceButton);
				}

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
				if(defenderSelected >= 2){
					vaderAttackPower = vaderAttackPower + 10;
					if (dookuHealthPoints <= 0){
						dookuButton = $("#dooku").detach();
						console.log("Vader health points: " + vaderHealthPoints)
						console.log(defender + " is dead.");
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					vaderHealthPoints = vaderHealthPoints - dookuAttackPower;
					$("#vaderHP").text(vaderHealthPoints);
					
				
					dookuHealthPoints = dookuHealthPoints - vaderAttackPower;
					$("#dookuHP").text(dookuHealthPoints);

					vaderAttackPower = vaderAttackPower + 10;
					if (dookuHealthPoints <= 0){
						dookuButton = $("#dooku").detach();
						console.log("Vader health points: " + vaderHealthPoints)
						console.log(defender + " is dead.");
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
				
			}
			if(character == "vader" && defender == "yoda"){
				if(defenderSelected >= 2){
					vaderAttackPower = vaderAttackPower + 10;
					if (yodaHealthPoints <= 0){
						yodaButton = $("#yoda").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					vaderHealthPoints = vaderHealthPoints - yodaAttackPower;
					$("#vaderHP").text(vaderHealthPoints);
					
				
					yodaHealthPoints = yodaHealthPoints - vaderAttackPower;
					$("#yodaHP").text(yodaHealthPoints);

					vaderAttackPower = vaderAttackPower + 10;
					if (yodaHealthPoints <= 0){
						yodaButton = $("#yoda").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "vader" && defender == "mace"){

				if(defenderSelected >= 2){
					vaderAttackPower = vaderAttackPower + 10;
					if (maceHealthPoints <= 0){
						maceButton = $("#mace").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					vaderHealthPoints = vaderHealthPoints - maceAttackPower;
					$("#vaderHP").text(vaderHealthPoints);
					
				
					maceHealthPoints = maceHealthPoints - vaderAttackPower;
					$("#maceHP").text(maceHealthPoints);

					vaderAttackPower = vaderAttackPower + 10;
					if (maceHealthPoints <= 0){
						maceButton = $("#mace").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "dooku" && defender == "vader"){
				
				if(defenderSelected >= 2){
					dookuAttackPower = dookuAttackPower + 10;
					if (vaderHealthPoints <= 0){
						vaderButton = $("#vader").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					dookuHealthPoints = dookuHealthPoints - vaderAttackPower;
					$("#dookuHP").text(dookuHealthPoints);
					
				
					vaderHealthPoints = vaderHealthPoints - dookuAttackPower;
					$("#vaderHP").text(vaderHealthPoints);

					dookuAttackPower = dookuAttackPower + 10;
					if (vaderHealthPoints <= 0){
						vaderButton = $("#vader").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "dooku" && defender == "yoda"){
				
				if(defenderSelected >= 2){
					dookuAttackPower = dookuAttackPower + 10;
					if (yodaHealthPoints <= 0){
						yodaButton = $("#yoda").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					dookuHealthPoints = dookuHealthPoints - yodaAttackPower;
					$("#dookuHP").text(dookuHealthPoints);
					
				
					yodaHealthPoints = yodaHealthPoints - dookuAttackPower;
					$("#yodaHP").text(yodaHealthPoints);

					dookuAttackPower = dookuAttackPower + 10;
					if (yodaHealthPoints <= 0){
						yodaButton = $("#yoda").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "dooku" && defender == "mace"){
				
				if(defenderSelected >= 2){
					dookuAttackPower = dookuAttackPower + 10;
					if (maceHealthPoints <= 0){
						maceButton = $("#mace").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					dookuHealthPoints = dookuHealthPoints - maceAttackPower;
					$("#dookuHP").text(dookuHealthPoints);
					
				
					maceHealthPoints = maceHealthPoints - dookuAttackPower;
					$("#maceHP").text(maceHealthPoints);

					dookuAttackPower = dookuAttackPower + 10;
					if (maceHealthPoints <= 0){
						maceButton = $("#mace").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "yoda" && defender == "vader"){
				
				if(defenderSelected >= 2){
					yodaAttackPower = yodaAttackPower + 10;
					if (vaderHealthPoints <= 0){
						vaderButton = $("#vader").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					yodaHealthPoints = yodaHealthPoints - vaderAttackPower;
					$("#yodaHP").text(yodaHealthPoints);
					
				
					vaderHealthPoints = vaderHealthPoints - yodaAttackPower;
					$("#vaderHP").text(vaderHealthPoints);

					yodaAttackPower = yodaAttackPower + 10;
					if (vaderHealthPoints <= 0){
						vaderButton = $("#vader").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "yoda" && defender == "dooku"){
				
				if(defenderSelected >= 2){
					yodaAttackPower = yodaAttackPower + 10;
					if (dookuHealthPoints <= 0){
						vaderButton = $("#vader").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					yodaHealthPoints = yodaHealthPoints - dookuAttackPower;
					$("#yodaHP").text(yodaHealthPoints);
					
				
					dookuHealthPoints = dookuHealthPoints - yodaAttackPower;
					$("#dookuHP").text(dookuHealthPoints);

					yodaAttackPower = yodaAttackPower + 10;
					if (vaderHealthPoints <= 0){
						dookuButton = $("#dooku").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "yoda" && defender == "mace"){
				
				if(defenderSelected >= 2){
					yodaAttackPower = yodaAttackPower + 10;
					if (maceHealthPoints <= 0){
						maceButton = $("#mace").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					yodaHealthPoints = yodaHealthPoints - maceAttackPower;
					$("#yodaHP").text(yodaHealthPoints);
					
				
					maceHealthPoints = maceHealthPoints - yodaAttackPower;
					$("#maceHP").text(maceHealthPoints);

					yodaAttackPower = yodaAttackPower + 10;
					if (maceHealthPoints <= 0){
						maceButton = $("#mace").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "mace" && defender == "vader"){
				
				if(defenderSelected >= 2){
					maceAttackPower = maceAttackPower + 12;
					if (vaderHealthPoints <= 0){
						vaderButton = $("#vader").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					maceHealthPoints = maceHealthPoints - vaderAttackPower;
					$("#maceHP").text(maceHealthPoints);
					
				
					vaderHealthPoints = vaderHealthPoints - maceAttackPower;
					$("#vaderHP").text(vaderHealthPoints);

					maceAttackPower = maceAttackPower + 12;
					if (vaderHealthPoints <= 0){
						vaderButton = $("#vader").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "mace" && defender == "dooku"){
				
				if(defenderSelected >= 2){
					maceAttackPower = maceAttackPower + 12;
					if (dookuHealthPoints <= 0){
						dookuButton = $("#dooku").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					maceHealthPoints = maceHealthPoints - dookuAttackPower;
					$("#maceHP").text(maceHealthPoints);
					
				
					dookuHealthPoints = dookuHealthPoints - maceAttackPower;
					$("#dookuHP").text(dookuHealthPoints);

					maceAttackPower = maceAttackPower + 12;
					if (dookuHealthPoints <= 0){
						dookuButton = $("#dooku").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}
			if(character == "mace" && defender == "yoda"){
				
				if(defenderSelected >= 2){
					maceAttackPower = maceAttackPower + 12;
					if (yodaHealthPoints <= 0){
						yodaButton = $("#yoda").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
						}
					}

				else{
					maceHealthPoints = maceHealthPoints - yodaAttackPower;
					$("#maceHP").text(maceHealthPoints);
					
				
					yodaHealthPoints = yodaHealthPoints - maceAttackPower;
					$("#yodaHP").text(yodaHealthPoints);

					maceAttackPower = maceAttackPower + 12;
					if (yodaHealthPoints <= 0){
						yodaButton = $("#yoda").detach();
						defenderSelected = 2;
						 attackButton = $("#attack").detach();
						return;
					}

				}
			}


	}

	

}//end widnow.onload