<?php
	function getImg(){
		include('connect.php');
		$queryString = "SELECT * FROM tbl_gallery";
		$returnImgs = mysqli_query($link, $queryString);
		
		if($returnImgs){
			return $returnImgs;	
		}else{
			$error =  "There was an error accessing this information.  Please contact your admin.";
			return $error;
		}
		mysqli_close($link);
	}

	function setFeatured(){
		include('connect.php');
		$imgNum = $_GET["image"];
		$imgNum = "image"+$imgNum+".jpg";
		$queryString = "SELECT * FROM tbl_gallery WHERE gallery_img = '$imgNum'";
		$returnImg = mysqli_query($link, $queryString);
		$row = mysqli_fetch_assoc($returnImg);	
		echo json_encode($row);
		/*
		if($returnImg){
			return $returnImg;	
		}else{
			$error =  "There was an error accessing this information.  Please contact your admin.";
			return $error;
		}
		*/
		mysqli_close($link);
	}
?>