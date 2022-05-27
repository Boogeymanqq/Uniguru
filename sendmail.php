<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'PHPMailer/src/PHPMailer.php';
   require 'PHPMailer/src/Exception.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';

   $discipline = $_POST['discipline'];
   $duration = $_POST['duration'];
   $country = $_POST['country'];
   $name = $_POST['Name'];
   $organization = $_POST['organization'];
   $email = $_POST['email'];

   $body = $discipline . ' ' . $duration . ' ' . $country . ' ' . $name . ' ' . $organization . ' ' . $email;
   $theme = '[Тема сайта]';

   $mail->setFrom('boogeymanqq@gmail.com', 'Mailer');
   $mail->addAddress('boogeymanqq@gmail.com');
   $mail->Subject = $theme;
   $mail->Body = $body;

   $mail->send();
