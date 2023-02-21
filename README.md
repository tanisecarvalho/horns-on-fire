# Horns On Fire 🤘🔥

### Deployed Site: [Horns On Fire](https://tanisecarvalho.github.io/horns-on-fire/)

![Am I Responsive](docs/am-i-responsive.JPG)

Horns On Fire is a quiz for those passionate about 80's and 90's Hard Rock who want to test their knowledge and have some fun.

Each match will show the user 10 questions with 4 possible answers each.

This quiz is divided in three categories: 
* __Who am I?:__ In this category the user will see the birth name of a musician and have to guess who they are.
* __Power Ballads:__ In this category the user will see part of the lyrics of a ballad and have to guess which song it is.
* __Guess the Album:__ In this category the user will se a blur image of an album cover and have to guess which one is.

---

## CONTENTS

* [User Experience](#user-experience-ux)
  * [User Stories](#user-stories)

* [Design](#design)
  * [Colour Scheme](#colour-scheme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Wireframes](#wireframes)

* [Features](#features)
  * [General Features on Each Page](#general-features-on-each-page)
  * [Future Implementations](#future-implementations)
  * [Accessibility](#accessibility)

* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)

* [Deployment & Local Development](#deployment--local-development)
  * [Remote Deployment](#remote-deployment)
  * [Forking](#forking)
  * [Local Deployment](#local-deployment)

* [Testing](#testing)

* [Credits](#credits)
  * [Code Used](#code-used)
  * [Content](#content)
  * [Media](#media)
  * [Acknowledgments](#acknowledgments)

---

## User Experience (UX)

### User Stories

* I want this website to be responsive to my device.
* I want to easily navigate on this website.
* I want to be able to play this quiz to test my 80's and 90's Hard Rock knowledge.
* I want to select different categories to play.
* I want to know if I selected the correct option.
* I want to know my score.
* I want to check my scores.
* I want to check the rules.

***

## Design

### Colour Scheme

The colour scheme was defined using the colours on the logo.

* `#F1473A` was used for H1, input text and main container background.
* `#EDEDED` was used as primary colour for the website text and H2.
* `#171717` was used for background colour in case the image does not load, buttons text and border, and rules div background.
* `#F79326` was used for buttons background.

![Colour Scheme](docs/coolors.png)

### Typography

I have used Google Fonts to select and import the font used on this website.

* For the quiz name, buttons and headings the font used is [New Rocker](https://fonts.google.com/specimen/New+Rocker). As the name, the font is very similar to band logos. 

![New Rocker Font](docs/new_rocker.JPG)

* For the body of the page the font used is [Raleway](https://fonts.google.com/specimen/Raleway) as the font is very clear to understand and matches with New Rocker.

![Raleway](docs/raleway.JPG)

### Imagery

The logo and background were created using [Canva](https://www.canva.com/). The horns was chosen to be the logo as it is a caracteristic symbol for rock n' roll fans. And from using the symbol is that the name of the quiz came to life. The fire on the name is because it is common to say about a concert that the band was on fire.

* Logo

![Logo](docs/logo.png)

* Background

![Background](docs/background.png)

### Wireframes

All the wireframes were created using [Balsamiq](https://balsamiq.com/).

<details>
  <summary>Desktop</summary>

  <br>

  * Start
  ![Start](docs/wireframes/01_start.png)

  <br>

  * Questions
  ![Questions](docs/wireframes/02_questions.png)

  <br>

  * Result
  ![Result](docs/wireframes/03_result.png)

</details>

<details>
  <summary> Tablet </summary>

  <br>

  ![Tablet](docs/wireframes/05_tablet.png)
</details>

<details>
  <summary> Mobile </summary>

  <br>

  ![Mobile](docs/wireframes/04_mobile.png)

</details>

***

## Features

The site has one main page, __index.html__, where all the game is played. It also has a 404 page. Both pages are responsive.

* Favicon: Both pages have a favicon, which is the site logo.
![Favicon](docs/features/favicon.JPG)

* Header: During the whole game the logo and name of the quiz with a short description show at the top of the page.
![Header](docs/features/header.JPG)

* Footer: There is a footer in the end of the pages with the project name and links for the developer's LinkedIn and GitHub pages.
![Footer](docs/features/footer.JPG)

* Main Section: all the game happens here.

  * Home: What is showed when the user access the page or select to start a new game. If the user doesn't enter a name and/or select a category a message is showed and the game doesn't start until the user attend to the requirements.
  ![Main Page](docs/features/main.JPG)
  ![Main Page - Message](docs/features/main-alert.JPG)

  * Rules: When the user clicks on the Rules button the rules are loaded on the main section.
  ![Rules](docs/features/rules.JPG)

  * Leaderboard: When the user clicks on the Leaderboard button the rules are loaded on the main section. The best 10 scores will be kept. The user has the option to clear the leaderboard.
  ![Leaderboard](docs/features/leaderboard.JPG)

  * Playing the Game: 10 random questions will be loaded according to the cateogry select by the user.
    * Who am I?
    ![Who am I?](docs/features/who-am-i.JPG)

    * Power Ballads
    ![Power Ballads](docs/features/power-ballads.JPG)

    * Guess the Album
    ![Guess the Album](docs/features/guess-the-album.JPG)

    * When the user starts playing the game, a custom cursor 🤘 will display when it is over the options. After the user select an option, the background will change to green for the correct one and red for the wrong ones. A black border will display around the option selected by the user. The score will display under the welcome message. If the user is playing the "Guess the Album" category, the album will be blured at the start and the original picture will show after the option is selected.
    ![Response](docs/features/response.gif)

    * The user can go back and forth between questions.
    ![Between Questions](docs/features/between-questions.gif)

    * The game is only finished once the user answers all the questions.
    ![Finish Game](docs/features/finish-game.gif)

  * Result: When the game is finished, the result is loaded to the user. It shows the score, a message and a image based on how many points the user got.
  ![Result Low](docs/features/result-low.JPG)
  ![Result Medium](docs/features/result-medium.JPG)
  ![Result High](docs/features/result-high.JPG)

  * 404 Page: An error 404 page was designed to facilitate the user return to the home page in case they try to access an inexistent page.
  ![404 Page](docs/features/404-page.JPG)

### Future Implementations

Future things I would love to implement.

### Accessibility

Check more about accessibility and don't forget to include aria-labels.

## Technologies Used

### Languages Used

HTML, CSS & JavaScript.

### Frameworks, Libraries & Programs Used

add the links and for what I used them

* Git
* GitHub
* GitPod
* GitHub Pages
* Favicon
* Canva
* Balsamiq
* Google Fonts
* Font Awesome
* Coolors

## Deployment & Local Development

### Remote Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  * In the GitHub repository, navigate to the Settings tab 
  * On the left side menu, on the section Code and automation, click on Pages.
  * From the source section drop-down menu, select the Deploy from a branch.
  * From the branch section drop-down menu, select main, right on the side select /root.
  * Once the the branch menus have been selected, github will create the page. It might take a few minutes. Once it is done a link will show up on the top of the page.

The live link can be found here - []()

### Forking
To fork this site go to its GitHub repository [insert link here]
  * On the top right of the page there's a button with the option Fork, click on it.
  * A new page "Create a new fork" will open. If you wish, you can edit the name.
  * In the end of the page click on the button "Create fork".
  * Now you have a copy of the project on your repositories.

### Local Deployment
This site was developed using Gitpod. To edit your copy on Gitpod you will need to: 
  * On your browser of choice install the gitpod extension/add-on.
  * On GitHub open the project repository you forked before.
  * On the top of the page, over the files, there is a green button on the right side of the page saying "Gitpod". Click it.
  * It will open the Gitpod website. On the first time, you will select to connect with your GitHub account and Authorize gitpod-io. After that you'll be creating an account.
      * It might take a while after that because gitpod will be creating your workspace.
  * After the workspace is loaded, you're able to edit it on Gitpod.

## Testing

Please check the [TESTING.md](TESTING.md) file for all the tests.

## Credits

### Code Used

* [This code](https://cssdeck.com/blog/create-a-burning-text-effect-with-css3/) was used and adapted to create the burning effect on the quiz name.

* [This code](https://www.w3schools.com/howto/howto_css_image_effects.asp) was used to apply the blur filter on the album cover category.

* [This article](https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj) was used to understand about shuffle arrays and adapt to shuffle answers on the game.

* [Emoji Cursor](https://www.emojicursor.app/) was used to change the cursor to 🤘 when mouse hovering the answer options.

* I used [Kera Cudmore](https://github.com/kera-cudmore/readme-examples) tutorial to improve my README.md file.


### Content

Put here from where I will get the questions and answers.

###  Media

In case I use other images for 404 page and results.

[404 Page](https://www.pexels.com/photo/an-empty-theatre-with-lights-turned-on-during-nighttime-10880677/)
  
###  Acknowledgments

Include people to thank