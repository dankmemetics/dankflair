import { flairpedia } from "../../../flairpedia";

export default function Image(req, res) {
    try {
        const { id } = req.query;
        const fid = parseInt(id as string);
        const item = flairpedia[fid];

        return res.status(200).send(item);
    } catch (error) {
        return res.status(404).send({
            message: 'NFT Metadata not found'
        });
    }
}