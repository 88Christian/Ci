
/* LOGO H1 Ci Works AUTO TYPING */
/*var i=0,text=" Ci Works ",speed="200";

function myFunction(){
    if(i<text.length){
        document.getElementById("type-js").innerHTML += text.charAt(i);
        i++;
        setTimeout(myFunction, speed);
    }
}
myFunction();
*/

/* ON SCROLL NAV HEAD TURNS BLACK BACKGROUND */
window.onscroll = () => {
    const nav = document.querySelector('#nav-head-js');
    if(this.scrollY <= 10) nav.className = 'nav-head'; 
    
    else nav.className = 'nav-head-js-change-color';
  };

  /* HAMBURGER NAVIGATIONS */
  function myFunction() {
    var x = document.getElementById("mobile-nav-links-js");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
      console.log('haha');
    }
  }





