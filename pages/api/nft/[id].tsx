import NextCors from 'nextjs-cors';
import { flairpedia } from "../../../flairpedia";

export default async function Image(req, res) {
    try {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200,
        });

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