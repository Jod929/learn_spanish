#!/bin/bash

echo 'run after_install.sh: ' >> /home/ec2-user/learn_spanish/deploy.log

echo 'cd /home/ec2-user/nodejs-server-cicd' >> /home/ec2-user/learn_spanish/deploy.log
cd /home/ec2-user/learn_spanish >> /home/ec2-user/learn_spanish/deploy.log

echo 'npm install' >> /home/ec2-user/learn_spanish/deploy.log
sudo npm install >> /home/ec2-user/learn_spanish/deploy.log

echo 'running build' >> /home/ec2-user/learn_spanish/deploy.log

npm run build >> /home/ec2-user/learn_spanish/deploy.log
