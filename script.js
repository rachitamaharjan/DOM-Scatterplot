var points = [
    {x: 100, y: 200},
    {x: 400, y: 400},
    {x: 600, y: 200},
    {x: 500, y: 500},
    {x: 200, y: 200},
    {x: 200, y: 100},
    {x: 200, y: 600},
];

points.forEach(function(val, index) {
    var parent = document.getElementById('main');
    var element = document.createElement('div');
    element.setAttribute('class', 'circle');
    element.style.top = val.y+'px';
    element.style.left = val.x+"px";
    parent.appendChild(element);
    console.log(val + 1)

    element.onclick=function deletePoint(){
        this.parentNode.removeChild(this);
        points.splice(index,1);
    }
});