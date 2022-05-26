<?php

   require '/PHPMailer-6.6.0/src/PHPMailer.php';
   require '/PHPMailer-6.6.0/src/SMTP';
   require '/PHPMailer-6.6.0/src/Exception.php';
   
   $discipline = $_POST['discipline'];
   $duration = $_POST['duration'];
   $country = $_POST['country'];
   $name = $_POST['Name'];
   $organization = $_POST['organization'];
   $email = $_POST['email'];

   $title = "Заголовок письма";

   $body = "
      <h2>Новое письмо</h2>
      <b>Discipline:</b> $discipline<br>
      <b>Duration:</b> $duration<br><br>
      <b>Country:</b><br>$country<br>
      <b>Name:</b> $name<br>
      <b>Organization:</b> $organization<br>
      <b>email:</b> $email<br>
   ";

   $mail = new PHPMailer\PHPMailer\PHPMailer();

   try {
      $mail->isSMTP();   
      $mail->CharSet = "UTF-8";
      $mail->SMTPAuth   = true;
      // $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

      $mail->Host = 'ssl://smtp.gmail.com';
      $mail->Port = 465;
      $mail->Username   = 'boogeymanqq@gmail.com';
      $mail->Password   = 'ozqu qcha lehz avjd';
      $mail->SMTPSecure = 'ssl';
      $mail->setFrom("boogeymanqq@gmail.com", "Письмо от Uniteguru");
      $mail->addAddress('boogeymanqq@gmail.com');

      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body; 

      if ($mail->send()) {$result = "success";} 
      else {$result = "error";}
   } catch (Exception $e) {
      $result = "error";
   }
   echo json_encode(["message" => $result]);
?>
