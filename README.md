# Data in QC UI

## Table of contents

-   [Installation of common tools](#installation-of-common-tools)
-   [Setup the project](#setup-the-project)
-   [Development server](#development-server)
-   [Running unit tests](#running-unit-tests)
-   [Running end-to-end tests](#running-end-to-end-tests)
-   [Running the project in Docker](#running-the-project-in-docker)
-   [Build](#build)
-   [Useful Links](#useful-links)

---

## Installation of common tools

To run this Angular UI project you will need:

-   [GIT](#git)
-   [Node JS](#node-js)
-   [Angular CLI](#angular-cli)
-   [Docker](#docker)

</br>

### GIT

Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. [More Info](https://www.atlassian.com/git/tutorials/what-is-version-control)

1. If you don't have it installed, install GIT from here - [Install GIT ](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

</br>

### NODE JS

Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. [More Info](https://nodejs.org/docs/latest-v13.x/api/)

1. Check if you have already installed Node JS

    ```code
        node -v
    ```

2. Check if you have NPM installed

    ```code
       npm -v
    ```

3. If you don't have Node JS in your PC then install the latest stable version (LTS) from here -> [Install](https://nodejs.org/en/download/)

</br>

**Note**: Angular, the Angular CLI, and Angular applications depend on npm packages for many features and functions. To download and install npm packages, you need an npm package manager. The NPM is installed with Node.js by default.

</br>
</br>

### Angular CLI

The Angular CLI makes it easy to create an application that already works, right out of the box. It already follows our best practices! [More Info](https://angular.io/cli)

1. Check if you have already installed Angular CLI

    ```code
       ng --version
    ```

2. If you don't have Angular in your PC then run this command in a terminal window. [More Info](https://angular.io/guide/setup-local)

    ```code
       npm install -g @angular/cli
    ```

</br>
</br>

### Docker

Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels
[More Info](https://docs.docker.com/)

1. Check if you have already installed Docker

    ```code
       docker -v
    ```

2. If you don't have Docker -> [Install from here](https://angular.io/guide/setup-local)

</br>
</br>

---

</br>

## Setup the project

1. Clone GIT repo from TFS using the below command.

    ```code
    git clone https://tfs.gfk.com/StarTrackDevelopment/Gim%20Global/_git/GimGlobal
    ```

2. Navigate to the project root ( GimGlobal\diqc\ui)

3. Install npm packages. Run this command in terminal window.

    ```code
        npm install
    ```
4. Run the Angular project to test the packages installation and to be sure everything is correct with setup!

    ```code
        npm start
    ```

You can find more help with Angular setup [here](https://angular.io/guide/setup-local)

</br>

---

## Development server

1. Run `ng serve` for a dev server.

    ```code
        ng serve
    ```
2. Navigate to `http://localhost:4200/`.
3. The app will automatically reload if you change any of the source files.

</br>

Official documentation about [Angular Development server ](https://angular.io/cli/serve)

</br>

---

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

    ```code
        ng serve
    ``` 
</br>

Official documentation about [Angular Unit Tests ](https://angular.io/guide/testing)

</br>

---

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

    ```code
        ng e2e
    ```

Official documentation about [Angular End-to-end Tests ](https://angular.io/cli/e2e)

</br>

---

## Running the project in Docker

1.  Navigate to the UI project root

2.  Run `dev-docker` to create the docker image
    </br>

    ```code
        npm run dev-docker
    ```

3.  Navigate to `http://localhost:5200/`.

</br>

---

## Build

1. Run `npm build` to build the project.

    ```code
        npm build
    ```

2. The build artifacts will be stored in the `dist/` directory.

3. Use the `--prod` flag for a production build.

Official documentation about [Angular Build ](https://angular.io/cli/build)

</br>

---

## Useful links

-   [Official Angular Documentation](https://angular.io/docs)

-   [Official TypeScript Documentation](https://www.typescriptlang.org/docs/)

-   [Official Node JS Documentation](https://nodejs.org/en/docs/)

-   [Official Docker Documentation](https://docs.docker.com/)
