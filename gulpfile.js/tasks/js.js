const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const order = require('gulp-order');

const js = (files, fileOrder) => {
    return function () {
        return src(files)
            .pipe(order(fileOrder, { base: './' }))
            .pipe(concat('app.js'))
            .pipe(dest('./dist'))
    }
}

exports.js = js
