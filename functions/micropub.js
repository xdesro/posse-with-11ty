const querystring = require("node:querystring");
const slugify = require("@sindresorhus/slugify");

// Use GitHub's Octokit and a plugin to commit our newly created posts to a repo
let { Octokit } = require("@octokit/rest");
Octokit = Octokit.plugin(require("octokit-commit-multiple-files"));
const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const getURLDate = (str) => {
  const time = str.toLocaleString("sv-SE", {
    timeZone: "America/Denver",
    hour12: false,
  });
  return time;
};

exports.handler = (event, context, callback) => {
  // Check if request matches token we expect from Quill.
  if (
    !event.headers["authorization"] ||
    event.headers["authorization"] != "Bearer " + process.env.QUILL_TOKEN
  ) {
    // Respond with 401 Unauthorized and some debugging messaging
    return callback(null, {
      statusCode: 401,
      body: "Looks like you don't have the right bearer token, dorkboy.",
    });
  }
  // Get the content of the post out
  const { content } = querystring.parse(event.body);
  // Get the time the build is occurring for frontmatter and filenaming
  const date = new Date();
  const filename = slugify(getURLDate(date));

  // Convert date and content into Markdown template
  const template = `---
date: ${date.toISOString()}
---
${decodeURIComponent(content)}`;

  // Create files in repo
  return octokit
    .createOrUpdateFiles({
      owner: process.env.GITHUB_USERNAME,
      repo: process.env.GITHUB_REPO_NAME,
      branch: "main",
      changes: [
        {
          message: `📝 - Adding note: ${filename}`,
          files: {
            // Create our markdown file in the content directory
            [`notes/${filename}.md`]: {
              contents: Buffer.from(template).toString("base64"),
            },
            // Create a JSON file that indicates our most-recently-published file.
            // (Used in the deploy-succeeded function)
            "functions/micropub-latest.json": `{ "latest": "notes/${filename}.md" }`,
          },
        },
      ],
    })
    .then((response) => {
      // Return the 201 Created response and the location of the newly-created post
      // This actually expects a more specific location than the /notes path, so
      // that's one enhancement that could be made.
      // https://www.w3.org/TR/micropub/#h-response
      callback(null, {
        statusCode: 201,
        headers: {
          Location: `http://${process.env.DOMAIN_NAME}/notes`,
        },
      });
    })
    .catch((error) => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
