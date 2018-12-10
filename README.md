# HealthCare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

##Project details

App has 3 routes (Built using angular router module)
1. /blog (default page)
2. /glossary
3. /contact-us

#Blog page

uses blog data from https://www.healthcare.gov/api/blog.json

#Glossary page

user glossary data from https://www.healthcare.gov/api/glossary.json

You can search in the glossary search bar for keys - Searching is done on the content

for eg. if you search for 'employee', all the glossary content with 'employee' keyword will pop up.

#Contact-us page

Form has been created using Reactive form module. and basic validation has been added.
