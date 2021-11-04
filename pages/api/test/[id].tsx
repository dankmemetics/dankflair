import fs from 'fs';
import path from 'path';
import { flairtest } from "../../../flairtest";

export default function Image(req, res) {
    const { id } = req.query;
    const fid = parseInt(id as string);
    const item = flairtest[fid];

    const file = path.resolve(process.cwd(), 'public', 'test', `${fid}${item.suffix}`);
    const buffer = fs.readFileSync(file);

    try {
        res.setHeader('Content-Type', item.contentType);
        return res.status(200).send(buffer);
    } catch (error) {
        return res.status(404).send({
            message: 'NFT Metadata not found'
        });
    }
}