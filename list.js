const mouseEls = document.getElementsByTagName('td');
for (let i = 0; i < mouseEls.length; i++)
{    mouseEls[i].addEventListener('click', function(e)
{e.stopPropagation();
    let mouseLoc = this; //=this
    let mouseX = mouseLoc.clientX;
    let mouseY = mouseLoc.clientY;
    mouseLoc.innerHTML = mouseX + " " + mouseY;
});
}