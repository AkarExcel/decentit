export default {
    name: 'service',
    title: 'Service',
    type: 'document',
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
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 150,
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{type: 'reference', to: {type: 'serviceImage'}}],
      },
    ],
  }
  