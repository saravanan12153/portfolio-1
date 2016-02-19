# My Portfolio

_Check out my super simple portfolio [here](http://jonsamp.github.io/portfolio/#/)._

This is my portfolio. It is really simple, because I think portfolios *should* be simple. I could make a lot of fancy transitions, with big photos of work I've done, but I've decided not to, at least for now. The goal right now is to show you what matters, which is where I work, and a project that I am proud of named Givvy. I would show you pictures of Givvy, but I'd rather just let you check it out on the open web.

I also included a link to my Github, and my Medium. You can see my writing in code and my writing outside of code. Both are important.

I want to add more to my portfolio in the future, since right now it is more like a business card. Actually, there isn't even a phone number or email on there. So, it's more like a business card that's been ripped in half. I know you aren't worried, but if you are, don't. I have plans to put more on my portfolio in the future. Looking at this thing straight on, it's pretty barbones.

## Technologies
This is made with AngularJS, one of my favorite frameworks to work with. I also generated most of the project with Yeoman's [yo angular generator](https://github.com/yeoman/generator-angular). If you haven't checked out Yeoman, it teleports you to the fun part of coding.

In addition, the data you see is being served by [Firebase](https://www.firebase.com), which is a great solution for maintaining a database that can bind to an Angular app, and even update it in real time with its three-way data binding. This portfolio doesn't  use the data binding in any real way, but it's nice to know it's there.

Lastly, this app is built and served with [Grunt](http://gruntjs.com).

## Thoughts
I should add that this project (right now) has no business being a full fledged AngularJS/Firebase app. Right now, it's like I bought a Ferrari to drive around my cul-de-sac. I *could* have made this with only HTML and CSS, but I went with AngularJS for a few reasons:

1. The problem with Portfolio's is that they go out of date quickly, and remembering to update them is hard. —AngularJS can help here, as I can abstract out the data (as you can see, I have the portfolio.json, which is a replica of what is stored in a Firebase db), and edit it from afar, without mucking through the HTML every time.
2. I want to teach people how to use AngularJS, so this little thing will one day become a fun tutorial for someone looking to learn AngularJS, and to showcase their work.
3. And I just love AngularJS :heart_eyes:.

## How to play

1. Download the zip.
2. Unpack it.
3. `cd` into it, then run `grunt serve` to preview.

## How to deploy
1. Use `grunt build` to minify, and create a dist directory.
2. Then, `grunt buildcontrol:pages` to push to gh-pages branch. (Check out [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control))
