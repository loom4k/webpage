# loom's webpage documentation
This repository contains the assets and the source code required to build [loom4k's personnal webpage](https://loom4k.me). I am glad you want to contribute!
- [Contributing to the website](https://github.com/loom4k/webpage/pull  )
- Contributing to linked repositories and projects (soon)

## Using this repository
You can run this website locally using [Node.js](https://nodejs.org) and [NPM](https://npmjs.com). We strongly reccomend sticking to NPM and not running it using Yarn as it's never been tested and some bugs may occur.

## Prerequisites
To use this repository, you will need the following installed locally:
- [Node.js](https://nodejs.org/)
- npm (should be installed with node)
- A container runtime, like [Docker](https://www.docker.com/)

Before you start, make sure to install the dependencies. Clone the repository and navigate to the directory:
```sh
git clone https://github.com/loom4k/webpage.git
cd webpage
```

## Running the website locally using Node and Next.js
To build and test the website locally, run:
```sh
# Install dependencies
npm install

# Build & run website
npm build
npm run
```

## Running the website using Docker
To build the website with docker, run:
```sh
docker build -t webpage .
```
Afterwards, to run the website, do:
```sh
docker run -p 3000:3000 webpage
```

This will start the Next.js local server on port 3000. Open up your browser to https://localhost:3000 to view the website. As you make changes to components and pages, Next.js updates the website and forces a browser refresh.

## Troubleshooting
*More information will be added as some [issues are reported](https://github.com/loom4k/issues/new)*

## Thank you
This website wouldn't be what it is right now without all the contributors. I truly appreciate everyone who submit issues, start discussions and open pull requests to contribute! This wouldn't exist without you.