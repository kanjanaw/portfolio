const tag3Ds = document.querySelectorAll(".card-3d")
const tagWebs = document.querySelectorAll(".card-web")
const tagDesigns = document.querySelectorAll(".card-design")
const idAll = document.getElementById("all")
const id3d = document.getElementById("3d")
const idWeb = document.getElementById("web")
const idDesign = document.getElementById("design")
const idContact = document.getElementById("contact")

function showAll() {
    tag3Ds.forEach(tag3D => tag3D.style.display = 'inline');
    tagWebs.forEach(tagWeb => tagWeb.style.display = 'inline');
    tagDesigns.forEach(tagDesign => tagDesign.style.display = 'inline');
}

function show3D(){
    tag3Ds.forEach(tag3D => tag3D.style.display = 'inline');
    tagWebs.forEach(tagWeb => tagWeb.style.display = 'none');
    tagDesigns.forEach(tagDesign => tagDesign.style.display = 'none');
}

function showWeb(){
    tag3Ds.forEach(tag3D => tag3D.style.display = 'none');
    tagWebs.forEach(tagWeb => tagWeb.style.display = 'inline');
    tagDesigns.forEach(tagDesign => tagDesign.style.display = 'none');
    document.getElementById("othreeo").style.display = 'inline';
}

function showDesign(){
    tag3Ds.forEach(tag3D => tag3D.style.display = 'none');
    tagWebs.forEach(tagWeb => tagWeb.style.display = 'none');
    tagDesigns.forEach(tagDesign => tagDesign.style.display = 'inline');
    document.getElementById("othreeo").style.display = 'inline';
}

var btns = document.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("item-active");
  current[0].className = current[0].className.replace(" item-active", "");
  this.className += " item-active";
  });
}
