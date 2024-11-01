let inputPass = document.getElementById("InPass");
let InLastName = document.getElementById("InLastName");
let InEmail = document.getElementById("InEmail");
let InFirstName = document.getElementById("InFirstName");
let ErrorTextRegex = document.getElementById("ErrorTextRegex");
let ErrorInputs = document.querySelector(".ErrorInputs");
let BtnEye = document.querySelector(".BtnEye");
let SubmitBtn = document.getElementById("SubmitBtn");
let Done = document.querySelector(".Done");
let PasswordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
BtnEye.onclick = function(){
    BtnEye.classList.toggle("BtnEyeShow");
    if (InPass.type === "password")
    {
        InPass.type = "text";
    } else {
        InPass.type = "password";
    }
};
let PassWordTrueOrFalse = false;
inputPass.onblur = function(){
    if(!PasswordRegex.test(inputPass.value))
    {
        ErrorTextRegex.innerHTML = "يجب أن تتألف كلمة المرور من حرف واحد صغير ، وحرف كبير واحد ، ورقم واحد ، وحرف خاص واحد ، وأن يتكون من 8 أحرف على الأقل وأن الرجاء التأكد من ان المعلومات توافق جميع شروطنا والتقييدات الميدانية.";
        ErrorInputs.classList.remove("Hide");
        PassWordTrueOrFalse = false;
    }
    else
    {
        ErrorTextRegex.innerHTML = "";
        ErrorInputs.classList.add("Hide");
        PassWordTrueOrFalse = true;
    }
};
SubmitBtn.onclick = function(){
    if(PassWordTrueOrFalse && InFirstName.value !== "" && InLastName.value !== "" && InEmail.value !== "")
    {
        Done.classList.add("DoneDone");
        window.localStorage.setItem("FirstName" , InFirstName.value);
        window.localStorage.setItem("LastName" , InLastName.value);
        window.localStorage.setItem("Email" , InEmail.value);
        window.localStorage.setItem("PassWord" , inputPass.value);
    }
    else
    {
        ErrorTextRegex.innerHTML = "الرجاء التأكد من ان المعلومات توافق جميع شروطنا والتقييدات الميدانية";
    }
};