# bcast-control-php

Python/PHP Control system for easy broadcasting of a church meeting.

Install Apache, PHP, Python3 PIP, OBS, NDI, DistroAV

```bash
sudo apt install apt install apache2 php libapache2-mod-php python3-pip openssh-server curl intel-media-va-driver-non-free libmfx1 vainfo
sudo systemctl enable ssh
sudo systemctl start ssh
pip3 install obswebsocket --break-system-packages
sudo -u www-data pip3 install obswebsocket --break-system-packages

# Install OBS
sudo add-apt-repository ppa:obsproject/obs-studio
sudo apt update
sudo apt install obs-studio

# For Ubuntu LTS 24 you need to force an upgrade to ffmpeg7 or OBS will die at startup
sudo add-apt-repository ppa:ubuntuhandbook1/ffmpeg7
sudo apt update
sudo apt install ffmpeg -y

# Run OBS once before continuing
obs
wget https://raw.githubusercontent.com/DistroAV/DistroAV/refs/heads/master/CI/libndi-get.sh
chmod +x libndi-get.sh
./libndi-get.sh install

# Download and install DistroAV (manual process!)

sudo dpkg -i [distroavpackage].deb

# Remove and block the OBS Crash Tell-tale
find . -name .sentinel
rm -rf ./.config/obs-studio/.sentinel/*
chmod -R 400 ./.config/obs-studio/.sentinel

```

Clone the repo into /var/opt/bcast-control.
Set the folder as the document root for Apache.

You will need to add a directive to the site configs:

```xml
<Directory />
   Require all granted
</Directory>
```

```bash
# Enable SSL site
sudo a2enmod ssl
sudo a2ensite default-ssl.conf
sudo systemctl restart apache2
```

Place files from the www in your webserver directory, and place the python files somewhere. Create a virtualenv for the python scripts and install obswebsocket. Create a ramdisk to store the captures. Set run_capture.sh and run_obs.sh to execute at login. Configure for autologin. Create symlink to camera image from webserver directory to ramdisk. Configure SSL redirect in apache.

Python:
Needs Python3 and the obs-websocket-py package
