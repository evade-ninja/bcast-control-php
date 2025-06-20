var config =
{
   "camera_uri": "/ptz.php?cam=",
   "preview_uri": "/cam.jpg",
   "cameras": [
      {
         "title": "Speaker View",
         "pos": 0,
         "img": "cam-speaker.jpg"
      },
      {
         "title": "Closer Speaker",
         "pos": 61,
         "img": "cam-closer.jpg"
      },
      {
         "title": "Speaker Tight",
         "pos": 62,
         "img": "cam-tight.jpg"
      },
      {
         "title": "Stand Left",
         "pos": 63,
         "img": "cam-standleft.jpg"
      },
      {
         "title": "Stand Right",
         "pos": 64,
         "img": "cam-standright.jpg"
      },
      {
         "title": "Full Stand",
         "pos": 65,
         "img": "cam-standfull.jpg"
      },
      {
         "title": "Primary Program",
         "pos": 66,
         "img": "cam-primary.jpg"
      },
      {
         "title": "Stand+Sac Table",
         "pos": 67,
         "img": "cam-standplussac.jpg"
      },
      {
         "title": "Front Left",
         "pos": 68,
         "img": "cam-frontleft.jpg"
      },
      {
         "title": "Front Right",
         "pos": 69,
         "img": "cam-frontright.jpg"
      },
      {
         "title": "Piano",
         "pos": 70,
         "img": "cam-piano.jpg"
      },
      {
         "title": "Stake Chorister",
         "pos": 71,
         "img": "cam-stakechorister.jpg"
      },
      {
         "title": "Ward Chorister",
         "pos": 72,
         "img": "cam-wardchorister.jpg"
      },
      {
         "title": "Organist",
         "pos": 73,
         "img": "cam-organ.jpg"
      },
      {
         "title": "Wider Speaker",
         "pos": 74,
         "img": "cam-widerspeaker.jpg"
      },
      {
         "title": "Musical Number - Piano+Pulpit",
         "pos": 75,
         "img": "cam-musicalpp.jpg"
      },
      {
         "title": "Musical Number - West of Pulpit",
         "pos": 76,
         "img": "cam-musical-frontleft.jpg"
      },
      {
         "title": "Piano/Violin",
         "pos": 77,
         "img": "cam-musicalviolin.jpg"
      },
      {
         "title": "Stake Choir",
         "pos": 78,
         "img": "cam-stkchoir.jpg"
      }
   ],
   "template": "<a onclick='PTZ($pos);'><div class='col'><div class='card shadow-sm'><img src='/img/$img' class='preview preview-cam' alt='...'><div class='card-body'><p class='card-text'>$title</p></div></div></div></a>",
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
