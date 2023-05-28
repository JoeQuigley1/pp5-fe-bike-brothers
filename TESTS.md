

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

![Sign In Test](src/assets/testing_screenshots/sign-in-test.png)

Once Signed in the User is then redirected to the Home Page which includes the Posts and Most Followed Profiles.

All App functionality is then available via Navbar. 

### Navigation

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

### Contact

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


### About 

*As a user I can navigate to an about page so that I can get more information about the site*

![About Criteria](src/assets/testing_screenshots/about-crit.png)

The User can navigate to the About page through a link in the navbar.

The User is then directed to the About Page.

![About Page](src/assets/testing_screenshots/about-page.png)

### Meetups

#### Create

*As a user I can create a meetup so that I can organise an event to meet with other like-minded bike enthusiatsts*

![Create Meetup Criteria](src/assets/testing_screenshots/create%20meetup-crit.png)

Once the User clicks the "Add a Meetup" button in the navbar they are redirected to the Create Meetup Form

![Create Meetup Form](src/assets/testing_screenshots/create-meetup-test.png)

Once the form is submitted the data is then sent to the BE API

![Create Meetup Data](/src/assets/testing_screenshots/create-meetup-data.png)

#### View

*As a user I can view a bike Meet up so that I can see the details of meetups planned.*

