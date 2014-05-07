<!DOCTYPE html>
<html>
	<head>
	<meta charset="utf-8"/>
		<title>Junya Wang &raquo; Contact</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2 user-scalable=yes"/>
		<link rel="stylesheet" type="text/css" href="stylesheet.css" />
		<link rel="stylesheet" type="text/css" media="only screen and (min-device-width: 768px) and (max-device-width: 1024px)" href="stylesheet_tablet.css" />
		<link rel="stylesheet" type="text/css" media="handheld, only screen and (max-width: 480px), only screen and (max-device-width: 480px)" href="stylesheet_mobile.css" />
		<link rel="shortcut icon" href="img/logo_seal.png" />
		
		<!-- JS -->
		<script type="text/javascript" src="scripts/jquery/jquery.js"></script> 
		<!-- startFade -->
		<script type="text/javascript" src="scripts/jquery/jquery.startFade.js"></script>
		<script type="text/javascript">
			jQuery.startFade();
		</script>
	</head>

	<body>	
		<!-- Navigation section -->
		<div id = "top-wide">
			<header id = "top">
				<!-- logo -->
				
				<div id="logo">
					<a href = "index.html"><img src="img/logo_seal.png" alt="logo"/></a>
				</div>
				
				<div id = "nav">
					<ul>
						<li><a href="portfolio.html">portfolio</a></li>
						<li><a href="about.html">about</a></li>
						<li><a href="contact.html">contact</a></li>
					</ul>
				</div>
			</header>
		</div> <!-- /end #top-wide -->
		
		<!-- Contact section-->
		<div id = "content-wide" class="contact">
			<div id = "content">
				<h1>contact me.</h1>
				
				<h2>I am currently <strong>AVAILABLE</strong> for jobs!</h2>
				<p>You are welcome to <a href="./resume_junyawang.pdf">download my resume</a>.</p>

				<h2>Want to hire me for a project or work with me? Send me an email!</h2>
					<!-- <p><a href="tel:17788599861">+1 778-859-9861</a></p> -->
					<p><a href="mailto:junyaw@sfu.ca">junyaw@sfu.ca</a></p>
				
				<h2>Or take only 60 seconds to fill in the contact form below!</h2>
								
				<div id="contact-form-wrap">
				<div id="contact-form">

						<?php
    						$name = $_POST['name'];
    						$email = $_POST['email'];
    						$message = $_POST['message'];
    						$from= 'From: Junya Wang - Online Portfolio';
    						$to= 'ayajunya@gmail.com';
    						$human= $_POST['human'];

    						$subject = $_POST['subject'];
    						$body = "From: $name\n Email: $email\n Message:\n $message";

    						if($_POST['submit']){
    							if ($name != '' && $email != '' && $message != ''){
    								if ($human=='4'){
    									if (mail ($to, $subject, $body, $from)) { 
    										echo '<p>Your message has been sent!</p>';
    									} else {
    										echo '<p>Oops, something goes wrong. Wanna try again?</p>'; 
    									}
    								} else if($_POST['submit'] && $human !='4') {
    									echo '<p>Wrong answer! Seems you are not a human lol!</p>';
    								}
    							} else {
    								echo '<p>Please fill in all required fields!</p>';
    							}
    						}
    					?>
						
						<form method="post" id="contactform" action="contact.php" autocomplete="on">
						<div id="form-left">
							<label>Subject</label>
							<input type="text" name="subject" id="subject" />
							
							<label for="name">Your Name*</label>
							<input type="text" name="name" id="name" class="required" />
							
							<label for="email">Your Email Address*</label>
							<input type="email" name="email" id="email" class="required" placeholder="myname@example.com"/>
						</div>
						<div id="form-right">
							<label for="message">Your Message*</label>
							<textarea rows="10" id="message" name="message" class="required"></textarea>
							<label>*Are you human? What is 2+2?* </label>
							<input type="text" name="human"/>
						</div>

						<div id="form-send">
							<input type="submit" class="btn-send" name="submit" value="send message" onClick="_gaq.push(['_trackEvent', 'contact', 'send message', 'contact form',, false]);" />
						</div>
					</form>
				</div><!-- end of contact-form div -->					
			</div><!-- end of contact-form-wrap div -->

			</div><!-- /end #content -->
		</div><!-- /end #content-wide -->

		
		<!-- Footer section -->
		<div id = "footer-wide">
			<div id = "footer">
				<div id ="copyright">
					<span>&copy; 2014 Junya Wang</span>
				</div> <!-- /end #copyright-->
			
				<div id = "social">
					<ul>
						<li class="social_fb"><a href = "http://www.facebook.com/ayajunya"><img src="img/facebook.png" width="30" height="30" alt="facebook"/></a></li>
						<li class="social_twitter"><a href = "https://twitter.com/mistyaquaya"><img src="img/twitter.png" width="30" height="30" alt="twitter"/></a></li>
						<li class="social_flickr"><a href = "http://www.flickr.com/photos/aquaya"><img src="img/flickr.png" width="30" height="30" alt="flickr"/></a></li>
					</ul>
				</div> <!-- /end #social-->
			</div> <!-- /end #footer -->
		</div> <!-- /end #footer-wide -->
		<script type="text/javascript" src="/scripts/retina.js"></script>
	</body>
</html>