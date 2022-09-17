export default {
    name: "serviceImage",
    title: "service image",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'title',
            title: 'Title',
            type: 'string',
          },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
    ]

}