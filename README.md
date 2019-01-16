# The purpose of this project is to test out continuous deployment on [netlify](https://www.netlify.com/) with a [Hugo](https://gohugo.io/) site
- This is a simple Hugo Project. I create a site, a very tiny one. It contains only one page that display all my favourite links on the internet. 
- That tiny home page render data from a Google sheet which contain all my favourites on the internet. 
- This is how the site looks like. [You can visit the site on this address](https://viksaas.netlify.com/)
- This is the spreadsheet the site is generated from. [Here is the link to the spreadsheet](https://drive.google.com/open?id=1MGUALaxpQ8yfZgCP4q0OJ0Bz5rul_kIs)

##  Here is the user interaction to update the site with new data from the spreadsheet
- user edit the spreadsheet
- the user push a button on an Android device that I have made with ifttt. the button triggers a deploy on netlify
  - More aboute the button I explain later on.

## Here is the algorithm how it works. 
- On build time the script **index.js** in home directory does this:
    - Fetc data from spredsheat above and convert it to a JSON file.
    - Automaticaly place JSON in HUGO data folder **./data/bookmark.json**
    - And finally at the end we build the project.
- That means every time we build the project, the site is updated according to the spreadsheet.

## Build comand
- If dependensies is not installed then first runn
> npm init
- Build command
> npm start

## ifttt button
- To be able to make the button, I made a [incoming webhook in netlify](https://www.netlify.com/docs/webhooks/) to trigger a deploy
- Here is the [link to the documentation](https://vninja.net/2018/12/13/netlify-webhooks/) that describe how to make a button in iftt to trigger a webhook.
