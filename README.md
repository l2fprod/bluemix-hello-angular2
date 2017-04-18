# Angular 2 in IBM Bluemix

This project deploys a simple Angular 2 app in IBM Bluemix. The Angular 2 uses the [angular-cli](https://github.com/angular/angular-cli) to generate the application artifacts into the **dist** folder. Once generated, these artifacts are deployed to IBM Bluemix and served by the [Cloud Foundry static buildpack](https://github.com/cloudfoundry/staticfile-buildpack).

## Running the app on Bluemix

1. Create a Bluemix Account

    [Sign up][bluemix_signup_url] for Bluemix, or use an existing account.

2. Download and install the [Cloud-foundry CLI][cloud_foundry_url] tool

3. Clone the app to your local environment from your terminal using the following command

  ```
  git clone https://github.com/l2fprod/bluemix-hello-angular2.git
  ```

4. Cd into this newly created directory

1. Install [angular-cli](https://github.com/angular/angular-cli)

  ```
  npm install -g angular-cli
  ```

1. Install the project dependencies

  ```
  npm install
  ```

1. Build the project

  ```
  npm run dist
  ```

  This task defined in [package.json](package.json) compiles the Angular 2 app. In addition it copies the [manifest.yml](manifest.yml) file to the **dist** directory together with the [Staticfile](Staticfile). Those two are needed to deploy the **dist** folder with the [Cloud Foundry static buildpack](https://github.com/cloudfoundry/staticfile-buildpack) making it possible to serve plain HTML, CSS, JavaScript files.

1. Change to the dist directory

  ```
  cd dist
  ```

1. Push the application to Bluemix

  ```
  cf push
  ```

  It will create a new app named *bluemix-hello-angular2* with a random route. Watch for the route name in the ```cf push``` output.


This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0.

## Troubleshooting

To troubleshoot your Bluemix app the main useful source of information is the logs. To see them, run:

  ```
  cf logs <application-name> --recent
  ```

---

This project is a sample application created for the purpose of demonstrating the deployment of a Angular 2 app in IBM Bluemix.
The program is provided as-is with no warranties of any kind, express or implied.

[bluemix_signup_url]: https://console.ng.bluemix.net/?cm_mmc=GitHubReadMe-_-BluemixSampleApp-_-Node-_-Workflow
[cloud_foundry_url]: https://github.com/cloudfoundry/cli
