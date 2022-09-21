to push the image to dockerhub use : sudo ./mvnw clean install -P build-frontend -P jib-push-to-dockerhub -Dapp.image.tag=2

to push the image to local use : sudo ./mvnw clean install -P build-frontend -P jib-push-to-local -Dapp.image.tag=2
