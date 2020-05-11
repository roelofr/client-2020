const {src, dest} = require('gulp');
const concat = require('gulp-concat');

const css = (files) => {
    return function () {
        return src(files)
            .pipe(concat('style.css'))
            .pipe(dest('./dist'))
    }
}

exports.css = css
