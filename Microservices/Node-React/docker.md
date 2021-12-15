# Docker

## Building an image

Dockerfile
```
FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]
```

docker-cli command:
`docker build .`

tagging the image
`docker build -t username/imageName .`
__automatically use the label latest__

Running the container
`docker run [image id or image tag]`

Running overriding the default command
`docker run -it [image id or image tag] [cmd]`
Example: `docker run -it user/name sh` __starts and attach a shell__

Print information about containers
`docker ps`

Execute a command inside a container
`docker exec -it [container id] [cmd]`

List container logs
`docker logs [container id]`

Push the image to docker hub
`docker push username/image`

Pull an image to docker hub
`docker pull username/image`
