import prisma from '../../prisma/prisma';

export default async function MintNFT(req, res) {
    const {
        id,
        name,
        owner,
        description,
        dankId,
        fusionUrl,
        fusionContract,
        fusionId,
        fusionX,
        fusionY,
        fusionClip,
    } = req.body;

    const result = await prisma.dankFusion.create({
        data: {
            id,
            name,
            owner,
            description,
            dankId,
            fusionUrl,
            fusionContract,
            fusionId,
            fusionX,
            fusionY,
            fusionClip,
        }
    })

    return res.json(result);
}