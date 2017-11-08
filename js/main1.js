//**********************************
//Misc Stuff
//**********************************
var nameList = [];
var questionList = [];


$(document).ready(function () {
    retrieveData();
})

//This function is uses Google Sheets API to retrieve the information from the google sheets. 
//It takes in timestamp, email, expertise and gender.
function retrieveData() {
    //recursive function to call retrieveData again.
    setTimeout(retrieveData, 5000);
    $.ajax({
        url: 'https://script.googleusercontent.com/macros/echo?user_content_key=z7Hxt6g9A7tSUb491Ba6hMBhmH0s2x65iaYDsMefVUywUQk101mJltypij8Hod3M2zfYGu6XRIRZGbxeJQ9uKlW2a_3S56xVOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKp3XF0WiKi9pRXPegTztZoXor_fmWoFrK03McpLC-Yc_t0IigV6-Q88rZb0g9VPokC8gJ3ttE15maGKla4NPWI_U&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx',
        success: function (responseText) {
            var data = responseText.Responses
            console.log(data)
            
            //reset namelist and questionlist
            nameList = [];
            questionList = [];
            
            for (i = 0; i < data.length; i++) {
                if (data[i].Display.length > 0) {
                    if (data[i].Name.trim() == "" || data[i].Name.trim() == "-" || data[i].Name.trim() == ".")
                        nameList.push("Anonymous");
                    else {
                        nameList.push(data[i].Name)
                    }

                    questionList.push(data[i].Question)
                }
            }
            displayQuestions(nameList, questionList);
        }
    });
}

function displayQuestions(nameList, questionList) {
    // reset. 
    $(".container").html("");

    // display stuff, display the last one first, then the first.
    for (var i = questionList.length - 1; i >= 0; i--) {
        $(".container").append("<div class=\"jumbotron\"><h1 class=\"question-question\">" + questionList[i] + "</h1><h3 class=\"question-author\"> -&nbsp;" + nameList[i] + "</h3></div>");
    }


}
