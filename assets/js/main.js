function blockToggle(blockId) {
    console.log(blockId);
    var x = document.getElementById(blockId);
    console.log(x);
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function childToggle(x){
    var subMenu = x.nextSibling.nextSibling;
    console.log(subMenu.style.display);
    if (subMenu.style.display != 'block') {
        subMenu.style.display = 'block';
    } else {
        subMenu.style.display = 'none';
    }
    
}