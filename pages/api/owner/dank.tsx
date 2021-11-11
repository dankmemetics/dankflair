import prisma from '../../../prisma/prisma';

export default async function DankflairIDAll(req, res) {
    try {
        const results = await prisma.dankFlair.findMany();

        return res.json(results);
    } catch (error) {
        return res.status(500).send({
            message: 'Dank Flair Metadata not found',
            error,
        });
    }
}