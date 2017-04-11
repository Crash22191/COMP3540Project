// —------------------
// Animation Background
// —------------------
$('#bodyBG').ready(function(){ {
if($(window).width()>768){
    $('#bodyBG').crossSlide({
    fade: 2
    }, [
    {
    src: 'images/2.jpg',
    from: '20% 20% 2x',
    to: '80% 80% 2.1x',
    time: 2
    }, {
    src: 'images/2 (1).jpg',
    from: '80% 80% 2x',
    to: '20% 20% 2.1x',
    time: 2
    }
    ]);

    // —-----------------------
    // Animation Background fade
    // —-----------------------
    $( "#bodyBG" ).ready(function() {
        $( "#bodyBG" ).fadeTo( "slow" , 0.5, function() {});
    });
}
else
{
    $("body").css("background-image", 'url("/images/2.jpg")');

}
}
});


$('#checkBoxDynamicBG').click(function(){
    if($('#bodyBG').hasClass("active")){
        
        $('#bodyBG').crossSlideResume();
        $('#bodyBG').removeClass("active");
    }
    else
    {
        $('#bodyBG').crossSlidePause();
        $('#bodyBG').addClass("active");
    }
});




// —-----------------------------------------
// First window with logo and developing fade
// —-----------------------------------------

$("#mainPage1").ready(function(){
$("#mainPage1").fadeTo("slow", 1.0, function(){
// Animation complete. 
});
});

// —--------------------------------------------------
// Navigation Bar
// —--------------------------------------------------

