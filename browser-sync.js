import connectSSI from 'connect-ssi';
import bs from 'browser-sync';

const browser = bs.create();

const base = 'dist';

browser.init({
  files: [
    '/assets/**/*.css',
    '/assets/**/*.js'
  ],
  server: {
    baseDir: base,
    middleware: [
      connectSSI({
        baseDir: base,
        ext: '.html',
      })
    ]
  },
  startPath: '/'
});