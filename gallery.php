<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Chantry Island</title>
<link href="https://fonts.googleapis.com/css?family=Taviraj" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="css/reset.css">
<link rel="stylesheet" type="text/css" href="css/foundation.min.css">
<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<div id="burger"><img src="images/burger.png"></div>
	<header>
		<nav id="topNav">
			<ul>
			<li><a href="booking.html">Booking</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="events.html">Events</a></li>
			<li><a href="index.html">Home</a></li>
			<li><a href="donate.html">Donate</a></li>
			<li><a href="gallery.php">Gallery</a></li>
			<li><a href="volunteers.html">Volunteers</a></li>
			</ul>
		</nav>
	</header>

	<section class="row">
		<article class="small-12 large-12 columns">
			<div id="galheadadjust">
			<div class="bgBox7">
			<h2>Photo Gallery</h2>
			<hr>
			<p>Welcome to our photo gallery. This section includes pictures of Chantry Island and the area of Lake Huron surrounding the Island. It also includes pictures of the lighthouse and keeper's cottage inside and out, as well as photos of some of the birds and flowers native to the island.</p>
			<p>If you have photos of Chantry Island that you would like to share with us, connect with our Facebook page.</p>
			</div>
			</div>
		</article>

		<article class="small-12 large-12 columns">
		<div id="galcenter">
		<img id="featImg" src="images/image1" alt="featured Image">
		<p id="imgDesc">Aerial view of Chantry Island. Photo by Karen Smith.</p>
		<?php
			require_once('admin/galset.php');
			$getImages = getImg();
			if(!is_string($getImages)){
				while($row = mysqli_fetch_array($getImages)){
					echo "<img src=\"images/{$row['gallery_thumb']}\" alt=\"{$row['gallery_desc']}\" id=\"{$row['gallery_id']}\" class='thumb'>";
				}
			}else{
				echo "<p>{$getImages}</p>";
			}
		?>
		</div>
		</article>
	</section>

	<footer>
		<h2>Book A Tour <span id="footNum">1-866-797-5862</span></h2>
		<div id="footerspacer">
		<ul>
			<li><a href="booking.html">Booking</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="events.html">Events</a></li>
			<li><a href="index.html">Home</a></li>
			<li><a href="donate.html">Donate</a></li>
			<li><a href="gallery.php">Gallery</a></li>
			<li><a href="volunteers.html">Volunteers</a></li>
			<li><a href="#">Log in</a></li>
		</ul>
		<p>Marine Heritage Society - Copyright© 2017</p>
		<a href="#"><img src="images/fb.png" alt"facebook link" class="social"></a>
		<a href="#"><img src="images/twitter.png" alt"twitter link" class="social"></a>
		</div>
	</footer>

<script type="text/javascript" src="js/vendor/foundation.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/vendor/jquery.js"></script>
</body>
</html>