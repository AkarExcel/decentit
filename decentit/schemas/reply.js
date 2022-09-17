export default {
    name: 'reply',
    title: 'Reply',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: "approved",
        title: "Approved",
        type: "boolean",
        description: "comment wouldn't show on the post without approval"
      },
      {
        name: "email",
        type: "string",
      },
      {
        name: "reply",
        type: "string"
      },
      {
        name: "comment",
        type: "reference",
        to: [{
            type: 'comment'
        }],
      },
      
    ], 
    
  }
  