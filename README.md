## Bike Bros


# Introduction 

Bike bros is intended to be a site for Motorcycle enthusiasts to come together.
The site allows users to and share photos of their bikes. 
The app also encourages users to create Bike Meets where like-minded people can meet to show off their bikes. 

# Deplyed FRONTEND website 
A link to the live website can be found [here](https://fe-bike-bros.herokuapp.com/)

# Deployed BACKEND website 
A link to the live website can be found [here](https://bike-bros.herokuapp.com/)

# DRF README
A link to the BACKEND README can be found here [here](https://github.com/JoeQuigley1/pp5-drf-bike-brothers)

## UX 

### Color Scheme
-Add image 
## Features
### Existing Features:
Navbar
Posts
Profiles
Meetups
Creat/ Edit Meetup
Sign in
Sign out
404(Pending)


## Testing
### Manual Testing:
- SignUpForm
- CRUD functionality has been tested and is working on the following: Posts| Comments | Likes | Meetups | Follow | Profile
- Profiles do not have have delete functionality
- Likes and Comments can only be created and deleted.
- All links work and lead to the desired page


## Frameworks, Libraries & Programs Used
- Font Awesome: Used for the social links, footers, and 
- Google: Font: NEED TO UPDATE FONT 
- Gitpod
- Github
- Lucidchart: Used to design wireframes and mockups and Database mockups for the backend.
- Favicon: Used to provide the image for the icon and tab
- Django: Used to build the backend API for the front-end side of the project.
- ReactJS: Used to build the components in the front-end of the project.

## Components

- AxiosDefault.js: Allows communication to the backend API
- Assest.js: Used to load a spinner when loading throughout the site.
- Avatar.js: Used to display the profile image throughout the site.
- DropdownMenu.js: Used to allow users to edit and delete their Meetup and Posts
- CurrentUserContext.js: Used to allow users further functionality such as edit/delete once logged in.
- ProfileDataContext.js: Used to allow logged-in users to follow/unfollow other users.




- UseClickOutsideToggle.js: DESCRIPTION PENDING
- useRedirect.js: DESCRIPTION PENDING
- utils.js: DESCRIPTION PENDING




# Project Setup and Initial Deployment

1. Create a new repository in GitHub (do not use CI Template).

2. Create new workspace by clicking 'Gitpod' button. 

3. Once workspace has loaded, run terminal command **npx create-react-app . --use-npm** to create React app. 
This Step raised an error which was consistent throughout the project. 

4. To create the app with Gitpod I used "nvm install 16 && nvm use 16" which created the app successfully. 

5. Once the app is installed, run terminal command **npm start** to check app is working. Browser should open with the spinning React logo on a dark blue background. 

6. Remove logo import from the top of App.js, and replace the React Header element with a custom h1 element containing 'Hello World!'. 

7. Confirm the changes have rendered in the browser preview then add, commit and push changes. 

8. Create a new app in Heroku. 

9. Click on 'Deploy tab and go to the 'Deployment Method'. Click on Github.

10. Connect to a Github account  and search for the relevant repository.

11. Use 'Manual Deply and click 'Deploy Branch'. Click on 'build logs' to monitor the build. 

12. Click open app to view the deployed app.

13. To install Bootstrap, run terminal command **npm install react-bootstrap@1.6.3 bootstrap@4.6.0**

# Final Deployment

1. In 'scripts' section of 'package.json' in gitpod, add the followin command: 
"heroku-prebuild: "npm install -g serve"

2. Add Procfile to project root & populate with the following:

web: serve -s build

3. Ensure all code is pushed to Github and up to date. 

4. Log into Heorku.

5. From the Dashboard lick on 'Deploy tab.

6. Use 'Deploy Branch' and Click on 'build logs' to monitor the build, wait for the build to complete. 

7. One the app has been deployed to Heroku click on the oppp app button. 

8. Test the Deployed app works. 


# Deployment Elephant SQL 

As of November 2022, Heroku ceased to provide a free service. The hosting of this website is carried out using the free service [Elephant SQL](https://www.elephantsql.com/). 

The steps used to deploy this project can be seen [here](https://code-institute-students.github.io/deployment-docs/30-pp4/django-01-create-a-database).

### Media

- Favicon and Logo by <a href="https://www.flaticon.com/free-icons/motorcycle" title="motorcycle icons">Motorcycle icons created by Freepik - Flaticon</a>
- Avatar and No Results images are from Code Institute Moments walkthrough project


## Acknowledgements 


- [Martina Terlevic](https://github.com/SephTheOverwitch): For help and support throughout a tough year.
- Tutor support for their help in solving the **npx create-react-app . --use-npm** problem
- Slack for the huge archive of helpful information
