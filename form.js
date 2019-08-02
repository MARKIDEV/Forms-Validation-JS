const form = document.getElementById('form');
form.addEventListener('submit', myFunction)

function myFunction(e) {
    e.preventDefault()
    let name = document.querySelector('#nameinput').value
    let x = document.querySelector('#pw').value
    let m = document.querySelector('#emailinput').value
    

    if (name === "") {
        alert('please enter your name');
        document.querySelector("#nameinput").style.background = "red"
    }
    
    if (x.length < 8 || !x.match(/[a-z]/g) || !x.match(/[A-Z]/g) || !x.match(/[0-9]/g)) {
        alert("Input not valid");

    }
}

