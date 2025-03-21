# Personal Web Clone v2

## Overview
This project is a responsive website cloned from the [Start Bootstrap Personal template](https://startbootstrap.com/previews/personal). The implementation uses SCSS for enhanced styling capabilities and includes custom-built components such as buttons, cards, and other UI elements.

This is the second version of the project. The previous version ([Link github](https://github.com/thangvb168/personal-web-clone)) was built using pure CSS, while this version leverages SCSS for improved maintainability and organization.

## Features
- Responsive design that works on all devices
- Custom SCSS implementation
- Hand-built components (buttons, cards, etc.)

## Project Structure
```
personal-web-clone-v2/
│   contact.html                # Contact page
│   index.html                  # Home page
│   projects.html               # Projects page
│   README.md                   # Project documentation
│   resume.html                 # Resume page
│
└───assets/
    ├───img/
    │       profile.png
    │
    ├───js/
    │       scripts.js
    │
    └───scss/
        ├───index.scss          # Main SCSS file ( Render file .css & .css.map )
        ├───_custom.scss        # Custom styles
        ├───_base.scss          # Base styles
        ├───_function.scss      # Functions collection for SCSS
        ├───_variables.scss     # Variables
        ├───_mixins.scss        # Mixins collection
        ├───mixins              # Mixins folder
        |   ├───...
        |
        ├───_utilities.scss     # Utilities collection
        |───utilities           # Utilities folder
        |   ├───...
        |
        |───_root.scss          # Root styles
        ├───_reboots.scss       # Reset styles
        ├───_type.scss          # Typography styles
        ├───_containers.scss    # Container styles
        ├───_grid.scss          # Grid system styles
        |───vendors             # Vendor styles folder
            ├───_rfs.scss       # Responsive font size styles
```
## Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS/SCSS, and JavaScript

### Viewing the Project
Simply open any HTML file in a web browser to view the project.

### How to use

### 1. Clone Repository
```sh
git clone https://github.com/thangvb168/personal-web-clone-v2.git
cd personal-web-clone-v2
```

### 2. Compile SCSS to CSS
There are two ways to compile SCSS into CSS:

#### Step 1: Install Extensions Live Sass Compiler

#### Step 2: Click on the "Watch Sass" button in the bottom right corner and ensure the [`assets/scss`](./assets/scss/) folder contains the generated `index.css` file.

### 3: Open [`index.html`](./index.html) in Browser to test NeoBootstrap

## Differences from v1
- Upgraded from pure CSS to SCSS
- Improved component architecture
- Enhanced responsive design
- Better organization of style files

## License
This project is created for educational purposes only.