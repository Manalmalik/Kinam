#!/bin/bash
# root@173.212.231.161
rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress /Users/michaelgerullis/git/kinam-mayan/dist/website/* root@167.86.100.47:/var/www/html