$(".tab_content").hide();
$(".tab_content:first").show();
/* if in tab mode */
$("ul.tabs li").click(function() {
var $this = $(this);
if($this.hasClass('active')){ }
else{ 
$(".tab_content").fadeOut(1000);
var activeTab = $(this).attr("rel");
$("#"+activeTab).fadeIn(500); 
if($("#li1").hasClass("active"))
{
$("#li1.active").css("border-bottom","");

}
$("ul.tabs li").removeClass("active");

$(this).addClass("active");
$(".tab_drawer_heading").removeClass("d_active");
$(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");



}
});

// —--------------------------------------------------
// Loading
// —--------------------------------------------------




$("#submitButton").click(function(){
var login = $("#loginLogin").val();
var password = $("#passwordLogin").val();
    
if ((login=="otree") && (password=="123")) 
{
$("#loginPage").fadeOut(1000);


$("#mainPage").fadeIn(1000);

}
else 
{
    $( "#loginLogin" ).val("");
    $( "#passwordLogin" ).val("");
    
    
    $( "#loginPage" ).addClass("active");
    $("#submitButton").removeClass("active");
    setTimeout(function(){
        $( "#loginPage" ).removeClass("active")},500
    );
}
});

Pace.on("done", function(){
$("#mainPage1").fadeOut(200);
$("#loginPage").fadeIn(1000);
});

$("#loginLogin").keyup(function(){
    if(($("#loginLogin").val()!='')&&($("#passwordLogin").val()!=''))
    {
        $("#submitButton").addClass("active");
    }
    else
    {
        $("#submitButton").removeClass("active");
    }
});

$("#passwordLogin").keyup(function(){
    if(($("#loginLogin").val()!='')&&($("#passwordLogin").val()!=''))
    {
        $("#submitButton").addClass("active");
    }
    else
    {
        $("#submitButton").removeClass("active");
    }
});

//---------------------------
// transitionend event stuff
//---------------------------
var transitions = {
'transition': 'transitionend',
'OTransition': 'oTransitionEnd',
'MozTransition': 'transitionend',
'WebkitTransition': 'webkitTransitionEnd'
};
var transitionEvent = 'NO_TRANSITION_EVENT';
var _elem = document.createElement('div');
var __t = null;

for (__t in transitions)
if (_elem.style[__t] !== undefined)
transitionEvent = transitions[__t];

if (transitionEvent == 'NO_TRANSITION_EVENT') {
var transEvent = document.createEvent('Event');
transEvent.initEvent(transitionEvent, true, false);
}

// helper mixins

function asNodeList() {
this.forEach = function(cb) {
[].forEach.call(this, cb);
};
this.css = function(cssObj) {
this.forEach(function(node) {
for (var style in cssObj) node.style[style] = cssObj[style];
});
};
return this;
}

// Carousel stuff

var carousels = asNodeList.call(document.querySelectorAll('[data-carousel]'));

carousels.forEach(function(elem) {

var current = 0;

var carouselSlide = elem.querySelector('.Carousel-Slide');
var carouselSlideItems = asNodeList.call(
carouselSlide.querySelectorAll('.Carousel-Slide-item')
);

carouselSlide.style.width = (carouselSlideItems.length * 100) + '%';
carouselSlideItems.css({
width: (100 / carouselSlideItems.length) + '%'
});
/*carouselSlideItems.forEach(function(item) {
item.style.backgroundImage = item.getAttribute('data-background');
});
*/
elem.querySelector('.Carousel-Controller-Nav-left')
.addEventListener('click', function(e) {
current--;
slide(current);
});
elem.querySelector('.Carousel-Controller-Nav-right')
.addEventListener('click', function(e) {
current++;
slide(current);
});

elem.addEventListener(transitionEvent, (function() {
var completedElem = document.getElementById('completed');

return function(e) {
completedElem.style.display = 'block';
setTimeout(function() {
completedElem.style.display = 'none';
}, 500);

}
})
());

function slide(place) {
    
if (current < 0) current = carouselSlideItems.length - 1;
else if (current >= carouselSlideItems.length) current = 0;
carouselSlide.style.left = -(current * 100) + '%';

    $("#sliderBG").removeClass("a1 a2 a3");
$("#sliderBG").addClass("a" + current);
if (transitionEvent == 'NO_TRANSITION_EVENT')
elem.dispatchEvent(transEvent);             
tabBorderChange(current);
        
}
});

function tabBorderChange(index)
{
 
if(index==0)
    {
       $("#dot1").css("color", "#e040fb");
        $("#dot2").css("color", "#CCC");
        $("#dot3").css("color", "#CCC");
    }
    else if(index==1)
    {
          $("#dot2").css("color", "#e040fb");
        $("#dot1").css("color", "#CCC");
        $("#dot3").css("color", "#CCC");
    }
    else if(index==2)
    {
       $("#dot3").css("color", "#e040fb");
        $("#dot1").css("color", "#CCC");
        $("#dot2").css("color", "#CCC");
    }
}

$("#about").click(function(){
if($("#settings").hasClass("active"))
{
$("#settings").removeClass("active");
$("#Settingsdiv").slideUp();
document.getElementById("settings").src = "images/Settings%20g.svg";
document.getElementById("settings").setAttribute("onmouseover", "this.src='images/Settings%20p.svg';");
document.getElementById("settings").setAttribute("onmouseout", "this.src='images/Settings%20g.svg';");
}
if ($("#about").hasClass("active"))
{
$("#about").removeClass("active");
$("#infodiv").slideUp();
document.getElementById("about").src = "images/Info%20g.svg";
document.getElementById("about").setAttribute("onmouseover", "this.src='images/Info%20p.svg';");
document.getElementById("about").setAttribute("onmouseout", "this.src='images/Info%20g.svg';");


}else{
$("#about").addClass("active");
$("#infodiv").slideDown();
document.getElementById("about").src = "images/Info%20p.svg";
document.getElementById("about").setAttribute("onmouseover", "this.src='images/Info%20g.svg';");
document.getElementById("about").setAttribute("onmouseout", "this.src='images/Info%20p.svg';");
}
});

$("#settings").click(function(){
if($("#about").hasClass("active"))
{
$("#about").removeClass("active");
$("#infodiv").slideUp();
document.getElementById("about").src = "images/Info%20g.svg";
document.getElementById("about").setAttribute("onmouseover", "this.src='images/Info%20p.svg';");
document.getElementById("about").setAttribute("onmouseout", "this.src='images/Info%20g.svg';");
}
if ($("#settings").hasClass("active"))
{
$("#settings").removeClass("active");
$("#Settingsdiv").slideUp();
document.getElementById("settings").src = "images/Settings%20g.svg";
document.getElementById("settings").setAttribute("onmouseover", "this.src='images/Settings%20p.svg';");
document.getElementById("settings").setAttribute("onmouseout", "this.src='images/Settings%20g.svg';");


}else{
$("#settings").addClass("active");
$("#Settingsdiv").slideDown();
document.getElementById("settings").src = "images/Settings%20p.svg";
document.getElementById("settings").setAttribute("onmouseover", "this.src='images/Settings%20g.svg';");
document.getElementById("settings").setAttribute("onmouseout", "this.src='images/Settings%20p.svg';");
}
});

//LOGIN HIDE SHOW - - — - - - - - - - - — - - - - — - - - - - — - -


function inputFocus(i){
if(i.value==i.defaultValue){
i.value=""; i.style.color="#888";
}
}
function inputBlur(i){
if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}



 //SLIDER FIRST PAGE - - — - - - - - - - - — - - - - — - - - - - — - -  
 //SLIDER FIRST PAGE - - — - - - - - - - - — - - - - — - - - - - — - -   
 //SLIDER FIRST PAGE - - — - - - - - - - - — - - - - — - - - - - — - -     


$("#tabs li").ready(function(){
   
    $("#tabs li").width(($("#tabs").width()/$("ul.tabs li").length) + "%");
    $("#border").width(($("#li1").width()) + "%");
});

//window.addEventListener("resize", function(){
//    $("#border").width(($("#li1").width()) + "%");  
//        for(i=1;i<$("ul.tabs li").length+1;i++)
//    {
//        if($("#li"+i).hasClass("active"))
//           {
//              
//                $("#border").css("marginLeft" , $("#border").width() * (i-1) + "px");
//           }
//    }
//});




$("#li1").hover(function(){

    $("#border").stop();
    
    $("#border").animate(
        {
        marginLeft : $("#border").width() * 0 + "px" ,
        
        
        }, 200);
});

$("#li2").hover(function(){
$("#border").stop();
    $("#border").animate(
        {
        marginLeft : $("#border").width() * 1 + "px" ,
        
        }, 200);

});

$("#li3").hover(function(){

    $("#border").stop();
    $("#border").animate(
        {
        marginLeft : $("#border").width() * 2 + "px" ,
            
        }, 200);
});

$("#li4").hover(function(){

    $("#border").stop();
    $("#border").animate(
        {
        marginLeft : $("#border").width() * 3  + "px" ,
            
        }, 200);
});

$("#li5").hover(function(){

    $("#border").stop();
    $("#border").animate(
        {
        marginLeft : $("#border").width() * 4  +"px" ,
            
        }, 200);
});

$("#li6").hover(function(){

    $("#border").stop();
    $("#border").animate(
        {
        marginLeft : $("#border").width() * 5  +"px" ,
            
        }, 200);  
});



/*$(document).ready(function(){
       $('#bodyBG').SmokeEffect( { 
           forceBackgroundRender: true ,

       } );
    var x = $("#border").width() / $("#border").parent().width() * 100;
   
});*/

$("#tabs").hover(function(){
    $(this).addClass("on");
});

$("#tabs").mouseout(function(){
    $(this).removeClass("on");
    for(i=1;i<$("ul.tabs li").length+1;i++)
    {
        if($("#li"+i).hasClass("active"))
           {
               $("#border").stop();
                $("#border").animate(
                {
                marginLeft : $("#border").width() * (i-1) + "px" ,
                }, 200);
           }
    }
});


$("#toli2").click(function(){
$("#li3").trigger("mouseover");
$("#li3").trigger("click");

});
