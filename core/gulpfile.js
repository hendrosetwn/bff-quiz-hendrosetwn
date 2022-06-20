/* Ini adalah file gulpfile.js yang akan mengolah dan menggabungkan semua file HTML, CSS, dan JS yang kita punya */

/* Berikut ini adalah variabel-variabel yang dibutuhkan oleh gulpfile.js */
/* List di bawah ini tidak perlu dirubah */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require("gulp-uglify");
const injectPartials = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const path = require('path');
const clean = require('gulp-clean');
const runs = require('run-sequence');
const log = require('fancy-log');

/* Semua hasil "olahan" gulp akan disimpan di folder public */
const targetPath = "../public";

/* Apa saja file yang perlu diolah? Kita mau semua file SCSS dan file Javascript. 
   Caranya kita "daftarkan" file-file tersebut dengan cara di bawah ini. */
const paths = {
  sass:
    {
      main:
        [
          'sass/*.scss' // Artinya: semua file .scss di dalam folder sass
        ]
    },       
  js:
    {
      app:
        [
          'script/*.js' //Artinya: semua file .js di dalam folder script
        ]
    }
};

/* Gulp melakukan banyak "tugas" atau task yang perlu kita tentukan, yaitu di bawah ini */

/* === Task Cleaner Start === */
/* Setiap kita melakukan perubahan, gulp akan "menghapus" file CSS dan JS yang ada.
   Lalu gulp akan "menimpa" file CSS dan JS tersebut dengan yang baru.
   Proses ini kita sebut "cleaner" dengan kata lain pembersihan.
*/

/* Clean CSS main */
/* Di bawah ini adalah pembersihan file CSS */
function clean_sass_main() {
  return gulp.src([
    (targetPath + '/assets/css/main.css'), 
    (targetPath + '/assets/css/maps/main.css.map')
    ], {read: false, allowEmpty: true})
  .pipe(clean({force: true}));
}
/* Clean JS App */
/* Di bawah ini adalah pembersihan file JS */
function clean_js_app() {
  return gulp.src([
    (targetPath + '/assets/js/*.js')
    ], {read: false, allowEmpty: true})
  .pipe(clean({force: true}));
}

/* Pembersihan CSS & JS selesai */
/* === Task Cleaner End === */

/* Task for CSS main.css */
/* Proses selanjutnya, gulp akan membaca semua file .scss di dalam folder SASS
   dan menggabungkannya atau mengolahnya menjadi 1 file .css
   Kenapa .scss perlu dirubah menjadi .css?
   Karena browser hanya mengenali file .css, bukan file .scss
*/
function sass_main() {
  return gulp.src(paths.sass.main)
    .pipe(concat('main.css'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error scss', sass.logError))
    .pipe(postcss([cssnano()]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest(targetPath + '/assets/css'))
    .pipe(browserSync.stream())
}

/* Task for JS app */
/* Proses selanjutnya, gulp akan membaca semua file .js di dalam folder script 
   dan menggabungkannya atau mengolahnya menjadi 1 file .js */
function js_app() {
  return gulp.src(paths.js.app, { sourcemaps: true })
    .pipe(concat('app.min.js'))
    // .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest(targetPath + '/assets/js', { sourcemaps: true }))
    .pipe(browserSync.stream())
}

function js_module() {
  return gulp.src('./script/parts/*.js', { sourcemaps: true })
    .pipe(concat('_utils.js'))
    // .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('./script', { sourcemaps: true }))
    .pipe(browserSync.stream())
}

/* Task HTML Build */
/* Proses selanjutnya, gulp akan menggabungkan penggalan-penggalan HTML yang ada di folder pages
   sehingga menjadi file HTML yang utuh
*/
function html() {
  return gulp.src(("views/pages/*.html"))
    .pipe(injectPartials({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest((targetPath)))
    .pipe(browserSync.stream())
}

/* Task Watch */
/* Setiap ada perubahan pada SCSS dan JS, gulp akan dijalankan secara otomatis 
   sehingga proses pembersihan & pengolahan yang dijelaskan sebelumnya
   akan dijalankan setiap kita melakukan perubahan
*/
function watcher() {
  gulp.watch('sass/**/*', gulp.series('sass_main'));
  gulp.watch(paths.js.app, gulp.series('js_app'));
}

/* Task BrowserSync */
/* Setiap ada perubahan pada file HTML, gulp akan dijalankan secara otomatis 
   dan browser akan refresh secara langsung
*/
function initBrowserSync() {
  browserSync.init({
    server: {
      baseDir: [(targetPath)]
    }
  });

  gulp.watch('views/**/*.html', gulp.series(html));
}

/* Task List */
/* Saat gulp pertama kali dijalankan, kita tentukan gulp untuk menjalankan task
   pengolahan CSS dan JS
*/
gulp.task('sass_main', gulp.series(clean_sass_main, sass_main));
gulp.task('js_app', gulp.series(clean_js_app, js_module, js_app));

/* === Init Task === */
gulp.task('init', gulp.parallel('sass_main', 'js_app'));



/* Yang kita perlu lakukan hanyalah mengetik command "gulp" di terminal
   Dan semuanya akan dijalankan secara otomatis :)
*/
exports.default = gulp.parallel('init', html, watcher, initBrowserSync);