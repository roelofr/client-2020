module.exports = {
    files: {
        js: [
            'src/js/**/*.js',
            'vendor/**/*.js'
        ],
        jsOrder: [
            'vendor/**/*.js',
            'src/js/**/*.js',
            'src/js/*.js',
            'src/js/game.js',
        ],
        css: [
            'src/css/**/*.css',
            'vendor/**/*.css',
        ],
        html: [
            'src/index.html'
        ],
        image: [
            'src/img/mario.png'
        ],
        json: [
            'vendor/memes/meme-list.json'
        ]
    }
};
