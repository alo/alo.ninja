exports.config = {
  projectRoot: './src',
  projectName: 'ssrtest',
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
    '/projects/:projectId': {
      type: 'json',
      projectId: {
        url: 'https://www.coderty.com/projects.json',
        property: 'projectId'
      }
    }
  }
};
