https://shiv-sharma-art-api-app.netlify.app/

Description:

![Screen Shot 2022-06-29 at 11 02 22 AM](https://user-images.githubusercontent.com/101225603/176469910-d3103b5a-93b7-40dc-aa46-6e20d50e4052.jpg)

Art(i)facts is a react application based on the Harvard Art Museum Rest Style API. The application allows visitors to use a keyword search parameter to look through the art museum database and returns the most relevant pieces in the form of cards. Visitors are then able to look through the cards and click the details button if they wish to learn more about a specific piece.

Technologies:

This project was built using the Javascript library React, React-Bootstrap for styling, and data from the Harvard Art Museum API.

Getting started:

To install the code for this application, please fork this repository, copy the ssh url in the forked repo, in the command line run git clone <url>, and create a new branch using git checkout -b <branch>, install all dependencies using npm i, run the code using npm run start, and open with (code .).

Contribution guidelines:

Majority of the bugs within this application are in the results component, which renders the cards for all the specific peieces returned by a search, and the info componenet which renders a page containing more information on the specific piece that was clicked on. Most of the bugs I've came across during my time working on the oroject exist due to functions attempting to access data in certain objects that may not exist. Typically when this occurs the application crashes, to prevent this Ive added filtering to the data that is returned so that the criteria I'm looking for must exist in the returned objects. By doing so I am able to prevent the API from returning objects that may crash my application. The downside of this tactic is that the search funtion now does not yield enough results, this is because the way the api was built I can only fetch 1 page of data at a time. To take this application to the next level I would to code the application to fetch multiple urls at the same time and combine data from those different fetch requests into 1 json.
