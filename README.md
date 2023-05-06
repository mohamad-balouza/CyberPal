<img src="./readme/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/title2.svg"/>

> CyberPal is a desktop application that provides a GUI for various cybersecurity tools (like nmap, netcat, metasploit, tcpdump, etc.), making it easier for users to access and utilize these tools. It also offers scripting and scheduling features for automating user tasks.


### User Stories

- As a user I want to:  
	- Navigate a landing page so that I can quickly and easily find the specific information or feature that I am looking for  
	- Sign up so that I can be a member of the website  
	- Sign in so that I can use the tools implemented in the website  
	- Use a vpn connection like Openvpn so that I can participate in Boxes from other websites like Hackthebox, tryhackme, etc  
	- Use Nmap tool so that I can scan the ports of an IP address and get the information from that scan  
	- Use Netcat tool so that I can listen to a specific port  
	- Upload shells (like reverse shells) to the target box so that I can get remote access to it and continue my testing  
	- Access a shell generator so that I can get a shell for every language that I want  
	- Use ssh so that I can connect to other Boxes/Machines  
	- Scan the machine for popular misconfiguration so that I can do some privilege escalation  
	- Navigate another website’s source code so that I can check if there are any clues there  
	- Navigate the targeted website so that I can input and check for vulnerability manually  
	- Upload files so that I can check for common vulnerabilities in these files  
	- Use the Snyk tool so that I can check for vulnerabilities in github repositories  
	- Use Searchsploit tool so that I can scan for popular exploits of a specific port  
	- Use Metasploit tool so that I can have access to the exploits, scanners, etc provided by this tool  
	- Use Brute forcing tools so that I can try and brute force a password with an already implemented list of passwords like Seclists  
	- Use a GUI for these tools so that I don’t have to memorize all the commands, and for ease of access  
	- Read the description of these tools so that I know what each tools does and what each of the commands does  
	- Change the theme of the website so that I don’t hurt my eyes by the light theme at night  
- As an advanced user I want to:  
	- Use all the features of the normal users so that I can have access to all the tools included in the website  
	- Schedule tools so that I can have them run on a specific time without having to be at the computer  
	- Schedule emails so that I can notify the company that I am starting the testing processs  
	- Create my own scripts so that I can automate the usage of the tools  
	- Save my created scripts in a gui so that I can comeback and execute my scripts at any time  
- As an admin I want to:  
	- Display all the users so that I can see who's joining my website  
	- Activate and disable users so that I can stop users with suspicious activities  
	- Display all the tools in the website so that I can see the tools that the developers have added  
	- Alter things in the tools of the website so that I can fix/update these tools

<br><br>

<!-- Prototyping -->
<img src="./readme/title3.svg"/>

> We designed CyberPal using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Login & Register Page  | Home Page |  Tools Page | Profile Page |
| ---| ---| ---| ---|
| ![login](./readme/demo/wireframes/Login%20and%20Register%20Page.png) | ![landing](./readme/demo/wireframes/Home%20Page.png) | ![tools](./readme/demo/wireframes/Tools%20Page.png) | ![profile](./readme/demo/wireframes/Schedule%20-%20Scripts%20-%20Favorite%20Scripts.png)
| Admin Page |
| ![admin](./readme/demo/wireframes/Admin%20Panel.png) |

### Mockups
| Login & Register Page  | Home Page |  Tools Page | Profile Page |
| ---| ---| ---| ---|
| ![login](./readme/demo/mockups/Mockups%20-%20Login%20and%20Register%20Page.png) | ![landing](./readme/demo/mockups/Mockups%20-%20Home%20Page.png) | ![tools](./readme/demo/mockups/Mockups%20-%20Tools%20Page.png) | ![profile](./readme/demo/mockups/Mockups%20-Schedule%20-%20Scripts%20-%20Favorite%20Scripts.png)
| Admin Page |
| ![admin](./readme/demo/mockups/Mockups%20-%20Admin%20Panel.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the CyberPal application with the following features:

### User Pages
| Login Page  | Register Page | Home Page | Tools Page |
| ---| ---| ---| ---|
| ![login](./readme/demo/implementation/Login%20Page.png) | ![register](./readme/demo/implementation/Signup%20Page.png) | ![landing](./readme/demo/implementation/Landing%20Page.png) | ![tools](./readme/demo/implementation/Tools%20Page.png) |
| Profile Page  |
| ![fsdaf](https://placehold.co/900x1600) |

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