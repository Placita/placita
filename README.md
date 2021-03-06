# Placita

## Makefile Commands

`stop`: Stop the running server

`rm`: Remove all unused containers

`rm-all`: Stop and remove all containers

`rmi`: Remove placita images without removing base image

`rmi-all`: Remove all images

`purge`: _Use with caution_ Completely purge Docker containers, networks, images, volumes, and cache

`lint`: Run prettier and eslint

`build`: Build development server without running the server

`start`: Start development server at port `3000`

`reload`: Stop development server and restart the server at port `3000`

`debug`: Start development server in debug mode

`test-security`: Test security vulnerabilities (must have [snyk](https://support.snyk.io/hc/en-us/articles/360003812538-Install-the-Snyk-CLI) installed globally)

`test-image-security`: Test security vulnerabilities for base images (must have [snyk](https://support.snyk.io/hc/en-us/articles/360003812538-Install-the-Snyk-CLI) installed globally)

## How to Run

To run the app you will need:

- [Docker](https://docs.docker.com/get-docker/)
- [docker-compse](https://docs.docker.com/compose/install/)

The `.env` file is not pushed to GitHub. You'll need to create the file in the root of the `placita` directory. And within the `.env` file, you'll need:

- MONGODB_URI
- SECRET_KEY
- SALT

Additionally you'll need to create `secrets.mk`, a Makefile at the root of the project with the following vars:

- snyk_auth_token

Once you have your environment fully set up and secrets secured, run:

```bash
make start
```

To stop the app press `CNTRL + C`. Then run:

```bash
make stop
```
