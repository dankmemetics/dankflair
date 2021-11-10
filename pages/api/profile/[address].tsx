import prisma from '../../../prisma/prisma';

export default async function Profile(req, res) {
    const { address } = req.query;

    try {
        const results = await prisma.dankFlair.findMany({
            where: { owner: address },
        });

        return res.json(results);
    } catch (error) {
        return res.status(500).send({
            message: 'Profile Metadata not found',
            error,
        });
    }
}