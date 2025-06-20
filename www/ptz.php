<?php
require_once 'vars.php';

if(isset($_GET['cam'])){
   //its set...
   if(is_numeric($_GET['cam'])){
      //and its a number...
      if( ( ($min_camera_pos <= ((int)$_GET['cam'])) && ((int)$_GET['cam']) <= $max_camera_pos) ){
         //and its value is 'in range'
         print($_GET['cam']);

         //print(exec($set_cam . " " . $_GET['cam']))
      }
   }
}


//print(exec)