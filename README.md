

## Env

```bash
# Service app
export APP_LOCATION1=.
export SERVICE_NAME1=app
export ORG_NAME1=tok
export CONTAINER_NAME1=app
export IMAGE_NAME1=app
export IMAGE_TAG1=1.0.0
export DOCKERFILE_NAME1=Dockerfile


```

## Create Docker for app

```bash
docker build --file ${APP_LOCATION1}/${DOCKERFILE_NAME1} --tag ${IMAGE_NAME1}:${IMAGE_TAG1} ${APP_LOCATION1}

```

## Create Dcoker-compose

```bash
envsubst < docker-compose-template.yml > docker-compose.yml

```

## Check Docker-compose format

```bash
docker-compose -f docker-compose.yml config

```

## Start app Docker

```bash
docker-compose up --detach
docker-compose up

```







