let CloseAll = document.querySelector(".CloseAll");
let ContainSearch = document.querySelector(".ContainSearch");
let ContainFilters = document.querySelector(".ContainFilters");
let Search = document.querySelector(".Search");
let ContainLinks = document.querySelector(".ContainLinks");
let ContainLogAndReg = document.querySelector(".ContainLogAndReg");
let Menu = document.querySelector(".Menu");
let ControlWhere = document.querySelector(".ControlWhere");
let SearchInput = document.querySelector(".SearchInput");
let FilterSearching = document.querySelector(".FilterSearching");
let ContainUserAndSignOut = document.querySelector(".ContainUserAndSignOut");
let ContainerFooter = document.querySelector(".ContainerFooter");
let SignOutClicked = document.getElementById("SignOutClicked");
let allall = document.getElementById("allall");
let NameUser = document.getElementById("NameUser");
let GoTopAllPages = document.querySelector(".GoTopAllPages");
let ContainRegester = document.querySelector(".ContainRegester");
let LoginBtn = document.querySelector(".Login");
let CreateBtn = document.querySelector(".Create");
let ContainRegisterinForm = document.querySelector(".ContainRegisterinForm"); //positionNot
let BtnLogin = document.querySelector(".BtnLogin"); //rightNot
let ContainFormsReg = document.querySelector(".ContainFormsReg"); //leftNot
let ContainLoginForm = document.querySelector(".ContainLoginForm"); //position
let BtnRegister = document.querySelector(".BtnRegister"); //right
let ContainFormsLog = document.querySelector(".ContainFormsLog"); //left
const FormSuggest = document.querySelector(".FormSuggest");
LoginBtn.onclick = function(){
    ContainRegester.classList.remove("SettingColorReg");
    ContainLoginForm.classList.remove("PositionNot");
    ContainLoginForm.classList.add("Position");
    BtnRegister.classList.remove("RightNot");
    BtnRegister.classList.add("Right");
    ContainFormsLog.classList.remove("LeftNot");
    ContainFormsLog.classList.add("Left");
    ContainRegisterinForm.classList.remove("Position");
    ContainRegisterinForm.classList.add("PositionNot");
    BtnLogin.classList.remove("Right");
    BtnLogin.classList.add("RightNot");
    ContainFormsReg.classList.remove("Left");
    ContainFormsReg.classList.add("LeftNot");
};
CreateBtn.onclick = function(){
    ContainRegester.classList.add("SettingColorReg");
    ContainLoginForm.classList.remove("Position");
    ContainLoginForm.classList.add("PositionNot");
    BtnRegister.classList.remove("Right");
    BtnRegister.classList.add("RightNot");
    ContainFormsLog.classList.remove("Left");
    ContainFormsLog.classList.add("LeftNot");
    ContainRegisterinForm.classList.remove("PositionNot");
    ContainRegisterinForm.classList.add("Position");
    BtnLogin.classList.remove("RightNot");
    BtnLogin.classList.add("Right");
    ContainFormsReg.classList.remove("LeftNot");
    ContainFormsReg.classList.add("Left");
};
CloseAll.onclick = function(){
    ContainSearch.classList.toggle("ShowContainSearch");
    ContainFilters.classList.remove("ShowContainSearch");
};
Search.onclick = function(){
    ContainSearch.classList.toggle("ShowContainSearch");
    ContainFilters.classList.remove("ShowContainSearch");
    ContainLinks.classList.remove("ShowIt");
    ContainLogAndReg.classList.remove("ShowIt");
    Menu.classList.remove("EXMenu");
    SearchInput.focus();
    SearchInput.value = "";
};
FilterSearching.onclick = function(){
    ContainFilters.classList.toggle("ShowContainSearch");
};
ContainUserAndSignOut.onclick = function(){
    ContainUserAndSignOut.classList.toggle("ContainUserAndSignOutShow");
};
SignOutClicked.onclick = function(){
    localStorage.clear();
};
Menu.onclick = function(){
    Menu.classList.toggle("EXMenu");
    ContainLinks.classList.toggle("ShowIt");
    ContainLogAndReg.classList.toggle("ShowIt");
    allall.classList.toggle("ShowIt");
    ContainSearch.classList.remove("ShowIt");
    ContainFilters.classList.remove("HideIt");
    ContainSearch.classList.remove("ShowContainSearch");
    ContainFilters.classList.remove("ShowContainSearch");
};
window.onload = function(){
    if(!(window.localStorage.getItem("PassWord") == undefined))
    {
        ContainUserAndSignOut.classList.add("showit");
        allall.classList.add("Hidden");
        NameUser.innerHTML = localStorage.getItem("Email");
    }
    else
    {
        ContainUserAndSignOut.classList.remove("showit");
        allall.classList.remove("Hidden");
    }
    if(window.innerWidth <= 500){
        allall.classList.add("false");
        ContainLogAndReg.classList.add("false");
    } 
    else
    {
        ContainLogAndReg.classList.add("true");
        allall.classList.add("true");
    }
    (window.innerWidth <= 970)?ContainLinks.classList.add("false"):ContainLinks.classList.add("true");
};
window.onresize = function (){
    if(window.innerWidth <= 500){
        allall.classList.replace("true","false");
        ContainLogAndReg.classList.replace("true","false");
        ContainLinks.classList.replace("true","false");
    } 
    else
    {
        ContainLogAndReg.classList.replace("false","true");
        allall.classList.replace("false","true");
        ContainLinks.classList.replace("false","true");
    }    
    (window.innerWidth <= 970)?document.querySelector(".ContainLinks").classList.replace("true","false"):document.querySelector(".ContainLinks").classList.replace("false","true");
};
window.onscroll = function(){
    (window.scrollY >= 200)? GoTopAllPages.classList.add("GSI") : GoTopAllPages.classList.remove("GSI");
    (window.scrollY >= 3600)? ContainerFooter.classList.add("ContainerBack") : ContainerFooter.classList.remove("ContainerBack");
    console.log(scrollY);
};
FormSuggest.onmousemove = function(e){
    const HeightRight = e.pageY - FormSuggest.offsetTop;
    let NewHeightRight = HeightRight - 0;
    if(NewHeightRight < 550)
    ControlWhere.style.setProperty('--HeightRight',NewHeightRight + 'px');
    (NewHeightRight <= 125)? ControlWhere.style.color = "var(--PColor)" : ControlWhere.style.color = "var(--FColor)";
};