import fs from 'fs';
import path from 'path';

export default function Image(req, res) {
    try {
        const { id } = req.query;

        const file = path.resolve(process.cwd(), 'public', 'test', `${id}.png`);
        const buffer = fs.readFileSync(file);

        res.setHeader('Content-Type', 'image/png');
        return res.status(200).send(buffer);
    } catch (error) {
        return res.status(404).send({
            message: 'Test NFT Metadata not found'
        });
    }
}