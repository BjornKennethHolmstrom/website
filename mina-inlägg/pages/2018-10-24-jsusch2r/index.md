---
title: "🕚 JSUsCH²R"
date: 2018-10-24
---

It started just as an excuse for the funny acronym, which stands for **J**ava**S**cript **U**nicode **S**ymbol **C**lock **H**ourly **H**abit **R**epresentation

## Project Overview

JSUsCH²R is an web application that represents daily activities using Unicode emojis. It allows users to visualize and customize their 24-hour schedule using a library of emojis.

## Key Features

🗓️ Week-long schedule representation using emojis

🎨 10 customizable color themes, including Dark Mode

📊 Time allocation chart for daily and weekly analysis

🔗 Social sharing of schedules

⏱️ Real-time clock display

📚 Customizable emoji library

✏️ Editable activities for each hour

🔄 Swipe or button to toggle time information display

📅 Select week starting day (Monday or Sunday)

❓ Help modal for easy onboarding

📱 PWA support for mobile-friendly usage

💾 Persistent local storage of schedule and preferences

🔁 "Restore Defaults" functionality for emoji library

## Current Status

🟢 Version 1.2.3 released

🟢 All planned features implemented

[🟡](https://emojipedia.org/large-yellow-circle) Make back end work as intended

## Tech Stack

- Frontend: JavaScript (React)

- State Management: React Hooks

- Styling: CSS

- Build Tool: Create React App

- Database: PostgreSQL

- Version Control: Git

- Hosting: None yet

## Recent Progress

- Implemented week-long schedule view

- Added 10 customizable color themes

- Introduced time allocation chart for analysis

- Enabled social sharing of schedules

- Implemented swipe functionality for mobile users

- Added help modal for improved user onboarding

- Created option to select week starting day

- Enhanced PWA support for better mobile experience

- Improved overall UI/UX and responsiveness

## Potential Improvements

1. Implement cloud storage for cross-device synchronization

3. Add time zone support for global users

5. Implement user accounts for enhanced personalization

7. Create more advanced data visualization for activity patterns

9. Integrate with calendar applications

11. Develop native mobile apps for iOS and Android

## Get Involved

If you have ideas for new features or improvements, or would like to help me fix any of the numerous issues please contact me through [my contact page](https://bjornkennethholmstrom.wordpress.com/contact/) or open an issue on the [GitHub repository](https://github.com/BjornKennethHolmstrom/JSUsCH2R)

## Project Goals

- Provide a fun and visually appealing way to represent daily schedules

- Offer a high degree of customization for personal expression

- Maintain a simple and intuitive user interface

- Explore creative uses of Unicode emojis in web applications

- Help users understand and optimize their time allocation

Try out JSUsCH²R on [GitHub Pages](https://bjornkennethholmstrom.github.io/JSUsCH2R/) and let me know what you think!

## ACknowledgements

- Claude 3.5 Sonnet for development assistance

- My family for infrastructure and support

#### Old version in nodejs

Here just for remembrance, is the first version I made, years ago.

```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  var schedule = ["😴","😴","😴","😴","😴","😴", // hours 00-06
                  "🧘","🍵","🎨","👔","🎮","🎶", // hours 06-12
                  "🍲","📷","👔","💻","📝","🥗", // hours 12-18
                  "🚶","💪","🤗","📖","😴","😴"];// hours 18-24
  var date = new Date();
  var current_hour = date.getHours();
  res.end(schedule[current_hour]);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
