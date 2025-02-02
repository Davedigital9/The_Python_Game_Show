document.addEventListener("DOMContentLoaded", () => {
    const start_btn = document.querySelector(".start_btn button");
    const info_box = document.querySelector(".info_box");
    const exit_btn = info_box.querySelector(".buttons .quit");
    const continue_btn = info_box.querySelector(".buttons .restart");
    const quiz_box = document.querySelector(".quiz_box");
    const timeCount = quiz_box.querySelector(".timer .timer_sec");
    const timeLine = quiz_box.querySelector("header .time_line");
    const timeOff = quiz_box.querySelector("header .time_text");

    const option_list = document.querySelector(".option_list");

    //on click of Start Quiz
    start_btn.onclick = () => {
        info_box.classList.add("activeInfo"); //show the info box
    };

    //on click of Exit button
    exit_btn.onclick =  ()=>{
        info_box.classList.remove("activeInfo"); //close the info box
    };

    //on click of Continue button
    continue_btn.onclick =  ()=>{
        info_box.classList.remove("activeInfo"); //close the info box
        quiz_box.classList.add("activeQuiz"); //show the Quiz box
        showQuestions(0);
        queCounter(1);
        startTimer(20);
        startTimerLine(0);
    };

    //dependencies
    let que_count = 0;
    let que_numb = 1;
    let counter;
    let counterLine;
    let timeValue = 20;
    let widthValue = 0;
    let userScore = 0;

    const next_btn = quiz_box.querySelector(".next_btn");
    const result_box = document.querySelector(".result_box");
    const restart_quiz = result_box.querySelector(".buttons .restart");
    const quit_quiz = result_box.querySelector(".buttons .quit");


    restart_quiz.onclick = ()=>{
        quiz_box.classList.add("activeQuiz");
        result_box.classList.remove("activeResult");
        let que_count = 0;
        let que_numb = 1;
        let timeValue = 20;
        let widthValue = 0;
        let userScore = 0;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left";    
    }

    quit_quiz.onclick = ()=>{
        window.location.reload();
    }

    //if next button is clicked
    next_btn.onclick = ()=>{
        if(que_count < questions.length - 1){
            que_count++;
            que_numb++;
            showQuestions(que_count);
            queCounter(que_numb);
            clearInterval(counter);
            startTimer(timeValue);
            clearInterval(counterLine);
            startTimerLine(widthValue);
            next_btn.style.display = "none";
            timeOff.textContent = "Time Left";
        }else{
            clearInterval(counter);
            clearInterval(counterLine);
            console.log("Questions Completed");
            showResultBox();
        }
    };

    // getting questions and options from array
    function showQuestions(index){
        const que_text = document.querySelector(".que_text");
        let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
        let option_tag = '<div class="option"><span>' + questions[index].option[0] + '</span></div>'
                        + '<div class="option"><span>' + questions[index].option[1] + '</span></div>'
                        + '<div class="option"><span>' + questions[index].option[2] + '</span></div>'
                        + '<div class="option"><span>' + questions[index].option[3] + '</span></div>';
        que_text.innerHTML = que_tag;
        option_list.innerHTML = option_tag;
        
        const options = option_list.querySelectorAll(".option");
        options.forEach(option => {
            option.onclick = function() {
                optionSelected(this);
            };
        });
    }    
    
    let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
    let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

    function optionSelected(answer){
        clearInterval(counterLine);
        clearInterval(counter);
        let userAns = answer.textContent;
        let correctAns = questions[que_count].answer;
        let allOptions = option_list.children.length;

        if(userAns == correctAns){
            userScore += 1;
            console.log(userScore);
            answer.classList.add("correct");
            console.log("Answer is Correct");
            answer.insertAdjacentHTML("beforeend", tickIcon);
        } else {
            answer.classList.add("incorrect");
            console.log("Answer is Incorrect");
            answer.insertAdjacentHTML("beforeend", crossIcon);

            //if the wrong answer is selected, selct the right one
            for (let i = 0; i < allOptions; i++){
                if (option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
        }

        //once user selects disable all options
        for (let i = 0; i < allOptions; i++){
            option_list.children[i].classList.add("disabled");
        }
        next_btn.style.display = "block";
    }   

    function showResultBox(){
        info_box.classList.remove("activeInfo"); //close the info box
        quiz_box.classList.remove("activeQuiz"); //close the info box
        result_box.classList.add("activeResult"); //show the result box
        const score_Text = result_box.querySelector(".score_text");
        if (userScore > 47){
            let scoreTag = '<span>Congratulations, You got an amazing <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p></span>';
            score_Text.innerHTML = scoreTag
        }
        else if (userScore > 40){
            let scoreTag = '<span>That is wonderful. You scored <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p></span>';
            score_Text.innerHTML = scoreTag
        }
        else if (userScore > 30){
            let scoreTag = '<span>You did well, just get better. You scored <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p></span>';
            score_Text.innerHTML = scoreTag
        }
        else if (userScore > 20){
            let scoreTag = '<span>You need to work on your Python Knowledge. You scored <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p></span>';
            score_Text.innerHTML = scoreTag
        }
        else{
            let scoreTag = '<span>Sorry you got only <p>'+ userScore +'</p>out of <p>'+ questions.length +'</p></span>';
            score_Text.innerHTML = scoreTag
        }
    }

    function startTimer(time){
        counter = setInterval(timer, 1000);
        function timer(){
            timeCount.textContent = time;
            time--;
            if(time < 9){
                let addZero = timeCount.textContent;
                timeCount.textContent = "0" + addZero;
            }
            
            if(time < 0){
                clearInterval(counter);
                timeCount.textContent = "00";
                //timeOff.textContent = "Time Off";

                let correctAns = questions[que_count].answer;
                let allOptions = option_list.children.length;

                for (let i = 0; i < allOptions; i++){
                    if (option_list.children[i].textContent == correctAns){
                        option_list.children[i].setAttribute("class", "option correct");
                        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                    }
                }
                for (let i = 0; i < allOptions; i++){
                    option_list.children[i].classList.add("disabled");
                }
                next_btn.style.display = "block";
            }
        }
    }

    function startTimerLine(time){
        counterLine = setInterval(timer, 35); //35 is the speed of the line movement. The smaller it is, the faster it is
        function timer(){
            time += 1;
            timeLine.style.width = time + "px"
            if(time > 599){         //the width of the quiz box is 600px, 599 is the width lenght of the line that it is going to travel to
                clearInterval(counterLine);
            }
        }
    }


    function queCounter(index){
        const bottom_ques_counter = quiz_box.querySelector(".total_que");
        let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
        bottom_ques_counter.innerHTML = totalQuesCountTag;
    }
});