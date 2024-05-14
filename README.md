# POSSE Demo With Micropub, Webmentions, Brid.gy, and 11ty

This is a very basic implementation of a POSSE-style microblog publishing strategy using IndieWeb principles and some IndieWeb services. 

This demo repo is the basis for some of the code references made in the May 9, 2024 version of my talk [*Digital Frontiers, IndieWeb Cowboys, and A Place Online To Call Your Own*](https://www.youtube.com/watch?v=iLxJ6PtuF9M&t=8542s), which lays out the foundations of P.O.S.S.E.-style online publishing strategy.

The talk and this repo are heavily-inspired by tireless work by some incredibly smart folks to create blog posts, other talks, and most importantly open standards and specifications of these IndieWeb technologies. This repo in particular is primarily influenced by Sia Karamalegos’ [An In-Depth Tutorial of Webmentions + Eleventy](sia.codes/posts/webmentions-eleventy-in-depth/) Max Böck’s [Using Webmentions in Eleventy](https://mxb.dev/blog/using-webmentions-on-static-sites/).

Special thanks to Aaron Parecki for inventing a ton of these services, and to Zach Leatherman for giving me a shot to give this talk at the [11ty International Symposium on Making Web Sites Real Good](https://conf.11ty.dev/).


## Getting Started

*This guide assumes you have NPM and [Netlify CLI](https://docs.netlify.com/cli/get-started/) installed.*

1. Update `package.json` to include your correct authorship and project domain information.
2. Update your `.env` file to include all the relevant tokens from Quill, Webmention.io, and GitHub, as well as the GitHub repo information and the domain again.
3. Use `netlify dev` to properly load all the serverless functions and run the 11ty development script. This is not always necessary (as opposed to running the 11ty dev script on its own), but I found it to be useful for testing the `functions/micropub.js` and `functions/deploy-succeeded.js` functions. 

## Wait Lol None Of This Works

Err. Shoot, okay... it’s possible that’s my bad. Feel free to [open an issue](https://github.com/xdesro/showbiz.baby/issues) and I'll get to it just as fast as I can.

## Works Cited

- Beekman, Robert. “Publish Articles from IA Writer to Your Static Site - Blog.” Matsimitsu.com, 27 Aug. 2020, www.matsimitsu.com/blog/2020-08-27-iawriter-micropub-netlify-static-site.

- Böck, Max. “Syndicating Content to Twitter.” Max Böck, 6 Jan. 2019, mxb.dev/blog/syndicating-content-to-twitter-with-netlify-functions/.

- ---. “Using Webmentions in Eleventy.” Max Böck, 10 Jan. 2019, mxb.dev/blog/using-webmentions-on-static-sites/.

- equilibriumuk. “Adding Webmentions in Eleventy - Equk’s Blog.” Equk.co.uk, 18 July 2023, equk.co.uk/2023/07/18/adding-webmentions-in-eleventy/.

- Karamalegos, Sia. “An In-Depth Tutorial of Webmentions + Eleventy.” Sia.codes, 22 Nov. 2019, sia.codes/posts/webmentions-eleventy-in-depth/.

- Leatherman, Zach. “Own Your Content on Social Media Using the IndieWeb.” Www.youtube.com, JAMStack TV, 17 Oct. 2019, www.youtube.com/watch?v=X3SrZuH00GQ.

- Saito, Yuya. “Indieweb: POSSE Using Eleventy and Netlify Functions.” Virga.frontendweekly.tokyo, 9 Jan. 2021, virga.frontendweekly.tokyo/posts/2021-01-09-indieweb-posse-using-eleventy-and-netlify-functions/.
