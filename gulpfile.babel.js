import gulp from "gulp";
import del from "del";
// import uglify from "gulp-uglify";
import sass from "gulp-sass";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";
import bro from "gulp-bro";
import babelify from "babelify";

sass.compiler = require("node-sass");

const routes = {
  css: {
    watch: "src/scss/**/*.scss",
    src: "src/scss/styles.scss",
    dest: "dist/css"
  },
  js:{
    watch: "src/js/**/*.js",
    src: "src/js/main.js",
    dest: "dist/js"
  }
};

const styles = () =>
  gulp
    .src(routes.css.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        flexbox: true,
        grid: "autoplace"
      })
    )
    .pipe(minify())
    .pipe(gulp.dest(routes.css.dest));

const programing = () =>
    gulp
      .src(routes.js.src)
      .pipe(bro({
        transform: [
          babelify.configure({ presets: ['@babel/preset-env'] }),
          [ 'uglifyify', { global: true } ]
        ]
      }))
      .pipe(gulp.dest(routes.js.dest));

const watch = () =>{
  gulp.watch(routes.js.watch,programing)
  gulp.watch(routes.css.watch, styles)
};

const clean = () => del(["dist/"]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles,programing]);

const live = gulp.parallel([watch]);

export const dev = gulp.series([prepare, assets, live]);