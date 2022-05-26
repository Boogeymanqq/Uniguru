<?php
header('Content-type: application/json');

   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\SMTP;
   use PHPMailer\PHPMailer\Exception;

   require '/PHPMailer-6.6.0/src/Exception.php';
   require '/PHPMailer-6.6.0/src/PHPMailer.php';

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

   $mail = new PHPMailer(true);

   $mail->isSMTP();
   $mail->SMTPAuth = true;
   $mail->CharSet = 'UTF-8';

   $mail->Host       = 'smtp.gmail.com';
   $mail->Username   = 'boogeymanqq@gmail.com';
   $mail->Password   = 'ozqu qcha lehz avjd';
   $mail->SMTPSecure = 'ssl';
   $mail->Port = 465;

   $mail->setFrom("boogeymanqq@gmail.com", "Письмо от Uniteguru");
   $mail->addAddress('boogeymanqq@gmail.com');

   $mail->IsHTML(true);
   $mail->Subject = 'Это тема письма от Uniteguru';
   $mail->Body = $body;

   if(!$mail->send()) {
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены';
   }

   $response = ['message' => $message];

   echo json_encode($response);
