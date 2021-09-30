# ContactApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

It is basically an angular web app for maintaining Contact Information.
Things implemented in this project
1) Creating a formarray within a formgroup which will contain multiple formgroups within it
2) Creating Dynamic form controls based on the service response
3) Ierating over the formarray using ngFor in the angular template 
4) Ability to view all the contacts from a json file stored under the assets folder.
5) Ability to add a new contact by giving all the mandatory details. 
6) Save Button validation while adding a new contact, where in most of the fields are mandatory and the status would be inactive by default
7) Ability to edit an existing contact and choosing the status using the toggle button
8) Ability to delete an existing contact from the directory 
9) Added pagination to the table to accomodate 250 rows together. By default, the user sees only 10 rows per page
10) The user has the option switch to any particular directly using the Dropdown option which will take him to the respective page
11) The user has the ability to switch back and forth using the next and previous icons
12) The user is able to view page information like the start and end index of a particular page
13) The user gets to choose the no of rows in a particular page using the dropdown option
14) Ability to filter the Contact Information by first name, last name, email, phone number or status
15) Validation for Phone number as no text can be entered there.
16) All the components in the web app are unit tested with code coverage over 100% and you can find the coverage report under coverage folder in the root directory
17) Created a custom pipe to calculate the remaining Target Balance for each contact. 

While creating this web app, the best software design practices and coding standards were used. I have segregated the components, filters, services, models for better folder structure. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# custom-ngx-pagination" 
# iteration-of-formarray-using-ngfor
