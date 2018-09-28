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

## Stream/Download Hub Page

![streams](https://user-images.githubusercontent.com/37781362/46181632-d5e32800-c27b-11e8-9df0-ef4697d702e7.PNG)

This page contains all available streams/download conveniently located in a single page. All links bring user to expected destination.

Code:

![stream code](https://user-images.githubusercontent.com/37781362/46185094-65dd9d80-c28d-11e8-89f3-84bf0584def4.PNG)

The code snippet is fairly straighforward with basic HTML and CSS. CSS Grid is used to organize the build and transitions are used to give user feedback on hover.

## Services Page

![services](https://user-images.githubusercontent.com/37781362/46181974-c8c73880-c27d-11e8-8aa0-971f257c07a1.PNG)

The services page features an accordian that divides the different services VVN offers.

Code Snippet:

![services code](https://user-images.githubusercontent.com/37781362/46182137-df21c400-c27e-11e8-98f8-6cb27ec95293.PNG)

The code was implement via Bootstrap. Boostrap is quick, easy, and still allows for customization.

## Development Notes:

- Originally a contact page was created containing a contact form. This required a back-end that required a backend that utilized tools
  such as Node, Express, MongoDB, Nodemailer, etc. However, uploading an application that utilizes a back end system such as this on a
  platform such as Heroku requires a monthly fee (there is a free slower alternative, however, the artist decided against it). The Artist chose instead to forego the contact form and instead host the now backend-less
  website on Github Pages for free.

- I am a huge fan of using SASS/SCSS - however, I encountered an issue when trying to combine it with my use of React. There is an official work-around utlizing SASS-Chokidar, however, it did not work for me thus I chose to use plain CSS in my React projects. Although I really miss the efficient import feature of SCSS (Vanilla CSS has an import feature but it is not as efficient since it makes several requests), CSS still offers the ability to assign variables so it's not too bad. That said, I plan on trying SCSS with React again in the future.
