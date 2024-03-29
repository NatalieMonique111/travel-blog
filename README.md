## Travel Blog App With PostgreSQL, Express, and React

End-to-end React app backed by an Express API server, persisting data to
PostgreSQL database.

This project is a blog based on this set of [Techtonica requirements](https://docs.google.com/document/d/15eivjB1rvcar_WvdstpN5e5ToHEHjl_vw-a43Bt2xRI/edit#).

<img src="img/travel-blog.png">

## Prerequisites

### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Use one of these methods:

- Use [Homebrew][] on macOS: `brew install --cask docker`
- [Follow the instructions on the Docker website][docker-www]

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

### Node

You'll need to install Node v14 or above. [`nvm`][nvm] is highly recommended.

## Set Up the Development Environment

### Install NPM Packages

```sh
npm install
```

### Set Up `postgres` User Password and Database Name

We need to set up couple pieces of information in order to start a new
PostgreSQL server instance, as well as to connect to it later from the Express
server.

1. Copy the example environment file

   ```sh
   cp .env.example .env
   ```

2. You can choose to edit `.env` or just use as-is.

[See the PostgreSQL Docker image documentation for more
information][dh-postgres].

### Initialize the Database

Let's set up the database server, create the application database, and seed it
with some data. You only need to do this the first time you set up your
development environment.

```sh
npm run db:init
```

ℹ️ If you ever need to start over with the database, you can run this command
again which will delete your existing data and start from scratch.

## Start the Development Environment

```sh
npm start
```

Visit <http://localhost:3000>.

## Shut Down the Development Environment

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm run db:stop` to stop and destroy the PostgreSQL Docker container. Don't
   worry, your data is safe.

[deploy-badge]: https://github.com/gsong/express-react-project-starter/actions/workflows/deploy.yaml/badge.svg
[deploy-workflow]: https://github.com/gsong/express-react-project-starter/actions/workflows/deploy.yaml
[dh-postgres]: https://hub.docker.com/_/postgres
[docker-www]: https://docs.docker.com/get-docker/
[homebrew]: https://brew.sh
[live]: https://stock-hacks-blog.herokuapp.com/
[nvm]: https://github.com/nvm-sh/nvm
[reset-badge]: https://github.com/gsong/express-react-project-starter/actions/workflows/reset-db.yml/badge.svg
[reset-workflow]: https://github.com/gsong/express-react-project-starter/actions/workflows/reset-db.yml