![Meetups Page Criteria](src/assets//testing_screenshots/meetups-page-crit.png)

Once a Meetup is created it is displayed on the Meetups Page.

![Meetups Page](src/assets/testing_screenshots/Meetup-test.png)

Clicking the title will direct the user to the Meetup detail.

#### Edit

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

#### Delete

*As an owner of a meetup I can choose to delete a Meetup so that if an event is no longer taking place it is removed form the application*

![Delete Meetup Criteria](src/assets/testing_screenshots/delete-meetup-crit.png)

The User can click the delete button from the three dot menu as seen above in the Edit Meetup section

![Delete Icon](src/assets/testing_screenshots/delete-icon.png)

Once the User clicks the delete button they are redirected back to the previous page.

The data is deleted from the BE API

### Posts

#### Create

*As a logged in user I can create posts so that I can share content with fellow users*

![Posts Create Criteria](/src/assets/testing_screenshots/posts-create-crit.png)

Post form is accessible from the "Add a post" icon in the navbar

Post create form is rendered. 
![Posts Create Form](src/assets/testing_screenshots/post-create-form.png)

Once a User submits their post they are redirected to the Post Detail

![Posts Create Detail](src/assets/testing_screenshots/post-create-detail.png)

The data is sent to the BE API

![Create Post Data](src/assets/testing_screenshots/posts-create-data.png)

#### Edit

*As an owner of a post I can edit posts so that I can correct any errors*

![Edit Post Criteria](src/assets/testing_screenshots/edit-post-crit.png)

Using the three dots menu a User can navigate to the Edit Post Form.

![Edit Posts menu](src/assets/testing_screenshots/edit-post-menu.png)

Once clicked the User is directed to the Edit Form 
![Edit Post Form](src/assets/testing_screenshots/edit-post-form.png)

Once submitted the edited data is sent to the BE API

![Edit Post Data](src/assets/testing_screenshots/edit-post-data.png)

#### Delete

*As an owner of a post I can delete the post so that I can control what content I have on the app.*

![Delete Post Criteria](src/assets/testing_screenshots/delet-post-crit.png)

Using the three dot menu a User can click the delete icon which will delete the post. 

![Delet Post Icon](src/assets/testing_screenshots/delete-icon.png)

The Data is then delete from both the FE and the BE. 

#### View

*As a user I can see the most recent posts so that I can be up to date with new posts*

![Posts List Criteria](src/assets/testing_screenshots/posts-list-crit.png)

Using the Home icon on the navbar a User can navigate to the posts page

![Home Icon](src/assets/testing_screenshots/home-icon.png)

Once clicked the User is redirected to the home page which contains a lists of posts

![Home Page View](src/assets/testing_screenshots/posts-list-test.png)

The most recent posts are displayed at the top. 

The main image of a post is clickble and redirects the user to the Post Detail.

#### Detail

*As a user I can view the posts page so that I can see the details of the post.*

![Post Criteria](src/assets/testing_screenshots/post-crit.png)

Once a User clicks on a post they are redirected to the Post Detail 

![Post Detail](src/assets/testing_screenshots/Post%20Detail.png)

The Post details are displayed. 

There is a comment section below the post where users can interact

### Comments

#### Create

*As a logged in user I can add comments to a post so that I can share my thoughts about the post*

![Comment Create Criteria](src/assets/testing_screenshots/comment-create-crit.png)

Through the comment form a Users is able to create a comment. 

![Create Comment](src/assets/testing_screenshots/create-comment-test.png)

The comment is then displayed under the post.

![Create Comment Data](src/assets/testing_screenshots/create-comment-data.png)
 
The comment data is sent to the BE API

#### Edit

*As an owner of a comment I can edit comments on a post which I have made so that I can correct any mistakes*

![Comment Edit Criteria](src/assets/testing_screenshots/comment-edit-crit.png)

A user can use the three dots menu and click the edit icon. 

Once clicked this will open the comment for editing. 

![Comment Edit Form](src/assets/testing_screenshots/comment-edit-test.png)

The updated comment is displayed under the post

![Comment Edit Test Displayed](src/assets/testing_screenshots/comment-edit-test2.png)

The data is updated on the BE API

![Comment Edit Data](src/assets/testing_screenshots/comment-edit-data.png)

#### Delete

*As an owner of a comment I can delete my comment so that I can control removal of my comment from the application.*

![Comment Delete Criteria](src/assets/testing_screenshots/comment-delete-crit.png)

Using the three dots menu a comment can be deleted. 

Once deleted the comment is no longer displayed and the data is removed from BE API

![Comment Delete Test](src/assets/testing_screenshots/comment-delete-test.png)

### Like

#### Create and Delete

*As a user I can like a post so that I can show my support for the posts that interest me*

![Like and Unlike Post Criteria](src/assets/testing_screenshots/like-crit.png)

By using the like icon under a post a User can like a post which they do not own. 

![Like Icon](src/assets/testing_screenshots/like-icon.png)

Once liked the likes are displayed under the post.

![Liked Icon](src/assets/testing_screenshots/liked-test.png)

The data is sent to the BE API.

![Liked Data](src/assets/testing_screenshots/like-data.png)

Once the like icon is clicked again the like is removed from the post and deleted on the BE API.

### Profile

#### View

*As a user I can view information about a specific user: username, name, bio, number of posts, posts, number offollows and users followed so that I can learn more about them*

![Profile Display](src/assets/testing_screenshots/profile-crit.png)

Once a User clicks on a profile name or avatar on the post list or the profile image on the followers list they are redirected to the Profile Display

![Profile Display](src/assets/testing_screenshots/profile-display.png)

All of the profile details are displayed and a list of posts are under the proile. 

The profile data is stored in the BE API

![Pforile BE Data](src/assets/testing_screenshots/profile-be-data.png)


#### Edit

*As a user I can edit my profile so that I can update or change my information.*

![Profile Edit Criteria](src/assets/testing_screenshots/profile-edit-crit.png)

A User can update their profile through the three dot menu where they are given the choice of editing their profile, changing their username and changing password.

![Edit Profile Menu](src/assets/testing_screenshots/profile-edit-menu.png)

Once the user clicks on the desired icon they are directed to an edit form for each. 

They can edit the user name

![Edit Username](src/assets/testing_screenshots/profile-edit-username.png)


Edit the Password

![Profile Edit Password](src/assets/testing_screenshots/profile-edit-password.png)

Profile before editing

![Profile Disaplay](src/assets/testing_screenshots/profile-alan.png)

Edit the Profile details

![Profile Edit Form](src/assets/testing_screenshots/profile-edit-form.png)

Once changes are made they are displayed in the Profile Detail

![Edited Profile](src/assets/testing_screenshots/profile-edit-test.png)

The changes are saved to the BE API

![Edited Profile Data](src/assets/testing_screenshots/profile-edit-data.png)





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



### Form Validation

### Validator Testing



#### ES Lint

#### W3C Css

### Lighthouse Testing 