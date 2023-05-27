#### Crud Functionality:
|Posts| Comments | Likes | Meetups | Follow | Profile |
|---|---|---|---|---|---|
|Profile|A user can create and edit a profile and bio|pass|pass|n/a|as expected|
|Comments|A user can create, delete and edit comments on posts|pass|pass|pass|n/a|
|Likes|A user can like/unlike a post|pass|n/a|pass|n/a|
|Meetups|A user can create, edit and delete a meetup|pass|pass|pass|as expected|
|Follow|A user can follow/unfollow other users|pass|n/a|pass|n/a|
|Post|A user can create, edit and delete a post|pass|pass|pass|as expected|
- CRUD functionality has been tested and is working on the above. 
- Profiles do not have have delete functionality.
- Likes and Comments can only be created and deleted.
- All links work and lead to the desired page

## Feature Testing

## User Story Testing

### Authentication

#### Sign up
- As a user I can sign up and register as a user so that I can gain full access to the site

![Sign up](/src/assets/testing_screenshots/Sign-up-crit.png)


Sign up Test

![Sign Up Test](src/assets/testing_screenshots/Sign%20up-testing.png)

User is requested to create credentials

Data is sent to the BE API

![BE Profile](src/assets/testing_screenshots/profile-be-data.png)

User is then redirected to the Sign In page

#### Sign In

![Sign In Criteria](src/assets/testing_screenshots/Sign-in-crit.png)

User must provide credentials to gain full access.

Once Signed in the User is then redirected to the Home Page which includes the Posts and Most Followed Profiles.

All App functionality is then available via Navbar. 

#### Navbar

![Navbar Criteria](src/assets/testing_screenshots/navbar-crit.png)

Navbar displays different icons depending on authenication status

Logged out Navbar: 

![Logged Out Navbar](src/assets/readme_screenshots/navbar-loggedout.png)

Logged In Navbar: 

![Logged In Navbar](src/assets/readme_screenshots/navbar-loggedin.png)

Navbar Hamburger:

![Navbar Hamburger](src/assets/testing_screenshots/navbar-hamburger.png)

Hamburger Icons

![Hamburger Icons](src/assets/testing_screenshots/hamburger-icons.png)

All icons are clickable on all displays and lead the User to the desired page.

#### Contact Page

![Contact Criteria](src/assets/testing_screenshots/contact-crit.png)

Contact Form is displayed once the contact button on the Navbar is clicked.

![Contact Form](src/assets/testing_screenshots/contact-form-test.png)

Once the form is completed the Data is sent to the BackEnd API.

![Contact Data](src/assets/testing_screenshots/contact-be-data.png)

The User is then redirected to a Confirmation Page to assure them that their query has been received.

#### Confirmation Page

![Confirmation Criteria](src/assets/testing_screenshots/confirmation-crit.png)

After submitting the Contact Form the user is then redirected to the Confirmation Page which includes a message and access to the navbar.

![Confirmation Page](src/assets/testing_screenshots/confirmation-test.png)


#### About 

*As a user I can navigate to an about page so that I can get more information about the site*

![About Criteria](src/assets/testing_screenshots/about-crit.png)

The User can navigate to the About page through a link in the navbar.

The User is then directed to the About Page.

![About Page](src/assets/testing_screenshots/about-page.png)

#### Meetups

*As a user I can create a meetup so that I can organise an event to meet with other like-minded bike enthusiatsts*

![Create Meetup Criteria](src/assets/testing_screenshots/create%20meetup-crit.png)

Once the User clicks the "Add a Meetup" button in the navbar they are redirected to the Create Meetup Form

![Create Meetup Form](src/assets/testing_screenshots/create-meetup-test.png)

Once the form is submitted the data is then sent to the BE API

![Create Meetup Data](/src/assets/testing_screenshots/create-meetup-data.png)

*As a user I can view a bike Meet up so that I can see the details of meetups planned.*

![Meetups Page Criteria](src/assets//testing_screenshots/meetups-page-crit.png)

Once a Meetup is created it is displayed on the Meetups Page.

![Meetups Page](src/assets/testing_screenshots/Meetup-test.png)

Clicking the title will direct the user to the Meetup detail.

*As an owner of a meetup I can Edit a Meetup so that I can update the Meetup*

![Edit Meetup Criteria](src/assets/testing_screenshots/edit-meetup-crit.png)

As an owner of a meetup, a User has the option of editing their meetup through the three dots menu

![Edit Meetup menu](src/assets/testing_screenshots/edit-meetup-menu.png)

For content that is posted by another user the three dots menu is not visible.

![ No Edit Menu](src/assets/testing_screenshots/no-three%20dots.png)

As an owner the three dots menu is visible

![Edit Meetup Page](src/assets/testing_screenshots/meetup-edit-test-1.png)


Once clicked the User is redirected to the Edit Meetup Page where they can make changes to their meetup.

![Edit Meetup Form](src/assets/testing_screenshots/edit-meetup-test.png)


The edited data is succesfully sent to the BE API

![Meetup Edit Data](src/assets/testing_screenshots/meetup-edit-data.png)

Once saved the User is redirected to the Meetup Detail.

The edited Meetup is also visible on the meetups Page and as a detail

![Edited Meetup Detail](src/assets/testing_screenshots/edit-meetup-test-2.png)

*As an owner of a meetup I can choose to delete a Meetup so that if an event is no longer taking place it is removed form the application*

![Delete Meetup Criteria](src/assets/testing_screenshots/delete-meetup-crit.png)

The User can click the delete button from the three dot menu as seen above in the Edit Meetup section

![Delete Icon](src/assets/testing_screenshots/delete-icon.png)

Once the User clicks the delete button they are redirected back to the previous page.

The data is deleted from the BE API











### Form Validation

### Validator Testing



#### ES Lint

#### W3C Css

### Lighthouse Testing 