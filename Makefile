-include secrets.mk

compose = docker-compose -f
dev = docker-compose.dev.yml

build :
				TAG=$$(date +%m%d%H%M%S) ${compose} ${dev} build --force-rm

start :
				TAG=$$(date +%m%d%H%M%S) ${compose} ${dev} up

stop :
				${compose} ${dev} down

debug :
				TAG=$$(date +%m%d%H%M%S) ${compose} ${dev} --verbose up

reload :
				make stop
				make start

test-security :
				snyk config set api=$(snyk_auth_token)
				snyk test

test-image-security :
				snyk config set api=$(snyk_auth_token)
				snyk container test node:lts-buster-slim --file=Dockerfile --fail-on=upgradable

lint :
				npm run lint
				
publish-major :
				echo "major"

publish-minor :
				echo "minor"

publish-patch :
				echo "patch"

rm :
				docker container prune -f

rm-all :
				docker stop $$(docker ps -aq)
				docker rm $$(docker ps -aq)

rmi :
				docker rmi placita_placita

rmi-all :
				docker rmi $$(docker images -q)
	
purge :
				docker system prune --volumes --all -f