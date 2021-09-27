var question_list = ["How many continents are there?","What is the capital of India?","NG mei kaun se course padhaya jaata hai"];

var options_list = [["1.Four", "2.Three", "3.Seven", "4.Eight"],["1.Delhi", "2.Bhopal", "3.Chennai", "4.Chandigar"],["1.Software Engineering", "2.Counseling", "3.Tourism", "4.Agriculture"]];

// var answer=[3,2,1,3]

var answer=[3,1,1]
fifty_fifty = [['1.Four','3.seven'],['2.Delhi','4.Bhopal'],['1.Software Engineering','2.Counseling']];
var fifty_answer=[3,1,1]
var lifelineCount=0

while (i<question_list.length){
    console.log("(👉)your question is(👈)  ");
    console.log(i+1,question_list[i])
    var j=0;
    console.log("(👇👇)your option are(👇👇)--");
    while (j<options_list.length){
        console.log(j+1,options_list[i][j])
        j++;

    }

    var req = require("readline-sync");
    var user = req.questionInt("enter your answer \n if you want to use 5050 line you can use for this 5050 \n-----");
    // here u want 5050 life line so u can 5050 life line
    if (user==answer[i]){
        
        console.log("(🥳🥳)Congratulations your answer is correct (🥳🥳)--")
    }

    else if (user == 5050){
        if (lifelineCount == 0){
            var m = 0;
            while (m < fifty_fifty[i].length){
                console.log(m+1,fifty_fifty[i][m])
                m++;


            }

            lifelineCount++;

            var new_ = require("readline-sync");
            var user1 = new_.questionInt("enter your fifty fifty answer------");
            if(user1 == fifty_answer[i]){
                console.log('(🥳🥳) your anser is correct (🥳🥳)');
                // here u can choise right the answer 
                // then output came your answer is correct..
            }

            else {

                console.log("(🥺🥺)your option is wrong,please try to right answer(🥺)🥺)--");
                    console.log("quite");
                    break

            }


        }
        else{

            console.log("(🥺🥺)you used  all ready fifty_fifty sorry(🥺)🥺)5050");
            var new1 = require("readline-sync");
            var user2 = new1.questionInt("enter your option---");
            if(user2 ==answer [i]){
                console.log("(🥳🥳🥳)Congratulations your answers is correct-(🥳🥳🥳)--");


            }

            else {

                console.log("(🥺🥺)your option is wrong(🥺🥺)");
                    break

            }

        }

    }

    else {

        console.log("(🤦‍♂️🤦‍♂️)your answer is wrong-(🤦‍♂️🤦‍♂️)-");
            console.log("quite");
            break

    }

    i++


}








