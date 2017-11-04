//**********************************
//Misc Stuff
//**********************************
$(document).ready(function () {

})

//This function is uses Google Sheets API to retrieve the information from the google sheets. 
//It takes in timestamp, email, expertise and gender.
function retrieveData() {
    $.ajax({
        url: 'https://script.googleusercontent.com/macros/echo?user_content_key=x72DBi7PnP-krZmTlckfJ41U0-Va694QrJl83V61ltzpLJTjxFPiNnm-PbXP9E5jSFL1EiEG0ouTuGpHG1LdzFqsWYzNv3w8OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa1ZsYSbt7G4nMhEEDL32U4DxjO7V7yvmJPXJTBuCiTGh3rUPjpYM_V0PJJG7TIaKpzjnW7fDIdJvUc6S6oej-Uzzg-zYw7TrH--epZcnP5y2K8CuVI6Yu3Y5keLGnWsT4sgJ3ttE15malo-KUAPQVXM&lib=MbpKbbfePtAVndrs259dhPT7ROjQYJ8yx',
        success: function (responseText) {
            var data = responseText.Response;
            for (var i = 0; i < data.length; i++) {

            }
            //after all the variables are added accordingly, this functions would populate the various fields of the data visualisation.

        }
    });
}
