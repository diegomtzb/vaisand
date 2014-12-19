<?php
if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $email_to = "diegomtzb@hotmail.com";
    $email_to_cco = "diegomtzb@hotmail.com";
    $email_subject = utf8_decode ("Suscripcion");

    function died($error) {
        echo "Lo sentimos, pero hay algunos errores con el formulario enviado.";
        echo "Estos errores se muestran a continuación.<br /><br />";
        echo $error."<br /><br />";
        echo "Por favor vuelva corrija estos errores.<br /><br />";
        die();
    }

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email)) {
        $error_message .= 'El Correo Electrónico ingresado no parece ser válido.<br />';
    }

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message = "Correo Electrónico: ". clean_string($email) ."\n";
    $email_message .= "Comentario: ". "\n" . clean_string('Hola') ."\n";


// create email headers
    $headers = 'From: '.$email."\r\n";
    $headers .= 'Bcc: ' . $email_to_cco . "\r\n".
        'Reply-To: '.$email."\r\n" .
        'MIME-Version: 1.0'."\r\n" .
        'Content-Type: text/plain; charset=UTF-8'."\r\n".
        'X-Mailer: PHP/' . phpversion();
    $mail_status = mail($email_to, $email_subject, $email_message, $headers);

    if ($mail_status) {
        echo "Se ha suscrito correctamente <br /><br />";
    }else {
        echo "Ha ocurrido un error. Por favor vuelva a intentatlo<br /><br />";
    }
}else{
    echo "Ingrese su dirección de email correctamente";
}
die();
?>
