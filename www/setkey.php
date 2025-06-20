<?php

require_once 'vars.php';

if(!isset($_GET['key'])){
   die("no key!");
}


$config = file_get_contents($path . $config);

$config = json_decode($config);




//print_r($config->streamkeys);
$key_found = false;
$ret = "false";

foreach($config->streamkeys as $sk){
   if($sk->key == $_GET['key']){
      print($sk->key);
      $key_found = true;
      $ret = exec($set_stream_key . " " . $sk->key);
      break;
   }
}



if($key_found & ($ret === "true")){
   print("success");
}
else{
   print("failed");
}

//if(isset($_GET['cam'])){






//print(exec($set_stream_key . " Sacrament"));

?>