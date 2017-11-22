const labels = [
  'Don\'t know it',
  'Read about it in an article',
  'Tried it out once / made a tutorial',
  'Made a deeper investigation or tryout project',
  'Used it once at work',
  'Daily business',
  'I\'m an expert'
]

export default {
  meta: {
    subject: {
      name: 'Marius Rickenbacher'
    }
  },
  config: {
    labels
  },
  data: {
    areas: [
      {
        name: 'area 1',
        subAreas: [
          {
            name: 'subarea 1',
            items: [
              {
                name: 'item 1',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 2',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 3',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              }
            ]
          },
          {
            name: 'subarea 2',
            items: [
              {
                name: 'item 1',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 2',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 3',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              }
            ]
          }
        ]
      },
      {
        name: 'area 2',
        subAreas: [
          {
            name: 'subarea 1',
            items: [
              {
                name: 'item 1',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 2',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 3',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              }
            ]
          },
          {
            name: 'subarea 2',
            items: [
              {
                name: 'item 1',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 2',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              },
              {
                name: 'item 3',
                rating: Math.floor(Math.random() * 7),
                projectLink: 'www.gwildu.ch',
                repoLink: 'www.gwildu.ch'
              }
            ]
          }
        ]
      }
    ]
  }
}
