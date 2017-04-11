<!DOCTYPE html>
<html>
<head>
    <title>COMPBaev</title>
    <link rel="shortcut icon" href="images/image.ico" />
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="mainStylesheet.css">
     <script type="text/javascript" src="mainJS.js" defer></script>
<!--
    <link rel="stylesheet" type="text/css" href="pace-theme-loading-bar.css">
    <script type="text/javascript" src="js/pace.js" defer></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <!-- <link rel="stylesheet" href="css/bootstrap-grid.css">
 
    <link rel="stylesheet" href="css/bootstrap-reboot.css">
    <link rel="stylesheet" href="css/bootstrap-grid.css">-->
    <link rel="stylesheet" href="css/bootstrap.css">

    <script type="text/javascript" src="js/jquery.cross-slide.js" defer></script>
<!--
    <script type="text/javascript" src="js/jquery.pause.js" defer></script>
    <script type="text/javascript" src="js/jquery.pause.min.js" defer></script>
-->
<!--    <script src="http://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js" defer></script>-->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


	
		
		
</head>

<body>
    <script>
    
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
    $("body").css("background-image", 'url("images/2.jpg")');

}
    $("#loginPage1").delay(150).fadeIn(500);
}
                            

});
    </script>
  
        
        
    <div id="bodyBG" ></div>
    
<!--
        <div id="mainPage1" class="mainPage1">
        <img src="images/Logo.svg" class="logo1" id="logo1">
            <br><br>
            
            <div id="loadingText">Загрузка Сайта</div>
            <div id="loader"></div>
        </div>
-->
    
<!--.......................................................-->        
<!--...............Login/Registr.............................-->
<!--.......................................................-->       
<!--.......................................................-->       

        <div id="loginPage1" class="container col-centered">
           
         <form method='post' action='controller.php'  >
            <div class = "row">
                    <input type='hidden' name='page' value='StartPage'></input>
                    <input type='hidden' name='command' value='SignIn'></input>
                    <label class='modal-label' style="margin-left: 30px; margin-top: 5px;">Username:</label>
                
                    <input type='text' name='username' id="loginLogin" placeholder='Enter username' required></input>
                    <?php if (!empty($error_msg_username)) echo $error_msg_username; ?>
            </div>
            <div class = "row">
                    <label class='modal-label' style="margin-left: 30px; margin-top: 5px;" >Password:</label> 
                    <input type='password' name='password' id="passwordLogin" placeholder='Enter password' required></input>
                    <?php if (!empty($error_msg_password)) echo $error_msg_password; ?> 
            </div>
    <br>
            <div class="row" style="bottom:0;">
                    <button type='submit' value='Submit' class="btn col-4" >Submit</button>
                    <button type='reset' value='Reset' class="btn col-4" >Reset</button>
                <div id='submitButton1' class="btn col-4" >Register</div>
				<script>
		
				</script>
                </form>
           
    </div>

        
   
 <form id='form-signout' method='post' action='controller.php' style='display:none'>
            <input type='hidden' name='page' value='MainPage'>
            <input type='hidden' name='command' value='SignOut'>
        </form>
        <script>
            // When the 'SignOut' button is clicked
            $('.signout').click(function() {
                document.getElementById('form-signout').submit();
            });
              <?php
                if (isset($display_type))
                   if ($display_type == 'join')
                        echo 'show_registr1();';
                    else
                        ;
            ?>
			function show_registr1()
{
     $("#loginPage1").fadeOut(500);
           $("#registerPage").fadeIn(600);
            $("loginPage1").addClass("active");
            $("#registerPage").addClass("active");
        // $('#mainPage').fadeIn(500);
};
        </script>
<style>


</style>
           
            
        </div>
<div id="registerPage" style="display:none">
         <form method='post' action='controller.php' id="register">
            <div class = "row">
                    <input type='hidden' name='page' value='StartPage'></input>
                    <input type='hidden' name='command' value='Join'></input>

                    <label class='modal-label' style="margin-left: 30px; margin-top: 5px;" >Username:</label> 
                    <input type='text' name='username' placeholder='Enter username'
                           id="loginLogin" required></input>
                    <?php if (!empty($error_msg_username)) echo $error_msg_username; ?>
            </div>
            <div class = "row">
                    <label class='modal-label' style="margin-left: 30px; margin-top: 5px;">Password:</label> 
                    <input type='password' name='password' placeholder='Enter password' id="passwordLogin" required></input>
                    <?php if (!empty($error_msg_password)) echo $error_msg_password; ?>
            </div>
            <div class = "row">
                    <label class='modal-label' style="margin-left: 30px; margin-top: 5px;">Email:</label> 
                    <input type='text' name='email' placeholder='Enter email address'
                           id="email"required></input>
                    <?php if (!empty($error_msg_email)) echo $error_msg_email; ?>
            </div>
            <div class = "row" style="margin-top:22px;">
            <button type='submit' value='Submit' class="btn col-4" style="margin-left: 45px; ">Submit</button>
            <div id='cancelButton' class="btn col-4" style="margin-left: 30px; ">Cancel</div>
</div>
      

</div>
</form>
</body>
</html>