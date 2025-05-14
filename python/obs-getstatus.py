#!/var/www/obswebsock/bin/python

#Prints a JSON object containing the current status of the broadcast

import json
from obswebsocket import obsws, events, requests
import sys


with open('/var/www/config.json') as c:
#with open('./python/config.json') as c:
    config = json.load(c)

obs = obsws(config['server'], config['port'], config['password'])
obs.connect()

# Get the current Scenes from OBS

currentScene = obs.call(requests.GetCurrentProgramScene())
#print(currentScene.datain['currentProgramSceneName'])

streamStatus = obs.call(requests.GetStreamStatus())
#print(streamStatus.datain['outputActive'])

data = {
    "currentScene": currentScene.datain['currentProgramSceneName'],
    "streamingStatus": streamStatus.datain['outputActive']
}

print(json.dumps(data))





#new_scene = sys.argv[1]

#print("Set scene to: " + new_scene)

#obs.call(requests.SetCurrentProgramScene(sceneName=new_scene))