function NavbarListener() {
    document.addEventListener("touchend", function(e) {
        if (e.target.id === "navbar-hamburger"){
          document.querySelector('.navbar-header').classList.remove('hidden');
        //   document.getElementById('navbar-hamburger').style.visibility ='visible';
        } else {
          document.querySelector('.navbar-header').classList.add('hidden');
        //   document.getElementById('navbar-hamburger').style.visibility ='hidden';
        }
    });
    document.addEventListener("click", function(e) {
        if (e.target.id === "navbar-hamburger"){
          document.querySelector('.navbar-header').classList.remove('hidden');
        //   document.getElementById('navbar-hamburger').style.visibility ='visible';
        } else {
          document.querySelector('.navbar-header').classList.add('hidden');
        //   document.getElementById('navbar-hamburger').style.visibility ='hidden';
        }
    });
    
}


export default NavbarListener