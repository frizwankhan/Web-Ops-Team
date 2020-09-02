
document.addEventListener("DOMContentLoaded", function(event){
    var submit = document.querySelector(".bottom button");
    var q1 = document.querySelectorAll('input[name="dam"]');
    var q2 = document.querySelectorAll('input[name="river"]');
    var q3 = document.querySelectorAll('input[name="building"]');
    var q4 = document.querySelectorAll('input[name="country"]');
    var q5 = document.querySelectorAll('input[name="population"]');
    var q=[q1, q2, q3, q4, q5]
    var a=["three-gorges", "nile", "burj", "russia", "china-population"]
    var submitted_a=[" "," "," "," "," "]
    var result = document.querySelector(".result");
    var overlay = document.querySelector(".overlay")
    var cross = document.querySelector(".result .header button")
    var goback = document.querySelector(".go-back")
    var displayScore = document.querySelector("#score")
    var displayPercentage = document.querySelector("#percentage")
    var displayTotalAnswered = document.querySelector(".totalAnswered")
    var displayTotalWrong = document.querySelector(".totalWrong")
    var displayTotalCorrect = document.querySelector(".totalCorrect")
    var attempt = document.querySelector(".middle button")
    var body = document.querySelector(".body")
    var middle = document.querySelector(".middle")
    var bottom = document.querySelector(".bottom")
    var navbar = document.querySelector(".navbar")
    var countKeeper = document.querySelector(".count-keeper")
    var score = 0
    var percentage = 0
    var totalAnswered = 0
    var answerCount = 0 
    var labels = document.getElementsByTagName("input")
    var displayAnswerCount = document.querySelector(".total-answered")
    var displayTotalLeft = document.querySelector(".total-left")

    
    function count(){
        answerCount = 0
        for(let j=0; j<q.length; j++){
            for(let i=0; i<4; i++){
                if(q[j][i].checked){
                    answerCount = answerCount+1;

                }
            }
        }
        displayAnswerCount.innerHTML = answerCount.toString();
        displayTotalLeft.innerHTML = (q.length-answerCount).toString();
    }
    for(let i=0; i<labels.length; i++){
        labels[i].addEventListener("click", count);
    }
    attempt.addEventListener("click", function(){
        body.classList.remove("closed");
        bottom.classList.remove("closed");
        middle.classList.add("closed");
        navbar.classList.add("closed");
        countKeeper.classList.remove("closed")

    });
    goback.addEventListener("click", function(){
        location.reload();
    });
    cross.addEventListener("click", function(){
        location.reload()
    });
    submit.addEventListener("click", function(){
        console.log("hi")
        result.classList.remove("closed")
        overlay.classList.remove("closed")
        
        for(let j=0; j<q.length; j++){
            for(let i=0; i<4; i++){
                if(q[j][i].checked){
                    totalAnswered = totalAnswered+1
                    submitted_a[j] = q[j][i].getAttribute("id");
                }
            }
        }

        for(let i=0; i<q.length;i++){
            if (a[i]==submitted_a[i]){
                score = score+1
            }
        }
        displayScore.textContent = score.toString();
        percentage = (score/q.length)*100
        displayPercentage.textContent = percentage.toString()
        displayTotalAnswered.textContent = totalAnswered.toString()
        displayTotalCorrect.textContent = score.toString()
        displayTotalWrong.textContent = (totalAnswered-score).toString()
    })

})