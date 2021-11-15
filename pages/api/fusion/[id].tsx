import NextCors from 'nextjs-cors';
import prisma from '../../../prisma/prisma';

export default async function DankfusionID(req, res) {
    const { id } = req.query;

    try {
        await NextCors(req, res, {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200,
        });

        const results = await prisma.dankFusion.findFirst({
            where: { mintId: parseInt(id) },
        });

        return res.json(results);
    } catch (error) {
        return res.status(500).send({
            message: 'Dank Fusion Metadata not found',
            error,
        });
    }
}