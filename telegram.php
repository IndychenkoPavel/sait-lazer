<?php

/* https://api.telegram.org/bot1798500210:AAG9gh482zDUeI_5tiynZJmMVjc4KJ1lqEs/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

// поля из формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$quation = $_POST['message'];
// токен нашего бота из botFather
$token = "1798500210:AAG9gh482zDUeI_5tiynZJmMVjc4KJ1lqEs";
 $chat_id = "https://api.telegram.org/1798500210:AAG9gh482zDUeI_5tiynZJmMVjc4KJ1lqEs/getUpdates";
$chat_id = "-454426266";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Вопрос:' => $quation
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: /');
} else {
  echo "Error";
}
?>
