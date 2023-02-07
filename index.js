function showMenu(){
 document.getElementById("sideDiv").style.display = "block";
 document.getElementById("mainDiv").style.filter = "brightness(50%)";
}
function hideMenu(){
  document.getElementById("sideDiv").style.display = "none";
  document.getElementById("mainDiv").style.filter = "brightness(100%)";
 }


 let featuresDiv = document.getElementById("featuresDiv");
 let arrowDown = document.getElementById("arrowDown");
function showFeatures(){
  if (featuresDiv.style.display == "none"){
    featuresDiv.style.display = "block";
    arrowDown.style.transform =  "rotate(180deg)";
  } else {
    featuresDiv.style.display = "none";
    arrowDown.style.transform =  "rotate(0deg)";
  }
}

let companyDiv = document.getElementById("companyDiv");
 let arrowDown2 = document.getElementById("arrowDown2");
function showCompany(){
  if (companyDiv.style.display == "none"){
    companyDiv.style.display = "block";
    arrowDown2.style.transform =  "rotate(180deg)";
  } else {
    companyDiv.style.display = "none";
    arrowDown2.style.transform =  "rotate(0deg)";
  }
}