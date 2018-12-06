FROM trion/ng-cli-karma

RUN apt-get update \ 
  && apt-get upgrade -y \
  && apt-get dist-upgrade -y \
  && apt-get install rsync -y 
