
up:
	sudo docker-compose up

build:
	sudo docker-compose up --build

logs:
	sudo docker-compose logs -f -t

start:
	sudo docker-compose start

stop:
	sudo docker-compose stop

ps:
	sudo docker-compose ps

show-images:
	sudo docker images

down:
	sudo docker-compose down

down-force:
	sudo docker-compose down -v

down-remove-images:
	sudo docker-compose down --rmi local -v