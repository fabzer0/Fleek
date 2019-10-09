# Fleek

Description is yet to come ✋🏽

[![Build Status](https://travis-ci.com/fabzer0/Fleek.svg?token=o5FixjM5zgdvtzqypdEW&branch=develop)](https://travis-ci.com/fabzer0/Fleek)
[![Known Vulnerabilities](https://snyk.io/test/github/fabzer0/Fleek/develop/badge.svg)](https://snyk.io/test/github/fabzer0/Fleek)
[![Maintainability](https://api.codeclimate.com/v1/badges/1c504bf968df2a824bc0/maintainability)](https://codeclimate.com/github/fabzer0/Fleek/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1c504bf968df2a824bc0/test_coverage)](https://codeclimate.com/github/fabzer0/Fleek/test_coverage)


## Heroku commands cheat sheet
> - heroku login - to login once\
> - heroku create [name] - initializes heroku app and adds remote\
> - heroku addons:create heroku-postgresql - add postgres db addon to your app\
> - heroku logs [--tail] - shows heroku server on the terminal\
> - heroku pg:psql - connect to heroku addon database serve\
> - heroku config - shows heroku environment variables\
    > - heroku config:set clown=fiesta - set an environment variable\
> - git push heroku:master - deploy latest code to heroku\
> - heroku open - open heroku url in browser

### When using knex
> - heroku run knex migrate:latest - run migrations on production db\
> - heroku run knex seed:run - run seeds on production db

### When using sequelize
> - heroku run sequelize db:migrate --env production --app <appname> - run migrations on production db\
> - heroku run sequelize db:seed:all --env production --app <appname> - run seeds on production db
