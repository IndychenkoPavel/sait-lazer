<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// переменные из нашей формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// настройка почтового ящика
$mail->isSMTP();                                // Настраиваем почту для SMTP
$mail->Host = 'smtp.gmail.com';  															// Основкой SMTP сервер
$mail->SMTPAuth = true;                         // Включить аутентификацию SMTP
$mail->Username = 'ladasubarulada@gmail.com';    // логин от почты с которой будут отправляться письма
$mail->Password = 'Raging_knight';            // пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                      // Включить шифрование ssl
$mail->Port = 465;                                 // TCP порт для подключения / этот порт может отличаться у других провайдеров

$mail->setFrom('ladasubarulada');      // от кого будет уходить письмо для пользователя
$mail->addAddress('pulizaf@gmail.com');                          // Кому будет приходить заявка
// $mail->addAddress('ellen@example.com');               // Имя не обязательно
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
$mail->isHTML(true);                                  // Установить формат электронной почты в HTML

$mail->Subject = 'Заявка с сайта Обуви.ком';
$mail->Body    = '' .$name . ' оставил заявку с телефоном ' . $phone . '<br>Почта ' . $message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>
