import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment } from 'react';

import IconLink from '../../reusable-components/icon-link';

const renderFaIconWithText = (icon, text) => <nobr><FontAwesomeIcon icon={icon} /> {text}</nobr>;

const portfolioData = {
  "about": {
    "sections": [
      {
        "title": "Curious Javascript Developer and Trainer",
        "description": [
          <Fragment>My name is {renderFaIconWithText('user', 'Walter')}, and I have been into Web Development for 10+ years.</Fragment>,
          "I have always loved gaining knowledge autodidactically and transfer the skills to professional experiences",
          <Fragment>Recently, I caught up with all the great things that have been going on within the {renderFaIconWithText(['fab', 'js-square'], 'Javascript')} universe via {renderFaIconWithText(['fab', 'free-code-camp'], 'FreeCodeCamp\'s Certification')}</Fragment>,
          <Fragment>During that time, I kind of fell in <FontAwesomeIcon icon="heart" /> with {renderFaIconWithText(['fab', 'react'], 'React')}.</Fragment>,
          <Fragment>Recently, I started teaching React's best practices as a trainer</Fragment>
  //            "I am also a flight attendant, and in general, I am always curious to discover and learn new things, places, languages, etc.",
        ],
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1532040603/portfolio-page/walter-trainer-react-workshop.jpg",            
        }
      },
      {
        "title": "freeCodeCamp",
        "description": [
          <Fragment><IconLink link="https://freecodecamp.org" icon={['fab', 'free-code-camp']} text="freeCodeCamp" /> is a non-profit community whose mission is to make people around the world learn to code</Fragment>,
  //            "You build projects in order to achieve one of the certificates in the areas Frontend, Data Visualization and Backend",
          <Fragment>The technology stack clearly focuses on {renderFaIconWithText(['fab', 'js-square'], 'Javascript')}, and the usage of {renderFaIconWithText(['fab', 'react'], 'React')}, {renderFaIconWithText('chart-area', 'D3')}, and {renderFaIconWithText(['fab', 'node-js'], 'Node')}</Fragment>,
  //          "Based on the certificates, you will gain even more experience in non-profit, open source projects",
          <Fragment>There are regular meetings worldwide and while in Lisbon, I was one of the admins of <IconLink link="https://freecodecamplisbon.org" icon={['fab', 'free-code-camp']} text="freeCodeCamp Lisbon" /></Fragment>,
          <Fragment>There, I did my first <IconLink link="https://github.com/freeCodeCampLisbon/eventos/blob/master/basic-react/2018-07-04_thinking-in-react-presentation.pdf" icon="chalkboard-teacher" text="React workshop"/>, and continued to do so in collaboration with <a href="https://eddisrupt.com" title="Eddisrupt">Eddisrupt</a> at Instituto Superior Técnico</Fragment>,
        ],
        "image": {
          "url": 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531670588/portfolio-page/logo-free-code-camp.png',
        }
      },       

/*      {
        "title": "Javascript Developer",
        "description": [
          "Web Development has been part of my life for more than 15 years",
          "I've always been able to successfully transfer my self-educated skillset to job positions",
          "Companies I've worked for include Yahoo, Interhyp and Interlake",
          "Furthermore, I gained formal knowledge during my studies of Computer Science as a Minor Subject, and recently caught up with the latest Javascript technologies via trainings on Udemy, Udacity, Egghead, MongoDB University, etc."
          //"I decided against studying Computer Science again as a major subject. Instead, I gained tons of practical knowledge by attending online courses on Udacity, Udemy, Egghead, etc."
        ],
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495711880/portfolio-page/web-design-2038872_640.jpg",
          "source": "https://pixabay.com/de/web-design-laptop-html-design-2038872",
          "licence": "CC0 Public Domain"
        }
      }, {
        "title": "Curious Explorer",
        "description": [
          "'hello world' is not just the first line of code, I've written in many programming languages. What is more, it literally sums up the curiosity that has always driven me to explore new horizons: Languages, Job Opportunitites, Sports, Cultures",
          //"I've always been driven by a curiosity to explore new horizons: Languages, Job Opportunitites, Sports, Cultures",
          //"So 'hello world' is not just the first line of code, I've written in many programming languages. What is more, it literally sums up what I've accomplished in my life so far",
          "I've made it from a working class family to gain an Academic Master's Degree: Comparative Religion, Computer and Social Science reflect my diverse skillset",
          "I also continuously widened my geographic scope: From a small village, to studying cultures, and finally, getting to explore this world as a flight attendant for real"
        ],
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495711829/portfolio-page/walter-machu-picchu.jpg"
        }

      }*/
    ]
  },
  "intro": {
    "technologyIcons": [
      {
        "title": "React",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495708385/technology-icons/react.svg",
          "source": "https://worldvectorlogo.com/de/logo/react"
        }
      }, {
        "title": "Sass",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495708592/technology-icons/sass.svg",
          "source": "https://worldvectorlogo.com/de/logo/node-sass"
        }
      }, /*{
        "title": "Bootstrap",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495708385/technology-icons/bootstrap.svg",
          "source": "https://worldvectorlogo.com/de/logo/bootstrap-4"
        }
      },*/ {
        "title": "Foundation",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495708385/technology-icons/foundation.svg",
          "source": "https://worldvectorlogo.com/de/logo/foundation"
        }
      }, {
        "title": "Webpack",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495707922/technology-icons/webpack.svg",
          "source": "https://worldvectorlogo.com/de/logo/webpack"
        }
      }, {
        "title": "Redux",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495708772/technology-icons/redux.svg",
          "source": "https://worldvectorlogo.com/de/logo/redux"
        }
      }, {
        "title": "D3",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495708385/technology-icons/d3.svg",
          "source": "https://worldvectorlogo.com/de/logo/d3-2"
        }
      }/*, {
        "title": "Angular",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495708385/technology-icons/angular.svg",
          "source": "https://worldvectorlogo.com/de/logo/angular-icon"
        }
      }*/, {
        "title": "NodeJS",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495709855/technology-icons/nodejs.svg",
          "source": "https://worldvectorlogo.com/de/logo/nodejs-icon"
        }
      }, {
        "title": "Javasript",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495707922/technology-icons/javascript.svg",
          "source": "https://worldvectorlogo.com/de/logo/javascript"
        }
      }, {
        "title": "Git",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1535997561/technology-icons/git-icon.svg",
          "source": "https://worldvectorlogo.com/downloaded/git-icon",
        },
      }, {
        "title": "AWS",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1535997561/technology-icons/aws-logo.svg",
          "source": "https://worldvectorlogo.com/downloaded/aws-logo",
        },
      }, {
        "title": "Heroku",
        "image": {
          "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1535997561/technology-icons/heroku.svg",
          "source": "https://worldvectorlogo.com/logo/heroku",
        },
      },
    ],
  },
  "footprints": {
    "training": {
      "title": "Training",
      "description": "I've completed a lot of trainings while working on FreeCodeCamp's projects",
      "sites": [
        {
          "title": "FreeCodeCamp",
          "description": "Visit My FreeCodeCamp Profile",
          "url": "https://www.freecodecamp.org/portfolio/relwiwa",
          "image": {
            "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495700867/brand-icons/freecodecamp.png",
            "source": "https://blog.codepen.io/documentation/brand-assets/logoss"
          }
        }, {
          "title": "Udemy",
          "description": "Visit my Udemy Profile",
          "url": "https://www.udemy.com/user/walter-wallner",
          "image": {
            "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495700867/brand-icons/udemy.svg",
            "source": "https://worldvectorlogo.com/logo/udemy"
          }
        }
      ]
    },
    "coding": {
      "title": "Coding",
      "description": "Coding sites I spend time on to improve my algorithmic skills",
      "sites": [
        {
          "title": "Hackerrank",
          "description": "Visit my Hackerrank Profile",
          "url": "https://www.hackerrank.com/relwiwa",      
          "image": {
            "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495700867/brand-icons/hackerrank.png",
            "source": "https://brandfolder.com/hackerrank"
          }
        }, {
          "title": "Codewars",
          "description": "Visit my Codewars Profile",
          "url": "https://www.codewars.com/users/relwiwa/",
          "image": {
            "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495704507/brand-icons/codewars.png",
            "source": "https://www.codewars.com/assets/logos/logo-square-red-big-dc2f35502ee2b60882a41327c529521c.png"
          }
        }
      ]
    },
    "code": {
      "title": "Code",
      "description": "Check out the code I've written in my Github Repository or on Codepen",
      "sites": [
        {
          "title": "Github",
          "description": "Visit my Github Repository",
          "url": "https://github.com/relwiwa",
          "image": {
            "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495700867/brand-icons/github.svg",
            "source": "https://worldvectorlogo.com/logo/github-icon"
          }
        }, {
          "title": "Codepen",
          "description": "Visit my Codepen Portfolio",
          "url": "https://codepen.io/relwiwa",      
          "image": {
            "url": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495700867/brand-icons/codepen.png",
            "source": "https://blog.codepen.io/documentation/brand-assets/logos"
          }
        }
      ]
    }
  },
  "domains": [
    {
      "domain": "frontend",
      "route": "frontend-projects",
      "title": "Frontend",
      "icon": (() => {
        const icons = ['desktop', 'laptop', 'mobile-alt', 'tablet-alt', 'tv'];
        return icons[Math.floor(Math.random() * icons.length)];
      })(),
      "description": "", //"I built the first projects in vanilla Javascript, jQuery and AngularJS. With Angular(2) around, I checked out React and sticked with it. This Portfolio contains all the React-based Frontend Projects I have done, live: Demonstrating the composite nature of React components.",
//      "description": "I started building some frontend projects in vanilla Javascript and jQuery following an MVC approach. Other projects I implemented using AngularJS. Finally, I read about integrating the less-powerful HTML into the more powerful Javascript as it is done in React/JSX, and that got me stuck with React/Redux. This Portfolio contains all the React-based projects - demonstrating the composable nature of React components.",
/*       "lessonsLearned": [
        "Getting Foundation's Javascript components work with React",
        "Consumption of external API data",
        "Dealing with audio restrictions on mobile devices",
        "Gulp and Webpack workflows"
      ],
      "website": "",
 */      "projects": [
         {
          "title": "Simon Game",
          "route": "simon-game",
          "information": "This Simon Game is not just responsive, also its sounds work on mobile, thanks to audio sprites. Why don't you give it a try and try to remember the full sequence?",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/simon-game.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1495561710/portfolio-page/simon-game.png',
          },
          "userStories": [
            {
              "description": "I am presented with a random series of button presses",
              "icon": "random"
            }, {
              "description": "I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over",
              "icon": "trophy"
            }, {
              "description": " Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step",
              "icon": "plus"
            }, {
              "description": "If I want to restart, I can hit a button to do so, and the game will return to a single step",
              "icon": "sync"
            }, {
              "description": "If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again",
              "icon": "redo"
            }, {
              "description": " I can see how many steps are in the current series of button presses",
              "icon": "hashtag"
            }, {
              "description": "I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button",
              "icon": "music"
            }, {
              "description": "I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses",
              "icon": "bolt"
            } 
          ],
/*           "sources": [
            {
              "url": "http://soundbible.com/1003-Ta-Da.html",
              "licence": "Attribution 3.0 licence"
            }, {
              "url": "http://soundbible.com/1682-Robot-Blip.html",
              "licence": "Attribution 3.0 licence"
            }
          ],
 */          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/build-a-simon-game",
            "codepen": "https://codepen.io/relwiwa/pen/WwXrRe",
            "github": "https://github.com/relwiwa/fcc-simon-game",
            "github.io": "https://relwiwa.github.io/fcc-simon-game"       
          },
        }, {
          "title": "Life",
          "route": "life",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/life.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1533750544/portfolio-blue/life.png',
          },
          "information": "Setup a population and watch how it evolves from generation to generation following the rules set out by Conway and his Game of Life",
          "userStories": [
            {
              "description": "When I first arrive at the game, it will randomly generate a board and start playing",
              "icon": "random"
            }, {
              "description": "I can start and stop the board",
              "icon": "play"
            }, {
              "description": "I can set up the board",
              "icon": "cubes"
            }, {
              "description": "I can clear the board",
              "icon": "eject"
            }, {
              "description": "When I press start, the game will play out",
              "icon": "cogs"
            }, {
              "description": "Each time the board changes, I can see how many generations have gone by",
              "icon": "users"
            }
          ],
          "links": {
            "freecodecamp": "https://www.freecodecamp.org/challenges/build-the-game-of-life",
            "codepen": "https://codepen.io/relwiwa/pen/pLBpWp",
            "github": "https://github.com/relwiwa/fcc-life",
            "github.io": "https://relwiwa.github.io/fcc-life"            
          }
        }, {
          "title": "Recipe Box",
          "route": "recipe-box",
          "information": "Recipe Box lets you manage your recipes, filter them, and store them in your local storage",
          "screenshot": {
            //green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/recipe-box.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1533751081/portfolio-blue/recipe-box.png',
          },
          "userStories": [
            {
              "description": "I can create recipes that have names and ingredients",
              "icon": "plus",
            }, {
              "description": "I can see an index view where the names of all the recipes are visible",
              "icon": "list",
            }, {
              "description": "I can click into any of those recipes to view it",
              "icon": "mouse-pointer",
            }, {
              "descriptiosn": "I can edit these recipes",
              "icon": "edit",
            }, {
              "description": "I can delete these recipes",
              "icon": "trash",
            }, {
              "description": "All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there",
              "icon": "save",
            },
          ],
          "links": {
            "freecodecamp": "https://www.freecodecamp.org/challenges/build-a-recipe-box",
            "codepen": "https://codepen.io/relwiwa/pen/zWeWJJ",
            "github": "https://github.com/relwiwa/fcc-recipe-box",
            "github.io": "https://relwiwa.github.io/fcc-recipe-box/"
          },
        }, {
          "title": "Wikipedia Viewer",
          "route": "wikipedia-viewer",
//          "statement": "Data, turn equalize by row on",
          "information": "Get previews of Wikipedia entries with this Wikipedia Viewer, that is using Wikipedia's API",
//          "description": "I wanted to achieve the effect of equal height columns without having to use Foundation's flex grid to maintain IE9 compatibility. For this, I used Foundation's Equalizer plugin. This meant learning how to integrate it both into React's component lifecycle and Webpack via Script Loader.",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/wikipedia-viewer.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1533750543/portfolio-blue/wikipedia-viewer.gif',
          },
          "userStories": [
            {
              "description": "I can search Wikipedia entries in a search box and see the resulting Wikipedia entries",
              "icon": "search"
            }, {
              "description": "I can click a button to see a random Wikipedia entry",
              "icon": "random"
            }
          ],
