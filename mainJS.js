

		     $("#submitButton1").click(function(){
			 
         show_registr();
        });
	
function show_registr()
{
     $("#loginPage1").fadeOut(500);
           $("#registerPage").fadeIn(600);
            $("loginPage1").addClass("active");
            $("#registerPage").addClass("active");
};



                $('#li2').click(function(e) {
                     $.post('controller.php',
                            { page: 'MainPage', command: 'ListUsers1' },
                            function(data) {
                                data = JSON.parse(data);
                                $('.Carousel-Slide-item1').html('' + list_users(data));
                        });
            });
			   function list_users(data)
            {	
				
                var users = "<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">Choose user</p><br><div class=\"row\" style=\"\"><div class=\"col-1\"></div>";
                  for (var i = 0; i < data.length; i++) {
					  
             if(i%4 == 0)
                 users += "</div><br><div class=\"row\" ><div class=\"col-1 \"></div>";

                    users += '<div class="col-2 element2" style=\"background-color: white; margin-right: 20px;  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);transition: all 0.3s cubic-bezier(.25,.8,.25,1);\" ><font class="col-3 d-inline" style=\"font-size:20px;  float:left;\">' + data[i]["Name"] +'</font>                        </div>';         
				  }
                 users +="</div>";
                return users;
            };
			$('body').on('click', '.element2', function (e) {
     	var k = $(this).text().trim();
				$.post('controller.php',
                 { page: 'MainPage', command: 'ListQuestions', user: k },
                     function(data) {
					
                      data = JSON.parse(data);
                      $('.Carousel-Slide-item2').html('' + list_question(data));
		});
		$("#Carousel-Controller-Nav-right").trigger('click');
   });
       $('body').on('click', '#backp', function (e) {
		   		$("#Carousel-Controller-Nav-left").trigger('click');

	   });
   function list_question(data)
            {
               var questions= "";
				if(data.length == 0){
					questions += '<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">This user doesnt have any questions</p><br><div class=\"col-1\"></div><div id= \"backp\" class=\"btn \">Back</div>';
				}else{
					  questions += "<form style=\"padding-top:110px;\">";
                var k = "<p id='qids' style=\'display:none\'>";
                for (var i = 0; i < data.length; i++) {
                    if(i != (data.length -1))
                    k  += data[i]["Qid"] + "/";
                    else
                    k += data[i]["Qid"];
                    
                    questions +="<div class=\"form-group row\"><div class=\"col-2\"></div><label for=\"Answer" + (i+1) + "2\" class=\"col-9 col-form-label\">" + data[i]["Question"] + "</label></div><div class=\"row\"><div class=\"col-2\"></div><div class=\"col-9\"><input class=\"form-control\" type=\"text\" placeholder=\'Answer\' name=\"Answer" + (i+1) + "2\" id = \"Answer" + (i+1) + "2\"></div></div><br>";
                }
                        k += "</p>";
                        questions +="<div class=\"row\"> <div class=\"col-12\"><div class=\"col-2\"></div> <div id= \"backp\" class=\"btn \" style=\"margin-right:200px;\">Back</div><div id=\"submitans\" class=\"btn\">Submit</div></div></form> </div></div>";
                questions += k;}
                return questions;
            };
			
			   $('body').on('click', '#submitans', function()
                        { var ids = $("#qids").text();
							var arr = $("#qids").text().split("/");
                         
                         $.post('controller.php',
             { page: 'MainPage', command: 'Check', ids: ids},
                    function(data) {
						
                     data = JSON.parse(data);
					 var k = mark(data);
					 	
                     $('#slider3p').text('Your Mark is ' + k + "/4");
				
					    $.post('controller.php',
                          { page: 'MainPage', command: 'Mark', ids: ids, mark: k},
                             function(data) {
		
                                  //data = JSON.parse(data);
					
					 
                       });
                       });
                            $("#Carousel-Controller-Nav-right").trigger('click');

                         });
				function mark(data)
				{
					   var a1 = $("#Answer12").val().toLowerCase();
                         var a2 = $("#Answer22").val().toLowerCase();
                         var a3 = $("#Answer32").val().toLowerCase();
                         var a4 = $("#Answer42").val().toLowerCase();
						 var cntr = 0;
						 for (var i = 0; i < data.length; i++)
						 {
							 switch (i){
							 case 0:
							 if(a1 == data[i]['Answer'])
								 cntr++;
							 break;
							  case 1:
							 if(a2 == data[i]['Answer'])
								 cntr++;
							 break;
							  case 2:
							 if(a3 == data[i]['Answer'])
								 cntr++;
							 break;
							  case 3:
							 if(a4 == data[i]['Answer'])
								 cntr++;
							 break;
							 
								 }
						 }
						 return cntr;
				}
                $('#li3').click(function(e) {
               // You SHOULD use jQuery post.
                     $.post('controller.php',
                            { page: 'MainPage', command: 'ListMarks' },
                            function(data) {
								//alert(data);
                                data = JSON.parse(data);
                                $('#tab3').html('' + list_marks1(data));
                        });
            });
				     function list_marks1(data)
				{   var users = "";
						//alert(data);
					  if(data.length == 0){
						  users = "<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">Nobody answered your question yet</p>";
					  }else{
						  users = "<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">List of marks people got for your questions</p>"; 
                      users += "<div class=\"row\" ><div class=\"col-1\"></div>";
                  for (var i = 0; i < data.length; i++) {

             if(i%4 == 0)
                 users += "</div><br><div class=\"row\" ><div class=\"col-1\"></div>";
               
                    users += '<div class="col-2 element3" style=\" margin-right:20px;background-color: white;box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);transition: all 0.3s cubic-bezier(.25,.8,.25,1); font-size: 20px;\" >    User: ' + data[i]['name'] + '<br>Mark : ' + data[i]['Mark'] +'                       </div>';         
              
            }
                users +="</div>";}
                return users;    
            };
                 $('#li5').click(function(e) {
                // You SHOULD use jQuery post.
                     $.post('controller.php',
                            { page: 'MainPage', command: 'MyMarks' },
                            function(data) {
                                data = JSON.parse(data);
                                $('#tab5').html('' + list_marks(data));
                        });
            });  
			     function list_marks(data)
            {   var users = "";
					  if(data.length == 0){
						  users = "<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">You havent answer any question yet</p>";
					  }else{
						  users = "<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">List of marks you got</p>"; 
                      users += "<div class=\"row\" ><div class=\"col-1\"></div>";
                  for (var i = 0; i < data.length; i++) {

             if(i%4 == 0)
                 users += "</div><br><div class=\"row\" ><div class=\"col-1\"></div>";
               
                    users += '<div class="col-2 element3" style=\" margin-right: 20px; background-color: white;  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);transition: all 0.3s cubic-bezier(.25,.8,.25,1); font-size: 20px;\" >    User: ' + data[i]['name'] + '<br>Mark : ' + data[i]['Mark'] +'                       </div>';         
              
            }
                users +="</div>";}
                return users;    
            };
			
           $("#li4").click(function () {
                   //You SHOULD use jQuery post.
                     $.post('controller.php',
                            { page: 'MainPage', command: 'ListUsers1' },
                            function(data) {
								//alert(data);
                                data = JSON.parse(data);
                                $('#tab4').html('' + list_users1(data));
		   }); });
            // When the 'SignOut' button is clicked
			
            $('#li7').click( function() {
                $('#form-signout').submit();
            });
       
         
         
		
           
            function list_users1(data)
            {
				 var users = "<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">Choose user</p><div class=\"row\"  ><div class=\"col-1\"></div>";
                 for (var i = 0; i < data.length; i++) {
             if(i%4 == 0)
                 users += "</div><br> <div class=\"row\" ><div class=\"col-1 \"></div>";
               
                    users += '<div class="col-2 element1" style=\"background-color: white; margin-right:20px;    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);  transition: all 0.3s cubic-bezier(.25,.8,.25,1);\" ><font class="col-3 d-inline" style=\"font-size:20px;  float:left;\">' + data[i]['Name'] +'</font>                        </div>';         
              
            }
                users +="</div>";
                return users;
            };
       
	    $('body').on('mouseover', '.element1', function (e) {$(this).css('box-shadow', '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)')});
	   	    $('body').on('mouseout', '.element1', function (e) {$(this).css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)')});

			       
	    $('body').on('mouseover', '.element3', function (e) {$(this).css('box-shadow', '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)')});
	   	    $('body').on('mouseout', '.element3', function (e) {$(this).css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)')});

			       
	    $('body').on('mouseover', '.element2', function (e) {$(this).css('box-shadow', '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)')});
	   	    $('body').on('mouseout', '.element2', function (e) {$(this).css('box-shadow', '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)')});

    $('body').on('click', '.element1', function (e) {
     	var k = $(this).text().trim();
				$.post('controller.php',
                 { page: 'MainPage', command: 'ListAnswers', user: k },
                     function(data) {
					//alert(data);
                      data = JSON.parse(data);
                    $("#tab4").fadeOut(200)
							  .delay(210)
							  .queue(function(n){
								  $(this).html('' + list_question_answer(data)); n();}).fadeIn(200);
                    
 
		}); });
            // When the 'SignOut' button is clicked
		function list_question_answer(data)
            {
				var users = "";
					  if(data.length == 0){
						  users = "<p style=\"text-allign: center; margin-top: 90px; font-size: 30px;\">>This user doesnt have any questions</p>";
					  }else{
                 users = "<div style=\"padding-top:110px;\"></div>";
				
                  for (var i = 0; i < data.length; i++) {

             users +="<p>"+ (i+1) +". Question : "+ data[i]["Question"]+"</p><p>Answer: "+data[i]['Answer']+"</p>"
              
					  }}
               
                return users;
                }	

        
    
    
            
                
					$("#postQuestions").click(function(){
						if($("#question1").val().length === 0 && $("#question2").val().length === 0 &&$("#question3").val().length === 0 && $("#question4").val().length === 0 && $("#answer1").val().length === 0&& $("#answer2").val().length === 0&& $("#answer3").val().length === 0&& $("#answer4").val().length === 0)
						{alert("Ender the data");
					
							
					}else{
							var q1 = $("#question1").val();
							var q2 = $("#question2").val();
							var q3 = $("#question3").val();
							var q4 = $("#question4").val();
						 var a1 = $("#answer1").val();
                         var a2 = $("#answer2").val();
                         var a3 = $("#answer3").val();
                         var a4 = $("#answer4").val();
                         $.post('controller.php',
             { page: 'MainPage', command: 'PostQuestion', 
			 question1: q1, question2: q2, question3: q3, question4: q4,
			 answer1: a1, answer2: a2, answer3: a3, answer4: a4},
                    function(data) {
						alert(data);
						$("#question1").val('');
							 $("#question2").val('');
							 $("#question3").val('');
							 $("#question4").val('');
						  $("#answer1").val('');
                          $("#answer2").val('');
                          $("#answer3").val('');
                          $("#answer4").val('');
                       });
					} }
					);
                     
       
        

     $("#cancelButton").click(function(){
           $("#registerPage").fadeOut(500);
           $("#loginPage1").fadeIn(600);
            $("loginpage1").removeClass("active");
            $("#registerPage").removeClass("active");
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





// —--------------------------------------------------
// tabs are taken frome codepen.io
// —--------------------------------------------------

$(".tab_content").hide();
$(".tab_content:first").show();

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





//---------------------------
// Slider is taken from codepen.io
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
carouselSlideItems.forEach(function(item) {
item.style.backgroundImage = item.getAttribute('data-background');
});

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
       $("#dot1").css("color", "#f1105a");
        $("#dot2").css("color", "#CCC");
        $("#dot3").css("color", "#CCC");
    }
    else if(index==1)
    {
          $("#dot2").css("color", "#f1105a");
        $("#dot1").css("color", "#CCC");
        $("#dot3").css("color", "#CCC");
    }
    else if(index==2)
    {
       $("#dot3").css("color", "#f1105a");
        $("#dot1").css("color", "#CCC");
        $("#dot2").css("color", "#CCC");
    }
}


//LOGIN HIDE SHOW - - — - - - - - - - - — - - - - — - - - - - — - -


function inputFocus(i){
if(i.value==i.defaultValue){
i.value=""; i.style.color="#888";
}
}
function inputBlur(i){
if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}


$("#tabs li").ready(function(){
   
    $("#tabs li").width(($("#tabs").width()/$("ul.tabs li").length) + "%");
 
});




$("#tabs").hover(function(){
    $(this).addClass("on");
});

$("#tabs").mouseout(function(){
    $(this).removeClass("on");
   
});


$("#tof").click(function(){
$("#Carousel-Controller-Nav-right").trigger('click');
});
