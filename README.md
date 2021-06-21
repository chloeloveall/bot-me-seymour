![bot icon image](src/assets/images/bot-icon.jpg)

# _Bot Me, Seymour!_

#### By _**Chloe Loveall**_

<br>

![license](https://img.shields.io/github/license/chloeloveall/bot-me-seymour?color=blue&style=flat) &nbsp; ![top project language](https://img.shields.io/github/languages/top/chloeloveall/bot-me-seymour?style=flat) &nbsp; ![last github commit](https://img.shields.io/github/last-commit/chloeloveall/bot-me-seymour?style=flat) &nbsp; ![github pull requests](https://img.shields.io/github/issues-pr/chloeloveall/bot-me-seymour?style=flat) &nbsp; ![open issues](https://img.shields.io/github/issues-raw/chloeloveall/bot-me-seymour?style=flat) &nbsp; ![github contributors](https://img.shields.io/github/contributors/chloeloveall/bot-me-seymour?color=brightgreen&style=flat)

## Table of Contents

1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Preview](#preview)
4. [Technologies Used](#technologies-used)
5. [Setup and Installation Requirements](#setup-and-installation-requirements)
   - [Prior to Installation](#prior-to-installation)
     - [Git Installation](#confirm-you-have-git-installed)
   - [Installation](#installation)
     - [Clone](#clone)
     - [Download](#download)
6. [Known Bugs](#known-bugs)
7. [Issues](#issues)
8. [Contributing](#contributing)
9. [License](#license)
10. [Acknowledgements](#acknowledgements)
11. [Contact Information](#contact-information)

## Description

Days eleven and twelve of #100daysofcode. A plant themed Discord bot!

## Technologies Used

- Discord.js
- Heroku
- JavaScript
- node.js
- Nodemon

## Use Bot Me, Seymour!

To use Bot Me, Seymour! on your Discord server:

- Follow [this link](https://discord.com/oauth2/authorize?client_id=853026935978590218&permissions=0&scope=bot).
- Select the server from the dropdown list.
- Click `Continue`.
- Click `Authorize`.

### Bot Commands

- To receive a random plant fact: `$fact`
- To kick a user from the server: `$kick + space + user ID`
- To ban a user from the server: `ban + space + user ID`
- To make an announcement: `$announce + space + [Your message]`

## Setup and Installation Requirements

Follow these steps if you wish to alter or deploy the Discord bot yourself.

### Prior to Installation

#### Confirm you have Git installed

- Installing Git on Macs:

  - Install the package manager [Homebrew](https://brew.sh/) by copying and pasting the following in the terminal: `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - Copy and paste once of the following lines in the terminal so that Homebrew packages are run before the system versions of the same packages:
    - For bash users: `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`
    - For zsh users: `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.zshrc`
  - Last, install Git with the following terminal command: `$ brew install git`

- Installing Git on Windows:
  - Open Command Prompt, the Windows terminal program. You can access it by typing `Cmd` in the search bar in the bottom left corner.
  - **NOTE** There are many options available, but we recommend using a free program called [Git Bash](https://gitforwindows.org/)
  - Navigate to [Git Bash](https://gitforwindows.org/) and click on the Download button. This will take you to a page with the latest version of Git Bash. Determine whether you have 32-bit or 64-bit Windows by following these instructions. Then download the corresponding exe file from the Git for Windows site. (If you have a package manager already installed, you can also choose to download the tar.bz2 version.)
  - Click on the downloaded file and then follow the instructions in the Setup menu until you reach the Install button and install the package.

### Installation

#### Clone

- Clone the repository with the following git terminal command: `$ git clone https://github.com/chloeloveall/bot-me-seymour.git`
- Open the project's root directory (`bot-me-seymour`) in your terminal

#### Download

- Open the repository on GitHub: [chloeloveall/bot-me-seymour](https://github.com/chloeloveall/bot-me-seymour/)
- Click `Code` button and select `Download ZIP`
- Open and extract the files
- Open [VSCode], or your code editor of choice
- Select `File>Open...` and navigate to the unzipped file folder
- Select `bot-me-seymour` and click `open` to view the project

### Environment Variables & Security

#### Obtain Bot Token & Application ID

- Navigate to the [Discord Developers Portal](https://discord.com/developers/applications)
  - Select `New Application`
  - Name your application
  - Click `Create`
  - Under Settings, select `Bot`
  - Click `Add Bot`
  - Click `Yes do it!`
  - Record the Bot token and application ID

#### Obtain Webhook Token

From the Discord server:

- Select `Server Settings`
- Select `Integrations`
- Select `View Webhooks`
- Select `New Webhook`
- Select `Copy Webhook URL`
- Paste the URL in the browser
- Record the token value

#### Setup .env

- Create a .env file in the root directory of the project.
- Add the following code to the .env file:  
  `DISCORDJS_BOT_TOKEN=[YOUR_BOT_TOKEN_HERE]`  
  `WEBHOOK_ID=[YOUR_APPLICATION_ID_HERE]`  
  `WEBHOOK_TOKEN=[YOUR_WEBHOOK_TOKEN_HERE]`

### Launch Application

- To install: Run `npm install`
- To run in development: `npm run dev`
- To run: `npm start`

## Known Bugs

- None at this time

## Issues

- Report issues [here](https://github.com/chloeloveall/bot-me-seymour/issues) and select the `New issue` button for support

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the project on GirHub
   - Follow [Installation and Setup Requirements](#setup-and-installation-requirements) above
2. Create your Feature Branch: `$ git checkout -b YourFeatureBranchName`
3. Commit your Changes `$ git commit -m 'Add some Amazing Feature'`
4. Push to your feature branch on Github `$ git push origin YourFeatureBranchName`
5. Open a Pull Request

## License

[GNU GPLv3](LICENSE.txt)

## Acknowledgements

- [Choose an open source license](https://choosealicense.com/)
- [Create a Discord Bot With Node.js](https://www.youtube.com/watch?v=BmKXBVdEV0g&t=397s)
- [Discord Developer Portal](https://discord.com/developers/docs/intro)
- [discord.js.org](https://discord.js.org/)
- [Shields](https://shields.io/)
- [Carnivorous Plant Vector by Vecteezy](https://www.vecteezy.com/free-vector/carnivorous-plant)

## Contact Information

_Chloe Loveall <chloeloveall@protonmail.com>_

![github followers](https://img.shields.io/github/followers/chloeloveall?style=social) &nbsp; ![github forks](https://img.shields.io/github/forks/chloeloveall/bot-me-seymour?label=Forks&style=social) &nbsp; ![github stars](https://img.shields.io/github/stars/chloeloveall/bot-me-seymour?style=social)

[Back to Top](#table-of-contents)
