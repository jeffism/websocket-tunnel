#!/bin/bash

sshpass -p dev ssh -4 -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -L 8080:127.0.0.1:8080 root@websocket-server -p 2222 -N &
