const { src, dest } = require('gulp')

const html = (files) => {
    return function () {
        return src(files)
            .pipe(dest('./dist'))
    }
}

// Fix for broken index.js
exports.js = html
