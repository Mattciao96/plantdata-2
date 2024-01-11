# to run docker

# vite
docker build -t react-docker .
docker run -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules react-docker

# to publish the image
docker login
docker tag react-docker mattciao96/react-docker
docker push mattciao96/react-docker
