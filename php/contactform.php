<?php

$name = $_POST['name'];
$mailFrom = $_POST['mail'];
$to = 'mail@marcmichel.dev';
$message = $_POST['message'];
$subject = 'Contact Request From Portfolio';
$ip = $_SERVER['REMOTE_ADDR'];

$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name." <".$mailFrom.">.\nThe message was send from the following IP: ".$ip."\n\nMessage:\n".$message;

mail($to, $subject, $txt, $headers);
header("Location: ../index.html?mailsend");
