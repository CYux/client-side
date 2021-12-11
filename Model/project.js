//window.alert("hello")

//callback
window.addEventListener("load", function () {
    console.log('load')
    const p1 = document.getElementById('lineOne')
    console.log(p1);
    p1.innerText = "I & adam."
    
    const b1 = document.getElementById('btn')
    b1.addEventListener('click', function () {
        console.log('Pressed');
        box1.innerHTML = '<p>This is Chan</p>'
    })

    const box1 = document.getElementById('box')
    //box1.innerHTML = '<p>This is Chan</p>'

    //modole    ``
    const input1 = document.getElementById('inputOne')
    input1.addEventListener('keyup', function (e) {
        console.log('input',e.target.value)
    })
})

function hello(...numbers) {
    numbers.forEach(function (number){
        console.log(number);
    });
}
// name? ...name name:xxx = '')
// for of property value
// for in property name
//pop push FILO unshift,shift 
//list.innerHtml = htmlStr