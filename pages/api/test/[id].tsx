export default function Image(req, res) {
    try {
        const { id } = req.query;

        return res.status(200).send({
            id,
            name: 'Test NFT',
            description: 'Test NFT for Dank Flair',
            image: `https://dankflair.cloud/test/${id}.png`
        })
    } catch (error) {
        return res.status(404).send({
            message: 'Test NFT Metadata not found'
        });
    }
}