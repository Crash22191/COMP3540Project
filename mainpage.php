<?php
    // session_start();  // It is already started in controller.
    if (!isset($_SESSION['signedin']) || $_SESSION['signedin'] != 'YES')
        exit();
?>

<!DOCTYPE html>
<html>
<head>
    <title>COMPBaev</title>
    <link rel="shortcut icon" href="images/image.ico" />
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="mainStylesheet.css">
     <script type="text/javascript" src="mainJS.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   <link rel="stylesheet" href="css/bootstrap-grid.css">
 
    <link rel="stylesheet" href="css/bootstrap-reboot.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/bootstrap-grid.css">
    <script type="text/javascript" src="js/jquery.cross-slide.js" defer></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


</head>

<body>
   
 <form id='form-signout' method='post' action='controller.php' style='display:none'>
            <input type='hidden' name='page' value='MainPage'>
            <input type='hidden' name='command' value='SignOut'>
        </form>
        <script>
            // When the 'SignOut' button is clicked
            $('.signout').click(function() {
                document.getElementById('form-signout').submit();
            });

 
    
    $('#bodyBG').ready(function(){ {
/*if($(window).width()>768){
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
   

}*/
 $("body").css("background-image", 'url("images/2.jpg")');
   $('#mainPage').fadeIn(500);
}
                            

});
    </script>
        
        
    <div id="bodyBG" ></div>
        
 <!--.......................................................-->        
<!--...............Гавное окно.............................-->
<!--.......................................................-->           
    <div id="mainPage" >   
        <div id="navpanel">
        <div id="navname">
            
            <div id="logoNavBar">Comp3540</div>
            <div class="rightnav">
                <?php echo $username; ?>
            </div>
        </div>
        
            
<!--...............Навигация правый верх......................-->               

          

