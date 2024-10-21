# **Week8 Assignment Reflection: Book Reviews Site 📖**

- My SQL queries are in my _lib_ file in my server

## WireFrames

![alt text](<public/Week 7 Book Nook Full Stack WireFrame.png>)
![alt text](<public/Week 7 Book Nook Full Stack WireFrame (Stretch Goals).png>)

- I actually managed to complete these goals that were stretch goals last week 🥳

## Database Schema

![alt text](<public/Week 8 Book Nook 2.0 Full Stack Supabase Schema.png>)

- I decided to challenge myself with joins and references this week so i limited each table to dealing with one entity only

## Site Link

- https://week-8-next-comment-form.vercel.app/

## Help Links

- https://www.w3schools.com/sql/sql_default.asp
- https://carlogino.com/blog/next-image-state-handling
- https://nextjs.org/docs/pages/building-your-application/styling/css-modules
- https://www.geeksforgeeks.org/sql-select-last/
- https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe

## Reflection

- I am really pleased that we got a similar project this week so I could spend more time building on a project i started last week. I kept all my planning the same and wieframes and only changed my database format and certian aspects to meet this weeks requirements
- I was able to complete all of the CRUD endpoints somewhere on my site and found the use of dynamic routes a lot easier in next.js
- I also got to revisit and put into practice some SQL topics that I wasn't feeling too confident on before like refrences, joins and updates
- Another thing that i was able to complete as opposed to last week was the 'Sort by Genre' page. I don't have hardly enough data for all the genres, but i wanted to keep the options open 😅. To check it actually works, i think 'Self Help' and 'Contemporary' have been assigned some reviews.
- I always have fun at styling but this week i wanted to spend more time on other elements so i re-used most of my styling from last week and just changed them slightly to ".module.css" that's why there is very little tailwind. I think i used it once or twice to change some font sizes.

## What bugs did I encounter? 🪲

- I had a NIGHTMARE with the delete SQL query because i didn't really make it easy for myself using seperate tables
  - After many attempts i was able to delete successfully as long as a deleted the entry from the junction table first before deleting the entry from the comments table
- **Unresoled issue:** I had this issue on friday with inamges and the _onError_ property. I had no issus with it last week however, this week, when trying to use if i had so many "404 Errors". I just used a default image for all the images as it wasn't really crucial to the functionality of the site
- I think my most common issue this weekend was manipulating the data retrieved to use it for a certain function. 'consol.loge(_typeof_ ) was definately overused
- With my update likes buttons and delete buttons I got really confused with what was meant to be a client element and a server element but I got some help to figure it our eventually
- One thing i would like to know id how to reset my comments form. I don't know if this is just a client action though because my comments form uses the server
