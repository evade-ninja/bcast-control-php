<?php

$path = "/var/www/";
$config = "config.json";
$set_scene = $path . "obs-setscene.py";
$start_stream = $path . "obs-startstream.py";
$stop_stream = $path . "obs-stopstream.py";
$get_status = $path . "obs-getstatus.py";
$set_stream_key = $path . "obs-setkey.py";
$min_camera_pos = 61;
$max_camera_pos = 78;
$cam_pos_url = "http://192.168.108.6/cgi-bin/ptzctrl.cgi?ptzcmd&poscall&";

?>