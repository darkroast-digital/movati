<?php

$app->get('/', function ($request, $response) {
    return $this->view->render($response, 'home.twig');
})->setName('home');

$app->post('/careers/post', function ($request, $response) {
    $mail = new PHPMailer;

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['comments'];

    $mail->setFrom($email, $name);
    $mail->addAddress('joshstobbs@gmail.com');     // Add a recipient
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'A new email' . $name. 'on Rochester Place';
    $mail->Body    = "Name: $name <br>" . "Email: $email <br>" . $message;
    $mail->AltBody = "Name: $name\r\n" . "Email: $email\r\n" . $message;

    if(!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
    
})->setName('careers.post');
