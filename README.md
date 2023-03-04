<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://the-great-gig-in-the-sky.herokuapp.com">
    <img 
        src="https://i.imgur.com/EbtPEBv.jpg"
        alt="Logo"
        width="180"
        height="180">
  </a>

<h3 align="center">Moon Raker</h3>

  <p align="center">
    A lunar-themed Weather app and Journal
    <br />
    <br />
    <a href="https://the-great-gig-in-the-sky.herokuapp.com/">Live Link</a>
    ·
    <a href="https://github.com/sparklingwaterlemon/MoonRaker/issues">Report Bug</a>
    ·
    <a href="https://github.com/sparklingwaterlemon/MoonRaker/issues">Request Feature</a>
    <br />
    <a href="https://github.com/sparklingwaterlemon/MoonRaker">Explore Docs</a>
    ·
    <a href="https://www.youtube.com/watch?v=C8Xc0VptCBY">Background Music</a>
    ·
    <a href="https://www.linkedin.com/in/michaelkim3/">LinkedIn</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li>
          <a href="#Parallax-Scroll">
            Parallax Scroll
          </a>
        </li>
        <li>
          <a href="#Weather-and-Astrological-Data">
            Weather and Astrological Data
          </a>
        </li>
        <li>
          <a href="#Authentication-and-Authorization">
            Authentication and Authorization
          </a>
        </li>
        <li>
          <a href="#Journal">
            Journal
          </a>
        </li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

https://user-images.githubusercontent.com/105463926/218918010-2682dc4b-a563-4575-8c09-0e8a5ff09d13.mp4

<br />
<br />

Hello and welcome to my Moon Raker project! My name is Michael Kim, and I am the developer behind this project.

The Moon Raker project is an application that provides users with a way to keep track of their thoughts and experiences, while also providing them with useful information like weather and astrological data. The project is divided into four main parts:

1. The Parallax Scroll Animation and the loading of data.
2. Using a WeatherAPI to fetch weather/astrological data.
3. Authentication / Authorization.
4. Journaling full CRUD operations.

I developed this project using the MERN stack. Throughout the development process, I focused on creating a user-friendly and visually appealing application that provides users with useful features and functionality.

Please feel free to explore the code and the application itself, and don't hesitate to reach out to me if you have any questions or feedback. Thank you for checking out my project!


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
* MongoDB
* Express.js
* React.js
* Node.js

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Parallax Scroll

The Moon Raker project uses parallax scrolling to animate the background images of the page. The parallax effect is achieved by updating the image as the user scrolls down the page. The way this works is by keeping track of the scroll location and using useEffect to trigger the loading of new images.

#### Base Logic

To determine which image to load, the project uses the following formula: 

`(currentYlocation) / (totalScrollHeight) * numberOfFrames`. 

This formula divides the current scroll location by the total scrollable distance and multiplies it by the number of frames. This ensures that the images are loaded in equally separated distances, giving a smooth transition of images.

For example, if the page has a total scrollable distance of 1000px and there are 25 images to be loaded, the 8th image will be loaded when the user is 320px down the page (32% of the total distance).

#### Organization of Images:

For the moon images, the project has the 365 days of the year with corresponding moon images. To reference the correct image for a given date, the project uses an array with the index ranging from 0 to 365. A filler image is added at index 0. A nifty function is used to input a date and return what day it is out of the 365 days. This way, the corresponding moon image for that day can be accessed.


#### Main Driver
The following code block shows the main driver for updating the moon image:

