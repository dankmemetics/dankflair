import prisma from '../../../prisma/prisma';

export default async function Profile(req, res) {
    const { address } = req.query;

    try {
        const dankFlairs = await prisma.dankFlair.findMany({
            where: { owner: address },
        });

        const dankFusions = await prisma.dankFusion.findMany({
            where: { owner: address },
        })

        return res.json({
            dankFlairs,
            dankFusions,
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Profile Metadata not found',
            error,
        });
    }
}