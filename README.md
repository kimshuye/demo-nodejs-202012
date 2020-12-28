

## Env

```bash
# Service app
export APP_LOCATION1=app
export SERVICE_NAME1=app
export ORG_NAME1=tok
export CONTAINER_NAME1=app
export IMAGE_NAME1=app
export IMAGE_TAG1=1.0.0
export DOCKERFILE_NAME1=Dockerfile

# Service db
export APP_LOCATION2=db
export SERVICE_NAME2=db
export ORG_NAME2=tok
export CONTAINER_NAME2=db
export IMAGE_NAME2=db
export IMAGE_TAG2=1.0.0
export DOCKERFILE_NAME2=Dockerfile


```

## Create Docker for app

```bash
docker build --file ${APP_LOCATION1}/${DOCKERFILE_NAME1} --tag ${IMAGE_NAME1}:${IMAGE_TAG1} ${APP_LOCATION1}

```

## Create Docker for db

```bash
docker build --file ${APP_LOCATION2}/${DOCKERFILE_NAME2} --tag ${IMAGE_NAME2}:${IMAGE_TAG2} ${APP_LOCATION2}

```

## Create Dcoker-compose

```bash
envsubst < docker-compose-template.yml > docker-compose.yml

```

## Check Docker-compose format

```bash
docker-compose -f docker-compose.yml config

```

## Create network

```bash
docker network create db-network
```

## Start app Docker

```bash
docker-compose up --detach
docker-compose up

```







