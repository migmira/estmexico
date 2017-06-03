<?php
  
  $field_name = $_POST['name'];
	$field_email = $_POST['email'];
	$field_message = $_POST['message'];

	$body = '<strong>Nuevo Mensaje de Contacto a través de la página web</strong> <br><br>'
	.'<strong> Nombre: </strong>'		. $field_name 	. '<br><br>'
	.'<strong> Email:  </strong>'		. $field_email  . '<br><br>'
	.'<strong> Mensaje: </strong>'	. $field_message;


	require_once '../swift/lib/swift_required.php';

	// Create the mail transport configuration
	$transport = Swift_MailTransport::newInstance();

	// Create the message
	$message = Swift_Message::newInstance();
	$message->setTo(array(
	  "ventas@estmexico.com" => "Ventas EST Mexico",
	  "migmira@hotmail.com" => "Miguel Miramontes"
	));
	$message->setSubject("Mensaje enviado por estmexico.com");
	$message->setBody($body,'text/html');
	$message->setFrom("no-reply@estmexico.com", "ESTMexico WebSite");

	// Send the email
	$mailer = Swift_Mailer::newInstance($transport);
	//$mailer->send($message);

	 if ($mailer->send($message) ) { ?>
		<script language="javascript" type="text/javascript">
			alert("Muchas gracias, te contactaremos en breve");
			window.location = '../index.html';
		</script>
	<?php
	}
	else { ?>
		<script language="javascript" type="text/javascript">
			alert('Algo salió mal :(, por favor envia un correo a ventas@estmexico.com');
			window.location = '../index.html';
		</script>
	<?php
	}
	
?>