export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ec3ec5678ebf4df1fda7739',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w4bm4if2',
                  apiId: 'db032126-8139-439b-a179-2137e3c3f198'
                },
                {
                  buildHookId: '5ec3ec565f647b0831ff6ace',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ca2gn1sf',
                  apiId: '9432251e-1b63-4cc2-9506-efe11dbf602f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ca2gn1sf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
