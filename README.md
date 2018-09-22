# Personal website - prateekkumar.in

![Travis CI](https://travis-ci.com/prateekkumarweb/prateekkumar.in.svg?branch=master)

## Requirements

* [Hugo](https://gohugo.io/)

## Run

* To start the server in development mode
  ```sh
  $ hugo server -F
  ```
* To generate production site
  ```sh
  $ hugo -F --minify
  ```
  The site is generated in `public` folder.

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
