<?php
if(isset($_POST['email'])) {

    // CHANGE THE TWO LINES BELOW
    $email_to = "diegomtzb@hotmail.com";
    $email_to_cco = "diegomtzb@hotmail.com";

    $email_subject = utf8_decode ("Mensaje Página Web Vaisand");

    function died($error) {
        // your error code can go here
        echo "Lo sentimos, pero hay algunos errores con el formulario enviado.";
        echo "Estos errores se muestran a continuación.<br /><br />";
        echo $error."<br /><br />";
        echo "Por favor corrija estos errores.<br /><br />";
        die();
    }

    // validation expected data exists
    $thiserror="";
    if (!isset($_POST['name'])){
        $thiserror =  "No se ha ingresado un nombre correctamente";
    }
    if (!isset($_POST['email'])){
        $thiserror =  "No se ha ingresado email correctamente";
    }
    if (!isset($_POST['ciudad'])){
        $thiserror =  "No se ha ingresado ciudad correctamente";
    }
    if (!isset($_POST['mensaje'])) {
        $thiserror =  "No se ha ingresado mensaje correctamente";
    }
    if(strlen($thiserror) > 0) {
        died($thiserror);
    }

    $name = $_POST['name']; // required

    $email = $_POST['email']; // required

    $ciudad  = $_POST['ciudad']; //required

    $telefono = "";
    if(isset($_POST['telefono'])) {
        $telefono = $_POST['telefono'];
    }

    $message = $_POST['mensaje']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email)) {
        $error_message .= 'El Correo Electrónico ingresado no parece ser válido.<br />';
    }
    $string_exp = "/^[A-Za-z .'-]+$/";
    if(!preg_match($string_exp,$name)) {
        $error_message .= 'El Nombre ingresado no parece ser válido.<br />';
    }
    if(strlen($message) < 2) {
        $error_message .= 'Los comentarios ingresados no parecen válidos.<br />';
    }
    if(strlen($error_message) > 0) {
        died($error_message);
    }
    $email_message = "Los datos del mensaje se muestran a continuación.\n\n";

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message .= "Nombre: ".clean_string($name)."\n";
    $email_message .= "Correo Electrónico: ".clean_string($email)."\n";
    $email_message .= "Ciudad: ".clean_string($email)."\n";
    $email_message .= "Teléfono: ".clean_string($telefono)."\n";
    $email_message .= "Comentario: ". "\n" .clean_string($message)."\n";


// create email headers
    $headers = 'From: '.$email."\r\n";
    $headers .= 'Bcc: ' . $email_to_cco . "\r\n".
        'Reply-To: '.$email."\r\n" .
        'MIME-Version: 1.0'."\r\n" .
        'Content-Type: text/plain; charset=UTF-8'."\r\n".
        'X-Mailer: PHP/' . phpversion();
    $mail_status = mail($email_to, $email_subject, $email_message, $headers);

    if ($mail_status) {
        echo 'Gracias por su mensaje. Nos pondremos en contacto con usted muy pronto.';
    }else {
        echo 'Su mensaje no pudo ser enviado. Puede contactarse directamente con nosotros a ventas@vaisand.com';
    }
}
die();
?>