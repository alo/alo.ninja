const { MinifyHtml } = require('scully-minify-html');
const { DisableAngular } = require('scully-disable-angular');

const postRenderers = [MinifyHtml, DisableAngular];

exports.config = {
  projectRoot: './src',
  defaultPostRenderers: postRenderers,
  projectName: 'ssrtest',
  outDir: './dist/static',
  routes: {
    // '/blog/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: './blog'
    //   }
    // },
    '/projects/:projectId': {
      type: 'json',
      projectId: {
        url: 'https://www.coderty.com/projects.json',
        property: 'projectId'
      }
    }
  }
};
