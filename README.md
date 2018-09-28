# VVN Site github repository.

![screenshot](https://user-images.githubusercontent.com/37781362/45939434-74733e80-bf87-11e8-9d92-5f4ffa399296.PNG)

Current Build: http://xanofficial.com/vvn/

### Build Tools:

- HTML/CSS/JavaScript
- Bootstrap 4
- React
- Reactstrap for bootstrap integration within React

# Features:

## Full Musical Catalogue

![music catalogue](https://user-images.githubusercontent.com/37781362/46181569-869cf780-c27b-11e8-904d-f7c4dee2a5a4.PNG)

This site features the artist's music via embedded soundcloud playlists.

The code was easily implemented and offered by Soundcloud sharing.

Code:

![music code](https://user-images.githubusercontent.com/37781362/46181715-45591780-c27c-11e8-90cb-1945138153b6.PNG)

## Stream/Download Hub Page containing all available platforms for streaming/downloads

![streams](https://user-images.githubusercontent.com/37781362/46181632-d5e32800-c27b-11e8-9df0-ef4697d702e7.PNG)

This page contains all available streams/download conveniently located in a single page. It was built and organized via Reactstrap rows and columns.

- Detailed about section written by artist
- Services pages outlining available offerings

### Development Notes:

- Originally a contact page was created containing a contact form. This required a back-end that required a backend that utilized tools
  such as Node, Express, MongoDB, Nodemailer, etc. However, uploading an application that utilizes a back end system such as this on a
  platform such as Heroku requires a monthly fee (there is a free alternative however there is a slow start-up that the artist wanted to bypass). The Artist chose instead to forego the contact form and instead host the now backend-less
  website on Github Pages for free (not officially up yet).

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects. Although I really miss the efficient import feature of SCSS (Vanilla CSS has an import feature but it is not as efficient since it makes several requests), CSS still offers the ability to assign variables so it's not too bad. That said, I plan on trying SCSS with React again in the future.