/*           "technologies": [
            "ES6",
            { "Foundation": ["Equalizer Plugin"] },
            { "Javascript": ["JSONP"] },
            "jQuery",
            "React",
            "SCSS"
          ],
          "tools": [
            "Babel",
            "Git",
            { "Webpack": ["Script Loader"] }
          ],
          "topics": [
            { "Responsive Design": ["Mobile First"] },
            { "API Consumption": [ "Wikipedia API" ] }            
          ],
          "lessonsLearned": [
            {
              "lesson": "Integrate global Foundation Equalizer and jQuery Javascript into Webpack via Script Loader plugin",
              "technologies":[
                { "Foundation": ["Equalizer Plugin"] },
                "jQuery",
                { "Webpack": ["Script Loader"] }
              ]
            }, {
              "lesson": "Access Wikipedia's API to retrieve data using JSONP",
              "technologies": ["API Consumption", "Wikipedia API", "JSONP"]
            }, {
              "lesson": "Make Foundation's Equalizer plugin work within React component lifecycle",
              "technologies": [
                { "Foundation": ["Equalizer Plugin"] },
                "React"
              ]
            }
          ],          
 */          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/build-a-wikipedia-viewer",
            "codepen": "https://codepen.io/relwiwa/pen/KzwKBX",
            "github": "https://github.com/relwiwa/fcc-wikipedia-viewer",
            "github.io": "https://relwiwa.github.io/fcc-wikipedia-viewer"
          }
        }, {
          "title": "Tic Tac Toe",
          "route": "tic-tac-toe",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/tic-tac-toe.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1503560574/portfolio-page/tic-tac-toe.png',
          },
