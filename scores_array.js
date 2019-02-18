/*
   This $ function is semi-compatible
   with the jQuery $("#NAME") use case.
 */
var $ = function (id) {
  if(id.slice(0,1) == "#") {
    id = id.slice(1);
  }
  return document.getElementById(id);
};
var addLine = function(node, text = "") {
  var textNode = document.createTextNode(text);
  var brNode = document.createElement("br");

  node.appendChild(textNode);
  node.appendChild(brNode);
}
var clear = function(node) {
  node.innerHTML = '';
}

window.onload = function () {
    
        var entry;
        var average;
        var scores = [];
        var total = 0;
        var highScore = 0;
        var show = "The test scores:\n";

        //first use a do-while loop to get scores from user
        do {
            entry = prompt("Enter test score\n" +
                           "Or enter 999 to end entries", 999);
            entry = parseInt(entry);
            if (entry >= 0 && entry <= 100) {
                scores[scores.length] = entry;
            } else if (entry != 999){
                alert("Entry must by a valid number from 0 through 100\n" +
                      "Or enter 999 to end entries");
            }
        }
        while (entry != 999); 

        //next use a for loop to process the scores
        for (var i = 0; i < scores.length; i++) {
            total = total + scores[i];       //both are numbers so adds
            show = show + scores[i] + "\n";  //strings & numbers so concatenates
            var score = scores[i];
            if(score > highScore){
                highScore = score;
            }
        }
        //find the highest score
        //for(var j = 0; j < scores.length; j++){
           // var score = scores[j];
           // if(score > highScore){
            //    highScore = score;
                
           // }
        // }

        //then calculate the average and display
        average = parseInt(total/scores.length);
        alert(show + "\nAverage score is " + average + "\nHigh score is " + highScore);
    var main = $("#main");
    clear(main);
    addLine(main, "Your scores are: " + scores);
    addLine(main, "Your average score is: " + average);
    addLine(main);
    addLine(main, "Your highest score is: " + highScore);
    addLine(main);

}
