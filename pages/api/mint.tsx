import prisma from '../../prisma/prisma';

export default async function MintNFT(req, res) {
    const {
        nftId,
        name,
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
            nftId,
            name,
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