//          "mockup": "",
//          "statement": "Set Vertical Padding To Horizontal Width And You Got Reponsive Squares",
          "information": "The classic Tic Tac Toe game, implemented responsively with all of the UI within the nine fields of the board",
  //        "description": "A responsive implementation of the classic Tic Tac Toe Game",
          "userStories": [
            {
              "description": "I can play a game of Tic Tac Toe with the computer",
              "icon": "gamepad"
            }, {
              "description": "My game will reset as soon as it's over so I can play again",
              "icon": "sync"
            }, {
              "description": "I can choose whether I want to play as X or O",
              "icon": "exchange-alt"
            }
          ],
/*           "lessonsLearned": [
            {
              "lesson": "Use Minimax algorithm to implement AI",
              "technologies": [{ "Algorithms": "Minimax" }]
            }, {
              "lesson": "Create a flexible Tic Tac Toe board component, that is reusable in different contexts",
              "technologies": ["React"]
            }, {
              "lesson": "Create responsive squares by linking vertical padding to horizontal width",
              "technologies": ["Foundation", "CSS", "Flexbox"]
            }, {
              "lesson": "Create an UI that keeps the game's options within the nine fields of the Tic Tac Toe board",
              "topics": "UI Design"
            }, {
              "lesson": "Enable the Tic Tac Toe Component to works with two AI players (demo mode) and with one or two human players",
              "technologies": ["React"]
            }, {
              "lesson": "Create a mockup using Pencil beforehand to visualize component hierarchy",
              "tools": ["Pencil"]
            }, {
              "lesson": "Integrate intervals and timeouts into React's component lifecycle",
              "technologies": ["React"]
            }
          ],
          "technologies": [
            { "CSS": ["Flexbox"] },
            "ES6",
            "Foundation",
            "React",
            "SCSS"            
          ],
          "tools": [
            "Babel",
            "Git",
            "Pencil",
            "Webpack"
          ],
          "topics": [
            { "Algorithms": ["Minimax"] },
            { "Responsive Design": [ "Mobile First" ] },
            "UI Design"
          ],
 */          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/build-a-tic-tac-toe-game",
            "codepen": "https://codepen.io/relwiwa/pen/GqoZZG",
            "github": "https://github.com/relwiwa/fcc-tic-tac-toe",
            "github.io": "https://relwiwa.github.io/fcc-tic-tac-toe"       
          }
        }, {
          "title": "Markdown Previewer",
          "route": "markdown-previewer",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/markdown-previewer.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1533750543/portfolio-blue/markdown-previewer.gif',
          },
