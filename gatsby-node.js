const path = require('path');
const config = require('./gatsby-config');
const locales = config.siteMetadata.locales
 
exports.onCreatePage = async ({ page, actions }) => {
  
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path
 
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: locales[lang].path
        }
      })

    })

    resolve()
  })
}
/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // eslint-disable-next-line
  const createProjetsFR = new Promise((resolve, reject) => {
    try {
      graphql(`
        {

          allDatoCmsProjet(
          sort: {fields: meta___updatedAt,order: DESC}
          filter: {locale: {eq: "fr"}}
          ) 
          {
            edges {
              node {
                slug
                nom
              }
            }
          }
        }
      `).then(res => {
        const projets = res.data.allDatoCmsProjet.edges;
        projets.forEach((projet, index) => {
          const previous = index === projets.length - 1 ? null : projets[index + 1].node
          const next = index === 0 ? null : projets[index - 1].node
          const { slug } = projet.node;
          createPage({
            path: `/projets/${slug}`,
            component: path.resolve('./src/templates/Projet.js'),
            context: {
              slug,
              previous,
              next,
              locale:"fr",
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

  // eslint-disable-next-line
  {/* 
  const createProjetsEN = new Promise((resolve, reject) => {
    try {
      graphql(`
        {

          allDatoCmsProjet(
          sort: {fields: meta___updatedAt,order: DESC}
          filter: {locale: {eq: "en"}}
          ) 
          {
            edges {
              node {
                slug
                nom
              }
            }
          }
        }
      `).then(res => {
        const projets = res.data.allDatoCmsProjet.edges;
        projets.forEach((projet, index) => {
          const previous = index === projets.length - 1 ? null : projets[index + 1].node
          const next = index === 0 ? null : projets[index - 1].node
          const { slug } = projet.node;
          createPage({
            path: `/en/projets/${slug}`,
            component: path.resolve('./src/templates/Projet.js'),
            context: {
              slug,
              previous,
              next,
              locale: "en",
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

*/}

  // eslint-disable-next-line
  const createActuFR = new Promise((resolve, reject) => {
    try {
      graphql(`
        {
          allDatoCmsActualite(
            sort: {fields: meta___updatedAt,order: DESC}
            filter: {locale: {eq: "fr"}}
          ) 
          {
            edges {
              node {
                slug
                titre
              }
            }
          }
        }
      `).then(res => {
      
        const news = res.data.allDatoCmsActualite.edges;
        news.forEach((item, index) => {
          const previous = index === news.length - 1 ? null : news[index + 1].node
          const next = index === 0 ? null : news[index - 1].node
          const { slug } = item.node;
          createPage({
            path: `/actualites/${slug}`,
            component: path.resolve('./src/templates/News.js'),
            context: {
              slug,
              previous,
              next,
              locale:"fr",
            },
          });
        });
        resolve();
      });
    } catch (error) {
      reject(error);
    }
  });

// eslint-disable-next-line
{/* 
const createActuEN = new Promise((resolve, reject) => {
  try {
    graphql(`
      {
          allDatoCmsActualite(
            sort: {fields: meta___updatedAt,order: DESC}
            filter: {locale: {eq: "en"}}
          ) 
          {
            edges {
              node {
                slug
                titre
              }
            }
          }
        }
    `).then(res => {
      const news = res.data.allDatoCmsActualite.edges;
      news.forEach((item, index) => {
        const previous = index === news.length - 1 ? null : news[index + 1].node
        const next = index === 0 ? null : news[index - 1].node
        const { slug } = item.node;
        createPage({
          path: `/en/news/${slug}`,
          component: path.resolve('./src/templates/News.js'),
          context: {
            slug,
            previous,
            next,
            locale: "en",
          },
        });
      });
      resolve();
    });
  } catch (error) {
    reject(error);
  }
});
*/}

  // eslint-disable-next-line
  return Promise.all([createProjetsFR, /*createActivitesEN,*/ createActuFR, /*createActuEN*/]);
};