const { src, dest } = require('gulp')

const image = (files) => {
    return function () {
        return src(files)
            .pipe(dest('./dist/img'))
    }
}

exports.image = image
