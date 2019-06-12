
function countdown() {
    
    
    
    var x = document.getElementById("myDate").value;  
    
      
    
    var eventDate = new Date(x);
    
    var now = new Date();
    
    
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    

    var remainingTime = eventTime - currentTime;
    
      

    

    var s = Math.floor(remainingTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d= Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;


    document.getElementById('days').textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
    

    setTimeout(countdown, 1000);
}



