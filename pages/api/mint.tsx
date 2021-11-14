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
    mintWidth       Int
    mintHeight      Int
    mintX           Int
    mintY           Int
    mintBorder      String
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
        mintWidth,
        mintHeight,
        mintX,
        mintY,
        mintBorder,
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
            mintWidth,
            mintHeight,
            mintX,
            mintY,
            mintBorder,
        }
    })

    return res.json(result);
}