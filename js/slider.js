document.body.onclick = function(event){
    event = event || window.event;
    if(event.target.classList.contains('demo')){
        document.getElementById('mySlides').src=event.target.src;
    }
}