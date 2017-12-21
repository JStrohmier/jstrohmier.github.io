var questions = 2;
var questionsLeft = ' [' + questions + ' additional names need to be entered after this]';
var persona = prompt("Please enter a name:" + questionsLeft, "Goofy");
questions -= 1;
questionsLeft = ' [' + questions + ' additional name needs to be entered after this]';
var personb = prompt("Please enter a second name:" + questionsLeft, "Hobbes");
var personc = prompt("Please enter a third name", "Jean");
alert('All done. Move on with the joke already!');
var sentence = "<p>Three people are on the run from the police: <b>" + persona;
sentence += ", " + personb;
sentence += ", and " + personc;
sentence += ". </b><br>They come across a barn and run inside to hide. They see a group of cows, chickens, and a potato sack on the floor. <br>" + persona;
sentence += " runs to hide with the cows. <br>" +personb
sentence += " runs to hide with the chickens. <br>" + personc 
sentence += " runs to hide in the potato sack.</p> <p>The police catch up and come into the barn. They walk towards the cows and ask, \"Is anybody there?\" <br>" + persona 
sentence += " goes \"Mooo mooo.\" The police think, \"Oh, it\'s just the cows. <br>One officer hesitates, knowing she saw someone run in the barn. \"Is anybody there?\" <br>" + personb 
sentence += " goes, \"cluck cluck cluck.\" The police think, \"Oh, it\'s just the chickens. <br>The same officer hesitates, knowing she definitely saw someone run in the barn. She walks towards the potato sack and asks, \"Is anybody there?\" <br>" + 
            personc; 
sentence += ", without missing a beat, goes \"POOOOTAAAAAAATOOOOOEEEEES.\"<\p>";
document.write(sentence);
