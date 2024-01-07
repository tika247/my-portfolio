module.exports = {
  plugins: [
    require('autoprefixer')(),
    require('postcss-normalize')(),
    require('cssnano')(),
    require('postcss-normalize-charset')(),
  ]
}