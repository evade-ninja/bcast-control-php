#!/usr/bin/python3

import json
from obswebsocket import obsws, requests


with open('./config.json') as c:
    config = json.load(c)

obs = obsws(config['server'], config['port'], config['password'])
obs.connect()

obs.call(requests.StartStream())

print("started")