#!/usr/bin/python3

import json, os
from obswebsocket import obsws, requests


with open(os.path.dirname(os.path.abspath(__file__)) + '/config.json','r') as c:
    config = json.load(c)

obs = obsws(config['server'], config['port'], config['password'])
obs.connect()

obs.call(requests.StartStream())

print("started")