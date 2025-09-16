#!/bin/bash

IMAGE_NAME=elshad/frontend
IMAGE_TAG_CURRENT=latest

echo "### Build new image ${IMAGE_NAME}:${IMAGE_TAG_CURRENT}"
docker build --no-cache --tag ${IMAGE_NAME}:${IMAGE_TAG_CURRENT} .