//          "mockup": "",
//          "statement": "Yes, dangerouslySetInnerHtml",
          "information": "Enter Github-flavored Markdown and immediately see a live preview of the output",
//          "description": "Let's you see a live preview of the markdown you enter",
          "userStories": [
            {
              "description": "I can type GitHub-flavored Markdown into a text area",
              "icon": "sign-in-alt"
            }, {
              "description": "I can see a preview of the output of my markdown that is updated as I type",
              "icon": "sign-out-alt"
            }
          ],
  /*         "technologies": [
            { "CSS": ["Flexbox"] },
            "ES6",
            "Bootstrap",
            { "Foundation": ["XY Grid"] },
            "Marked",
            "React",
            "SCSS"            
          ],
          "tools": [
            "Babel",
            "Balsamiq",
            "Git",
            "Webpack"
          ],
          "topics": [
            { "Responsive Design": [ "Mobile First" ] },
            "Sanitize User Input"
          ],
          "lessonsLearned": [
            {
              "lesson": "Create a mockup beforehand to visualize hierarchy of React components",
              "technologies": ["Balsamiq", "React"]
            }, {
              "lesson": "Sanitize direct user input to be able to use React's dangerouslySetInnerHtml",
              "technologies": [{ "React": "dangerouslySetInnerHtml" }]
            }, {
              "lesson": "Use marked package to parse and compile markdown entered by user",
              "technologies": ["Marked"]
            }
          ],
   */        "links": {
            "freecodecamp": "https://www.freecodecamp.org/challenges/build-a-markdown-previewer",
            "github": "https://github.com/relwiwa/fcc-markdown",
            "codepen": "https://codepen.io/relwiwa/pen/xLKwRM",
            "github.io": "https://relwiwa.github.io/fcc-markdown"
          },
  /*         "alternative": {
            "technologies": [
              { "CSS": ["Flexbox"] },
              "ES6",
              { "Bootstrap": ["Flex Grid"] },
              "Marked",
              "React",
              "SCSS"            
            ],
            "tools": [
              "Babel",
              "Balsamiq",
              "Git",
              "Webpack"
            ],
            "topics": [
              { "Responsive Design": [ "Mobile First" ] },
              "Sanitize User Input"
            ],
            "links": {
              "codepen": "https://codepen.io/relwiwa/pen/XarmPG"
            }
          }          
   */      }, {
          "title": "Leaderboard",
          "route": "leaderboard",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/leaderboard.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1502691228/portfolio-page/leaderboard.png',
          },
