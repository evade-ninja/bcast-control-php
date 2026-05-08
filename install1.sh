#!/bin/bash
apt install curl git openssh-server
add-apt-repository ppa:obsproject/obs-studio
add-apt-repository ppa:ubuntuhandbook1/ffmpeg-7
apt update
apt upgrade
apt install obs-studio ffmpeg  
wget https://raw.githubusercontent.com/DistroAV/DistroAV/refs/heads/master/CI/libndi-get.sh
chmod +x libndi-get.sh
./libndi-get.sh install
apt install apache2 php libapache2-mod-php
cd /opt
git clone https://github.com/evade-ninja/bcast-control.git