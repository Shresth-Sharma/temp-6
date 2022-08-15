function repeat_colour_changer(){
    var colour2 = document.getElementById('setting_colour_select').value;
    colourchange(colour2);
    if(colour === 1){
        document.getElementById('setting_colour').style.backgroundColor = 'rgb('+0+','+colour_red+','+colour_green+')';
    }
    else if(colour === 2){
        document.getElementById('setting_colour').style.backgroundColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
    }   
    else if(colour === 3){
        document.getElementById('setting_colour').style.backgroundColor = 'rgb('+colour_red+','+colour_green+','+0+')';
    }   
    else if(colour === 4){
        document.getElementById('setting_colour').style.backgroundColor = 'rgb('+255+','+colour_green+','+0+')';
    }   
    else if(colour === 5){
        document.getElementById('setting_colour').style.backgroundColor = 'rgb('+colour_red+','+255+','+0+')';
    }   
    else{
        document.getElementById('setting_colour').style.backgroundColor = 'rgb('+colour_red+',0,'+colour_green+')';
        //document.getElementById('setting_colour').style.color = 'rgb('+colour_red_opposite+',0,'+colour_green_opposite+')';
    }
}
if(colour === 1){
    document.getElementById('setting_colour_select').value = 1;
}
else if(colour === 2){
    document.getElementById('setting_colour_select').value = 2;
}
else if(colour === 3){
    document.getElementById('setting_colour_select').value = 3;
}
else if(colour === 4){
    document.getElementById('setting_colour_select').value = 4;
}
else if(colour === 5){
    document.getElementById('setting_colour_select').value = 5;
}
else{
    document.getElementById('setting_colour_select').value = 0;
}
setInterval(repeat_colour_changer,50)