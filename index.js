const PORT = 9000
const axios = require('axios')
const cheerio = require('cheerio')
const { find } = require('domutils')
const express = require('express')

const app = express()

const url = 'https://www.nbhttps://www.nba.com/schedule?cal=all&pd=false&region=1a.com/stats/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []

        $('Los Angeles Lakers', html).each(function() {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
    })
    console.log(articles)
}).catch(err => console.log(err))

app.listen(PORT, () => console.log('server running on PORT ${PORT}'))