![Screen Shot 2023-02-14 at 4 54 54 PM](https://user-images.githubusercontent.com/105463926/218914061-344712e7-316d-42cd-afd7-efca7bd9a077.png)

Every time the scroll location is updated, this useEffect is triggered. The maximum scrollable distance is calculated, the scroll fraction is determined, and the appropriate frame index is calculated. A separate useEffect is used to draw and render the image.



### Weather and Astrological Data

#### API Fetch

The Moon Raker project uses the "One Call API 3.0" from openweathermap.org to fetch weather and astrological data. However, this API only takes a longitude and latitude as arguments, which means that a separate "Geocoding" API is required to convert the user's input (zip code) into longitude and latitude coordinates.

#### Geocoding API

The "Geocoding" API from openweathermap.org has two different API calls: one for inputting a city name to get the longitude and latitude, and another for inputting a zip code. For simplicity, the Moon raker project uses only the zip code input to fetch location coordinates.

Using useState, useEffect, and async/await functionality, the project goes through the "Geocoding" API, gets the longitude and latitude for the given zip code, and fetches the weather and astro data with "One Call API 3.0".

You can find the full code for this functionality in src/pages/App/components/SearchBarComponent/SearchBarComponent.


### Authentication and Authorization



The Moon Raker project uses JWT-based authentication and authorization to ensure secure access to its resources. By using a combination of client-side and server-side code, the project provides a secure sign-up process, password hashing, and JWT creation and storage.

#### Password Hashing

When a user signs up, the client-side code sends an AJAX request to the server with the user's data. The server-side code then uses the bcrypt library to salt and hash the user's password before saving it to a database. A mongoose userSchema.pre() function is used to perform the password hashing and salting on the server side.

![Screen Shot 2023-02-14 at 6 02 53 PM](https://user-images.githubusercontent.com/105463926/218914246-b9a6e854-3a22-4c81-8b46-0e2b7d270767.png)



#### JSON Web Token (JWT)

After a user is successfully signed up, a JWT is created and returned to the client. The JWT is signed with a secret key and includes the user as a payload.

![Screen Shot 2023-02-14 at 6 03 38 PM](https://user-images.githubusercontent.com/105463926/218914271-6b4fd429-3b9f-49f5-b792-dac81a2026b9.png)


The client-side code saves the JWT to the browser's local storage, which makes it available for subsequent requests to the server. The server can then use the JWT to authenticate and authorize the user's access to protected resources.

#### Authorization Middleware

To ensure that only authenticated users can access protected resources, the server-side code uses a middleware function to verify the JWT and extract the user ID from the payload.

Here's an example of how the middleware function can be used to protect a resource that requires authentication:

![Screen Shot 2023-02-14 at 6 04 26 PM](https://user-images.githubusercontent.com/105463926/218914288-27f70771-431f-426d-bda3-dde115c56a5a.png)


This middleware function can be used to protect any resource that requires authentication. By verifying the JWT and extracting the user ID from the payload, the middleware ensures that only authenticated users can access protected resources.




### Journal

The Moon Raker project allows users to create, read, update, and delete journal entries. This functionality is achieved through the use of full CRUD HTTP requests with express.js and node.js, and Mongoose commands.

#### CRUD Operations
The project uses Mongoose commands to perform the following CRUD operations:

* Read: Retrieve existing journal entries from the database
* Create: Add new journal entries to the database
* Update: Edit existing journal entries in the database
* Delete: Remove existing journal entries from the database

Overall, the journal functionality of the Project Name project provides a way for users to keep track of their thoughts and experiences. The use of CRUD operations with Mongoose and HTTP requests ensures that users can easily create, edit, and delete their journal entries as needed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] INDEX.JS
  - [ ] ERRORPAGE
  - [ ] ABOUTPAGE
  - [ ] APP
    - [ ] PreLoadImagesFunc
    - [ ] BackgroundComponent
    - [ ] MoonSection
    - [ ] DuaLipa
    - [ ] AboutLinkComponent
    - [ ] FormSection
      - [ ] PortalLinkComponent
      - [ ] SearchBarComponent
    - [ ] FlipDisplaySection
      - [ ] ASideDatePhase
      - [ ] BSideWeatherAstro
    - [ ] ConstructionDisplay
    - [ ] SettingScrollFunc
    - [ ] SpikingScrollFunc
  - [ ] PORTAL
    - [ ] AuthPage
      - [ ] SignUpForm
      - [ ] SignInForm
    - [ ] JournalPage
      - [ ] PortalNavBar
        - [ ] LogOut 
      - [ ] SideBar
      - [ ] JournalEntry
      - [ ] NewEntry

<br />

###### AJAX Request Path Client to Server:

<-- "src/pages/Portal/utilities/users-services.js" --> <br/>
<-- "./users-api.js" --> <br/>
<-- server.js --> <br/>
<-- config (middlewares) --> <br/>
<-- routes --> <br/>
<-- controller --> <br/>



See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Michael Kim

Email: michael.dev.kim@gmail.com

LinkedIn: [https://www.linkedin.com/in/michaelkim3/](https://www.linkedin.com/in/michaelkim3/)

Project Link: [https://github.com/sparklingwaterlemon/MoonRaker](https://github.com/sparklingwaterlemon/MoonRaker)

Live Link: [https://the-great-gig-in-the-sky.herokuapp.com/](https://the-great-gig-in-the-sky.herokuapp.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments & Resources
Parallax Scroll Animation Guide 
* [https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/](https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/)

NASA Lunar Images and the Effects of Liberation
* [https://svs.gsfc.nasa.gov/5048](https://svs.gsfc.nasa.gov/5048)

OpenWeatherMap API
* [https://openweathermap.org/api/one-call-3](https://openweathermap.org/api/one-call-3)
* [https://openweathermap.org/api/geocoding-api](https://openweathermap.org/api/geocoding-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michaelkim3/
[product-screenshot]: images/screenshot.png

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/

[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/

[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/

[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
