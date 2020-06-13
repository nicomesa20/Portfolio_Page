<?php 
    $consulta_usuario=$_POST['nombre'];
    $email_usuario=$_POST['email'];
    $consulta_usuario=$_POST['mensaje'];

    $destino="nicomesa2013@gmail.com";

    $asunto="Consulta enviada desde www.nicolasmesa.com.co";

    $mensaje="Nombre: " .$nombre_usuario."\r\n";
    $mensaje.="Email: " .$email_usuario."\r\n";
    $mensaje="Consulta: " .$consulta_usuario."\r\n";

    $remitente="From: algo@nicolasmesa.com.co";

    mail($destino, $asunto, $mensaje, $remitente);

    header("Location:index.php?i=ok");

 ?>