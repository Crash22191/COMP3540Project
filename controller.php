<?php
if (empty($_POST['page'])) {  // When no page is sent from the client; The initial display                         // You may use if (!isset($_POST['page'])) instead of empty(...).
    $display_type = 'no-signin';  // This variable will be used in 'view_startpage.php'.
                 // It will display the start page without any box, i.e., no SignIn box, no Join box, ...
    include ('startpage.php');
	exit();
}

require('model.php');  // This file includes some routines to use DB.
// When commands come from StartPage
if ($_POST['page'] == 'StartPage')
{
    $command = $_POST['command'];
    switch($command) {  // When a command is sent from the client
        case 'SignIn':  // With username and password
//            if (there is an error in username and password) {
            if (!is_valid($_POST['username'], $_POST['password'])) {
                $error_msg_username1 = '* Wrong username, or';
                $error_msg_password1 = '* Wrong password'; // Set an error message into a variable.
                                                        // This variable will used in the form in 'view_startpage.php'.
                $display_type = 'signin';  // It will display the start page with the SignIn box.
                                           // This variable will be used in 'view_startpage.php'.
										 
                include('startpage.php');
            } 
            else {
                session_start();
                $_SESSION['signedin'] = 'YES';
                $_SESSION['username'] = $_POST['username'];
                $username = $_POST['username'];
                include ('mainpage.php');
            }
            exit();

        case 'Join':  // With username, password, email, some other information
            if (does_exist($_POST['username'])) {
                $error_msg_username = '* The user exists.';
                $display_type = 'join';
                include('startpage.php');
				exit();
            } else {
                if (insert_new_user($_POST['username'], $_POST['password'], $_POST['email'])) {
                    $display_type = 'signin';
                    include('startpage.php');
					exit();
                } else {
                    $error_msg_username = '* Insertion error';
                    $display_type = 'join';
                    include('startpage.php');
					exit();
                }
            }
            exit();
        //...
    }
}

// When commands come from 'MainPage'
else if ($_POST['page'] == 'MainPage') 
{
    session_start();
    
    // check if this session is broken using $_SESSION['signedin']
    if (!isset($_SESSION['signedin']) || $_SESSION['signedin'] != 'YES') {
        echo 'Session is broken<br>';
        exit();
    }
    
    // recover the username stored in $_SESSION
    $username = $_SESSION['username'];
    
    // support commands
    
    $command = $_POST['command'];
    
    switch($command) {
        case 'SignOut':
            // destroy session variables and the session
            session_unset();
            session_destroy();
            // go to 'StartPage'
            $display_type = 'no-signin';
            include('startpage.php');
            break;
        
        // posting a question
  case 'PostQuestion':
            //// question, username
			delete_questions($username);
            $q1 = $_POST['question1'];
            $a1 = strtolower($_POST['answer1']);
           post_question_answer($q1, $username, $a1);  
             $q2 = $_POST['question2'];
            $a2 = strtolower($_POST['answer2']);
           post_question_answer($q2, $username, $a2); 
             $q3 = $_POST['question3'];
            $a3 = strtolower($_POST['answer3']);
           post_question_answer($q3, $username, $a3); 
             $q4 = $_POST['question4'];
            $a4 = strtolower($_POST['answer4']);
           $r = post_question_answer($q4, $username, $a4); // in model.php
            if ($r)
                $str = 'Posted';
            else
                $str = 'Not posted. Something wrong.';
            echo $str;
            break;
        
        // list questions
        case 'ListQuestions':
            $thisuser = $_POST['user'];
            $r = list_questions($thisuser);  // in model.php
                                             // the return value is an array of associative arrays
            $str = json_encode($r);
            echo $str;
            break;
        case 'ListUsers1':
            $list = list_users($username);
            $str = json_encode($list);
            echo $str;
            break;
        case 'Check':
            $ids= explode("/",$_POST['ids']);
            $list = checkq($ids);
            $str = json_encode($list);
            echo $str;
            break;
        case 'MyMarks':
            $r = list_my_marks($username);
             $str = json_encode($r);
            echo $str;
            break;
		case 'Mark':
			$ids= explode("/",$_POST['ids']);
			 $r = mark($ids[0], $_POST['mark'] , $username); // in model.php
            if ($r)
                $str = ' Mark Posted';
            else
                $str = ' Mark Not posted. Something wrong.';
            echo $str;
		    break;
			
        case 'ListAnswers':
            $r = list_answers($_POST['user']);
            $str = json_encode($r);
            echo $str;
            break;
         case 'ListMarks':
            $r = list_marks($username);
             $str = json_encode($r);
            echo $str;
            break;
           
        default:
            echo 'Unknown command - ' . $command . '<br>';
    }
}

else {
    //...
}
?>   
