# Platform application root config

## What is this?

This is an platform host application which importing all microfrontends and constructing routes using single spa.

## How does it work?

Using System JS this host application importing all microfrontends(in-browser modules) and constructing routes with single spa, also here contains all shared libraries and design system which uses platform application microfrontends.

This project was created with the [create-single-spa](https://single-spa.js.org/docs/create-single-spa) CLI. It uses webpack, babel, eslint, prettier.

## Local development

To run this project you need to follow commands below.

```sh
git clone https://github.com/vahemur86/platform-host.git
cd platform-host
docker compose up
open http://localhost:9000
```
