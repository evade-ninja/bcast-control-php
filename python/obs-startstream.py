#!/var/www/obswebsock/bin/python

import json
from obswebsocket import obsws, requests


with open('/var/www/config.json') as c:
    config = json.load(c)

obs = obsws(config['server'], config['port'], config['password'])
obs.connect()

obs.call(requests.StartStream())

print("started")