#!/bin/bash
# root@173.212.231.161
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress /Users/morefox/git/kinam/dist/website/* root@160.153.133.152:/var/www/html
