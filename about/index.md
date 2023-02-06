---
title: About Me
layout: layouts/base.njk
---

   <h1>About Patrick Doran</h1>
          img(class="w-36 h-36" loading="lazy" alt="photo of Patrick Doran where he's looking a little bored, if I'm behing honnest" src="patrick-doran-looking-too-serious.jpg")
          em Photo credit, Johnathan Phillips
          p Patrick

          h3 About this site
          p PatrickDoran.com has been live on the internet since #{yearSince}. According to the Node server that generated this page, that's close to #{yearsLive} years! PatrickDoran.com is usually in handcrafted HTML, but was for a short time built in unironically with Flash. This particular iteration went live in 2022.
            ul 
              li The CSS for the most part is 
                |
                a(href='https://Tailwindcss.com' target='_blank' rel='noreferrer') Tailwind.css
                |  a very fast, framework that looks great and loads so fast. Go ahead and <a href="https://pagespeed.web.dev/report?url=https://patrickdoran.com/" target="_blank">run PageSpeed Insights</a> on it. I'll wait.
              li This markup is built in Pug, and served via Node and Express.
              li It utilizes fonts already installed on your device, because who has time to wait? 
              li A service worker is utilized in case you go offline. This is a Progessive Web App (PWA).
