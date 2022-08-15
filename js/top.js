//common
function home(){
    window.open("../index.html","_top");
}
function feedack(){
    window.open("../more/feedack.html","_blank")
}
function discord(){
    navigator.clipboard.writeText("Create_With_Shresth#3357");
    alert("Id Copied");
}
function gmail(){
    navigator.clipboard.writeText("creatwwithshresth2008@gmail.com");
    alert("Gmail Id Copied");
}
var colour;
//document.cookie=colour+";expires=Thu, 18 Dec 2113 12:00:00 UTC"
var colour1 = document.cookie;
console.log(colour1);
colour = parseInt(colour1);
console.log(colour);
function colourchange(int){
    var colour = int;
    document.cookie=colour+";expires=Thu, 18 Dec 2113 12:00:00 UTC;path=/"
    document.cookie=colour+";expires=Thu, 18 Dec 2113 12:00:00 UTC;path=/more/"
    //return parseInt(colour);
}
if(colour === 1){
    var nav_time=0;
        var colour_red=255;
        var colour_red_opposite=0;
        var colour_green=0;
        var colour_green_opposite=255;
        function nav_animation(){
            if(nav_time <= 100){
                nav_time += 1;
                colour_green += 2.55;
                colour_green_opposite -= 2.55;
                colour_red -= 2.55;
                colour_red_opposite += 2.55;
                document.getElementById('name').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('homebt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
            }
            else if(nav_time <= 200){
                nav_time += 1;
                colour_green -= 2.55;
                colour_green_opposite += 2.55;
                colour_red += 2.55;
                colour_red_opposite -= 2.55;
                document.getElementById('name').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('homebt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+0+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+0+','+colour_red+','+colour_green+')';
            }
            else{
                nav_time = 0
                colour_green=0;
            }
        }
        setInterval(nav_animation,50);
        /*
        MENU
        */
       var repeatmenu1 = 0;
        var repeatmenudw1 = 0;
        var repeatmenudw2 = 0;
        var repeatmenudw3 = 0;
        var repeatmenudw4 = 0;
        var mouseonmenuinterval;
        function mouseonmenu1(){
            console.log("1");
            document.getElementById('menubt').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
        }
        function mouseonmenu(){
            repeatmenu1 = 1;
        }
        function mouseleavemenu(){
            repeatmenu1 = 0;
            document.getElementById('menubt').style.backgroundColor = 'black';
        }
        function mouseonmenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 1;
            }
            else if(dwno === 2){
                repeatmenudw2 = 1;
            }
            else if(dwno === 3){
                repeatmenudw3 = 1;
            }
            else if(dwno === 4){
                repeatmenudw4 = 1;
            }
        }
        function mouseleavemenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 0;
                document.getElementById('menudw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatmenudw2 = 0;
                document.getElementById('menudw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatmenudw3 = 0;
                document.getElementById('menudw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatmenudw4 = 0;
                document.getElementById('menudw4').style.backgroundColor='black';
            }
        }
        function repeatmenu(){
            if(repeatmenu1 === 1){
                mouseonmenu1();
            }
            if(repeatmenudw1 === 1){
                document.getElementById('menudw1').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatmenudw2 === 1){
                document.getElementById('menudw2').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatmenudw3 === 1){
                document.getElementById('menudw3').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatmenudw4 === 1){
                document.getElementById('menudw4').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
        }
        setInterval(repeatmenu,1);
        /*
        Social
        */
        var repeatsocial1 = 0;
        var repeatsocialdw1 = 0;
        var repeatsocialdw2 = 0;
        var repeatsocialdw3 = 0;
        var repeatsocialdw4 = 0;
        var mouseonsocialinterval;
        function mouseonsocial1(){
            console.log("1");
            document.getElementById('socialbt').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
        }
        function mouseonsocial(){
            repeatsocial1 = 1;
        }
        function mouseleavesocial(){
            repeatsocial1 = 0;
            document.getElementById('socialbt').style.backgroundColor = 'black';
        }
        function mouseonsocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 1;
            }
            else if(dwno === 2){
                repeatsocialdw2 = 1;
            }
            else if(dwno === 3){
                repeatsocialdw3 = 1;
            }
            else if(dwno === 4){
                repeatsocialdw4 = 1;
            }
        }
        function mouseleavesocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 0;
                document.getElementById('socialdw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatsocialdw2 = 0;
                document.getElementById('socialdw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatsocialdw3 = 0;
                document.getElementById('socialdw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatsocialdw4 = 0;
                document.getElementById('socialdw4').style.backgroundColor='black';
            }
        }
        function repeatsocial(){
            if(repeatsocial1 === 1){
                mouseonsocial1();
            }
            if(repeatsocialdw1 === 1){
                document.getElementById('socialdw1').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatsocialdw2 === 1){
                document.getElementById('socialdw2').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatsocialdw3 === 1){
                document.getElementById('socialdw3').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatsocialdw4 === 1){
                document.getElementById('socialdw4').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
        }
        setInterval(repeatsocial,1);
        /*
            HOME
        */
            var repeathome1 = 0;
            var mouseonhomeinterval;
            function mouseonhome1(){
                console.log("1");
                document.getElementById('homebt').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            function mouseonhome(){
                repeathome1 = 1;
            }
            function mouseleavehome(){
                repeathome1 = 0;
                document.getElementById('homebt').style.backgroundColor = 'black';
            }
            function repeathome(){
                if(repeathome1 === 1){
                    mouseonhome1();
                }
            }
            setInterval(repeathome,1);
        /*
            HOME
        */
            var repeatfeedack1 = 0;
            var mouseonfeedackinterval;
            function mouseonfeedack1(){
                console.log("1");
                document.getElementById('feedackbt').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            function mouseonfeedack(){
                repeatfeedack1 = 1;
            }
            function mouseleavefeedack(){
                repeatfeedack1 = 0;
                document.getElementById('feedackbt').style.backgroundColor = 'black';
            }
            function repeatfeedack(){
                if(repeatfeedack1 === 1){
                    mouseonfeedack1();
                }
            }
            setInterval(repeatfeedack,1);
            /*
        Social
        */
        var repeatcontact1 = 0;
        var repeatcontactdw1 = 0;
        var mouseoncontactinterval;
        function mouseoncontact1(){
            console.log("1");
            document.getElementById('contactbt').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
        }
        function mouseoncontact(){
            repeatcontact1 = 1;
        }
        function mouseleavecontact(){
            repeatcontact1 = 0;
            document.getElementById('contactbt').style.backgroundColor = 'black';
        }
        function mouseoncontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 1;
            }
        }
        function mouseleavecontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 0;
                document.getElementById('contactdw1').style.backgroundColor='black';
            }
        }
        function repeatcontact(){
            if(repeatcontact1 === 1){
                mouseoncontact1();
            }
            if(repeatcontactdw1 === 1){
                document.getElementById('contactdw1').style.backgroundColor = 'rgb('+0+','+colour_red_opposite+','+colour_green_opposite+')';
            }
        }
        setInterval(repeatcontact,1);
}
else if(colour === 2){
    var nav_time=0;
        var colour_red=255;
        var colour_red_opposite=0;
        var colour_green=0;
        var colour_green_opposite=255;
        function nav_animation(){
            if(nav_time <= 100){
                nav_time += 1;
                colour_green += 2.55;
                colour_green_opposite -= 2.55;
                colour_red -= 2.55;
                colour_red_opposite += 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
            }
            else if(nav_time <= 200){
                nav_time += 1;
                colour_green -= 2.55;
                colour_green_opposite += 2.55;
                colour_red += 2.55;
                colour_red_opposite -= 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+colour_red+','+colour_green+')';
            }
            else{
                nav_time = 0
                colour_green=0;
            }
        }
        setInterval(nav_animation,50);
        /*
        MENU
        */
       var repeatmenu1 = 0;
        var repeatmenudw1 = 0;
        var repeatmenudw2 = 0;
        var repeatmenudw3 = 0;
        var repeatmenudw4 = 0;
        var mouseonmenuinterval;
        function mouseonmenu1(){
            console.log("1");
            document.getElementById('menubt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
        }
        function mouseonmenu(){
            repeatmenu1 = 1;
        }
        function mouseleavemenu(){
            repeatmenu1 = 0;
            document.getElementById('menubt').style.backgroundColor = 'black';
        }
        function mouseonmenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 1;
            }
            else if(dwno === 2){
                repeatmenudw2 = 1;
            }
            else if(dwno === 3){
                repeatmenudw3 = 1;
            }
            else if(dwno === 4){
                repeatmenudw4 = 1;
            }
        }
        function mouseleavemenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 0;
                document.getElementById('menudw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatmenudw2 = 0;
                document.getElementById('menudw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatmenudw3 = 0;
                document.getElementById('menudw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatmenudw4 = 0;
                document.getElementById('menudw4').style.backgroundColor='black';
            }
        }
        function repeatmenu(){
            if(repeatmenu1 === 1){
                mouseonmenu1();
            }
            if(repeatmenudw1 === 1){
                document.getElementById('menudw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatmenudw2 === 1){
                document.getElementById('menudw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatmenudw3 === 1){
                document.getElementById('menudw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatmenudw4 === 1){
                document.getElementById('menudw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
        }
        setInterval(repeatmenu,1);
        /*
        Social
        */
        var repeatsocial1 = 0;
        var repeatsocialdw1 = 0;
        var repeatsocialdw2 = 0;
        var repeatsocialdw3 = 0;
        var repeatsocialdw4 = 0;
        var mouseonsocialinterval;
        function mouseonsocial1(){
            console.log("1");
            document.getElementById('socialbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
        }
        function mouseonsocial(){
            repeatsocial1 = 1;
        }
        function mouseleavesocial(){
            repeatsocial1 = 0;
            document.getElementById('socialbt').style.backgroundColor = 'black';
        }
        function mouseonsocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 1;
            }
            else if(dwno === 2){
                repeatsocialdw2 = 1;
            }
            else if(dwno === 3){
                repeatsocialdw3 = 1;
            }
            else if(dwno === 4){
                repeatsocialdw4 = 1;
            }
        }
        function mouseleavesocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 0;
                document.getElementById('socialdw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatsocialdw2 = 0;
                document.getElementById('socialdw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatsocialdw3 = 0;
                document.getElementById('socialdw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatsocialdw4 = 0;
                document.getElementById('socialdw4').style.backgroundColor='black';
            }
        }
        function repeatsocial(){
            if(repeatsocial1 === 1){
                mouseonsocial1();
            }
            if(repeatsocialdw1 === 1){
                document.getElementById('socialdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatsocialdw2 === 1){
                document.getElementById('socialdw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatsocialdw3 === 1){
                document.getElementById('socialdw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            if(repeatsocialdw4 === 1){
                document.getElementById('socialdw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
        }
        setInterval(repeatsocial,1);
        /*
            HOME
        */
            var repeathome1 = 0;
            var mouseonhomeinterval;
            function mouseonhome1(){
                console.log("1");
                document.getElementById('homebt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            function mouseonhome(){
                repeathome1 = 1;
            }
            function mouseleavehome(){
                repeathome1 = 0;
                document.getElementById('homebt').style.backgroundColor = 'black';
            }
            function repeathome(){
                if(repeathome1 === 1){
                    mouseonhome1();
                }
            }
            setInterval(repeathome,1);
        /*
            HOME
        */
            var repeatfeedack1 = 0;
            var mouseonfeedackinterval;
            function mouseonfeedack1(){
                console.log("1");
                document.getElementById('feedackbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
            function mouseonfeedack(){
                repeatfeedack1 = 1;
            }
            function mouseleavefeedack(){
                repeatfeedack1 = 0;
                document.getElementById('feedackbt').style.backgroundColor = 'black';
            }
            function repeatfeedack(){
                if(repeatfeedack1 === 1){
                    mouseonfeedack1();
                }
            }
            setInterval(repeatfeedack,1);
            /*
        Social
        */
        var repeatcontact1 = 0;
        var repeatcontactdw1 = 0;
        var mouseoncontactinterval;
        function mouseoncontact1(){
            console.log("1");
            document.getElementById('contactbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
        }
        function mouseoncontact(){
            repeatcontact1 = 1;
        }
        function mouseleavecontact(){
            repeatcontact1 = 0;
            document.getElementById('contactbt').style.backgroundColor = 'black';
        }
        function mouseoncontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 1;
            }
        }
        function mouseleavecontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 0;
                document.getElementById('contactdw1').style.backgroundColor='black';
            }
        }
        function repeatcontact(){
            if(repeatcontact1 === 1){
                mouseoncontact1();
            }
            if(repeatcontactdw1 === 1){
                document.getElementById('contactdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_red_opposite+','+colour_green_opposite+')';
            }
        }
        setInterval(repeatcontact,1);
}  
else if(colour===3){
    var nav_time=0;
        var colour_red=255;
        var colour_red_opposite=0;
        var colour_green=0;
        var colour_green_opposite=255;
        function nav_animation(){
            if(nav_time <= 100){
                nav_time += 1;
                colour_green += 2.55;
                colour_green_opposite -= 2.55;
                colour_red -= 2.55;
                colour_red_opposite += 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
            }
            else if(nav_time <= 200){
                nav_time += 1;
                colour_green -= 2.55;
                colour_green_opposite += 2.55;
                colour_red += 2.55;
                colour_red_opposite -= 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+colour_green+','+0+')';
            }
            else{
                nav_time = 0
                colour_green=0;
            }
        }
        setInterval(nav_animation,50);
        /*
        MENU
        */
       var repeatmenu1 = 0;
        var repeatmenudw1 = 0;
        var repeatmenudw2 = 0;
        var repeatmenudw3 = 0;
        var repeatmenudw4 = 0;
        var mouseonmenuinterval;
        function mouseonmenu1(){
            console.log("1");
            document.getElementById('menubt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
        }
        function mouseonmenu(){
            repeatmenu1 = 1;
        }
        function mouseleavemenu(){
            repeatmenu1 = 0;
            document.getElementById('menubt').style.backgroundColor = 'black';
        }
        function mouseonmenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 1;
            }
            else if(dwno === 2){
                repeatmenudw2 = 1;
            }
            else if(dwno === 3){
                repeatmenudw3 = 1;
            }
            else if(dwno === 4){
                repeatmenudw4 = 1;
            }
        }
        function mouseleavemenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 0;
                document.getElementById('menudw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatmenudw2 = 0;
                document.getElementById('menudw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatmenudw3 = 0;
                document.getElementById('menudw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatmenudw4 = 0;
                document.getElementById('menudw4').style.backgroundColor='black';
            }
        }
        function repeatmenu(){
            if(repeatmenu1 === 1){
                mouseonmenu1();
            }
            if(repeatmenudw1 === 1){
                document.getElementById('menudw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            if(repeatmenudw2 === 1){
                document.getElementById('menudw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            if(repeatmenudw3 === 1){
                document.getElementById('menudw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            if(repeatmenudw4 === 1){
                document.getElementById('menudw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
        }
        setInterval(repeatmenu,1);
        /*
        Social
        */
        var repeatsocial1 = 0;
        var repeatsocialdw1 = 0;
        var repeatsocialdw2 = 0;
        var repeatsocialdw3 = 0;
        var repeatsocialdw4 = 0;
        var mouseonsocialinterval;
        function mouseonsocial1(){
            console.log("1");
            document.getElementById('socialbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
        }
        function mouseonsocial(){
            repeatsocial1 = 1;
        }
        function mouseleavesocial(){
            repeatsocial1 = 0;
            document.getElementById('socialbt').style.backgroundColor = 'black';
        }
        function mouseonsocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 1;
            }
            else if(dwno === 2){
                repeatsocialdw2 = 1;
            }
            else if(dwno === 3){
                repeatsocialdw3 = 1;
            }
            else if(dwno === 4){
                repeatsocialdw4 = 1;
            }
        }
        function mouseleavesocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 0;
                document.getElementById('socialdw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatsocialdw2 = 0;
                document.getElementById('socialdw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatsocialdw3 = 0;
                document.getElementById('socialdw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatsocialdw4 = 0;
                document.getElementById('socialdw4').style.backgroundColor='black';
            }
        }
        function repeatsocial(){
            if(repeatsocial1 === 1){
                mouseonsocial1();
            }
            if(repeatsocialdw1 === 1){
                document.getElementById('socialdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            if(repeatsocialdw2 === 1){
                document.getElementById('socialdw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            if(repeatsocialdw3 === 1){
                document.getElementById('socialdw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            if(repeatsocialdw4 === 1){
                document.getElementById('socialdw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
        }
        setInterval(repeatsocial,1);
        /*
            HOME
        */
            var repeathome1 = 0;
            var mouseonhomeinterval;
            function mouseonhome1(){
                console.log("1");
                document.getElementById('homebt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            function mouseonhome(){
                repeathome1 = 1;
            }
            function mouseleavehome(){
                repeathome1 = 0;
                document.getElementById('homebt').style.backgroundColor = 'black';
            }
            function repeathome(){
                if(repeathome1 === 1){
                    mouseonhome1();
                }
            }
            setInterval(repeathome,1);
        /*
            HOME
        */
            var repeatfeedack1 = 0;
            var mouseonfeedackinterval;
            function mouseonfeedack1(){
                console.log("1");
                document.getElementById('feedackbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
            function mouseonfeedack(){
                repeatfeedack1 = 1;
            }
            function mouseleavefeedack(){
                repeatfeedack1 = 0;
                document.getElementById('feedackbt').style.backgroundColor = 'black';
            }
            function repeatfeedack(){
                if(repeatfeedack1 === 1){
                    mouseonfeedack1();
                }
            }
            setInterval(repeatfeedack,1);
            /*
        Social
        */
        var repeatcontact1 = 0;
        var repeatcontactdw1 = 0;
        var mouseoncontactinterval;
        function mouseoncontact1(){
            console.log("1");
            document.getElementById('contactbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
        }
        function mouseoncontact(){
            repeatcontact1 = 1;
        }
        function mouseleavecontact(){
            repeatcontact1 = 0;
            document.getElementById('contactbt').style.backgroundColor = 'black';
        }
        function mouseoncontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 1;
            }
        }
        function mouseleavecontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 0;
                document.getElementById('contactdw1').style.backgroundColor='black';
            }
        }
        function repeatcontact(){
            if(repeatcontact1 === 1){
                mouseoncontact1();
            }
            if(repeatcontactdw1 === 1){
                document.getElementById('contactdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+colour_green_opposite+','+0+')';
            }
        }
        setInterval(repeatcontact,1);
}
else if(colour === 4){
    var nav_time=0;
        var colour_red=255;
        var colour_red_opposite=0;
        var colour_green=0;
        var colour_green_opposite=255;
        function nav_animation(){
            if(nav_time <= 100){
                nav_time += 1;
                colour_green += 2.55;
                colour_green_opposite -= 2.55;
                colour_red -= 2.55;
                colour_red_opposite += 2.55;
                document.getElementById('name').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('homebt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('menubt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+255+','+colour_green+','+0+')';
            }
            else if(nav_time <= 200){
                nav_time += 1;
                colour_green -= 2.55;
                colour_green_opposite += 2.55;
                colour_red += 2.55;
                colour_red_opposite -= 2.55;
                document.getElementById('name').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('homebt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('feedackbt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('menubt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('socialbt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementById('contactbt').style.color = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+255+','+colour_green+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+255+','+colour_green+','+0+')';
            }
            else{
                nav_time = 0
                colour_green=0;
            }
        }
        setInterval(nav_animation,50);
        /*
        MENU
        */
       var repeatmenu1 = 0;
        var repeatmenudw1 = 0;
        var repeatmenudw2 = 0;
        var repeatmenudw3 = 0;
        var repeatmenudw4 = 0;
        var mouseonmenuinterval;
        function mouseonmenu1(){
            console.log("1");
            document.getElementById('menubt').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
        }
        function mouseonmenu(){
            repeatmenu1 = 1;
        }
        function mouseleavemenu(){
            repeatmenu1 = 0;
            document.getElementById('menubt').style.backgroundColor = 'black';
        }
        function mouseonmenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 1;
            }
            else if(dwno === 2){
                repeatmenudw2 = 1;
            }
            else if(dwno === 3){
                repeatmenudw3 = 1;
            }
            else if(dwno === 4){
                repeatmenudw4 = 1;
            }
        }
        function mouseleavemenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 0;
                document.getElementById('menudw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatmenudw2 = 0;
                document.getElementById('menudw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatmenudw3 = 0;
                document.getElementById('menudw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatmenudw4 = 0;
                document.getElementById('menudw4').style.backgroundColor='black';
            }
        }
        function repeatmenu(){
            if(repeatmenu1 === 1){
                mouseonmenu1();
            }
            if(repeatmenudw1 === 1){
                document.getElementById('menudw1').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            if(repeatmenudw2 === 1){
                document.getElementById('menudw2').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            if(repeatmenudw3 === 1){
                document.getElementById('menudw3').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            if(repeatmenudw4 === 1){
                document.getElementById('menudw4').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
        }
        setInterval(repeatmenu,1);
        /*
        Social
        */
        var repeatsocial1 = 0;
        var repeatsocialdw1 = 0;
        var repeatsocialdw2 = 0;
        var repeatsocialdw3 = 0;
        var repeatsocialdw4 = 0;
        var mouseonsocialinterval;
        function mouseonsocial1(){
            console.log("1");
            document.getElementById('socialbt').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
        }
        function mouseonsocial(){
            repeatsocial1 = 1;
        }
        function mouseleavesocial(){
            repeatsocial1 = 0;
            document.getElementById('socialbt').style.backgroundColor = 'black';
        }
        function mouseonsocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 1;
            }
            else if(dwno === 2){
                repeatsocialdw2 = 1;
            }
            else if(dwno === 3){
                repeatsocialdw3 = 1;
            }
            else if(dwno === 4){
                repeatsocialdw4 = 1;
            }
        }
        function mouseleavesocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 0;
                document.getElementById('socialdw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatsocialdw2 = 0;
                document.getElementById('socialdw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatsocialdw3 = 0;
                document.getElementById('socialdw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatsocialdw4 = 0;
                document.getElementById('socialdw4').style.backgroundColor='black';
            }
        }
        function repeatsocial(){
            if(repeatsocial1 === 1){
                mouseonsocial1();
            }
            if(repeatsocialdw1 === 1){
                document.getElementById('socialdw1').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            if(repeatsocialdw2 === 1){
                document.getElementById('socialdw2').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            if(repeatsocialdw3 === 1){
                document.getElementById('socialdw3').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            if(repeatsocialdw4 === 1){
                document.getElementById('socialdw4').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
        }
        setInterval(repeatsocial,1);
        /*
            HOME
        */
            var repeathome1 = 0;
            var mouseonhomeinterval;
            function mouseonhome1(){
                console.log("1");
                document.getElementById('homebt').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            function mouseonhome(){
                repeathome1 = 1;
            }
            function mouseleavehome(){
                repeathome1 = 0;
                document.getElementById('homebt').style.backgroundColor = 'black';
            }
            function repeathome(){
                if(repeathome1 === 1){
                    mouseonhome1();
                }
            }
            setInterval(repeathome,1);
        /*
            HOME
        */
            var repeatfeedack1 = 0;
            var mouseonfeedackinterval;
            function mouseonfeedack1(){
                console.log("1");
                document.getElementById('feedackbt').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
            function mouseonfeedack(){
                repeatfeedack1 = 1;
            }
            function mouseleavefeedack(){
                repeatfeedack1 = 0;
                document.getElementById('feedackbt').style.backgroundColor = 'black';
            }
            function repeatfeedack(){
                if(repeatfeedack1 === 1){
                    mouseonfeedack1();
                }
            }
            setInterval(repeatfeedack,1);
            /*
        Social
        */
        var repeatcontact1 = 0;
        var repeatcontactdw1 = 0;
        var mouseoncontactinterval;
        function mouseoncontact1(){
            console.log("1");
            document.getElementById('contactbt').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
        }
        function mouseoncontact(){
            repeatcontact1 = 1;
        }
        function mouseleavecontact(){
            repeatcontact1 = 0;
            document.getElementById('contactbt').style.backgroundColor = 'black';
        }
        function mouseoncontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 1;
            }
        }
        function mouseleavecontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 0;
                document.getElementById('contactdw1').style.backgroundColor='black';
            }
        }
        function repeatcontact(){
            if(repeatcontact1 === 1){
                mouseoncontact1();
            }
            if(repeatcontactdw1 === 1){
                document.getElementById('contactdw1').style.backgroundColor = 'rgb('+255+','+colour_green_opposite+','+0+')';
            }
        }
        setInterval(repeatcontact,1);
}
else if(colour === 5){
    var nav_time=0;
        var colour_red=255;
        var colour_red_opposite=0;
        var colour_green=0;
        var colour_green_opposite=255;
        function nav_animation(){
            if(nav_time <= 100){
                nav_time += 1;
                colour_green += 2.55;
                colour_green_opposite -= 2.55;
                colour_red -= 2.55;
                colour_red_opposite += 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+255+','+0+')';
            }
            else if(nav_time <= 200){
                nav_time += 1;
                colour_green -= 2.55;
                colour_green_opposite += 2.55;
                colour_red += 2.55;
                colour_red_opposite -= 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+255+','+0+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+255+','+0+')';
            }
            else{
                nav_time = 0
                colour_green=0;
            }
        }
        setInterval(nav_animation,50);
        /*
        MENU
        */
       var repeatmenu1 = 0;
        var repeatmenudw1 = 0;
        var repeatmenudw2 = 0;
        var repeatmenudw3 = 0;
        var repeatmenudw4 = 0;
        var mouseonmenuinterval;
        function mouseonmenu1(){
            console.log("1");
            document.getElementById('menubt').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
        }
        function mouseonmenu(){
            repeatmenu1 = 1;
        }
        function mouseleavemenu(){
            repeatmenu1 = 0;
            document.getElementById('menubt').style.backgroundColor = 'black';
        }
        function mouseonmenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 1;
            }
            else if(dwno === 2){
                repeatmenudw2 = 1;
            }
            else if(dwno === 3){
                repeatmenudw3 = 1;
            }
            else if(dwno === 4){
                repeatmenudw4 = 1;
            }
        }
        function mouseleavemenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 0;
                document.getElementById('menudw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatmenudw2 = 0;
                document.getElementById('menudw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatmenudw3 = 0;
                document.getElementById('menudw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatmenudw4 = 0;
                document.getElementById('menudw4').style.backgroundColor='black';
            }
        }
        function repeatmenu(){
            if(repeatmenu1 === 1){
                mouseonmenu1();
            }
            if(repeatmenudw1 === 1){
                document.getElementById('menudw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            if(repeatmenudw2 === 1){
                document.getElementById('menudw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            if(repeatmenudw3 === 1){
                document.getElementById('menudw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            if(repeatmenudw4 === 1){
                document.getElementById('menudw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
        }
        setInterval(repeatmenu,1);
        /*
        Social
        */
        var repeatsocial1 = 0;
        var repeatsocialdw1 = 0;
        var repeatsocialdw2 = 0;
        var repeatsocialdw3 = 0;
        var repeatsocialdw4 = 0;
        var mouseonsocialinterval;
        function mouseonsocial1(){
            console.log("1");
            document.getElementById('socialbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
        }
        function mouseonsocial(){
            repeatsocial1 = 1;
        }
        function mouseleavesocial(){
            repeatsocial1 = 0;
            document.getElementById('socialbt').style.backgroundColor = 'black';
        }
        function mouseonsocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 1;
            }
            else if(dwno === 2){
                repeatsocialdw2 = 1;
            }
            else if(dwno === 3){
                repeatsocialdw3 = 1;
            }
            else if(dwno === 4){
                repeatsocialdw4 = 1;
            }
        }
        function mouseleavesocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 0;
                document.getElementById('socialdw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatsocialdw2 = 0;
                document.getElementById('socialdw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatsocialdw3 = 0;
                document.getElementById('socialdw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatsocialdw4 = 0;
                document.getElementById('socialdw4').style.backgroundColor='black';
            }
        }
        function repeatsocial(){
            if(repeatsocial1 === 1){
                mouseonsocial1();
            }
            if(repeatsocialdw1 === 1){
                document.getElementById('socialdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            if(repeatsocialdw2 === 1){
                document.getElementById('socialdw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            if(repeatsocialdw3 === 1){
                document.getElementById('socialdw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            if(repeatsocialdw4 === 1){
                document.getElementById('socialdw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
        }
        setInterval(repeatsocial,1);
        /*
            HOME
        */
            var repeathome1 = 0;
            var mouseonhomeinterval;
            function mouseonhome1(){
                console.log("1");
                document.getElementById('homebt').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            function mouseonhome(){
                repeathome1 = 1;
            }
            function mouseleavehome(){
                repeathome1 = 0;
                document.getElementById('homebt').style.backgroundColor = 'black';
            }
            function repeathome(){
                if(repeathome1 === 1){
                    mouseonhome1();
                }
            }
            setInterval(repeathome,1);
        /*
            HOME
        */
            var repeatfeedack1 = 0;
            var mouseonfeedackinterval;
            function mouseonfeedack1(){
                console.log("1");
                document.getElementById('feedackbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
            function mouseonfeedack(){
                repeatfeedack1 = 1;
            }
            function mouseleavefeedack(){
                repeatfeedack1 = 0;
                document.getElementById('feedackbt').style.backgroundColor = 'black';
            }
            function repeatfeedack(){
                if(repeatfeedack1 === 1){
                    mouseonfeedack1();
                }
            }
            setInterval(repeatfeedack,1);
            /*
        Social
        */
        var repeatcontact1 = 0;
        var repeatcontactdw1 = 0;
        var mouseoncontactinterval;
        function mouseoncontact1(){
            console.log("1");
            document.getElementById('contactbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
        }
        function mouseoncontact(){
            repeatcontact1 = 1;
        }
        function mouseleavecontact(){
            repeatcontact1 = 0;
            document.getElementById('contactbt').style.backgroundColor = 'black';
        }
        function mouseoncontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 1;
            }
        }
        function mouseleavecontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 0;
                document.getElementById('contactdw1').style.backgroundColor='black';
            }
        }
        function repeatcontact(){
            if(repeatcontact1 === 1){
                mouseoncontact1();
            }
            if(repeatcontactdw1 === 1){
                document.getElementById('contactdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+255+','+0+')';
            }
        }
        setInterval(repeatcontact,1);
}
else{        
        var nav_time=0;
        var colour_red=255;
        var colour_red_opposite=0;
        var colour_green=0;
        var colour_green_opposite=255;
        function nav_animation(){
            if(nav_time <= 100){
                nav_time += 1;
                colour_green += 2.55;
                colour_green_opposite -= 2.55;
                colour_red -= 2.55;
                colour_red_opposite += 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
            }
            else if(nav_time <= 200){
                nav_time += 1;
                colour_green -= 2.55;
                colour_green_opposite += 2.55;
                colour_red += 2.55;
                colour_red_opposite -= 2.55;
                document.getElementById('name').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('photo').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')'; 
                document.getElementById('top').style.borderColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
                document.getElementById('homebt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('homebt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('feedackbt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('feedackbt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('menubt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('menubt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[0].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[1].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[2].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('menudw1')[3].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('socialbt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('socialbt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[0].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[1].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[2].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('socialdw1')[3].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('contactbt').style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementById('contactbt').style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.borderColor = 'rgb('+colour_red+','+'0,'+colour_green+')';
                document.getElementsByClassName('contactdw1')[0].style.color = 'rgb('+colour_red+','+'0,'+colour_green+')';
            }
            else{
                nav_time = 0
                colour_green=0;
            }
        }
        setInterval(nav_animation,50);
        /*
        MENU
        */
       var repeatmenu1 = 0;
        var repeatmenudw1 = 0;
        var repeatmenudw2 = 0;
        var repeatmenudw3 = 0;
        var repeatmenudw4 = 0;
        var mouseonmenuinterval;
        function mouseonmenu1(){
            console.log("1");
            document.getElementById('menubt').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
        }
        function mouseonmenu(){
            repeatmenu1 = 1;
        }
        function mouseleavemenu(){
            repeatmenu1 = 0;
            document.getElementById('menubt').style.backgroundColor = 'black';
        }
        function mouseonmenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 1;
            }
            else if(dwno === 2){
                repeatmenudw2 = 1;
            }
            else if(dwno === 3){
                repeatmenudw3 = 1;
            }
            else if(dwno === 4){
                repeatmenudw4 = 1;
            }
        }
        function mouseleavemenudw(dwno){
            if(dwno === 1){
                repeatmenudw1 = 0;
                document.getElementById('menudw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatmenudw2 = 0;
                document.getElementById('menudw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatmenudw3 = 0;
                document.getElementById('menudw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatmenudw4 = 0;
                document.getElementById('menudw4').style.backgroundColor='black';
            }
        }
        function repeatmenu(){
            if(repeatmenu1 === 1){
                mouseonmenu1();
            }
            if(repeatmenudw1 === 1){
                document.getElementById('menudw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            if(repeatmenudw2 === 1){
                document.getElementById('menudw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            if(repeatmenudw3 === 1){
                document.getElementById('menudw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            if(repeatmenudw4 === 1){
                document.getElementById('menudw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
        }
        setInterval(repeatmenu,1);
        /*
        Social
        */
        var repeatsocial1 = 0;
        var repeatsocialdw1 = 0;
        var repeatsocialdw2 = 0;
        var repeatsocialdw3 = 0;
        var repeatsocialdw4 = 0;
        var mouseonsocialinterval;
        function mouseonsocial1(){
            console.log("1");
            document.getElementById('socialbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
        }
        function mouseonsocial(){
            repeatsocial1 = 1;
        }
        function mouseleavesocial(){
            repeatsocial1 = 0;
            document.getElementById('socialbt').style.backgroundColor = 'black';
        }
        function mouseonsocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 1;
            }
            else if(dwno === 2){
                repeatsocialdw2 = 1;
            }
            else if(dwno === 3){
                repeatsocialdw3 = 1;
            }
            else if(dwno === 4){
                repeatsocialdw4 = 1;
            }
        }
        function mouseleavesocialdw(dwno){
            if(dwno === 1){
                repeatsocialdw1 = 0;
                document.getElementById('socialdw1').style.backgroundColor='black';
            }
            else if(dwno === 2){
                repeatsocialdw2 = 0;
                document.getElementById('socialdw2').style.backgroundColor='black';
            }
            else if(dwno === 3){
                repeatsocialdw3 = 0;
                document.getElementById('socialdw3').style.backgroundColor='black';
            }
            else if(dwno === 4){
                repeatsocialdw4 = 0;
                document.getElementById('socialdw4').style.backgroundColor='black';
            }
        }
        function repeatsocial(){
            if(repeatsocial1 === 1){
                mouseonsocial1();
            }
            if(repeatsocialdw1 === 1){
                document.getElementById('socialdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            if(repeatsocialdw2 === 1){
                document.getElementById('socialdw2').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            if(repeatsocialdw3 === 1){
                document.getElementById('socialdw3').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            if(repeatsocialdw4 === 1){
                document.getElementById('socialdw4').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
        }
        setInterval(repeatsocial,1);
        /*
            HOME
        */
            var repeathome1 = 0;
            var mouseonhomeinterval;
            function mouseonhome1(){
                console.log("1");
                document.getElementById('homebt').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            function mouseonhome(){
                repeathome1 = 1;
            }
            function mouseleavehome(){
                repeathome1 = 0;
                document.getElementById('homebt').style.backgroundColor = 'black';
            }
            function repeathome(){
                if(repeathome1 === 1){
                    mouseonhome1();
                }
            }
            setInterval(repeathome,1);
        /*
            HOME
        */
            var repeatfeedack1 = 0;
            var mouseonfeedackinterval;
            function mouseonfeedack1(){
                console.log("1");
                document.getElementById('feedackbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
            function mouseonfeedack(){
                repeatfeedack1 = 1;
            }
            function mouseleavefeedack(){
                repeatfeedack1 = 0;
                document.getElementById('feedackbt').style.backgroundColor = 'black';
            }
            function repeatfeedack(){
                if(repeatfeedack1 === 1){
                    mouseonfeedack1();
                }
            }
            setInterval(repeatfeedack,1);
            /*
        Social
        */
        var repeatcontact1 = 0;
        var repeatcontactdw1 = 0;
        var mouseoncontactinterval;
        function mouseoncontact1(){
            console.log("1");
            document.getElementById('contactbt').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
        }
        function mouseoncontact(){
            repeatcontact1 = 1;
        }
        function mouseleavecontact(){
            repeatcontact1 = 0;
            document.getElementById('contactbt').style.backgroundColor = 'black';
        }
        function mouseoncontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 1;
            }
        }
        function mouseleavecontactdw(dwno){
            if(dwno === 1){
                repeatcontactdw1 = 0;
                document.getElementById('contactdw1').style.backgroundColor='black';
            }
        }
        function repeatcontact(){
            if(repeatcontact1 === 1){
                mouseoncontact1();
            }
            if(repeatcontactdw1 === 1){
                document.getElementById('contactdw1').style.backgroundColor = 'rgb('+colour_red_opposite+','+'0,'+colour_green_opposite+')';
            }
        }
        setInterval(repeatcontact,1);
}