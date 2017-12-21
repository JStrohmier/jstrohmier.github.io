function myFunction() {
    var txt;
    var persona = prompt("Please enter a name:", "Tom");
    var personb = prompt("Please enter a second name:", "Hobbes");
    var personc = prompt("Please enter a third name", "Goofy");
    if (persona == null || person == "") {
        txt = "User cancelled the prompt.";
        } else {
        txt = "Three people are on the run from the police:" + persona + "," + personb + "," + personc + 
            ". They come across a barn run inside to hide. They see a group of cows, chickens, and a potato sack on the floor." + 
            persona + "runs to hide with the cows." + personb + "runs to hide with the chickens." + personc + "runs to hide in the potato sack. The police catch up and come into the barn. They walk towards the cows and ask, \"Is anybody there?\"" + persona + "goes \"Mooo mooo.\" The police think, 
    \"Oh, it\'s just the cows. One officer hesitates, knowing she saw someone run in the barn. \"Is anybody there?\"" + personb + 
    "goes, \"cluck cluck cluck.\" The police think, \"Oh, it\'s just the chickens. The same officer hesitates, knowing she definitely saw someone run in the barn. She walks towards the potato sack and asks, \"Is anybody there?\"" + 
            personc + "without missing a beat, goes \"POOOOTAAAAAAATOOOOOEEEEES.\"";
        }
    document.getElementById("demo").innerHTML = txt;
}
