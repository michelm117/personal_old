<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $to = 'mail@marcmichel.dev';
    $message = $_POST['message'];
    $subject = 'Contact Request From Portfolio';

    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name." <".$mailFrom.">.\n\n".$message;

    mail($to, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}