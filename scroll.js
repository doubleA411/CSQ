function show() {
    // check =  document.getElementsByClassName('.check');
    const cl = document.getElementById("check2");

    if (cl.className == "fa-solid fa-x") {
        cl.className = "fas fa-bars";
    }
    else {
        cl.className = "fa-solid fa-x"
    }
}




      // Set things up
      window.addEventListener("load", () => {
        let observer = new IntersectionObserver((entries) => { 
          entries
            .forEach((e) => {
              if (e.target) {
                e.target.classList.toggle("in-view", e.isIntersecting);
              }
            })
        });
        
        const elements = document.getElementsByClassName("hscroll-line-b")
        for (let i = 0; i < elements.length; i++) {
          observer.observe(elements[i]);  
        }
      });



      