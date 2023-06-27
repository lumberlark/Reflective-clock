function clock(){
    var hour = document.getElementById("hour")
    var min = document.getElementById("min");
    var sec = document.getElementById("sec");
    var cycle = document.getElementById("cycle");
    
    
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM";
    
    if(h > 12){
        h = h - 12;
        var am = "PM";
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    cycle.innerHTML = am;
    
}

var t = new Date().getHours();
if(t<10){
    document.body.style.backgroundColor="skyblue";
    document.getElementById("sun").style.display = 'block';
}
else if (t<20){
    document.body.style.backgroundColor="orange";
    document.getElementById("sun").style.display = 'block';
}
else{
    
    document.body.style.backgroundColor="#001";
    document.getElementById("moon").style.display = 'block';
}


var interval = setInterval(clock, 1000);