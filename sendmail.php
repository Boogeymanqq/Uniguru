<?php
header('Content-type: application/json');
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   use PHPMailer\PHPMailer\SMTP;

   require 'PHPMailer/PHPMailer.php';
   require 'PHPMailer/Exception.php';
   require 'PHPMailer/SMTP.php';

   $mail = new PHPMailer(true);
   $mail->CharSet = 'UTF-8';
   $mail->IsHTML(true);

   $body = '<h1>UNITEGURU</h1>';

   if(isset($_POST['organization'])) {
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
   } else {
      if(trim(!empty($_POST['secondDiscipline']))){
         $body.='<p><strong>Discipline:</strong> '.$_POST['secondDiscipline'].'</p>';
      }
   
      if(trim(!empty($_POST['tenure']))){
         $body.='<p><strong>Tenure:</strong> '.$_POST['tenure'].'</p>';
      }
   
      if(trim(!empty($_POST['language']))){
         $body.='<p><strong>Language:</strong> '.$_POST['language'].'</p>';
      }
   
      if(trim(!empty($_POST['location']))){
         $body.='<p><strong>Location:</strong> '.$_POST['location'].'</p>';
      }
   
      if(trim(!empty($_POST['Name']))){
         $body.='<p><strong>Name:</strong> '.$_POST['Name'].'</p>';
      }
   
      if(trim(!empty($_POST['email']))){
         $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
      }

      if(trim(!empty($_POST['linkedin']))){
         $body.='<p><strong>Linkedin:</strong> '.$_POST['linkedin'].'</p>';
      }
   }
   

   $mail->isSMTP();
   $mail->SMTPAuth   = true;

   $mail->Host       = 'smtp.gmail.com';
   $mail->Username   = 'boogeymanqq@gmail.com';
   $mail->Password   = 'kwwjcpphjrnkgpbq';
   $mail->SMTPSecure = 'ssl'; 
   $mail->Port       = 465; 

   $mail->setFrom('boogeymanqq@gmail.com', 'Mailer');
   $mail->addAddress('boogeywoogeyqq@gmail.com');
   $mail->addAddress('boogeymanqq@gmail.com');
   $mail->addAddress('lelka.bybyby@gmail.com');
   $mail->Subject = 'Это тема письма от Uniteguru';
   $mail->Body = $body;

   if(!$mail->send()) {
      $message = 'Ошибка';
   } else {
      $message = 'Данные отправлены';
   }

   $response = ['message' => $message];
   
   echo json_encode($response);
?>
