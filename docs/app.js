/**
* Een constructor function is ook toegestaan.
**/
class Meme {

    constructor(memeList) {
        if (!memeList || !Array.isArray(memeList) || memeList.length === 0) {
            throw Error('Invalid meme list provided')
        }

        this.memeList = memeList
        this.cursor = 0
    }

    getNextMeme () {
        const meme = this.memeList[this.cursor]
        this.cursor++
        if (this.cursor >= this.memeList.length) {
            this.cursor = 0
        }
        return meme
    }

    searchMeme (search) {
        const results = []
        search = `${search}`.trim().toLowerCase()
        this.memeList.forEach((meme) => {
            // Skip invalids
            if (!meme.name) {
                return
            }

            // Find meme
            const memeName = String(meme.name).toLowerCase()
            if (memeName.indexOf(search) !== -1) {
                results.push(meme)
            }
        })

        return results

    }
}

const Mario = (function ($) {

    //opdracht voor student
    // welke dan?

})(jQuery);

const SPA = (function ($) {

    const Game = (function ($) {
        let meme = null
        let score = 0
        let memeBox = null

        const getMemes = function () {
            // THIS DOES NOT WORK ON LOCALHOST >:( !!!!
            return $.ajax('memes/meme-list.json')
                .then(data => {
                    if (data.success && data.data && data.data.memes) {
                        return data.data.memes
                    }
                    throw Error('No memes :(')
                })
        }

        const marioClick = function () {
            // Raise score
            score++
            scoreBox.text(score)

            // Add meme
            const newMeme = meme.getNextMeme()
            const template = `
            <li>
                <img src="${newMeme.url}" alt="${newMeme.name}" />
            <li>
            `
            $(template).appendTo(memeBox)
        }

        const init = function () {
            getMemes()
                .then((memes) => (meme = new Meme(memes)))
                .catch((error) => {
                    // XHR REQUEST DOES NOT WORK ON FILE:// URLS
                    meme = new Meme([
                        {
                            "id": "181913649",
                            "name": "Drake Hotline Bling",
                            "url": "https://i.imgflip.com/30b1gx.jpg",
                            "width": 1200,
                            "height": 1200,
                            "box_count": 2
                        },
                        {
                            "id": "87743020",
                            "name": "Two Buttons",
                            "url": "https://i.imgflip.com/1g8my4.jpg",
                            "width": 600,
                            "height": 908,
                            "box_count": 2
                        }
                    ])
                })

            memeBox = $('#memes').eq(0)
            scoreBox = $('#score').eq(0)
            $('#mario').click(marioClick)
        }

        return { init: init }
    })($)

    const init = () => {
        // todo
        Game.init()
    }

    return { init }

})(jQuery)
