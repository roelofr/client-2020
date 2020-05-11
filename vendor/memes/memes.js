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
