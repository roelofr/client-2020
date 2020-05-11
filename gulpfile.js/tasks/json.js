const { src, dest } = require('gulp')

const json = (files) => {
    return function () {
        return src(files)
            .pipe(dest('./dist/memes'))
    }
}

exports.json = json
