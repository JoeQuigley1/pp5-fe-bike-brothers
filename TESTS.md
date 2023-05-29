

## User Story Testing

### Authentication

#### Sign up
*As a user I can sign up and register as a user so that I can gain full access to the site*

![Sign up](/src/assets/testing_screenshots/Sign-up-crit.png)


Sign up Test

![Sign Up Test](src/assets/testing_screenshots/Sign%20up-testing.png)

User is requested to create credentials

Data is sent to the BE API

![BE Profile](src/assets/testing_screenshots/profile-be-data.png)

User is then redirected to the Sign In page

#### Sign In

*As a user I can Sign in to the app so that I can gain access to all features available for a signed in user*

![Sign In Criteria](src/assets/testing_screenshots/Sign-in-crit.png)

User must provide credentials to gain full access.

![Sign In Test](src/assets/testing_screenshots/sign-in-test.png)

Once Signed in the User is then redirected to the Home Page which includes the Posts and Most Followed Profiles.

All App functionality is then available via Navbar. 

### Navigation

#### Navbar

*As a user you can view a navbar from every page so that I can navigate easily betwen pages*

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

#### Search Bar

*As a user I can for posts title and user, so that I can find the posts and user profiles I am most interested in.*

![Search Criteria](src/assets/testing_screenshots/search-crit.png)

Users can use the search bar on the Home Page, Feed Page and Like Page to search for posts

![Search Bar](src/assets/testing_screenshots/search-test.png)

### Home Page

*As a user I can navigate to the Home Page so that I can see all posts.*

![Home Page Criteria](src/assets/testing_screenshots/home-crit.png)

Once the User click the Home icon they are redirected to the Home page.

All posts are displayed on the Home Page

Search bar is displayed and can filter posts by user and title

![Home Page Test](src/assets/testing_screenshots/home-test.png)

### Feed Page

*As a user I can navigate to the feed page so that I can see the posts of user I follow*

![Feed Criteria](src/assets/testing_screenshots/feed-crit.png)

Once a user clicks the feed icon they are redirected to the feed page where posts from users they follow

![Feed Test](src/assets/testing_screenshots/feed-test.png)


### Like Page

*As a user I can navigate to the liked page so that I can quickly see all of the posts that I have liked*

![Like Page Criteria](src/assets/testing_screenshots/like-Page-crit.png)

Once a User navigates to the Liked Page all liked posts are displayed

The search bar is displayed and the user can filter by post title and user

![Liked Paged Test](src/assets/testing_screenshots/like-page-test.png)

### Contact

#### Contact Page
*As a User I can Contact the site admin of the site through a contact Form*

![Contact Criteria](src/assets/testing_screenshots/contact-crit.png)

Contact Form is displayed once the contact button on the Navbar is clicked.

![Contact Form](src/assets/testing_screenshots/contact-form-test.png)

Once the form is completed the Data is sent to the BackEnd API.

![Contact Data](src/assets/testing_screenshots/contact-be-data.png)

The User is then redirected to a Confirmation Page to assure them that their query has been received.

#### Confirmation Page

*As a user I can contact the admin directly so that I can can ask question or give feedback.*

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

### Infinite Scroll

*As a user I can keep scrolling through the content on the site and content is loaded for me automatically so that I don't have to click on next page*

![Infinite Scroll Criteria](src/assets/testing_screenshots/infinite-croll-crit.png)

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

#### View

*As a user I would like to read comments made by other users so that I can connect with the community*

![Comment View Criteria](src/assets/testing_screenshots/comment-view-crit.png)

Comments are displayed under the post

The number of comments are displayed beside the comment icon

![Comment Display Test](src/assets/testing_screenshots/comment-view-test.png)

### Like

#### Create and Delete

*As a user I can like and unlike a post so that I can show my support for the posts that interest me*

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

### Followers

#### Follow and Unfollow

*As a user I can follow and unfollow other users so that I can see their content on the feed page*

![Follow Criteria](src/assets/testing_screenshots/follow-crit.png)

Users can follow and unfollow profiles through the follow and unfollow button

![Follow Unfollow Button](src/assets/testing_screenshots/follow-unfollow.png)

Once a profile is follower or unfollowed the data is stored or deleted in the BE API

![Follow Data](src/assets/testing_screenshots/followed-be-data.png)

#### Most followed

*As a user I can view the most followed profiles of other users profiles so that I can see which profiles are popular.*

![Most Followed Criteria](src/assets/testing_screenshots/most-followed-crit.png)

Most Follower Profiles is visible on Home, Meetups, Feed and Liked pages

The most followed Profiles are displayed with the username and avatar so they can be navigated to the profile display

![Most Followed Test](src/assets/testing_screenshots/most-followed-test.png)






#### Crud Functionality:

