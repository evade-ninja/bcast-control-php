#!/var/www/obswebsock/bin/python

#Prints a JSON object containing the current status of the broadcast

import json
from obswebsocket import obsws, events, requests
import sys
import time

with open('/var/www/config.json') as c:
#with open('./python/config.json') as c:
    config = json.load(c)

obs = obsws(config['server'], config['port'], config['password'])
obs.connect()

interval = int(sys.argv[1])


while 0 < 1:
   obs.call(requests.SaveSourceScreenshot(sourceName="Broadcast", imageFormat="jpg", imageFilePath=config['captureDest']))
   time.sleep(interval)




#print(obs.call(requests.GetVersion()))