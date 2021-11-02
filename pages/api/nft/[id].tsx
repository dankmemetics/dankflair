import { flairpedia } from "../../../flairpedia";

export default function Metadata(req, res) {
    const { id } = req.query;
    const fid = parseInt(id as string);

    try {
        return res.status(200).send(flairpedia[fid]);
    } catch (error) {
        return res.status(404).send({
            message: 'NFT Metadata not found'
        });
    }
}