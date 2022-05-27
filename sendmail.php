<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require 'PHPMailer/src/PHPMailer.php';
   require 'PHPMailer/src/Exception.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->IsHTML(true);

   $body = '<h1>Тело письма</h1>';

   if(trim(!empty($_POST['discipline']))){
      $body.='<p><strong>Discipline:</strong> '.$_POST['discipline'].'</p>';
   }

   if(trim(!empty($_POST['duration']))){
      $body.='<p><strong>Duration:</strong> '.$_POST['duration'].'</p>';
   }

   if(trim(!empty($_POST['country']))){
      $body.='<p><strong>Country:</strong> '.$_POST['country'].'</p>';
   }

   if(trim(!empty($_POST['Name']))){
      $body.='<p><strong>Name:</strong> '.$_POST['Name'].'</p>';
   }

   if(trim(!empty($_POST['organization']))){
      $body.='<p><strong>Organization:</strong> '.$_POST['organization'].'</p>';
   }

   if(trim(!empty($_POST['email']))){
      $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
   }

   $mail->setFrom('boogeymanqq@yandex.ru', 'Mailer');
   $mail->addAddress('boogeymanqq@gmail.com');
   $mail->Subject = 'Это тема письма от Uniteguru';
   $mail->Body = $body;

   if(!$mail->send()) {
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены';
   }

   $response = ['message' => $message];

   echo json_encode($response);
