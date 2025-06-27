# bcast-control-php

Python/PHP Control system for easy broadcasting of a church meeting.

Install Apache, PHP, Python3, and Apache SSL module.

Place files from the www in your webserver directory, and place the python files somewhere. Create a virtualenv for the python scripts and install obswebsocket. Create a ramdisk to store the captures. Set run_capture.sh and run_obs.sh to execute at login. Configure for autologin. Create symlink to camera image from webserver directory to ramdisk. Configure SSL redirect in apache.