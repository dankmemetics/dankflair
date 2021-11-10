import prisma from '../../../../prisma/prisma';

export default async function DankfusionID(req, res) {
    const { id } = req.query;

    try {
        const results = await prisma.dankFusion.findUnique({
            where: { id: parseInt(id) },
        });

        return res.json(results);
    } catch (error) {
        return res.status(500).send({
            message: 'Dank Fusion Metadata not found',
            error,
        });
    }
}