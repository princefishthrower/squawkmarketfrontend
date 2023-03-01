const path = require(`path`)

const plugins = [
  `gatsby-plugin-sass`,
  `gatsby-plugin-offline`,
  {
    resolve: `gatsby-plugin-robots-txt`,
    options: {
      host: `https://squawk-market.com`,
      sitemap: `https://squawk-market.com/sitemap-index.xml`,
      env: {
        development: {
          policy: [{ userAgent: '*', disallow: ['/'] }]
        },
        staging: {
          policy: [{ userAgent: '*', disallow: ['/'] }]
        },
        production: {
          policy: [{ userAgent: '*', allow: '/' }]
        }
      }
    }
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `
      {
        allSitePage {
          nodes {
            path
          }
        }
      }
    `,
      resolveSiteUrl: () => `https://squawk-market.com`,
      resolvePages: ({ allSitePage: { nodes: allPages } }) => {
        return allPages.map((page) => {
          return { ...page }
        })
      },
      serialize: ({ path, modifiedGmt }) => {
        return {
          url: path,
          lastmod: modifiedGmt
        }
      }
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: path.join(__dirname, `src`, `content`)
    }
  },
  {
    resolve: 'gatsby-transformer-remark'
  },
]

// don't index staging sites
if (process.env.GATSBY_ACTIVE_ENV === 'staging') {
  plugins.push({
    resolve: 'gatsby-plugin-no-index'
  })
}

module.exports = {
  plugins
}
