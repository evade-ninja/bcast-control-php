var config =
{
   "camera_uri": "/ptz.php?cam=",
   "preview_uri": "/cam.jpg",
   "cameras": [
      {
         "title": "Speaker View",
         "pos": 0,
         "img": "cam-speaker.jpg"
      }
   ],
   "template": "<a onclick='PTZ($pos);'><div class='col'><div class='card shadow-sm'><img src='/img/$img' class='preview preview-cam' alt='...'><div class='card-body'><p class='card-text'>$title</p></div></div></div></a>",
   "streamKeys":[ 
      {
         "key": "key",
         "name":"Fancy Stream Name"
      }
   ]
};
