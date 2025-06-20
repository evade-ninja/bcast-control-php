//TODO: Remove comments

var startstop = false;
var refresh;
var keyName = "unknown";

console.log(config);

function loadCameras() {
   console.log("loading cameras");
   config.cameras.forEach(makeCamera);
}

function loadKeys(){
   config.streamKeys.forEach(loadKey);
}

function loadKey(k){
   $('<option>', {
      value: k.key,
      text: k.name
   }).appendTo('#keys');
}

function getKeyName(k){
   let keyName = "unknown";
   config.streamKeys.forEach(function(o){
      if(o.key == k){
         keyName = o.name;
         return keyName;
      }
   });
   return keyName;
}

function makeCamera(c) {
   console.log(c.title + " " + c.pos + c.img);
   var cam = config.template;
   let ret = /\$title/g
   cam = cam.replace("$img", c.img);
   cam = cam.replace(ret, c.title);
   cam = cam.replace("$pos", c.pos);
   $('#camctl').append(cam);
}

function clearStatusClasses() {
   $('#streamstate').removeClass("text-bg-success");
   $('#streamstate').removeClass("text-bg-info");
   $('#streamstate').removeClass("text-bg-danger");
   $('#streamstate').removeClass("text-bg-warning");
}

function getStatus() {
   if (startstop == true) {
      return;
   }
   $.get("./status.php", function (data) {
      clearStatusClasses();

      data = JSON.parse(data);

      if (data.streamingStatus == false) {
         $('#startbutton').prop('disabled', false);
         $('#stopbutton').prop('disabled', false);
         $('#streamstate').addClass("text-bg-info");
         $('#streamstate').html("Ready to Stream");
      }
      else if (data.streamingStatus == true) {
         $('#streamstate').addClass("text-bg-success");

         keyName = getKeyName(data.streamKey);

         $('#streamstate').html("Streaming " + keyName);
         $('#startbutton').prop('disabled', true);
         $('#stopbutton').prop('disabled', false);
      }
      else {
         console.log("Unknown status!");
         $('#streamstate').addClass("text-bg-danger");
         $('#streamstate').html("Error!");
      }

      if (data.currentScene == "Broadcast"){
         $('#sacrament').hide();
         $('#preview').show();
      }else if (data.currentScene == "Sacrament") {
         $('#sacrament').show();
         $('#preview').hide();
      }



   })
      .fail(function () {
         clearStatusClasses();
         console.log("Failed to load status!");
         $('#streamstate').addClass("text-bg-danger");
         $('#streamstate').html("Error!");
      });
}

var statusTimer = setInterval(getStatus, 3000);

function startStream() {
   startstop = true;
   $('#startbutton').prop('disabled', true);
   $('#stopbutton').prop('disabled', true);
   clearStatusClasses();
   $('#streamstate').addClass("btn-outline-danger");
   $('#streamstate').html("Starting Stream");
   
   $.post("/setstart.php?key=" + $("#keys").val(), function (data) {
      //success!
      $('#startbutton').prop('disabled', true);
      $('#stopbutton').prop('disabled', false);
      keyName = $("#keys option:selected").text();
   }
   ).fail(function(error){
      alert("Failed to start stream!");
   });
   startstop = false;
   startModal.hide();
}

function stopStream() {
   startstop = true;
   $('#startbutton').prop('disabled', true);
   $('#stopbutton').prop('disabled', true);
   clearStatusClasses();
   $('#streamstate').addClass("btn-outline-danger");
   $('#streamstate').html("Stopping Stream");
   $.post("/stop.php", function (data) {
      if (data.Result == "200") {
         $('#startbutton').prop('disabled', false);
         $('#stopbutton').prop('disabled', true);
      }
   });
   startstop = false;
   stopModal.hide();
}

function getPreview() {
   d = new Date();
   $("#preview").attr("src", config.preview_uri + "?time=" + d.getTime());
}

function sacramentTime() {
   $.post("/set-sac.php", function (data) {
      if (data.Result == "200") {
         $("#sacrament").show();
         $("#preview").hide();
      }
   });
}

function speakerTime() {
   $.post("/set-norm.php", function (data) {
      if (data.Result == "200") {
         $("#sacrament").hide();
         $("#preview").show();
      }
   });
}

function refreshPTZ() {
   getPreview();
   clearInterval(refresh);
}

function PTZ(pos) {
   //"http://192.168.109.194/cgi-bin/ptzctrl.cgi?ptzcmd&poscall&0"
   //$.post(config.camera_uri + "/api/v1/ptzControl.lua?Action=load-preset&Id=" + pos, function (data) {
   $.post(config.camera_uri + pos, function (data) {

   });
   refresh = setInterval(refreshPTZ, 1000);
   getPreview();
}

loadCameras();
getStatus();
loadKeys();

const startModal = new bootstrap.Modal("#startModal", {
   keyboard: false
});

const stopModal = new bootstrap.Modal("#stopModal", {
   keyboard: false
});


getPreview();
var previewTimer = setInterval(getPreview, 1000);