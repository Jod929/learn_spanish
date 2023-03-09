#!/bin/bash

echo 'application start is being ran' >> /home/ubuntu/learn_spanish/deploy.log

echo 'run application_start.sh: ' >> /home/ubuntu/learn_spanish/deploy.log

cd /home/ubuntu/learn_spanish

echo 'building app' >> /home/ubuntu/learn_spanish/deploy.log

sudo npm run build >> /home/ubuntu/learn_spanish/deploy.log

echo 'pm2 restart nodejs-express-app' >> /home/ubuntu/learn_spanish/deploy.log

sudo pm2 restart learn_spanish >> /home/ubuntu/learn_spanish/deploy.log