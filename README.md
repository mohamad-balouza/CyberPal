<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> CyberPal is a desktop application that provides a GUI for various cybersecurity tools (like nmap, netcat, metasploit, tcpdump, etc.), making it easier for users to access and utilize these tools. It also offers scripting and scheduling features for automating user tasks.


### User Stories

- As a user I want to:  
	- Access a variety of cybersecurity tools with a customized GUI in a single hub so that I don't have to switch between different windows and memorize the flags for these tools
	- Download cybersecurity tools directly from the application so that I don't have to search for each tool on the internet manually
	- Use a VPN connection like OpenVPN, so I can participate in "boxes" from other websites like Hackthebox, TryHackMe, etc
- As an advanced user I want to:  
	- Schedule cybersecurity tools to run at specific times so that I don't have to be at the computer to start them  
	- Create my own scripts so that I can automate the usage of cybersecurity tools  
	- Save the scripts I create so that I can come back and execute them at any time 
- As an admin I want to:  
	- Display all the users so that I can see who's joining my website 
	- Display all the tools and scripts in the website so that I can see what the developers have added  
	- Modify the tools on the website so that I can fix or update them as needed

<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed CyberPal using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login & Register Page  | Home Page |  Tools Page | Profile Page | Admin Page |
| ---| ---| ---| ---| ---|
| ![login](./readme/demo/wireframes/Login%20and%20Register%20Page.png) | ![landing](./readme/demo/wireframes/Home%20Page.png) | ![tools](./readme/demo/wireframes/Tools%20Page.png) | ![profile](./readme/demo/wireframes/Schedule%20-%20Scripts%20-%20Favorite%20Scripts.png) | ![admin](./readme/demo/wireframes/Admin%20Panel.png) |


### Mockups
| Login & Register Page  | Home Page |  Tools Page | Profile Page | Admin Page |
| ---| ---| ---| ---| ---|
| ![login](./readme/demo/mockups/Mockups%20-%20Login%20and%20Register%20Page.png) | ![landing](./readme/demo/mockups/Mockups%20-%20Home%20Page.png) | ![tools](./readme/demo/mockups/Mockups%20-%20Tools%20Page.png) | ![profile](./readme/demo/mockups/Mockups%20-Schedule%20-%20Scripts%20-%20Favorite%20Scripts.png) | ![admin](./readme/demo/mockups/Mockups%20-%20Admin%20Panel.png) |


<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the CyberPal application with the following features:

### User Pages
| Home Page  | Tools Page |
| ---| ---|
| ![landing](./readme/demo/implementation/Home%20Page.gif) | ![register](./readme/demo/implementation/Tools%20Page.gif) |
| Profile Page  | Login Page |
| ![login](./readme/demo/implementation/Profile%20Page.gif) | ![login](./readme/demo/implementation/Login%20Page.png) |
| Register Page |
| ![register](./readme/demo/implementation/Signup%20Page.png) |

### Admin Page
| Tables  | Forms |
| ---| ---|
| ![tables](./readme/demo/implementation/Admin%20Page%20table.png) | ![form](./readme/demo/implementation/Admin%20Page%20Form.png) |

<br><br>

<!-- Tech stack -->
<img src="./readme/title5.svg"/>

### CyberPal is built using the following technologies:

- This project uses the [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) for creating the desktop application.
- The backend is developed using [FastAPI](https://fastapi.tiangolo.com/) for creating the APIs.
- For the database, the application uses [PostgreSQL](https://www.postgresql.org/).
- The app uses the font ["Rajdhani"](https://fonts.google.com/specimen/Rajdhani) as its main font, and the design of the app adheres to the material design guidelines.

<br><br>

<!-- How to run -->
<img src="./readme/title6.svg"/>

> To set up CyberPal locally, follow these steps:

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* [PostgreSQL](https://www.postgresql.org/download/)
* [Python](https://www.python.org/downloads/)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/mhmd-Bal/CyberPal.git
   ```
2. Navigate to the CyberPal-Desktop directory
   ```sh
   cd CyberPal-Desktop
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the application
   ```sh
   npm run start
   ```
4. Navigate to the CyberPal-Server directory on another shell
   ```sh
   cd CyberPal-Server
   ```
5. Start your Postgres database
5. Add a .env file and create the necessary variables, check the config.py file in the app/core directory
6. Start the uvicorn server to start your backend server
   ```sh
   uvicorn app.main:app --reload
   ```

Now, you should be able to run CyberPal locally and explore its features.