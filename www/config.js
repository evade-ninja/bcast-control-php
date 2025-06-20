var config =
{
   "camera_uri": "/camera.php?cam=",
   "cameras": [
      {
         "title": "Default View",
         "pos": 0,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Speaker View",
         "pos": 1,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Closer Speaker",
         "pos": 2,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Speaker Tight",
         "pos": 3,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Stand Left",
         "pos": 4,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Stand Right",
         "pos": 5,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Full Stand",
         "pos": 6,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Primary Program",
         "pos": 7,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Stand+Sac Table",
         "pos": 8,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Front Left",
         "pos": 9,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Front Right",
         "pos": 10,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Piano",
         "pos": 11,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Stake Chorister",
         "pos": 12,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Ward Chorister",
         "pos": 13,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Organist",
         "pos": 14,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Wider Speaker",
         "pos": 15,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Musical Number - Piano+Pulpit",
         "pos": 16,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Musical Number - West of Pulpit",
         "pos": 17,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Piano/Violin",
         "pos": 18,
         "img": "camera-placeholder.png"
      },
      {
         "title": "Stake Choir",
         "pos": 19,
         "img": "camera-placeholder.png"
      }
   ],
   "template": "<a onclick='PTZ($pos);'><div class='col'><div class='card shadow-sm'><img src='$img' class='preview preview-cam' alt='...'><div class='card-body'><p class='card-text'>$title</p></div></div></div></a>",
   "streamKeys":[ 
      {
         "key": "sh1",
         "name":"Spanish Highlands 1st"
      },
      {
         "key":"sh2",
         "name":"Spanish Highlands 2nd"
      },
      {
         "key":"sh3",
         "name":"Spanish Highlands 3rd"
      },
      {
         "key":"mp3",
         "name":"Maple Park 3rd"
      }
   ]
};
