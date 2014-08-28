<?php
	// define variables and set to empty values
	// $fname = $lname = $company = $phone = $email = $message = $subject = "";

	$fname = $_POST["fname"];
	$lname = $_POST["lname"];
	$company = $_POST["company"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$message = $_POST["message"];
	$to = 'junya@momentussoftware.com';

	$subject = 'Momentus Software Website Contact Form from '.$fname.' '.$lname;
	$body = "$message\n \n ---\n \n From: $fname $lname\n Email: $email\n Company: $company\n Phone: $phone\n ";

	if (mail ($to, $subject, $body, $from)) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }

	mail("junya@momentussoftware.com", $subject, $message, "From: $email\n");
?>