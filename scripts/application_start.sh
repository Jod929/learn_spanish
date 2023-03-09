#!/bin/bash
sudo chmod -R 777 /home/ec2-user/learn_spanish

echo 'application start is being ran' >> /home/ec2-user/learn_spanish/deploy.log

echo 'run application_start.sh: ' >> /home/ec2-user/learn_spanish/deploy.log

npm run build >> /home/ec2-user/learn_spanish/deploy.log

echo 'pm2 restart nodejs-express-app' >> /home/ec2-user/learn_spanish/deploy.log

sudo pm2 restart learn_spanish >> /home/ec2-user/learn_spanish/deploy.log