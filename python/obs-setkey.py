#!/usr/bin/python3

import json
from obswebsocket import obsws, events, requests
import sys, os


with open(os.path.dirname(os.path.abspath(__file__)) + '/config.json','r') as c:
    config = json.load(c)

obs = obsws(config['server'], config['port'], config['password'])
obs.connect()

new_key = sys.argv[1]

#print("Set streamkey to: " + new_key)

streamKey = "unknown"

for skey in config["streamkeys"]:
    if skey["key"] == new_key:
        streamKey = skey["value"]
        break

sconfig = {
   "server": config["streamUrl"],
   "key": streamKey
}

if(streamKey != "unknown"):
   obs.call(requests.SetStreamServiceSettings(streamServiceType="rtmp_custom", streamServiceSettings=sconfig))
   print("true")
else:
    print("false")

#scenes = obs.call(requests.GetSceneList())
#print(scenes)