const targetScore = Math.floor(Math.random() * (120-19) + 19);
let userScore = 0; 
const beaches = [
    {
        name: 'us',
        beachScore: 0
    },
    {
        name: 'indo',
        beachScore: 0
    },
    {
        name: 'sa',
        beachScore: 0
    },
    {
        name: 'sp',
        beachScore: 0
    },

];
console.log(targetScore);

$(document).ready(function(){
    //Set up game by generating target score and assigng random values to beaches 
    setUpGame();
    $(".beach-image").click(function(){
        let beachValue = $(this).attr("data-beachvalue");
        userScore = userScore + parseInt(beachValue);
        console.log(`${userScore}`);
        $("#user-score").text(userScore);
        if(userScore === targetScore){
            console.log(`Awesome!! You did it!`);
            $(".alert-success").attr("style", "visibility:visible");
        }else if(userScore > targetScore){
            console.log('You lose');
            $(".alert-danger").attr("style", "visibility:visible");
        }
    });


});

function setUpGame(){
    $("#target-score").text(targetScore);
    beaches.forEach(function(beach) {
        beach.beachScore = Math.floor(Math.random() * 11 + 1);
        console.log(`${beach.name}: ${beach.beachScore}` );
        $(`#${beach.name}`).attr("data-beachvalue", beach.beachScore);
        
    });

}

