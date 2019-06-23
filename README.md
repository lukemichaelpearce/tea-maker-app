# tea-maker-app

## Installation

1. Make sure the tea-maker-api is already installed

2. Ensure a recent stable version of docker and docker-compose are installed on your machine.

3. Clone the repository to your local machine
```
git clone https://github.com/lukemichaelpearce/tea-maker-app.git
```

4. Go to location of tea-maker-app and build docker container and launch
```
docker-compose build && docker-compose up -d
```

5. You should now be able to visit http://localhost:8082 (or the port you have set in docker-compose.yml) and see the landing page of the application. This can sometimes take a few seconds before the url is accessible.