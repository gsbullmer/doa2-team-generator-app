# Duel of Ages 2: Team Builder

This application is a team building application for the tabletop game [Duel of Ages II](http://www.duelofages.com). Once everyone has decided on the scenario that they want to play in, you can configure this tool to generate teams based on that criteria. You can configure the following options with this application:

Team Setup
--------
- Number of Teams
- Characters Per Team
- Draft Type
- Extra Characters

Session Settings
----------------
- Game Sets Available (Basic or Master)
- Available Ages
- Available Settings
- Available Circles
- Available Natures

Once you have configured your settings for how you want to play this round, click the 'Draft Teams' button. The app will do the rest: assigning you and the other players characters from the available pool. You will get a list of the charcter's name and id number to help you locate their corresponding card and token.

## Foundation for Apps Template

[![devDependency Status](https://david-dm.org/zurb/foundation-apps-template/dev-status.svg)](https://david-dm.org/zurb/foundation-apps-template#info=devDependencies)

This is the default template project for Foundation for Apps, powered by Gulp, Angular, and libsass. It provides you with a basic template to get started with Foundation for Apps and Angular.

If you're already an Angular developer, you may instead want to install the components into your own stack using Bower: `bower install foundation-apps`

### Requirements

You'll need the following software installed to get started.

  - [Node.js](http://nodejs.org): Use the installer for your OS.
  - [Git](http://git-scm.com/downloads): Use the installer for your OS.
    - Windows users can also try [Git for Windows](http://git-for-windows.github.io/).
  - [Gulp](http://gulpjs.com/) and [Bower](http://bower.io): Run `npm install -g gulp bower`
    - Depending on how Node is configured on your machine, you may need to run `sudo npm install -g gulp bower` instead, if you get an error with the first command.

### Get Started

Clone this repository, where `app` is the name of your app.

```bash
git clone https://github.com/zurb/foundation-apps-template.git app
```

Change into the directory.

```bash
cd app
```

Install the dependencies. If you're running Mac OS or Linux, you may need to run `sudo npm install` instead, depending on how your machine is configured.

```bash
npm install
bower install
```

While you're working on your project, run:

```bash
npm start
```

This will compile the Sass and assemble your Angular app. **Now go to `localhost:8080` in your browser to see it in action.** When you change any file in the `client` folder, the appropriate Gulp task will run to build new files.

To run the compiling process once, without watching any files, use the `build` command.

```bash
npm start build
```
