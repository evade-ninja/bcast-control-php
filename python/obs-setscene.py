#!/var/www/obswebsock/bin/python

import json
from obswebsocket import obsws, events, requests
import sys


with open('/var/www/config.json') as c:
    config = json.load(c)

obs = obsws(config['server'], config['port'], config['password'])
obs.connect()

new_scene = sys.argv[1]

print("Set scene to: " + new_scene)

obs.call(requests.SetCurrentProgramScene(sceneName=new_scene))

#scenes = obs.call(requests.GetSceneList())
#print(scenes)