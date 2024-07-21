

window.onload=function(){
    
    let elementToAppear=window.location.search.replace("?","");
    console.log(elementToAppear);
    document.getElementById(elementToAppear).style.visibility="visible";

}












