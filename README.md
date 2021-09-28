# MCWEB

![logo](public/logo.png)

## What is it?

It is a fully working Minecraft chat client in browser. It uses Node.JS as backend. It does not store any sensitive data on the server. 

## How do I use it?

You can go to [mcweb.kaikkitietokoneista.net](https://mcweb.kaikkitietokoneista.net) or you can host it on your own.

## Ok, how do I host it?

It is simple. First of all you should copy this repository and cd into it. 
```bash
git clone https://github.com/kaikkitietokoneista/mcweb.git
cd mcweb
```
After that you install all required dependencies.
```bash
npm install
```
Finally you create your `.env`-file. It should look something like this:
```env
ENV=DEVELOPMENT
PORT=3000
```
DEVELOPMENT means that cookies are not secure and the program does not trust the first proxy. If you change it to PRODUCTION cookies are secure and program trusts first proxy.

And that is it. You can now run start script and use your own self-hosted Minecraft Web chat client
```bash
npm start
```

## Coming

1. Tab autocomplete for commands
2. Tab listing