//          "mockup": "",
//          "statement": "Let's Add A Pagination Feature To This Leaderboard",
          "information": "A Leaderboard featuring the top 100 FreeCodeCampers. It features pagination and sorting.",
//          "description": "A Leaderboard showing the top 100 FreeCodeCampers. It features pagination and sorting.",
          "userStories": [
            {
              "description": "I can see a table of the freeCodeCamp campers who've earned the most brownie points in the past 30 days",
              "icon": "th-list"
            }, {
              "description": "I can see how many brownie points they've earned in the past 30 days, and how many they've earned total",
              "icon": "trophy"
            }, {
              "description": "I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total",
              "icon": "sort"
            }
          ],
  /*         "technologies": [
            { "CSS": ["Flexbox"] },
            "ES6",
            "Bootstrap",
            { "Foundation": ["Flex Grid", "XY-Grid", "Pagination"] },
            "React",
            "SCSS"            
          ],
          "tools": [
            "Babel",
            "Balsamiq",
            "Git",
            "Webpack"
          ],
          "topics": [
            { "Responsive Design": [ "Mobile First" ] }
          ],
          "lessonsLearned": [
            {
              "lesson": "Set up pagination",
              "technologies": ["Bootstrap", "Foundation"]
            }, {
              "lesson": "Use Flex and XY Grid instead of Float Grid",
              "technologies": ["Bootstrap", { "Foundation": ["Flex Grid", "XY-Grid"] }]
            }, {
              "lesson": "Switch from Bootstrap 4 implementation to Foundation 6.4",
              "technologies":["Bootstrap", "Foundation"]
            }, {
              "lesson": "Create a mockup with Balsamiq before implementing the project with React",
              "tools": ["Balsamiq"]
            }
          ],
   */        "links": {
            "freecodecamp": "https://www.freecodecamp.org/challenges/build-a-camper-leaderboard",
            "codepen": "https://codepen.io/relwiwa/pen/brbNvO",
            "github": "https://github.com/relwiwa/fcc-leaderboard",
            "github.io": "https://relwiwa.github.io/fcc-leaderboard"
          },
         }, {
            "title": "Random Quote Machine",
            "route": "random-quote-machine",
            "screenshot": {
  //            green: '',
              blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1537034838/portfolio-blue/random-quote-machine.gif',
            },
            "information": "Get inspired by the quotes on design this machine throws at you randomly.",
            "userStories": [
              {
                "description": "On first load, my quote machine displays a random quote and author",
                "icon": "random"
              }, {
                "description": "When the new quote button is clicked, my quote machine should fetch a new quote and display it",
                "icon": "redo"
              }, {
                "description": "I can tweet the current quote",
                "icon": ['fab', 'twitter']
              }
            ],
            "links": {
              "freecodecamp": "https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine",
              "codepen": "https://codepen.io/relwiwa/full/EPzLZv/",
              "github": "https://github.com/relwiwa/fcc-random-quote-machine",
//              "github.io": "https://relwiwa.github.io/fcc-leaderboard"
        }, /*, {
          "title": "Pomodoro Clock",
          "route": "pomodoro-clock",
          "externalOnly": true,
          "screenshot": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495561710/portfolio-page/pomodoro-clock.png",
          "userStories": [
            {
              "description": "I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed",
              "icon": ""
            }, {
              "description": "I can reset the clock for my next pomodoro",
              "icon": ""
            }, {
              "description": "I can customize the length of each pomodoro",
              "icon": ""
            }
          ],
          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/build-a-pomodoro-clock",
            "codepen": "https://codepen.io/relwiwa/pen/grLRYa" 
          }
        }, {
          "title": "Javascript Calculator",
          "route": "javascript-calculator",
          "externalOnly": true,
          "screenshot": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495561710/portfolio-page/calculator.png",
          "userStories": [
            {
              "description": "I can add, subtract, multiply and divide two numbers",
              "icon": ""
            }, {
              "description": "I can clear the input field with a clear button",
              "icon": ""
            }, {
              "description": "I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output",
              "icon": ""
            }
          ],
          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/build-a-javascript-calculator",
            "codepen": "https://codepen.io/relwiwa/pen/qbLoNK"
          }
        }, {
          "title": "Twitch API",
          "route": "twitch-api",
          "externalOnly": true,
          "screenshot": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495561710/portfolio-page/twitch-tv.png",
          "userStories": [
            {
              "description": "I can see whether Free Code Camp is currently streaming on Twitch.tv",
              "icon": ""
            }, {
              "description": "I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel",
              "icon": ""
            }, {
              "description": "If a Twitch user is currently streaming, I can see additional details about what they are streaming",
              "icon": ""
            }, {
              "description": "I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed)",
              "icon": ""
            }
          ],
          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/use-the-twitchtv-json-api",
            "codepen": "https://codepen.io/relwiwa/pen/PNMLNa"
          }
        }, {
          "title": "Local Weather",
          "route": "local-weather",
          "externalOnly": true,
          "screenshot": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495561710/portfolio-page/local-weather.png",
          "userStories": [
            {
              "description": "I can see the weather in my current location",
              "icon": ""
            }, {
              "description": "I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather",
              "icon": ""
            }, {
              "description": "I can push a button to toggle between Fahrenheit and Celsius",
              "icon": ""
            }
          ],
          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/show-the-local-weather",
            "codepen": "https://codepen.io/relwiwa/pen/EKZovx"
          }
        }*/
      },
      ],
    }, {
      "domain": "d3",
      "route": "d3-projects",
      "title": "Dataviz",
      "icon": (() => {
        const icons = ['chart-line', 'chart-area', 'chart-bar'];
        return icons[Math.floor(Math.random() * icons.length)];
      })(),
      "description": "", // "All of the Data Visualization projects were implemented using D3. Based on Udacity's Data Visualization and D3 course, I built the first projects focused on presenting the data with author- and user-driven narratives. The focus then changed to integrating React and D3: I iterated over several configurations of tasks between D3, React and CSS to find the most efficient way of rendering the interactive charts.",
/*       "lessonsLearned": [
        "Getting to know D3's various libraries",
        "Making SVG charts responsive",
        "Creating author- and user-driven data narratives",
        "Optimize the interplay between D3 and React"
      ],
      "website": "",
 */      "projects": [
 {
          "title": "Meteorite Map",
          "route": "meteorite-map",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/meteorite-map.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1498217818/portfolio-page/portfolio-map.png',
          },
//          "statement": "Now how do I get Antarctica off this map",
          "information": "An interactive map displaying meteorite strikes across the world between 1400 up until now",
//          "description": "The challenging part in this project was to find the right allocation of tasks between D3 and React. So D3 was used to calculate the map and meteorite strikes. React got to render this data. To prevent massive re-renders, I explored React's PureComponent and shouldComponentUpdate. During the initial author-driven narrative, I came to use an interval- and CSS-based approach to display the meteorite strikes. And I got Antarctica off the map.",
          "userStories": [
            {
              "description": "I can see where all Meteorites landed on a world map",
              "icon": "map-marker"
            }, {
              "description": "I can tell the relative size of the meteorite, just by looking at the way it's represented on the map",
              "icon": "expand"
            }, {
              "description": "I can mouse over the meteorite's data point for additional data",
              "icon": "mouse-pointer"
            }            
          ],
  /*         "sources": [
            {
              "source": "Natural Earth",
              "description": "SHP files of world map that were converted to GeoJSON and TopoJson data using GDAL",
              "url": "http://www.naturalearthdata.com",
              "licence": {
                "type": "Public Domain",
                "description": "All versions of Natural Earth raster + vector map data found on this website are in the public domain. You may use the maps in any manner, including modifying the content and design, electronic dissemination, and offset printing. The primary authors, Tom Patterson and Nathaniel Vaughn Kelso, and all other contributors renounce all financial claim to the maps and invites you to use them for personal, educational, and commercial purposes. No permission is needed to use Natural Earth. Crediting the authors is unnecessary."
              }
            }
          ],
          "technologies": [
            "CSS",
            { "D3": ["D3 Geo", "D3 Zoom" ] },
            "ES6",
            "Foundation",
            { "React": [ "Higher Order Components", "PureComponent", "shouldComponentUpdate" ] },
            "SCSS",
            "SVG"
          ],
          "tools": [
            "Babel",
            "GDAL",
            "Github",
            "Webpack"            
          ],
          "topics": [
            { "Data Science": [ "Data Wrangling" ] },
            { "Responsive Design": ["Mobile First"] }            
          ],
          "lessonsLearned": [
            {
              "lesson": "Use D3's Geo Module to display meteorite strikes on a SVG-based world map",
              "technologies": ["D3", "D3 Geo", "SVG"]
            }, {
              "lesson": "Integrate D3 into React component architecture",
              "technologies": ["D3", "React"]
            }, {
              "lesson": "Use PureComponent and shouldComponentUpdate to minimize unnecessary rendering in D3/React interplay",
              "technologies": ["D3", "React"]
            }, {
              "lesson": "Use CSS to show/hide D3 data sets to prevent re-rendering with React during animation",
              "technologies": ["CSS", "D3", "React"]
            }, {
              "lesson": "Use Higher Order Component to handle resizing",
              "technologies": ["React"]
            }, {
              "lesson": "Make the world map zoomable by implementing D3's zoom functionality",
              "technologies": ["D3", "D3 Zoom"]
            }, {
              "lesson": "Prepare provided data set for usage within project by filtering improper data",
              "topics": ["Data Science", "Data Wrangling"]
            }, {
              "lesson": "Convert SHP-files to GeoJson- and TopoJson-files using GDAL",
              "tools": ["GDAL"]
            }, {
              "lesson": "Use GDAL to remove Antarctica from GeoJson-Dataset",
              "tools": ["GDAL"]
            }, {
              "lesson": "Calculate map boundaries to feed D3's Geo Mercator function",
              "topics": ["Data Science", "Data Wrangling"],
              "technologies": ["D3", "D3 Geo"]
            }
          ],
   */        "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/map-data-across-the-globe",
            "codepen": "https://codepen.io/relwiwa/pen/eEdxKe",
            "github": "https://github.com/relwiwa/fcc-meteorite-map",
            "github.io": "https://relwiwa.github.io/fcc-meteorite-map"
          }
        }, {
          "title": "Bar Chart",
          "route": "bar-chart",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669959/portfolio-green/bar-chart.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1498218231/portfolio-page/barchart.png',
          },
  //        "statement": "No, this component still shouldNotUpdate",
          "information": "Quarterly US GDP Data represented in a Bar Chart",
