# Introduction
AlisQI uses the [Hotwire approach](https://hotwired.dev/), meaning most markup is rendered on the server using a
templating engine, namely [Twig](https://twig.symfony.com/).

We do use plenty of client-side Javascript to increase UX fidelity, usability and appeal. Most of that is written as
[Stimulus](https://stimulus.hotwired.dev/) controllers.

When we talk about the front-end of the application, this usually includes the server-side rendered templates. Not only
do they produce the HTML and reference CSS classes, they also contain the markup which declares which JS controllers
to load, and what their configuration needs to be.

# Assignment
This repo contains a bare-bones app which renders a dozen log items of varying levels.

Your assignment is to enhance this page such that:
* users can filter one or multiple log levels (e.g., only display errors and warnings)
* the filter can be reset
* it looks nicer

You should only need to edit `public/js/LogController.js` and `templates/index.html.twig`, but feel free to explore the
`public` and `templates` folders. The rest is mostly boilerplate for the Symfony framework.

May the force be with you!

## Stretch goal
For bonus points, add counts to the buttons so users can see how many items of any given type exist in the log.

Feel free to come up with your own ideas on how to improve the log.

# How to run
To get the stack up and running: 
1. Install Lando on [macOS](https://docs.lando.dev/install/macos.html) or [Windows](https://docs.lando.dev/install/windows.html)
2. [Install the Symfony plugin](https://docs.lando.dev/plugins/symfony/install.html) using `lando plugin-add @lando/symfony`
3. Clone this repo
4. Inside the repo, run `lando start`

Lando will output four URLs. The most reliable one is the `http://localhost` (*not* `https`) with the random port.

# How to hand in your solution
Don't publish your code to a public repo and/or send a pull request. Your solution needs to remain private!

You can either send us the code over email or invite this repo's contributors to your cloned repo.
