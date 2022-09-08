// Make request to the sanity Api

import sanityClient  from "@sanity/client"

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN
}

const client = sanityClient(config)

export default async function createComment(req, res) {
    console.log(req.body.name)
    console.log("API")
    const {_id,name,email,comment} = req.body
    console.log(comment)
    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id,
            },
            name,
            email,
            comment,
        })
    } catch (err) {
        return (
            res.status(500).json({message: "cannot Submit comment", err}),
            console.log("error")
        )
    }
    return res.status(200).json({ message: 'Comment Submitted' })
  }
  