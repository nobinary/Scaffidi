// NAV LI COLOR CHANGE///

let abNav = document.querySelector("#about_nav");
let stuNav = document.querySelector("#studio_nav");
let poNav = document.querySelector("#portfolio_nav");

abNav.addEventListener("mouseover", function(){
    abNav.style.backgroundColor = "yellow"
    abNav.style.fontWeight = "bold"
})

stuNav.addEventListener("mouseover", function(){
    stuNav.style.backgroundColor = "#ca2c92"
    stuNav.style.fontWeight = "bold"
})

poNav.addEventListener("mouseover", function(){
    poNav.style.backgroundColor = "limegreen"
    poNav.style.fontWeight = "bold"
})

abNav.addEventListener("mouseout", function(){
    abNav.style.backgroundColor = "white"
    abNav.style.fontWeight = "normal"
})

stuNav .addEventListener("mouseout", function(){
    stuNav.style.backgroundColor = "white"
    stuNav.style.fontWeight = "normal"
})

poNav.addEventListener("mouseout", function(){
    poNav.style.backgroundColor = "white"
    poNav.style.fontWeight = "normal"
})


//PORTFOLIO ALERT

poNav.addEventListener("click", function() {
    alert("Nothing to see here yet!")
})


