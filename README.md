# Build a Portfolio With React in Under an Hour

Workshop @ Hack the 6ix 2023

[Slideshow](https://docs.google.com/presentation/d/e/2PACX-1vShryHWf99RJhrW0zrSOQT2vt9SbBA2PWFqWGUrOn5_lIx0LgWcRm0PGqpTCDBjsYRiiwlb1ycqhoN_/pub?start=false&loop=true&delayms=3000)

## Description

You'll follow along and build your own portfolios that showcase your projects in under an hour. The portfolio will include a short intro section, a projects section, and a contact form. The site will be built with React, you'll push your code to GitHub, and deploy your site with Vercel.

## Setup

1. Download [Node.js](https://nodejs.org/en)
2. Fork this repository
3. Clone your fork to your local machine
4. Install packages with `npm install`

## Contact Form Email Integration

1. Sign up for an [EmailJS](https://www.emailjs.com/) account
2. Create a new email service and connect it with your email account
3. Copy your user Public Key from the Account settings for later
4. Copy the Service ID for later
5. Create an email template and copy the Template ID for later
6. Copy the following into the Content section of the template
```
From: {{ name }}

Email: {{ email }}

Message: {{ message }}
```

## Run the App

1. Run the app using `npm start`
2. Open http://localhost:3000/ in your browser to view the app

## Deploy to Vercel

We'll go over this during the workshop.
