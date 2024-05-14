exports.handler = async (event, context, callback) => {

  // Grab the latest-created file and convert it to latest-created URL
  const { latest } = require("./micropub-latest.json");
  const latestPublishedUrl = `https://${process.env.DOMAIN_NAME}/${latest.replace(
    ".md",
    "/"
  )}`;
  try {
    // Create our POST request to brid.gy asking them to syndicate to Mastodon.
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("target", "https://brid.gy/publish/mastodon");
    urlencoded.append("source", latestPublishedUrl);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    const response = await fetch(
      "https://brid.gy/publish/webmention",
      requestOptions
    );
    
    return callback(null, {
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
    return callback(null, {
      statusCode: 400,
    });
  }
};
