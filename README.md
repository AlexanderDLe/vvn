# VVN Site github repository.

![screenshot](https://user-images.githubusercontent.com/37781362/45939434-74733e80-bf87-11e8-9d92-5f4ffa399296.PNG)

Current Build: http://xanofficial.com/vvn/

### Build Tools:

- HTML/CSS/JavaScript
- Bootstrap 4
- React
- Reactstrap (Library for bootstrap integration within React)

### Features:

- Fully responsive interface
- Fast due to being a React SPA
- Dark stylish design catered to artist tastes.
- Full musical catalogue
- A stream/hub page containing all available platforms for streaming/downloads
- Detailed about section written by artist
- Services pages outlining available offerings

### Development Notes:

- Originally a contact page was created containing a contact form. This required a back-end that required a backend that utilized tools
  such as Node, Express, MongoDB, Nodemailer, etc. However, uploading an application that utilizes a back end system such as this on a
  platform such as Heroku requires a monthly fee (there is a free alternative however there is a slow start-up that the artist wanted to bypass). The Artist chose instead to forego the contact form and instead host the now backend-less
  website on Github Pages for free (not officially up yet).

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects.
