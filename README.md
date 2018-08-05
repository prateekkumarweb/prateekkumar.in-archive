# Personal website - prateekkumar.in

![Travis CI](https://travis-ci.com/prateekkumarweb/prateekkumar.in.svg?branch=master)

## Requirements

* [Node and NPM](https://nodejs.org/en/)
* [Hugo](https://gohugo.io/)

## Run

* To start the server in development mode
  ```sh
  $ hugo server
  ```
* To generate production site
  ```sh
  $ npm start
  ```
  The site is generated in `dist` folder.

## Deplotment

Currently this website is deployed on [firebase](https://firebase.google.com).

```sh
$ npm install -g firebase-tools
$ firebase login
$ firebase init
$ firebase deploy
```

To deploy using Travis, first generate a firebase token

```sh
$ firebase login:ci
```

Add this token as environmental variable `$FIREBASE_TOKEN` in Travis.

---
Copyright &copy; 2018 Prateek Kumar
