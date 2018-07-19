# multapply
An application for applications

## Application Summary

Finding a place is a pain and finding good renters is equally as painful. That's
when Multapply comes to the rescue. This application allows roommates to submit
one rental application, to multiple listings, while nixing all the costs and
writers cramp with multiple forms. Property managers can easily review a
larger volumes of rental applications, as they are easily organized and readable.


## Tech Used

* Framework
  * React JS
* Database
  * Mongodb
* ODM
  * Mongoose
* HTTP Client Request
  * Axios JS
* Styling
  * Material UI
  * React Responsive Modal
  * CSS
  * React Router Dom


## Planning

Our process for planning consisted of creating wire frames and mapping them to our user stories. As seen below, our wire frames were used to create a flow that
helped us define our routes.

![Wire frame](/client/public/img/wire_frame.png)

We used trello to define our deliverables and built individual checkbox tasks for each deliverable.

![trello](/client/public/img/trello.png)

![checkbox](/client/public/img/checkbox.png)

## Frontend Design

The frontend design is broken down into a series of components that serve to style and create functionality.
All of these components were imported into the App.js file to render a single page site. Additional styling was
done in the App.css file and was imported into the App.js. Our data form submission was handled via modals. The
incorporation of the modals allow a quick and efficient user experience for inputting data.  

![checkbox](/client/public/img/stylecomponent.png)

 *This component is an example of a styling component that was used to render
 a banner on our landing page.*

 ![checkbox](/client/public/img/functionalcomponent.png)

  *This component is an example of a functional component that was used used
  to add a group.*

  ![checkbox](/client/public/img/biomodal.png)

   *This form was wrapped in a modal and renders for a user to update the
   bio section in their profile.*

  ## Backend Design

  The backend design used a combination of various get, post, put and delete routes to transfer and manipulate data to the database. We used various mongoose calls to communicate with Mongodb on our routes. Our collections consisted of users, listings and groups as seen below.

  ![checkbox](/client/public/img/grouproutetouser.png)
  *Group route that attaches a user to a group.*

  Our collections consisted of users, listings and groups as seen below.

  ![checkbox](/client/public/img/usermodel.png)

  *User Model.*

  ![checkbox](/client/public/img/groupmodel.png)

  *Group Model.*

  ![checkbox](/client/public/img/listingmodel.png)

  *Listing Model.*

## Connecting Frontend with the Backend

We used a serious of axios calls to communicate between the frontend and backend. These calls were attached to handler functions. These functions were also state dependent, so the correct data was being called at the right time between
frontend and the database.

![checkbox](/client/public/img/axioscall.png)

*Axios call to get group information.*

## Future Features

Here is some of the features that we intend to implement, post cohort:

* Ability for roommates to vote on a property, prior to applying.
* Property manager's ability to accept or reject applicants.
* Users to be able to join multiple groups.
* Listing map locations.

## Challenges and Experiences

This project was great experience in collaborating group members on a full stack application. This our first project
in collaborating in a git environment as well. Working on different parts of project that all synced up was challenging, yet we found that creating a plan to tackle each roadblock and communicating our steps was integral in our success. The
project also allowed us to learn from each other and build upon our existing fullstack foundation.

## Acknowledgments

We would like to thank Steve Peters and Kyle Van Bergen. We would also like to thank the other two groups on collaborating and sharing information on tackling a variety of challenges through out this project.
