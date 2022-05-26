<?php
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\SMTP;
   use PHPMailer\PHPMailer\Exception;

   require '/PHPMailer-6.6.0/src/PHPMailer.php';
   require '/PHPMailer-6.6.0/src/SMTP';
   require '/PHPMailer-6.6.0/src/Exception.php';

   $mail = new PHPMailer(true);

   try {
      $mail->SMTPDebug = SMTP::DEBUG_SERVER;
      $mail->isSMTP();
      $mail->Host = 'ssl://smtp.gmail.com';
      $mail->SMTPAuth   = true;
      $mail->Username   = 'boogeymanqq@gmail.com';
      $mail->Password   = 'ozqu qcha lehz avjd';
      $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
      $mail->Port = 465;
      $mail->CharSet = "UTF-8";

      $mail->setFrom("boogeymanqq@gmail.com", "Письмо от Uniteguru");
      $mail->addAddress('boogeymanqq@gmail.com');

      $mail->isHTML(true);
      $mail->Subject = 'Here is the subject';
      $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
      
      $mail->send();
   } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
?>
