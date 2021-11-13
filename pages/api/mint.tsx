import prisma from '../../prisma/prisma';

/*
    @Minting Schema
    -----
    owner           String
    name            String
    description     String
    dankId          Int
    mintContract    String
    mintUrl         String
    mintId          Int
    mintKey         String
*/

export default async function MintNFT(req, res) {
    const {
        owner,
        name,
        description,
        dankId,
        mintContract,
        mintUrl,
        mintId,
        mintName,
        mintKey,
    } = req.body;

    const result = await prisma.dankFusion.create({
        data: {
            owner,
            name,
            description,
            dankId,
            mintContract,
            mintUrl,
            mintId,
            mintName,
            mintKey,
        }
    })

    return res.json(result);
}