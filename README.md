# website
The public facing website for rust dublin

## usage
In order to build this site, run the follow commands in a terminal.
Pull requests should be made to the public branch

## pipeline
index.md is the initial file, contains basic text content and links
layout is referenced to page.njk in index.md
page.njk uses css, images and fonts. References htmlhead.njk and htmlfoot.njk and adds the logo image to the header
page.njk's layout is applied to index.md, using the template provided to make a functional html site
this site outputs to build - this is controlled by .eleventy.js. 



```sh
git clone git@github.com:rust-dublin/website.git
cd website
npm i
npx eleventy --serve
```