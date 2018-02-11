window.onload = function loaded(){

var character;
var characterChosen = false;
var select = 0;

$("#vader").on("click", function(){
		character = "vader";
		selectEnemy(character);
		characterChosen = true;
	});
	$("#dooku").on("click", function(){
		character = "dooku";
		selectEnemy(character);
		characterChosen = true;
	});
	$("#yoda").on("click", function(){
		character = "yoda";
		selectEnemy(character);
		characterChosen = true;
	});
	$("#mace").on("click", function(){
		character = "mace";
		selectEnemy(character);
		characterChosen = true;
	});


	function selectEnemy(){  //function for moving potential enemies into a new div
		console.log(character);
		if(character == "vader" && select == 0){ // vader if character
			$("#dooku").detach();
			$("#yoda").detach();
			$("#mace").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			
			select = 1;
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append('<button id="dooku"></button>');
			$("#dooku").append("Count Dooku");
			$("#dooku").append("<div id='dookuImg'></div>");
			$("#dooku").append("<div id='dookuHP'>Count Dooku Health Points</div>");


			$(".enemy").append('<button id="yoda"></button>');
			$("#yoda").append("Yoda");
			$("#yoda").append("<div id='yodaImg'></div>");
			$("#yoda").append("<div id='yodaHP'>Yoda Health Points</div>");


			$(".enemy").append('<button id="mace"></button>');
			$("#mace").append("Mace Windu");
			$("#mace").append("<div id='maceImg'></div>");
			$("#mace").append("<div id='maceHP'>Count Dooku Health Points</div>");

		}
		if(character == "dooku" && select == 0){ //dooku if character
			$("#vader").detach();
			$("#yoda").detach();
			$("#mace").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			
			select = 1; 
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append('<button id="vader"></button>');
			$("#vader").append("Darth Vader");
			$("#vader").append("<div id='vaderImg'></div>");
			$("#vader").append("<div id='vaderHP'>Darth Vader Health Points</div>");

			$(".enemy").append('<button id="yoda"></button>');
			$("#yoda").append("Yoda");
			$("#yoda").append("<div id='yodaImg'></div>");
			$("#yoda").append("<div id='yodaHP'>Yoda Health Points</div>");

			$(".enemy").append('<button id="mace"></button>');
			$("#mace").append("Mace Windu");
			$("#mace").append("<div id='maceImg'></div>");
			$("#mace").append("<div id='maceHP'>Count Dooku Health Points</div>");
			console.log("select enemy works");
		}
		if(character == "yoda" && select ==0){ //yoda if character

			$("#vader").detach();
			$("#dooku").detach();
			$("#mace").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			
			select = 1; 
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append('<button id="vader"></button>');
			$("#vader").append("Darth Vader");
			$("#vader").append("<div id='vaderImg'></div>");
			$("#vader").append("<div id='vaderHP'>Darth Vader Health Points</div>");

			$(".enemy").append('<button id="dooku"></button>');
			$("#dooku").append("Count Dooku");
			$("#dooku").append("<div id='dookuImg'></div>");
			$("#dooku").append("<div id='yodaHP'>Count Dooku Health Points</div>");

			$(".enemy").append('<button id="mace"></button>');
			$("#mace").append("Mace Windu");
			$("#mace").append("<div id='maceImg'></div>");
			$("#mace").append("<div id='maceHP'>Count Dooku Health Points</div>");
			console.log("select enemy works");
		}
		if(character == "mace" && select == 0){ //mace if character
			$("#vader").detach();
			$("#yoda").detach();
			$("#dooku").detach();
			$('.container').append('<div id="selectEnemy">SELECT ENEMY</div>'); //make a SELECT ENEMY header
			console.log("select enemy works");
			select = 1; 
			$('.container').append('<div class="enemy"></div>');  //make a new border for enemies

			$(".enemy").append('<button id="vader"></button>');
			$("#vader").append("Darth Vader");
			$("#vader").append("<div id='vaderImg'></div>");
			$("#vader").append("<div id='vaderHP'>Darth Vader Health Points</div>");

			$(".enemy").append('<button id="dooku"></button>');
			$("#dooku").append("Count Dooku");
			$("#dooku").append("<div id='dookuImg'></div>");
			$("#dooku").append("<div id='dookuHP'>Count Dooku Health Points</div>");

			$(".enemy").append('<button id="yoda"></button>');
			$("#yoda").append("Yoda");
			$("#yoda").append("<div id='yodaImg'></div>");
			$("#yoda").append("<div id='yodaHP'>Count Dooku Health Points</div>");
		}

	} // end selectEnemy function

	

}//end widnow.onload