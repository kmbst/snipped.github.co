var menuClosed = 0;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft= "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function menuClick() {
  if (menuClosed) {
    openNav()
    menuClosed = false;
  }
    else {
      closeNav()
      menuClosed = true;
    }
}
