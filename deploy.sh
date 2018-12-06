#!/bin/bash
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress ./dist/kinam/* root@173.212.231.161:/var/www/html/kinam
