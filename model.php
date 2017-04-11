<?php
// connect to MySQL DB
$conn = mysqli_connect('localhost', 'vbae', 'vbae', 'COMP3540_vbae');  // connect to your DB

function insert_new_user($username, $password, $email)
{
    global $conn;
    
    if (does_exist($username))
        return false;
    else {
        $sql = "insert into Userproj values (NULL, '$username', '$password', '$email')";
        $result = mysqli_query($conn, $sql);
        return $result;
    }
}
function post_question_answer($q, $u, $a)  // question, username
{
    global $conn;
    
    $uid = get_userid($u);  // use get_userid()
    if ($uid < 0)
        return false;
    // insert statement
	
    $sql = "INSERT INTO Questionproj VALUES(NULL, '$q', '$uid')";
    mysqli_query($conn, $sql);
    $last_id = mysqli_insert_id($conn);
    $sql = "insert into RightanswersProj values (NULL, '$last_id', '$a')";
    $result = mysqli_query($conn, $sql);
    return $result;
}
function delete_questions($u)
{
     global $conn;
	   $uid = get_userid($u);  // use get_userid()
    if ($uid < 0)
        return false;
	
    $sql = "DELETE Questionproj ,  RightanswersProj
FROM
   Questionproj 
   INNER JOIN
      RightanswersProj 
      ON Questionproj.Qid = RightanswersProj.Qid 
WHERE
   UserId = '$uid'";
     mysqli_query($conn, $sql);
    return true;
}

function is_valid($username, $password) 
{
    global $conn;
    
    $sql = "select * from Userproj where (Name ='$username' AND Pass ='$password')";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0)  // check the number of selected rows
        return true;
    else
        return false;
}

function does_exist($username) 
{
    global $conn;
    
    $sql = "select * from Userproj where (Name = '$username')";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0)
        return true;
    else
        return false;
}

function get_userid($username)
{
    global $conn;
    
    $sql = "select * from Userproj where (Name = '$username')";
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        return $row['UserId'];
    }
    else
        return -1;
}
/*
*   Queries
*/




function list_users($u)
{
    global $conn;
    
     $uid = get_userid($u);  // use get_userid()
    if ($uid < 0)
        return false;
    $sql= "SELECT Name FROM Userproj WHERE UserId NOT IN ('$uid')";
      $result = mysqli_query($conn, $sql);
	 $data = array();  // empty array
    $i = 0;
    while($row = mysqli_fetch_assoc($result))  // fetch a row as an associative array
        $data[$i++] = $row;
    
    return $data; 
}

function list_questions($u)  // username
{
    global $conn;
    
    $uid = get_userid($u);
    if ($uid < 0)
        return '';
    // select statement
    $sql = "select Qid ,Question from Questionproj where UserId = '$uid' ORDER BY Qid ASC";
    $result = mysqli_query($conn, $sql);
    $data = array();  // empty array
    $i = 0;
    while($row = mysqli_fetch_assoc($result))  // fetch a row as an associative array
        $data[$i++] = $row;
    
    return $data;  // linear of associative arrays
}

function checkq($d)
{
    global $conn;
    $sql = "SELECT Answer From RightanswersProj Where Qid IN ('$d[0]','$d[1]','$d[2]','$d[3]') ORDER BY Qid ASC";
    $result = mysqli_query($conn, $sql);
     $data = array();  // empty array
    $i = 0;
    while($row = mysqli_fetch_assoc($result))  // fetch a row as an associative array
        $data[$i++] = $row;
    
    return $data; 
}

function mark($d, $m , $u)
{
	global $conn;
	 $sql = "select * from Questionproj where (Qid = '$d') LIMIT 1";
    $result = mysqli_query($conn, $sql);
	if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
	$i = $row['UserId'];}
	else
		return $result;
     $uid = get_userid($u);
	  
     $sql = "DELETE FROM Mark WHERE (UserId1 = '$uid' AND UserId2 = '$i')";
    $result = mysqli_query($conn, $sql);
    $sql = "INSERT INTO Mark VALUES (NULL, $uid, $i, $m )";
    $result = mysqli_query($conn, $sql);  
    return $result; 
}

function list_my_marks($u)
{
    global $conn;
    
    $uid = get_userid($u);
    if ($uid < 0)
        return '';
        $sql = "SELECT name, Mark From Mark JOIN Userproj ON Mark.UserId2 = Userproj.UserId WHERE UserId1 = '$uid'";
      $result = mysqli_query($conn, $sql);
     $data = array();  // empty array
    $i = 0;
    while($row = mysqli_fetch_assoc($result))  // fetch a row as an associative array
        $data[$i++] = $row;
    
    return $data; 
}
function list_marks($u)
{
    global $conn;
    
    $uid = get_userid($u);
    if ($uid < 0)
        return '';
        $sql = "SELECT name, Mark From Mark JOIN Userproj ON Mark.UserId1 = Userproj.UserId WHERE UserId2 = '$uid'";
      $result = mysqli_query($conn, $sql);
     $data = array();  // empty array
    $i = 0;
    while($row = mysqli_fetch_assoc($result))  // fetch a row as an associative array
        $data[$i++] = $row;
    
    return $data; 
}
function list_answers($u)
{
    global $conn;
     
      $uid = get_userid($u);
    if ($uid < 0)
        return '';
            $sql = "SELECT Question, Answer From RightanswersProj JOIN Questionproj ON RightanswersProj.Qid = Questionproj.Qid WHERE UserId = '$uid'";
       $result = mysqli_query($conn, $sql);
     $data = array();  // empty array
    $i = 0;
    while($row = mysqli_fetch_assoc($result))  // fetch a row as an associative array
        $data[$i++] = $row;
    
    return $data; 

}
?>   