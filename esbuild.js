import esbuild from 'esbuild';
import glob from 'glob';

const tsFolderPath = 'src/assets/ts';
const ignore = [`${tsFolderPath}/**/modules/*.ts`];
const entryPoint = glob.sync(`${tsFolderPath}/**/*.ts`, {"ignore": ignore});
const outDir = 'dist/assets/js';
const isWatch = [...process.argv].slice(2).some((item) => item === "--watch");

// options
const config = {
  entryPoints: entryPoint,
  outdir: outDir,
  bundle: true,
  platform: 'browser',
  minify: true,
  sourcemap: false, // 'inline' or 'linked'
  plugins: [{
    name: 'on-end',
    setup(build) {
      build.onEnd((result) => {
        if (result.error) {
          console.error('build failed:', result.error);
        } else {
          isWatch ? console.log('[ESbuild] watching…') : console.log('[ESbuild] build succeeded!');
        }
      })
    }
  }]
}

/**
 * watch
 */
const ctx = await esbuild.context(config);
// execute
if (isWatch) {
  await ctx.watch();
} else {
  await ctx.rebuild();
  ctx.dispose(); // To free resources
}