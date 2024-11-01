let CloseAll = document.querySelector(".CloseAll");
let Search = document.querySelector(".Search");
let ContainSearch = document.querySelector(".ContainSearch");
let Menu = document.querySelector(".Menu");
let ContainLinks = document.querySelector(".ContainLinks");
let ContainLogAndReg = document.querySelector(".ContainLogAndReg");
let FilterSearching = document.querySelector(".FilterSearching");
let ContainFilters = document.querySelector(".ContainFilters");
let FooterAndContactWithUs = document.querySelector(".FooterAndContactWithUs");
let OurReferenceAndSuggest = document.querySelector(".OurReferenceAndSuggest");
let SimplyWhoWeAre = document.querySelector(".SimplyWhoWeAre");
let Quistions = document.querySelector(".Quistions");
let ContainBtnsContact = document.querySelector(".ContainBtnsContact");
let ContainerFooter = document.querySelector(".ContainerFooter");
let InputTopic = document.getElementById("Topic");
let SearchInput = document.querySelector(".SearchInput");
let ControlWhere = document.querySelector(".ControlWhere");
let allall = document.getElementById("allall");
let ContainAllContactIntro = document.querySelector(".ContainAllContactIntro");
let XMarkIntroContact = document.querySelector(".XMarkIntroContact");
let ContainUserAndSignOut = document.querySelector(".ContainUserAndSignOut");
let SignOutClicked = document.getElementById("SignOutClicked");
let NameUser = document.getElementById("NameUser");
const FormSuggest = document.querySelector(".FormSuggest");
let GoTopAllPages = document.querySelector(".GoTopAllPages");
SignOutClicked.onclick = function(){
    localStorage.clear();
};
XMarkIntroContact.onclick = function(){
    ContainAllContactIntro.classList.toggle("ContainAllContactIntroShow");
};
ContainUserAndSignOut.onclick = function(){
    ContainUserAndSignOut.classList.toggle("ContainUserAndSignOutShow");
};
FormSuggest.onmousemove = function(e){
    const HeightRight = e.pageY - FormSuggest.offsetTop;
    let NewHeightRight = HeightRight - 4050;
    if(NewHeightRight < 550)
    ControlWhere.style.setProperty('--HeightRight',NewHeightRight + 'px');
    (NewHeightRight <= 125)? ControlWhere.style.color = "var(--PColor)" : ControlWhere.style.color = "var(--FColor)";
};
Search.onclick = function(){
    ContainSearch.classList.toggle("ShowContainSearch");
    ContainFilters.classList.remove("ShowContainSearch");
    ContainLinks.classList.remove("ShowIt");
    ContainLogAndReg.classList.remove("ShowIt");
    allall.classList.remove("ShowIt");
    Menu.classList.remove("EXMenu");
    SearchInput.focus();
    SearchInput.value = "";
};
FilterSearching.onclick = function(){
    ContainFilters.classList.toggle("ShowContainSearch");
};
CloseAll.onclick = function(){
    ContainSearch.classList.toggle("ShowContainSearch");
    ContainFilters.classList.remove("ShowContainSearch");
};
Menu.onclick = function(){
    Menu.classList.toggle("EXMenu");
    ContainLinks.classList.toggle("ShowIt");
    if(window.localStorage.getItem("Email") !== null)
    allall.classList.toggle("ShowIt");
    else
    ContainLogAndReg.classList.toggle("ShowIt");
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
    (window.scrollY > (window.innerHeight * 4))?FooterAndContactWithUs.classList.add("ShowFooterAndContactWithUs") : FooterAndContactWithUs.classList.remove("ShowFooterAndContactWithUs");
    (window.scrollY >= 6000)? ContainBtnsContact.classList.add("ContainBtnsContactUnder") : ContainBtnsContact.classList.remove("ContainBtnsContactUnder");
    (window.scrollY >= 6244)? ContainerFooter.classList.add("ContainerBack") : ContainerFooter.classList.remove("ContainerBack");
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
    if(window.scrollY >= 3700){
        FooterAndContactWithUs.classList.add("ShowFooterAndContactWithUs");
        // if(!(window.scrollY >= 4130))
        // InputTopic.focus();
        // else
        // InputTopic.blur();
        OurReferenceAndSuggest.classList.add("OurReferenceAndSuggestPock");
    }
    else{
        // InputTopic.blur();
        FooterAndContactWithUs.classList.remove("ShowFooterAndContactWithUs");
        OurReferenceAndSuggest.classList.remove("OurReferenceAndSuggestPock");
    };
    (window.scrollY >= 5000)? SimplyWhoWeAre.classList.add("OurReferenceAndSuggestPock") : SimplyWhoWeAre.classList.remove("OurReferenceAndSuggestPock");
    (window.scrollY >= 4800)? Quistions.classList.add("QuistionsShow") : Quistions.classList.remove("QuistionsShow");
    (window.scrollY >= 5800)? ContainBtnsContact.classList.add("ContainBtnsContactUnder") : ContainBtnsContact.classList.remove("ContainBtnsContactUnder");
    (window.scrollY >= 6154)? ContainerFooter.classList.add("ContainerBack") : ContainerFooter.classList.remove("ContainerBack");
    (window.scrollY >= 200)? GoTopAllPages.classList.add("GSI") : GoTopAllPages.classList.remove("GSI");
};