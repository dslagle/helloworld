if [[ "$(docker ps -q -a -f name=dslagle-hello-container)" != "" ]]; then
  docker stop dslagle-hello-container
  docker rm dslagle-hello-container
fi

if [[ "$(docker images -q dslagle-hello)" != "" ]]; then
  docker rmi dslagle-hello
fi
