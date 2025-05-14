<?php

$path = "/var/www/";
$set_script = $path . "obs-setscene.py";

if( $_GET['scene']==="broadcast"){
	exec($set_script . " Broadcast");
}
if ($_GET['scene']==="sacrament"){
	exec($set_script . " Sacrament");
}
if($_GET['scene']==="none"){
	exec($set_script . " None");
}

function mklink($target, $text){
	print("<a href='/index.php?scene=" . $target . "'>" . $text . "</a>");
}
?>
<html>
<head>
<title>Broadcast Controller</title>

</head>
<body>
<?php
	mklink("broadcast", "Broadcast");
	mklink("sacrament", "Sacrament");
?>