# Rugby City Travel

![alt text](https://github.com/mattjboland/ci-milestonetwo/blob/master/assets/images/Avivastadium.jpg)

I had a big decision with this project. To do a travel website or create a game, both equally challenging and equally
difficult for a beginner like me. I can imagine like most developers even a novice like me, might find every project 
daunting. The more I think about things like this the more I think it cant be done. Being new to this I find the best way
is to plan and visualise what you want to create and get going. Delays dont help things but they cant stop you from 
achieving your goals. It is then quickly realised that anything can be achieved.

With that, I decided to challenge myself. After a brief deliberation I choose to do a travel website. I wanted to create
something that I would find useful and incorporate a passion. I know there are many similar people like me out there so I 
believe that this website will be of interest and benefit to many others like myself. Now I have a few passions in life 
some newer than others, like coding. Here I wanted to share my passion of travel and rugby. So with that I came up with
the idea of having a website that was informative and functional. 

I wanted for users to be able to see the locations of each stadium in each city. With the possibility of clicking on a 
choosen stadium and the results of various hotels popping up. This would give people an informative view of surrounding
areas but also give way for them to book hotels, flights etc. I also wanted to give a brief background into the Six
Nations Championship itself, with a little history of each stadium. It was very enjoyable for me as a rugby fan to learn
about each stadium and the history that goes with them. Like most travelling fans some will have no idea about was has
gone on many years before they travelled to the stadiums to enjoy a rugby game.

## UX

The purpose of the website project is to create a website aimed at rugby fans from all Six Countries involved. To provide
an informative and functional website catering to the needs of travelling fans or even hometown fans. On this website they 
will have access to locations of each stadium in each city of the participating teams. It will show precise locations of
each stadium giving the user knowledge of the surrounding areas through the use of Google Maps. Not only that it will
also show the precise locations of all the hotels in areas surrounding the stadiums. This will enable the user to carefully
choose hotels based on access and location that will suit their needs.

The website will also provide the links to each choosen hotel where they can explore the hotels and choose according to the
needs of each user. It will also provide links to other travel websites so they can choose flights that will help them
get to each destination. There will also be links to each homepage of each of the nations, where information on matches,
teams and much more will be available. With that, a hompage to the Six Nations Championship is included which will also
give the same information plus many more like tickets and competitions.

I also wanted to provide some information and history about the stadiums they fans are going to visit. Like me I have visited
many of the stadiums but never knew any history. I learned so much researching and even about the closest to me Aviva 
Stadium (previously Lansdowne Road). Some are much more modern than others but some dating back to 1872!! There is also 
information about each team and how they have performed in the Rugby World Cup, some better than others but it is 
interesting to learn.

On each homepage I also wanted to have some statistics displayed, about past performances in the Six Nations Championship. 
This was extented in 2000 with the addition of Italy so the statistics are from 2000 onwards. On a mentoring session
with Guido Cecilio he told me about maybe creating a dashboard to display some graphs and render the statistics. I had 
originally planned to have this on the individual team page but this made much more sense. So with his help we created 
the graphs.

**I used the following features on the website for the user to achieve these goals**

* Links to the homepage of each participating team
* Description of the of the Six Nations Championship
* Description of the purpose for this website
* Map to discover the location of the stadiums
* Map also to find and access the hotels surround the stadiums
* Link to a website to book flights
* Link to Six Nations homepage

## Wireframe Mockups

* [Wireframe Mockups](https://github.com/mattjboland/ci-milestonetwo/blob/master/assets/wireframe-mockups/Rugby%20City%20Travel.pdf)

## Features

[Home Page](https://github.com/mattjboland/ci-milestonetwo/)

* Navbar - I used this to help the user navigate to other pages of the website easily and effectively
* Images - I used images to style the website to give depth to the pages and also for the user to visualise stadiums
* Maps - Maps are used to for the user to see locations and get familar with surrounding areas
* Maps - Also used to locate stadiums and hotel for the user to explore
* Links - Various links used to get further information and travel routes
* Graphs - Used to give information to the user about teams success throughout the championships history

### Features For Future Additions

I would like to include in future additions the possiblitly for the user to be able to book directly on site without having
to visit a third party site. Would also like to see the possibility of having a ticket sale or swap for geniune rugby fans.
But would like to see if possible for the exchanges to on face value only no ticket touts only geniune reasons for swap
or exchanges. Maybe with the possiblitly of running local competitions for tickets, or match day photos etc.

## Technologies Used

* [HTML] - This is used as the layout to build the website
* [CSS] - This is used to style the website
* [Bootstrap](https://getbootstrap.com/) - This is used for the layout and also used grids/rows for the responsive design
* [Font Awesome](https://fontawesome.com/) - This is used for some icons in the website
* [JavaScript](https://www.javascript.com/) - This is used for Google Maps API and for displaying the graphs
* [cdn] - Content delivery networks were used by using !bcdnjs in html very useful for added <script>

## Testing

I have thoroughly tested the website and was unable to find any bad links. Everything is working as is supposed to. I 
clicked all links to make sure everything is as it should be. It was all working fine until I came across a problem with 
my gh-avatar link to GitHub, it wasnt working correctly. On inspection I had a mistake in the link and fixed 
accordingly. 

I did a lot of testing and checking the Map functionality. I created a testing repository separate to the project 
repository [https://github.com/mattjboland/testing] this enabled me to set up and test the maps functionality as well
as continue with the project. The idea behind this was to keep separate and merge at the end. It was a great way to get
everything thing right and I could easily go back and forth. I found if something went wrong or wasn't exactly how it
should have been it didn't immediately affect other element of the project going on around. I implemented a testing
repository on my last project where I copied code out and was able to test and solve problems easy and then merge it back
when ready.

I was also having an issue with the logo, Ireland the link wasnt loading. I tried several time but the page wasnt loading.
The link was working though just the page wasnt loading. After checking several times the link it was correct. The page 
after a while loaded after the error 500 Internal Server Error so the issue wasnt the link.

Another problem I encountered was the display on the bg images used throughout the website. On some browser the background
opacity was easily fixed in css. But some browsers the backgound images was too bright ang hindered the text in the 
paragraphs making it very hard to read. I tried many solutions but none of which seemed to work. Changing the text, 
changing the opacity, adding a z-index but still no solution. It was mainly occurring on my iPhone 11 and iPad mini. So
it was time for Google. It was then I realised that the browsers on Apple (Safari) and some other do not support the 
opacity feature. Chrome which is the main browser I use was perfect eveytime so it was a real head scratcher, but was so
relieved when I discover this.

## Issues and Bugs

As with a lot of project the issues and bugs are always present. I have learned from this to keep note a bit better of a 
few more to help with this section. But probably best I cant remember them all as this section would be far too long.

Using BootStrap code especially rows and columns can cause issues, especially when usin them in a specific way. I had
many problems with location of the icons in the row and this caused an issus when viewing on smaller browser screens. I 
finally fixed the problem with a lot of researching on BootStrap itself but mainly Google and StackOverflow.

I also had a problem with the NavBar, it was correctly or easily moving throught the links and with a quick visit again to 
StackOverflow I quickly found the solution. It should have been clear to me on Bootstrap but for some reason it wasn't 
coming easily to me although it was there. It was as simple as moving the active element to right .html and it worked
perfectly.

Again this issue or a similar one was occuring with the footer. Especially on my dashboard.html. The footer was covering
all the graphs and I couldnt figure it out. Unfortunately I ran out of time on this one so I just removed the footer
entirely from the dashboard as it doesnt really serve a purpose there. Its only a temporary solution but I will continue
to find the correct solution for this.

With the dashboard.html I had issues with rendering the graphs. I had orignally intended on having this on each html page 
for each team but Guido thought it would be better to have on a dashboard. It does look better. It was tricky to manipulate
the values from the .csv file but patience I was able to figure it out. I would have moced this code to the testing repo
but that was too full with the maps so I solved the issue there.

I had some issues with the with the maps.js for the hotels. The use of Google Maps APIs is tricky but all the information
and code is there and its just a matter of using it right. When I was adding the stadium to the hotel map along with all
the green hotel icons. When I searched the Google Places API keeps the list of all the results so I had to add the 
stadium to the end of the results so that it would be shown too. Most of the code for this was from the APIs but when I 
encountered a problem searching on Google along with StackOverflow provided the answers need to resolve the issues. while
researching I was able to learn that you can use some custom items for the marker so I replaced the original red marker
in the stadiums map with a rugby_ball.png I found.

## Validation

I have checked the code on [https://validator.w3.org/nu/#textarea] 

I checked the code for all .html and style.css. No major errors were reported, however some small minor errors were
occuring. So I addressed all them and fixed where necessary. The main repeating error was section lacks heading so that 
was easily solved. Another error was a heading tag was used but empty so I fixed that.

Another error I came across was the images not having alt="" so that was an easy fix. 

## Deployment

I deployed my website via GitHub pages and is currently published at [https://mattjboland.github.io/ci-milestonetwo/]

This is the one section I have previously lacked on. I learned from my last project the my commit messages were vague
or even non existent. So for this project, I made sure when commiting to GitHub that my messages were clear and consise
as to be easily interpreted. I may have missed a few here and there but I generally feel a major improvement was made.

I had orignally used cloud9 and then was made to switch to AWS cloud which I didnt find easy to use. I then used GitHub 
and Gitpod and found this a much better way and easier. All code was in GitPod and committed to GitHub. I feel this
way works best for me as I find it easily navigated. 

## Credits

**Content**


**Media Content**



## Acknowledgements

* [Code Institute](https://codeinstitute.net/) I used parts of code from the modules, coursework and projects. All
    the media, pictures, audio clips and video were supplied by Code Institute
* [Bootstrap](https://getbootstrap.com/) I used Bootstraps Navbar, Carousel and Form examples in my website
* [W3schools](https://www.w3schools.com/) I used this website when I encountered some problems with my code
* [Slack](https://slack.com/intl/en-ie/) I also used this website for help on code and errors
* [StackOverflow](https://stackoverflow.com/) This website was used as a reference for help and tips
* Guido Cecilio, Guido is my mentor and his help and patience on this project was incredible. I learned so much from 
our meetings and without his knowledge and information it would have been an impossible task. I am so grateful for his 
help.