| Feature | Expected Result |    Actual Result   | Development|Deployment| Comments |
|-------|-----|----|----|----|------|
|Profiles|Profile can be created |As Expected|Pass|Pass|N/A|
|Profiles|Profile can be edited through the edit profile form |As Expected|Pass|Pass|As Owner|
|Profile Password|Profile passwords can be edited by the edit password form |As Expected|Pass|Pass|As Owner|
|Profiles|Profile Usernames can be edited by the username edit form |As Expected|Pass|Pass|As Owner|
|Posts| Post can be created through the create form|As Expected|Pass|Pass|N/A|
|Posts| Post can be edited through the edit form|As Expected|Pass|Pass|As Owner
|Posts| Post can be deleted by the three dot menu|As Expected|Pass|Pass|As Owner
|Comments| Comment can be created|As Expected|Pass|Pass|N/A|
|Comments| Comment can be edited|As Expected|Pass|Pass|As Owner|
|Comments| Comment can be deleted|As Expected|Pass|Pass|As Owner|
|Likes| Likes can be created|As Expected|Pass|Pass|N/A|
|Likes| Likes can be deleted|As Expected|Pass|Pass|As Owner|
|Followers| Followers can be created by the follow button|As Expected|Pass|Pass|N/A|
|Followers| Followers can be deleted by the unfollow button |As Expected|Pass|Pass|As Owner|
|Meetups|Meetup can be created through the meetup form|As Expected|Pass|Pass|N/A|
|Meetups |Meetup can be edited through the edit form|As Expected|Pass|Pass|As Owner|
|Meetups |Meetup can be deleted by the three dot menu|As Expected|Pass|Pass|As Owner|
|Contact|Contact  can be created by the contact form|As Expected|Pass|Pass|Contact details are intented to be adressed by admin therefore no display is provided in the FE|


### Bugs

#### Fixed bugs

1. A Bug was noticed when Deleting the Post and Meetup pages. 

When a user edits a post and then immediately deletes the post, the user was then redirected to the edit form page of the deleted post. This error occurred because of the history.goBack() call on the handle Delete function used in Post and Meetup. 

The bug was fixed by replacing the goBack() call with a history.push(`/`) and history.push(`/meetups`) which sends the user to the Home Page rather than the deleted id url. 


2. There was a bug in the Form Validation where the Date and Time fields in the meetups threw an error when editing.

Both fields are intentionally left as not required fields and therefore should not throw an error. 

![Error Bug](src/assets/testing_screenshots/form%20error.png)

After some help from Joanne at tutor support we found a solution which was adding an if statement the formData.append() call.
```
    if (date) formData.append("date", date);
    if (time) formData.append("time", time);
```

#### Un fixed bugs

There are no unfixed bugs found during testing. 


### Form Validation

#### Posts

| Feature | Expected Result |    Actual Result   |Deployment| Comments |
|-------|-----|----|----|----|
|Create Form| Prompts should display when required fields are left blank |As Expected|Pass | Content and bike type are not required|
|Edit Form| Prompts should display when required fields are left blank |As Expected|Pass |  Content and bike type are not required|

Screenshots of posts:

![Create Post Validator Test](src/assets/testing_screenshots/create-post-form-validation.png)

![Edit Post Validator Test](src/assets/testing_screenshots/edit-post-form-validation.png)

#### Meetups

| Feature | Expected Result |    Actual Result   |Deployment| Comments |
|-------|-----|----|----|----|
|Create Form| Prompts should display when required fields are left blank |As Expected|Pass | Content, Date and Time are not required
|Edit Form| Prompts should display when required fields are left blank |As Expected|Pass | Content, Date and Time are not required


![Create Meetup Form](src/assets/testing_screenshots/create-meetup-form-validation.png)

![Edit Meetup Form](src/assets/testing_screenshots/edit-meetup-form-validation.png)

#### Contact
| Feature | Expected Result |    Actual Result   |Deployment| Comments |
|-------|-----|----|----|----|
|Create Form| Prompts should display when required fields are left blank |As Expected|Pass | Email field has an extra check to prompt email format

![Contact Form](src/assets/testing_screenshots/contact-form-validation-email-alert.png)

As the contact data is intended to be adressed by the Admin directly, the email field needing email format and subsequent prompts are for UX purposes.   

### Validator Testing



#### ESLint

I used [ESlint](https://eslint.org/) to manually test the jsx files

|Folder |Files | Result | Comments|
|---|---|---|---|
|api|axiosDefaults.js|PASS|N/A|
|components |Asset.js, Avatar.js, FaqAccordion.js, MoreDropDown.js, NavBar.js, NotFound.js|PASS|N/A|
|contexts|CurrentUserContext.js, ProfileDataContext.js|PASS|N/A|
|hooks|useClickOutsideToggle.js, useRedirect.js|PASS|N/A|
|about|About.js |PASS|N/A|
|auth| SignInForm.js, SignUpForm.js |PASS|N/A|
|comments|Comment.js, CommentCreateForm.js CommentEditForm.js|PASS|N/A|
|contact|Confirmation.js, CreateContactForm.js|PASS|N/A|
|meetups|Meetup.js, MeetupCreateForm.js, MeetupEditForm.js, MeetupPage.js, MeetupsPage.js|PASS|N/A|
|posts|Post.js, PostCreateForm.js, PostEditForm.js, PostPage.js, PostsPage.js|PASS|N/A|
|profiles|PopularProfiles.js, Profile.js, ProfileEditForm.js, ProfilePage.js, UsernameForm.js UserPasswordForm.js|PASS|N/A|
|utils|utils.js|PASS|N/A|

- There are no major issues impacting functionality of the application.


#### W3C Css

All CSS code passes through a validator with no errors. 

![CSS Validation](src/assets/testing_screenshots/W3C-validator%20testing.png)

### Lighthouse Testing 

The site scores highly on several fields. 

![Lighthouse Testing](src/assets/testing_screenshots/light-house-testing.png)

The loading time for images on the site was a major contributor to the lower performance score. 


### Responsive Design 

The site has been tested using several browsers including: Google Chrome, Firefox, and Microsoft Edge browsers. 

The site was tested on several screen sizes and device sizes. 