//          "description": "It was the first time I ever used D3, right after Udacity's Data Visualization course. The first implementation focused on getting to know D3 and how to animate data on entry. The second focused on creating a responsive bar chart and optimizing the interplay between React and D3.",
          "userStories": [
            {
              "description": "I can see US Gross Domestic Product by quarter, over time",
              "icon": "chart-bar"
            }, {
              "description": "I can mouse over a bar and see a tooltip with the GDP amount and exact year and month that bar represents",
              "icon": "mouse-pointer"
            }            
          ],
/*           "sources": [
            {
              "source": "Federal Reserve Bank of St. Louis",
              "description": "Quarterly Gross Domestic Product",
              "url": "https://fred.stlouisfed.org/data/GDP.txt"
            }
          ],
          "technologies": [
            "ES6",
            "Foundation",
            { "D3": ["D3 Scales"] },
            { "React": ["Higher Order Components", "shouldComponentUpdate" ] },
            "SCSS",
            "SVG"
          ],
          "tools": [
            "Babel",
            "Git",
            "Webpack"
          ],    
          "topics": [
            "Data Visualization",
            { "Responsive Design": [ "Mobile First" ] }
          ],
          "lessonsLearned": [
            {
              "lesson": "Create a responsive SVG-based bar chart using D3 and React",
              "technologies": ["D3", "React", "SVG"]
            }, {
              "lesson": "Optimize D3 integreation within React by minimzing re-renders via shouldComponentUpdate",
              "technologies": ["D3", "React"]
            }, {
              "lesson": "Use intervals to create an author-driven narrative",
              "technologies":["D3"],
              "topics": ["Data Visualization"]
            }
          ],
 */          "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/visualize-data-with-a-bar-chart",
            "codepen": "https://codepen.io/relwiwa/pen/zoVjxJ",
            "github": "https://github.com/relwiwa/fcc-us-gdp-chart",
            "github.io": "https://relwiwa.github.io/fcc-us-gdp-chart"
          },
