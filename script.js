/*var button = document.createElement('button')
button.innerHTML = "Click Me"
document.body.append(button)
button.addEventListener('click',()=>button.classList.add('container'))*/

var span = document.createElement('span')
span.innerHTML = ''
document.body.append(span)
foo();


function foo()
{
    var user_input = prompt('Enter your input :')
    span.innerHTML = user_input
}