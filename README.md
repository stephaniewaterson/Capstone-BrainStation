# LocalLingo

## Overview

Social media app to learn languages and local phrases of places across the world. Especaily designed for those who have a already have a good understanding of the basics of the language wanting to learn certain dialects and local phrases for specific countries/areas e.g. Levantine Dialect in Arabic, Kurdish Argentinian Spanish. Also for those wanting to know local phrases or cultural good-to-knows for a country they are travelling.

The app includes a map to visulaise country/city locations of other users, chatboxes to connect with other uses to langauge exchange and blog forums for countries/areas where you can post or ask questions.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

While there are lots of resources and apps for learning languages, many times when learning the resources focus on the formal/more standard versions. Learning more colloquial or dialectal phrases is harder and often knowing people from that region is the best way to go about this. However we don't always know people from the areas we want to learn so the app bridges the gap. The app also allows for practise and language exchange to benefit both users and maybe make friends before travelling somewhere.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

Users will be thoses that want to focus on dialect or regional language, or those that are travelling and want to fit in with the locals quickly, or even use to make friends with local users. Users can connect with others if wish or use the blog features of the app to learn and post questions.

One consideration is safety, making sure that all users have right intentions and are respectful to other users. Making sure users stay safe. User authentication and a report misconduct feature could be added.

Mapped location of users will be as general as the user chooses and never too localised for safety also.

User profile information needs to be secure.

### Features

Users can select a location they are interested in and connect with other using living/in that area to chat with and share local phrases or practise their langauge skills.

Thee apps other feature is less interactive but still social. You can post questions or add to the blog of a certain location.

App also shows a map in order to visualise where they can "travel" to and start chatting with somone or go to blog posts and discussion.

At a greater scale and more uses, users are matched with users that want to learn the opposite language. Users may need to have a language in common or already at a level to understand the lauguage to some degree.

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

A map feature - the user choses where to place their pin or just select thier country. This is optional, can use app without location. The map has a large scale in order to protect users but allow for more connections also.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.
React, Node, Express, Sql
Firebase for authenticaiton

### APIs

List any external sources of data that will be used in your app.

MapBox
WebSockets/XMPP

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Home Page
Map
Add user
My user
User by Id
Blog page for each location
Chat room/box

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

In folder

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

Blog posts from each user (username, content, timestamp, likes, location)
Messages data (cotent, user, user sent to, timestamp)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET posts blog posts
POST new blog
DELETE post

POST new user
PUT user (edit)
POST location pin for user
GET users from location pin
GET blog posts from location pin

GET user to chat with (not sure how a chat box works)
POST message
GET messages

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

Login for each users - chats are stored (if possible) as well as saved posts and favourite locations
User information also stored e.g. their pin location and user details

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Inital set up front-end - Create pages and elements

Initial set up back end - create endpoints needed and database of users, posts and messages

Set up home page and links to other pages

Set up map (see if can have 3D map) and ability to add pins which take you to each location.

Set up messaging protocols and messaging pages/elements

Create users and posts (demo data)

Set up blog posts and form

Swt up add user and user pages

Styling

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- user can add a new location
- user can move their pin location
- group messaging
- "go anywhere"
- language translation feature perhaps via API
