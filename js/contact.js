<?php
// the message
$msg = $_POST[cf_message];
$mail = $_POST[cf_email]
$name = $_POST[cf_name]
// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("Blondin.thibaud@gmail.com",$subject,$msg + "send by: " $name +" --" + $mail);
?>