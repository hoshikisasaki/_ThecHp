const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");






gulp.task("default", function() {
  // style.scssファイルを取得
  return gulp.watch("/src/scss/*.scss",function() {
  return (
    gulp.src("/src/scss/*.scss")
      // Sassのコンパイルを実行
     .pipe(
        sass({
          outputStyle: "expanded"
        })
    // Sassのコンパイルエラーを表示
     .on("error", sass.logError)
      )
      // プレフィックスのオプションはpackage.jsonに記載
      .pipe(postcss([
        autoprefixer({
          cascade: false
        })
      ]))
      // cssフォルダー以下に保存 gulpファイルからみた階層
      .pipe(gulp.dest("/public/css"))
  );
});});
// ページ固有のscssファイルの
gulp.task("default", function() {
  // style.scssファイルを取得
  return gulp.watch("/src/scss/page/*/*.scss",function() {
 
  return (

    gulp.src("/src/scss/page/*/*.scss")
      // Sassのコンパイルを実行
     .pipe(
        sass({
          outputStyle: "expanded"
        })
    // Sassのコンパイルエラーを表示
     .on("error", sass.logError)
      )
      // プレフィックスのオプションはpackage.jsonに記載
      .pipe(postcss([
        autoprefixer({
          cascade: false
        })
      ]))
      // cssフォルダー以下に保存 gulpファイルからみた階層
      .pipe(gulp.dest("/public/css/'"))
  );
});});

