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