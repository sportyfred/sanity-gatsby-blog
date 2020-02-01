export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e35fac9d14944ca941f0e14',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2x19srtv',
                  apiId: 'c4cabdd9-fc45-4704-81da-52133cf0683d'
                },
                {
                  buildHookId: '5e35fac9d14944f2cc1f0dff',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-q8s4ux6c',
                  apiId: '491d2650-63e2-4b7c-914e-8de128715218'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-q8s4ux6c.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
