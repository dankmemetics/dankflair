import fs from 'fs';
import path from 'path';
import { flairpedia } from "../../../flairpedia";

export default function Image(req, res) {
    try {
        const { id } = req.query;
        const fid = parseInt(id as string);
        const item = flairpedia[fid];

        const file = path.resolve(process.cwd(), 'public', 'flair', `${fid}${item.suffix}`);
        const buffer = fs.readFileSync(file);

        res.setHeader('Content-Type', item.contentType);
        return res.status(200).send(buffer);
    } catch (error) {
        return res.status(404).send({
            message: 'NFT Metadata not found'
        });
    }
}