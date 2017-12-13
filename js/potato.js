function myFunction() {
    var txt;
    var persona = prompt("Please enter a name:", "Tom");
    var personb = prompt("Please enter a second name:", "Hobbes");
    var personc = prompt("Please enter a third name", "Goofy");
    if (persona == null || person == "") {
        txt = "User cancelled the prompt.";
        } else {
        txt = "Three people are on the run from the police:" + persona + "," + personb + "," + personc + ". They come across a barn run inside to hide. They see a group of cows, chickens, and a potato sack on the floor." + persona + "runs to hide with the cows." + personb + "runs to hide with the chickens." + personc + "runs to hide in the potato sack. The police catch up and come into the barn. They walk towards the cows and ask, \"Is anybody there?\"" + persona + "goes \"Mooo mooo.\" The police think, \"Oh, it\'s just the cows. One officer hesitates, knowing she saw someone run in the barn. \"Is anybody there?\" + personb + "goes, \"cluck cluck cluck.\" they see the potato sacks on the floor. One of the cops goes up to the first sack with the brunette in it and nudges it with his foot, and the brunette goes, meow, meow really softly. The cop says, oh, its just kittens. He then nudges the sack with the redhead in it, so she goes, woof woof really softly. The cop goes, oh, its just puppies. Then the cop goes to the last sack with the blonde in it and nudges it, and she goes, POTATOES! " + persona + "! How are you today?";
        }
    document.getElementById("demo").innerHTML = txt;
}
