#!/bin/bash
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress ./dist/website/* root@173.212.231.161:/var/www/html/kinam-web
