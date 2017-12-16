# Developerreality

## Blindspots
**Technical**
* I don't know sass.
* I lament knowing I won't really be able to work with React since working with Angular made me really curious about how it differs in architecture.
* I would like to know how to authenticate users in Angular, and other languages.

**Non-Technical**
* Becoming too focused on one spec, and not managing my time properly.
* Social anxiety, whiteboarding, and speaking with confidence.



## Plan of Action
Today, I will look at a few areas that I feel I personally struggle in. I'll spend the first few hours of the day to address these trouble spots, and then if there is enough time, I would like to document it a kind of a blog site. That's the ambition anyway, if it doesn't seem like I'll have enough time, I'll likely just record it in the README.


--https://www.farnamstreetblog.com/2017/06/habits-vs-goals/
- After having read this article, I know I'm easily guilty of making goals of self-improvement and having them topple over with their top-heavy aspirations. It's funny, it seems obvious that an approach of slowly tackling your goal in more bite-sized chunks would be a natural approach, but I know I've often disregarded it, not deliberately, but just jumping headfirst into a lake of problems, not knowing what lie beneath the surface. Anyway, went a little off track there. Coming away from this article, I'm sure I can find a way to apply this to my working habits, or at the very least, I'll try.

https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730
--http://www.marinaratimer.com/olYd4ks
In an attempt to better manage my work flow, I have a browser tab opened to an online pomodoro timer.


[Learn React.JS in 8 Minutes](https://medium.com/learning-new-stuff/learn-react-js-in-7-min-92a1ef023003)
- Props: From my admittedly shallow understanding, props are immutable pieces of data that you can pass down the a hierarchy of components, very similarly to how we've been sending data down in Angular through input. Just... not with the input set up.
- States: The event handling so far is not too far off from what we learned in Angular, so not lost yet.
- Refs and findDomNode: This was interesting to me because so far this was something that I found lacking in Angular, when I wanted to target a specific DOM element, I either just didn't really know how to, or I had to accomplish it in a very round-about way by using if statements with property bindings. Maybe because you'd just do in some way with Vanilla Javascript? Perhaps there was something in our lessons that I may have missed that actually addressed this, but I do like that React's way of handling referencing seems rather similar jQuery.

- ~~React ToDo:~~
https://github.com/ReactForBeginners/exercise1-todo

* I decided to try a different tutorial for react learning.
Codecademy: lesson 1
  * JSX is an extension for Javascript, looks like HTML but is used in Javascript files
  * has to be compiled
  * expressions
  * attributes
  * can have nesting and multiple elements but there can only be one outermost element
  lesson 2
  * class is a reserved word, so you have to use className
  * in JSX, you must include the forward slash for self-closing tags
  * add curly braces (one set) to treat text as Javascript
  * when attaching an event listener, you put the function you want to call in its value
  * if statements can't be injected
  * if you need an if statement, write in on the outside.
  * ternary operator
  * .map() method reminds me of the .forEach()
  * keys are a JSX attribute, should use them if order of of list items should be remembered


## Design
 Typewolf, Beautiful Web Type, Font Pair, and Typ.io.
## Sass
https://www.youtube.com/watch?v=ok3y4E5NEmw&feature=youtu.be&list=PLriKzYyLb28nvORWgaD0hAbBcJUcsxy16
Using Epicodus's CSS course module, I decided to try to learn sass. I love styling my projects as much as I like thinking out the logic for them, and I've heard only good things about sass from my design cohorts. The idea of being able to nest my styles, or use variables especially appealed to be since I feel like a lot of my styling is incredibly repetitive but unavoidable since only there will be just the slightest variation. That may be another issue to do with the structure of my styling altogether, but none-the-less, I don't think learning sass will hurt me in the long run.

* sass --watch style.css:output.css
* @extend to apply another class's attributes
* you can create functions for sass with the @ symbol
* mixins can be used when using the same code, you can use dynamic code. which can have default values.

 https://medium.com/hello-web-design/design-for-non-designers-part-1-6559ed93ff91

## Authentication
https://auth0.com/blog/angular-2-authentication/

## The Non-Technical Side
Meeting new people, and talking about myself is something I struggle with... I have always been a little on the reserved side when it comes to socializing. I'm much better than I used to be when I was much younger, but even now, just introducing myself to strangers, or even presenting to people that I've known for some time can put me a little on the edge. From what I've seen though, so much of coding relies on community, and collaboration, so I can't help but feel encouraged to conquer my nerves and just really try to put myself out there. Since beginning Epicodus, I've tried to go to as many meet-ups as I could manage. While occasionally I did feel less like a socializer, and more like a person standing amidst of free-flowing conversations, as a whole, I really think they've helped me at least in the exposure to the faces of my community. As we approach the end of the program, I feel like I haven't been as diligent in attending them as I had been starting out. So, I've registered with the following events so that I could get back into it.

[PDX Women in Tech (PDXWIT) Fourth Annual Women + Tech Holiday Party](http://calagator.org/events/1250472834)
[PDX Women in Tech (PDXWIT) in the Creative Industry](https://www.eventbrite.com/e/pdx-women-in-tech-pdxwit-in-the-creative-industry-tickets-39661255884)

https://skillcrush.com/2016/03/29/rock-your-next-whiteboard-test/


## Live site
* Click [here](https://troubleshmup.tumblr.com) or copy the URL below into your browser:

https://troubleshmup.tumblr.com




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

-- start a blog. I was going to start a blog, but unfortunately,

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
