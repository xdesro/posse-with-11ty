// Grab our webmentions from webmention.io as JSON and make them 
// available to the 11ty data cascade.
module.exports = async function() {
    const token = process.env.WEBMENTION_IO_TOKEN
    const domain = process.env.DOMAIN_NAME
    const url = `https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}`

    try {
        const response = await fetch(url)
        if (response.ok) {
            const feed = await response.json()
            return feed.children
        }
    } catch (err) {
        console.error(err)
        return null
    }
}