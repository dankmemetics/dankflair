import prisma from '../../../../prisma/prisma';

export default async function DankflairID(req, res) {
    const { id } = req.query;

    try {
        const results = await prisma.dankFlair.findUnique({
            where: { id: parseInt(id) },
        });

        return res.json(results);
    } catch (error) {
        return res.status(500).send({
            message: 'Dank Flair Metadata not found',
            error,
        });
    }
}