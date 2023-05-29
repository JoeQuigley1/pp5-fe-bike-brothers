## Bike Bros

![Am I Responsive Checker](src/assets/testing_screenshots/am-i-responsive.png)

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


### Purpose

The site is designed give an interactive space for bike-enthusiasts to share bike related content, meetup and to find out more about bikes.

### Site Goals

Bike Bros aims to establish a sense of community among its users through the sharing of content, meetups and interactions both online and offline. 

### User Goals

To engage faithfully with the site and to share anything bike related so all users can make the most of what the site has to offer. 

### User Stories

The Issues created for this site found [here](src/assets/readme_screenshots/userstories.md)

### wireframes

- Wireframes for my project can be found [here](/src/assets/wireframes/)


### Site structure


![Site Flowchart](src/assets/readme_screenshots/site-flow.png)


### Color Scheme
![Colour Scheme](src/assets/readme_screenshots/color%20scheme.png)

### Typography
- The font I chose to use in my app is "Lexend" as it is a widely used font, and very user-friendly. This allows a better user experience when reading content. 

### Feature Planning 

-	Neutral colour scheme to make the site easy to view.
-	Navigation which is user friendly and available on all pages
-	Restricted navigation for logged out users
-	Full Navigation functionality for logged in users
-	Posts – Logged in users can create edit read and delete bike related posts. 
-	Search posts: Search bar is displayed in Home Feed and Liked pages where users can search by title and user.
-	Comments: Users can create edit and delete comments under posts 
-	Likes: Users can like posts
-	Meetups – Logged in users can create edit read and delete meetups. 
-	Users can sign in and sign out.
-	Users can edit their profiles.
-	Form validation will help communicate errors to the user.


## Features

### Existing Features:
- Navbar
<br>

![Navbar Logged Out](src/assets/readme_screenshots/navbar-loggedout.png)

Logged In: 
<br>

![Navbar Logged In](src/assets/readme_screenshots/navbar-loggedout.png)
<br>

Sign up

![Sign Up](src/assets/readme_screenshots/sign-up.png)
<br>

Sign in
![Sign In](src/assets/readme_screenshots/Sign%20in.png)
<br>



- Posts

Post Detail

Create Post

Edit Post


- Profiles

Most Followed Profiles
<br>

![Most Followed Profiles](src/assets/readme_screenshots/most-followed-profs.png)

- Meetups
<br>

Meetup Detail
<br>

![Meetup Detail](src/assets/readme_screenshots/meetup-detail.png)

Meet Up Create Form


<br>

![Meetup Create Form](src/assets/readme_screenshots/create-meetup.png)

- Meetup Edit Form



<br>

About
<br>

![About](src/assets/readme_screenshots/about.png)

FAQ Accordion section

<br>

![FAQ](src/assets/readme_screenshots/Faq.png)

<br>

Contact Form

![Contact Form](src/assets/readme_screenshots/contact-form.png)




## Testing

### Manual Testing
- Manual Testing can be found [here](/TESTS.md).

## Frameworks, Libraries & Programs Used
- Font Awesome: Used for the social links, footers, and 
- Google: Font: Used to for the font "Lexend" which is used throughout the project
- Gitpod: Used to build and create the project to Github.
- Github: Used to store my repository for submission
- Lucidchart: Used to design wireframes and mockups and Database mockups for the backend.
- Favicon: Used to provide the image for the icon and tab
- Django: Used to build the backend API for the front-end side of the project.
- ReactJS: Used to build the components in the front-end of the project.

## Components

- AxiosDefault.js: Allows communication to the backend API
- Assest.js: Used to load a spinner when loading throughout the site.
- Avatar.js: Used to display the profile image throughout the site.
- DropdownMenu.js: Used to allow users to edit and delete their Meetup and Posts
- FaqAccordion.js: Custom component used to display the FAQ questions and answers. 
- CurrentUserContext.js: Used to allow users further functionality such as edit/delete once logged in.
- ProfileDataContext.js: Used to allow logged-in users to follow/unfollow other users.
- UseClickOutsideToggle.js: Used to collapse the navbar burger menu when an item or an area outside the menu is clicked.
- useRedirect.js: Redirects user to another page if they do not have appropriate access. 
- utils.js: Supplies Infinite Scroll functionality and JWT functionality accross entire app. 




# Project Setup and Initial Deployment

1. Create a new repository in GitHub (do not use CI Template).

2. Create new workspace by clicking 'Gitpod' button. 

3. Once workspace has loaded, run terminal command `npx create-react-app . --use-npm` to create React app. 
This Step raised an error which was consistent throughout the project. 

4. To create the app with Gitpod I used `nvm install 16 && nvm use 16` which created the app successfully. 

5. Once the app is installed, run terminal command `npm start` to check app is working. Browser should open with the spinning React logo on a dark blue background. 

6. Remove logo import from the top of App.js, and replace the React Header element with a custom h1 element containing 'Hello World!'. 

7. Confirm the changes have rendered in the browser preview then add, commit and push changes. 

8. Create a new app in Heroku. 

9. Click on 'Deploy tab and go to the 'Deployment Method'. Click on Github.

10. Connect to a Github account  and search for the relevant repository.

11. Use 'Manual Deply and click 'Deploy Branch'. Click on 'build logs' to monitor the build. 

12. Click open app to view the deployed app.

13. To install Bootstrap, run terminal command `npm install react-bootstrap@1.6.3 bootstrap@4.6.0`

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

The steps used to deploy this project can be seen in steps 19-39 in the Deployment section of the BackEnd README [here](https://github.com/JoeQuigley1/pp5-drf-bike-brothers#deployment).

### Media

- Favicon and Logo by <a href="https://www.flaticon.com/free-icons/motorcycle" title="motorcycle icons">Motorcycle icons created by Freepik - Flaticon</a>
- Avatar and No Results images are from Code Institute Moments walkthrough project


## Acknowledgements 


- [Martina Terlevic](https://github.com/SephTheOverwitch): For help and support throughout a tough year.
- Tutor support for their help in solving the **npx create-react-app . --use-npm** problem
- Slack for the huge archive of helpful information