<!--...............Навигация по окну......................-->               
            <ul id="tabs" class="tabs">
               <!-- <div id="border"></div> -->
            <li class="active lielements" rel="tab1" id="li1" >
                <div class="link"></div>Post Questions
            </li>
            <li class="lielements" rel="tab2" id="li2">
                Answer Questions
            </li>
                     <script>

        </script>
                  <form id='form-signout' method='post' action='controller.php' style='display:none'>
            <input type='hidden' name='page' value='MainPage'>
            <input type='hidden' name='command' value='SignOut'>
        </form>
        <script>

        </script>
            <li class="lielements" rel="tab3" id="li3">
                List Marks
            </li>
       
            <li class="lielements" rel="tab4" id="li4">
                Search Answers
            </li>
            <li class="lielements" rel="tab5" id="li5">
                Your Marks
            </li>
            <li class="lielements" rel="tab6" id="li6" style="display:none">
               
            </li>   
            <li class="lielements" rel="tab7" id="li7">
                Signout
            </li>
            </ul>
            
            <div class="tab_container">
               
                <!--......................tab1...................... -->
                <!--......................tab1...................... -->
                <!--......................tab1...................... -->
                <h3 class="d_active tab_drawer_heading" rel="tab1">Tab 1</h3>
                <div id="tab1" class="tab_content"> 
                    <form method='post' action='controller.php' style="padding-top:70px;">
                    <div class="form-group row">
                        <div class="col-1"></div>
                        <label for="Quesion1" class="col-9 col-form-label">Question 1</label>
                        </div>
                        <div class="row">
                             <div class="col-1"></div>
                        <div class="col-9">
                            <input class="form-control" type="text" placeholder='Question' name="question1" id = "question1">
                            </div></div>
                        <div class="row">
                             <div class="col-1"></div>
                    <div class="col-9">
                        <input class="form-control" type="text" placeholder='Answer' name="answer1" id = "answer1">
                    </div></div>
                    
                        <br>
                       <div class="form-group row">
                        <div class="col-1"></div>
                        <label for="Quesion2" class="col-9 col-form-label">Question 2</label>
                        </div>
                        <div class="row">
                             <div class="col-1"></div>
                        <div class="col-9">
                            <input class="form-control" type="text" placeholder='Question' name="question2"  id = "question2">
                            </div></div>
                        <div class="row">
                             <div class="col-1"></div>
                    <div class="col-9">
                        <input class="form-control" type="text" placeholder='Answer' name="answer2" id = "answer2">
                    </div></div>
                        
                         <br>
                     <div class="form-group row">
                        <div class="col-1"></div>
                        <label for="Quesion3" class="col-9 col-form-label">Question 3</label>
                        </div>
                        <div class="row">
                             <div class="col-1"></div>
                        <div class="col-9">
                            <input class="form-control" type="text" placeholder='Question' name="question3"  id = "question3">
                            </div></div>
                        <div class="row">
                             <div class="col-1"></div>
                    <div class="col-9">
                        <input class="form-control" type="text" placeholder='Answer' name="answer3" id = "answer3">
                    </div></div>
                        
                         <br>
                      <div class="form-group row">
                        <div class="col-1"></div>
                        <label for="Quesion4" class="col-9 col-form-label">Question 4</label>
                        </div>
                        <div class="row">
                             <div class="col-1"></div>
                        <div class="col-9">
                            <input class="form-control" type="text" placeholder='Question' name="question4"  id = "question4">
                            </div></div>
                        <div class="row">
                             <div class="col-1"></div>
                    <div class="col-9">
                        <input class="form-control" type="text" placeholder='Answer' name="answer4"  id = "answer4">
						 <div id="postQuestions"  class="btn " style="margin-left:100px; position:absolute; right:-70px; bottom:-50px;">Submit</div>
                    </div></div>
        
                        
                         <br>
                   
                        <div class="col-10">
                            <div class="col-2">
                            </div>            
                   
                            </div>
							
                        </form>
						
                        </div>
                        <script>
					
						</script>

                
                <!--......................tab2...................... -->
                <!--......................tab2...................... -->
                <!--......................tab2...................... -->
                <h3 class="tab_drawer_heading" rel="tab2">Tab 2</h3>
                <div id="tab2" class="tab_content" style="display:block">
                    
                    
                    <!--...............Slider......................-->  
                    <!--...............Slider......................-->     
                    <!--...............Slider......................-->  
                                    
                    <div data-carousel="blah" class="Carousel">
                    
                        <div class="Carousel-Slide clearfix">
                            <!--...............Item1......................-->  
                            <div class="Carousel-Slide-item Carousel-Slide-item1">
                                <div class="row" style="padding-top: 100px;">
                                <div class="col-1 "></div>
                                <div class="col-2 element" style="  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);" >
                                    <img src="images/face_g.svg" class="col-4 d-inline" style="height:35px; margin-right: -20px; float:left; margin-left:-5px;">
                                    <font class="col-3 d-inline" style="font-size:20px;  float:left;">username</font>
                                    </div></div>


                            </div>
                            <!--...............Item2......................-->  
                            <div class="Carousel-Slide-item Carousel-Slide-item2">
                                 <form method='post' action='controller.php' style="padding-top: 8%">
                            <div class="form-group row">
                                <div class="col-2"></div>
                                <label for="Answer12" class="col-9 col-form-label">Question1</label>
                                </div>
                                <div class="row">
                                     <div class="col-2"></div>
                            <div class="col-9">
                                <input class="form-control" type="text" placeholder='Answer1' name="Answer12">
                            </div></div>

                            <br>
                            <div class="form-group row">
                                <div class="col-2"></div>
                                <label for="Answer22" class="col-9 col-form-label">Question1</label>
                                </div>
                                <div class="row">
                                     <div class="col-2"></div>
                            <div class="col-9">
                                <input class="form-control" type="text" placeholder='Answer2' name="Answer22">
                            </div></div>

                            <br>
                               
                                 
                            </div>
                            <!--...............Item3......................-->  
                            <div class="Carousel-Slide-item Carousel-Slide-item3">
                                <img id="glk" src="images/Galochka_v_kontse.svg">
                                <p id="slider3p" style="color:white;">Your mark is</p>
                                <br><br>
                        
                                <div id="tof" class="btn">
                               Back
                                </div>
                            </div>
                        </div>
                            <!--..............CONTROLS...................-->
                                <div class="Carousel-Controller-Nav-left" id="Carousel-Controller-Nav-left" style="display:none;>
                                    <img src="images/ic_navigate_before_white_24px.svg">
                                </div>
                                <div id= "dots">
                                    <font id="dot1">&bull;</font>
                                    <font id="dot2">&bull;</font>
                                    <font id="dot3">&bull;</font>
                                </div>
                                <div class="Carousel-Controller-Nav-right" id="Carousel-Controller-Nav-right" style="display:none;>
                                    <img src="images/ic_navigate_next_white_24px.svg">
                                </div>
                    </div>
                 
                </div>
                <!--......................tab3...................... -->
                <!--......................tab3...................... -->
                <!--......................tab3...................... -->
                <h3 class="tab_drawer_heading" rel="tab3">Tab 3</h3>
                <div id="tab3" class="tab_content">
                </div>
                <!--......................tab4...................... -->
                <!--......................tab4...................... -->
                <!--......................tab4...................... -->
                <h3 class="tab_drawer_heading" rel="tab4">Tab 4</h3>
                <div id="tab4" class="tab_content">
                </div>
                <!--......................tab5...................... -->
                <!--......................tab5...................... -->
                <!--......................tab5...................... -->
                <h3 class="tab_drawer_heading" rel="tab4">Tab 5</h3>
                <div id="tab5" class="tab_content">
                </div>
            </div>
        </div>
    </div>     

    

    
</body>
    
</html>