<?php

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $from = $_POST['email'];
    $to = 'mail@marcmichel.dev';
    $message = $_POST['message'];
    $subject = 'Contact Request From Portfolio';

    $headers = "FROM: ".$from;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($to, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}