var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove("one-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove("onmode-tab");
    }
}