/*           "alternative": {
            "technologies": ["D3", "SVG"],
            "tools": ["Gulp"],
            "lessonsLearned":[
              {
                "lesson": "Create a SVG-based bar chart with pure D3",
                "technologies": ["D3", "SVG"]
              }, {
                "lesson": "Setup an author-driven narrative using an interval to display data",
                "technologies": ["D3"]
              }, {
                "lesson": "Setup a Gulp development and production workflow for creating D3 chart",
                "technologies": ["Gulp"]
              }
            ]
          }
 */        }, /*{
          "title": "Scatterplot Graph",
          "route": "scatterplot-graph",
          "externalOnly": true,
          "screenshot": "https://res.cloudinary.com/dqzrtsqol/image/upload/v1495567607/portfolio-page/scatterplot-graph.png"
        },*/ {
          "title": "Heat Map",
          "route": "heat-map",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669959/portfolio-green/heat-map.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1498215166/portfolio-page/heat-map.png',
          },          
//          "statement": "Hexagons, you look pretty, but aren't good for a cell by cell comparison",
          "information": "Global monthly temperatures put into a Heat Map",
//          "description": "I implemented the Heat Map based on the React/D3/CSS configuration I came up with from the previous projects. Initially, I used hexagons to represent the data - they looked pretty, but made a cell by cell comparison difficult, so I switched back to regular cells. My implementation does not fit one page, so you cannot directly see the overall tendency at one glance. On the other hand, on the way there, each cell is big enough to make its data accessible.",
          "userStories": [
            {
              "description": "I can view a heat map with data represented both on the Y and X axis",
              "icon": "arrows-alt"
            }, {
              "description": "Each cell is colored based on its relationship to other data",
              "icon": "adjust"
            }, {
              "description": "I can mouse over a cell in the heat map to get more exact information",
              "icon": "mouse-pointer"
            }
          ],
  /*         "lessonsLearned":[
            {
              "lesson": "Create a responsive SVG-based Heat Map combining D3, React and CSS",
              "technologies": ["React", "CSS", "D3", "SVG"],
              "topics": ["Responsive Design"]
            }, {
              "lesson": "Use D3's ordinal instead of time scale to get evenly sized columns for months",
              "technologies":["D3"]
            }, {
              "lesson": "Focus on inline styles to limit scope of style classes to each React component (except for hover)",
              "technologies": ["CSS", "React"]
            }
          ],
          "technologies": [
            "Foundation",
            "CSS",
            "D3",
            "ES6",
            "React",
            "SCSS",
            "SVG"
          ],
          "tools": [
            "Babel",
            "Github",
            "Webpack"
          ],
          "topics": [
            {
              "Responsive Design": [
                "Mobile First"
              ]
            }
          ],
          "alternative": {
            "technologies": [
              { "D3": ["D3 Hexbin"] }
            ],
            "lessonsLearned":[
              {
                "lesson": "Create hexagons with D3's Hexbin module",
                "technologies": ["D3", "D3 Hexbin"]
              }
            ]            
          },
          "sources": [
            {
              "source": "FreeCodeCamp",
              "description": "Data Set provided by FreeCodeCamp for this project",
              "url": "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/global-temperature.json"
            }
          ],
   */        "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/visualize-data-with-a-heat-map",
            "codepen": "https://codepen.io/relwiwa/pen/ZJpmrm",
            "github": "https://github.com/relwiwa/fcc-heat-map",
            "github.io": "https://relwiwa.github.io/fcc-heat-map"
          }
        }, {
          "title": "Force Directed Graph",
          "route": "force-graph",
          "screenshot": {
//            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/force-graph.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1502691023/portfolio-page/force-graph.png',
          },
  //        "statement": "All of a sudden, there was a horizontal scrollbar",
          "information": "Border relationships between countries represented as a Force Directed Graph",
//          "description": "There were two things I battled with in this project: First, setting the force graph's properties to be responsive. Second, dealing with a horizontal scrollbar, that appeared only after the SVG got its (height) dimensions set and rendered. I also learned about actions on mobile that unexpectedly trigger a resize event (for example show/hide address bar).",
          "userStories": [
            {
              "description": "I can see a force-directed Graph that shows which countries share borders",
              "icon": "share-alt"
            }, {
              "description": "I can see each country's flag on its node",
              "icon": "flag"
            }
          ],
  /*         "technologies": [
            "CSS",
            { "D3": ["D3 Force Layout"] },
            "ES6",
            "Foundation",
            "React",
            "SCSS",
            "SVG"
          ],
          "tools": [
            "Babel",
            "Git",
            "Webpack"            
          ],
          "topics": [
            "Mobile Development",
            "Responsive Design"
          ],
          "lessonsLearned":[
            {
              "lesson": "Handle display of Browser-UI components like scrollbars, when resizing D3 SVG responsively within React lifecycle",
              "technologies": ["D3", "React"]
            }, {
              "lesson": "Create a responsive SVG-based force-directed graph by using D3's Force Layout module",
              "technologies":["D3", "D3 Force Layout", "SVG"]
            }, {
              "lesson": "Deal with actions on mobile that trigger resize events, and potentially unwanted re-renders",
              "technologies": ["D3", "React"],
              "topics": ["Mobile Development"]
            }
          ],
   */        "links": {
            "freecodecamp": "https://www.freecodecamp.com/challenges/show-national-contiguity-with-a-force-directed-graph",
            "codepen": "https://codepen.io/relwiwa/pen/XaNrXR",
            "github": "https://github.com/relwiwa/fcc-force-graph",
            "github.io": "https://relwiwa.github.io/fcc-force-graph"
          }          
        }
      ]
    }, {
      "domain": "backend",
      "route": "backend-projects",
      "title": "Backend",
      "icon": "server",
      // "description": "The backend projects are all set in the Node environment. On the one hand, they are about providing data via restful APIs. On the other hand, they focus on building various full-stack applications.",
      "website": "",
      "projects": [
        {
          "title": "Voting",
          "route": "voting",
          "information": "Collaborative decision making is just around the corner with this voting app called Decisions, Decisions",
          "screenshot": {
      //            green: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1531669960/portfolio-green/simon-game.gif',
            blue: 'https://res.cloudinary.com/dqzrtsqol/image/upload/v1495561710/portfolio-page/voting.png',
          },
          "userStories": [
            {
              "description": "As an authenticated user, I can keep my polls and come back later to access them",
              "icon": "save"
            }, {
              "description": "As an authenticated user, I can share my polls with my friends",
              "icon": "share-alt"
            }, {
              "description": "As an authenticated user, I can see the aggregate results of my polls",
              "icon": "chart-bar"
            }, {
              "description": "As an authenticated user, I can delete polls that I decide I don't want anymore",
              "icon": "trash"
            }, {
              "description": "As an authenticated user, I can create a poll with any number of possible items",
              "icon": "cart-plus"
            }, {
              "description": "As an unauthenticated or authenticated user, I can see and vote on everyone's polls",
              "icon": "times-circle"
            }, {
              "description": "As an unauthenticated or authenticated user, I can see the results of polls in chart form",
              "icon": "chart-pie"
            }, {
              "description": "As an authenticated user, if I don't like the options on a poll, I can create a new option",
              "icon": "plus"
            } 
          ],
          "links": {
            "freecodecamp": "https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-voting-app/",
      /*    "github": "https://github.com/relwiwa/fcc-simon-game",
            "github.io": "https://relwiwa.github.io/fcc-simon-game" */
          },
        },
      ],
    },
  ],
};

export default portfolioData;
