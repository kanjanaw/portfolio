const tag3Ds = document.querySelectorAll(".card-3d")
const tagWebs = document.querySelectorAll(".card-web")
const tagDesigns = document.querySelectorAll(".card-design")

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
}

function showDesign(){
    tag3Ds.forEach(tag3D => tag3D.style.display = 'none');
    tagWebs.forEach(tagWeb => tagWeb.style.display = 'none');
    tagDesigns.forEach(tagDesign => tagDesign.style.display = 'inline');
}