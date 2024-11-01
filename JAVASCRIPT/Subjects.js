let Quistions = document.querySelector(".Quistions");
let ContainBtnsContact = document.querySelector(".ContainBtnsContact");
let ContainerFooter = document.querySelector(".ContainerFooter");
let ControlWhere = document.querySelector(".ControlWhere");
let GoTopAllPages = document.querySelector(".GoTopAllPages");
const FormSuggest = document.querySelector(".FormSuggest");
let ContainSearch = document.querySelector(".ContainSearch");
let ContainFilters = document.querySelector(".ContainFilters");
let Search = document.querySelector(".Search");
let ContainLinks = document.querySelector(".ContainLinks");
let ContainLogAndReg = document.querySelector(".ContainLogAndReg");
let CloseAll = document.querySelector(".CloseAll");
let allall = document.getElementById("allall");
let NameUser = document.getElementById("NameUser");
let SearchInput = document.querySelector(".SearchInput");
let FilterSearching = document.querySelector(".FilterSearching");
let ContainUserAndSignOut = document.querySelector(".ContainUserAndSignOut");
let SignOutClicked = document.getElementById("SignOutClicked");

CloseAll.onclick = function(){
    ContainSearch.classList.toggle("ShowContainSearch");
    ContainFilters.classList.remove("ShowContainSearch");
};
Search.onclick = function(){
    ContainSearch.classList.toggle("ShowContainSearch");
    ContainFilters.classList.remove("ShowContainSearch");
    ContainLinks.classList.remove("ShowIt");
    ContainLogAndReg.classList.remove("ShowIt");
    // Menu.classList.remove("EXMenu");
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
window.onscroll = function(){
    (window.scrollY >= 3500)? Quistions.classList.add("QuistionsShow") : Quistions.classList.remove("QuistionsShow");
    (window.scrollY >= 5750)? ContainBtnsContact.classList.add("ContainBtnsContactUnder") : ContainBtnsContact.classList.remove("ContainBtnsContactUnder");
    (window.scrollY >= 6950)? ContainerFooter.classList.add("ContainerBack") : ContainerFooter.classList.remove("ContainerBack");
    (window.scrollY >= 200)? GoTopAllPages.classList.add("GSI") : GoTopAllPages.classList.remove("GSI");
};
FormSuggest.onmousemove = function(e){
    const HeightRight = e.pageY - FormSuggest.offsetTop;
    let NewHeightRight = HeightRight - 4640;
    if(NewHeightRight < 550)
    ControlWhere.style.setProperty('--HeightRight',NewHeightRight + 'px');
    (NewHeightRight <= 125)? ControlWhere.style.color = "var(--PColor)" : ControlWhere.style.color = "var(--FColor)";
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
}