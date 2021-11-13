FROM ubuntu:20.04 
# ↑ it is important to specify a version, even if it is carrently 'latest' becouse some day this docker file will be built when there is a newer verison
RUN apt-get update 
# ↑ neseccary before every apt-get installation
RUN apt-get install nginx -y
RUN nginx -v
RUN apt-get install nano 
# ↑ just a nice text editor
RUN apt-get install net-tools
# ENV MY_SYSTEM_VARIABLE='something'
## ↑ a variable that will be load to all inner container shell from this line of the build till through the build and runing phases of the container, unlike docker-compose environment variables that being load after the build.


RUN apt-get -y install vim

RUN npm i -g pm2@5.1.0 
# RUN ls
WORKDIR /etc/nginx
# ↑ dont realy know what its effects after the build, throug the build of course, its sets the working directory from the line and on, but not effect the compose file i think
# RUN ls

ENTRYPOINT [ "bash" ]