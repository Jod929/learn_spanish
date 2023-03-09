#!/bin/bash

echo 'application start is being ran' >> /home/ec2-user/learn_spanish/deploy.log

echo 'run application_start.sh: ' >> /home/ec2-user/learn_spanish/deploy.log

cd /home/ec2-user/learn_spanish

npm run build >> /home/ec2-user/learn_spanish/deploy.log

echo 'pm2 restart nodejs-express-app' >> /home/ec2-user/learn_spanish/deploy.log

# sudo pm2 restart learn_spanish >> /home/ec2-user/learn_spanish/deploy.log