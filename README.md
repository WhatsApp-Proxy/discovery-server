# WhatsApp Proxy Discovery Server

WhatsApp Proxy Discovery server | Allows WhatsApp Proxies to announce themselfs to the backend

## Routes

- `/ping` - Returns a 200 OK response, used to check if the server is reachable


## How to run

- Copy `.env.example` to `.env`
- Fill in the required values
- Configure the port in the `docker-compose.yml` file if needed. (If you want to run the server on port 90 for example use the following value: `90:8080`)
- Run `docker-compose up -d` to start the server
