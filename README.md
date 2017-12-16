# Developer Reality
### A Documentation of Personal Development (_12.15.2017_)
### By Kimberly Bordon

## Description
This project is an assortment of explorations in what I feel are not necessarily my weakness but definitely subjects that I would like to devote more time to developing. As of now, most of the research and exercises put forth for these studies are notes and screenshots taken from articles, and various teaching websites' lessons.

I thought about putting it on a blog, and I did indeed create a tumblr, but in hindsight, I think I'd like to actually steer this documentation into my own rendering of a blog site. Since, I went back and forth on it from the beginning, when I finally decided to go for it, it was clear there would be no time at all for such an endeavor.
***
## Blindspots
These are the areas I decided to focus development on:

**Technical**
* How do you use **Sass**? I don't know it at all, but considering how much time I spend styling, it would likely be in my best interest to learn.
* What is **React** like? With my track, I won't be able to work with React. Since working with Angular and hearing how much the two differ, I'm curious and want to know about these frameworks compare.
* How do you **authenticate users** in Angular? I didn't get the opportunity to really study authentication using .NET either, and I want to touch on that as well.

**Non-Technical**
* How can I get better at **managing my time**? I often hyper-focus on one spec, or get easily distracted.
* How can I **present myself more confidently** in meet-ups, and white-boarding?

***
## Plan of Action
Today, I will try to work on those areas above, particularly Sass and React. In the weeks to come, these are subjects that I feel will not rank high on the priority list since I'll be instead learning the .NET framework and spending less time on code specific activities. After today, my focus will definitely fall more on the non-technical points.

For the first few hours of the day I'll divide some time amongst these areas, and then if there is enough time, I would like to document it on a blog application set up through Angular. That's the ambition anyway, if it doesn't seem like I'll have enough time, I'll likely just record it in the README.

***
## The Actual Process
* **Time Management**

  * [Habits Vs. Goals](https://www.farnamstreetblog.com/2017/06/habits-vs-goals/)

    After having read this article, I know I'm easily guilty of making goals of self-improvement and having them topple over with their top-heavy aspirations. It's funny, it seems obvious that an approach of slowly tackling your goal in more bite-sized chunks would be a natural approach, but I know I've often disregarded it, not deliberately, but just jumping headfirst into a lake of problems, not knowing what lie beneath the surface. Anyway, went a little off track there. Coming away from this article, I'm sure I can find a way to apply this to my working habits, or at the very least, I'll try.

  * [Productivity 101: A Primer to The Pomodoro Technique](https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730)

    [Marinara Timer](http://www.marinaratimer.com/)

    In an attempt to better manage my work flow, I have a browser tab opened to an online pomodoro timer.

* **React**

  * [Learn React.JS in 8 Minutes](https://medium.com/learning-new-stuff/learn-react-js-in-7-min-92a1ef023003)
    - Props: From my admittedly shallow understanding, props are immutable pieces of data that you can pass down the a hierarchy of components, very similarly to how we've been sending data down in Angular through input. Just... not with the input set up.
    -  States: The event handling so far is not too far off from what we learned in Angular, so not lost yet.
    - Refs and findDomNode: This was interesting to me because so far this was something that I found lacking in Angular, when I wanted to target a specific DOM element, I either just didn't really know how to, or I had to accomplish it in a very round-about way by using if statements with property bindings. Maybe because you'd just do in some way with Vanilla Javascript? Perhaps there was something in our lessons that I may have missed that actually addressed this, but I do like that React's way of handling referencing seems rather similar jQuery.

    * ~~React ToDo:~~
~~https://github.com/ReactForBeginners/exercise1-todo~~
This tutorial ended up being a little too advanced for me to follow, so I decided to try Codeademy instead.

* **Codecademy: First Lesson**
  * JSX is an extension for Javascript, looks like HTML but is used in Javascript files
  * has to be compiled
  * expressions
  * attributes
  * can have nesting and multiple elements but there can only be one outermost element
* **Lesson 2**
  * class is a reserved word, so you have to use className
  * in JSX, you must include the forward slash for self-closing tags
  * add curly braces (one set) to treat text as Javascript
  * when attaching an event listener, you put the function you want to call in its value
  * if statements can't be injected
  * if you need an if statement, write in on the outside.
  * ternary operator
  * .map() method reminds me of the .forEach()
  * keys are a JSX attribute, should use them if order of of list items should be remembered



* **Sass**
  * [Learn Sass in 5 Minutes](https://www.youtube.com/watch?v=ok3y4E5NEmw&feature=youtu.be&list=PLriKzYyLb28nvORWgaD0hAbBcJUcsxy16)

    Using Epicodus's CSS course module, I decided to try to learn sass. I love styling my projects as much as I like thinking out the logic for them, and I've heard only good things about sass from my design cohorts. The idea of being able to nest my styles, or use variables especially appealed to be since I feel like a lot of my styling is incredibly repetitive but unavoidable since only there will be just the slightest variation. That may be another issue to do with the structure of my styling altogether, but none-the-less, I don't think learning sass will hurt me in the long run.

  * sass --watch style.css:output.css
  * @extend to apply another class's attributes
  * you can create functions for sass with the @ symbol
  * mixins can be used when using the same code, you can use dynamic code. which can have default values.


* **Extra Design research**
  * [Design for Non-designers]( https://medium.com/hello-web-design/design-for-non-designers-part-1-6559ed93ff91)

    Typewolf, Beautiful Web Type, Font Pair, and Typ.io for fonts.


* **Authentication**
  * Check out https://auth0.com/blog/angular-2-authentication/


* **Self-Confidence**
  * [PDX Women in Tech (PDXWIT) Fourth Annual Women + Tech Holiday Party](http://calagator.org/events/1250472834)
  [PDX Women in Tech (PDXWIT) in the Creative Industry](https://www.eventbrite.com/e/pdx-women-in-tech-pdxwit-in-the-creative-industry-tickets-39661255884)

    Meeting new people, and talking about myself is something I struggle with... I have always been a little on the reserved side when it comes to socializing. I'm much better than I used to be when I was much younger, but even now, just introducing myself to strangers, or even presenting to people that I've known for some time can put me a little on the edge.

    From what I've seen though, so much of coding relies on community, and collaboration, so I can't help but feel encouraged to conquer my nerves and just really try to put myself out there. Since beginning Epicodus, I've tried to go to as many meet-ups as I could manage. While occasionally I did feel less like a socializer, and more like a person standing amidst of free-flowing conversations, as a whole, I really think they've helped me at least in the exposure to the faces of my community.

    As we approach the end of the program, I feel like I haven't been as diligent in attending them as I had been starting out. So, I've registered with the following events so that I could get back into it.

  * **White-boarding**
    * Check out this link https://skillcrush.com/2016/03/29/rock-your-next-whiteboard-test/

## Live site
* Click [here](https://troubleshmup.tumblr.com) or copy the URL below into your browser:

https://troubleshmup.tumblr.com

I made this site with the intention of documenting the process, and I probably will still use it. I would like to replace it with my own blog documentation though.

## Technology
* Angular
* Javascript
* Sass
* Many node packages that are not actually used just yet.

## Contact details
_Email Kimberly at [kbordon@gmail.com](mailto:kbordon@gmail.com) for comments, questions, or concerns._
## License
*This software is licensed under the MIT license.*

Copyright © 2017 **Kimberly Bordon**
