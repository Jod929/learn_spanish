#!/bin/bash
echo 'run after_install.sh: ' >> /home/ubuntu/learn_spanish/deploy.log

echo 'cd /home/ubuntu/nodejs-server-cicd' >> /home/ubuntu/learn_spanish/deploy.log
cd /home/ubuntu/learn_spanish >> /home/ubuntu/learn_spanish/deploy.log

echo 'npm install' >> /home/ubuntu/learn_spanish/deploy.log
sudo npm install >> /home/ubuntu/learn_spanish/deploy.log
