export interface FlairI {
    id: number;
    name: string;
    image: string;
    description: string;
    dankRank: number;
    suffix: string;
    contentType: string;
    borderRadius: string;
    clipStyle: number; // 0 clipped (overflow: hidden;), 1 unclipped (overflow: visible;)
}

const generics = [
    {
        name: 'Electric Flair',
        description: 'An electrifying flair that is sure to shock anyone that looks at it long enough. Electric Flair is one of the Dankest of the Dank Flairs when it comes to being rare, dank and exotic.',
        dankRank: 5,
        suffix: '.gif',
        contentType: 'image/gif',
        borderRadius: '50%',
        clipStyle: 0,
    },
    {
        name: 'Gold Standard',
        description: 'The Gold Standard of Dank Flairs. A sleek, rounded gold coin to mint your Rare, Dank, Exotic NFT with. The Gold Standard is sure to impress anyone who lays eyes on it.',
        dankRank: 4,
        suffix: '.png',
        contentType: 'image/png',
        borderRadius: '50%',
        clipStyle: 0,
    },
    {
        name: 'Tokyo Smoke',
        description: 'Catch the glance of any NFT Collector with the Tokyo Smoke. Tokyo Smoke will certainly add a Dank Aesthetic to any NFT you mint it with. A must have rare, exotic flair for those who love all things Japan.',
        dankRank: 3,
        suffix: '.gif',
        contentType: 'image/gif',
        borderRadius: '50%',
        clipStyle: 0,
    },
    {
        name: 'UFO Glow',
        description: 'UFO Glow is a tantalizing eye catching purple glowing circle to add to your flairs. Make your NFT beam with alien goodness using the UFO Glow flair. For those who love the allure of UFOs and aliens.',
        dankRank: 5,
        suffix: '.gif',
        contentType: 'image/gif',
        borderRadius: '50%',
        clipStyle: 0,
    },
    {
        name: 'Silver Coin',
        description: 'The Silver Coin. An appealing rounded silver coin to mint your Rare, Dank, Exotic NFT with. The Silver Coin is perfect for those who appreciate the aesthetic of silver over gold.',
        dankRank: 2,
        suffix: '.png',
        contentType: 'image/png',
        borderRadius: '50%',
        clipStyle: 0,
    }
]

export const flairpedia: FlairI[] = [];

for (let i = 0; i < 25; i++) {
    if (i < 5) {
        flairpedia.push({
            id: i,
            image: `https://dankflair.cloud/flair/${i}${generics[0].suffix}`,
            ...generics[0],
        });
    } else if (i < 10) {
        flairpedia.push({
            id: i,
            image: `https://dankflair.cloud/flair/${i}${generics[1].suffix}`,
            ...generics[1],
        });
    } else if (i < 15) {
        flairpedia.push({
            id: i,
            image: `https://dankflair.cloud/flair/${i}${generics[2].suffix}`,
            ...generics[2],
        });
    } else if (i < 20) {
        flairpedia.push({
            id: i,
            image: `https://dankflair.cloud/flair/${i}${generics[3].suffix}`,
            ...generics[3],
        });
    } else if (i < 25) {
        flairpedia.push({
            id: i,
            image: `https://dankflair.cloud/flair/${i}${generics[4].suffix}`,
            ...generics[4],
        });
    } else {
        flairpedia.push({
            id: i,
            image: `https://dankflair.cloud/flair/${i}${generics[0].suffix}`,
            ...generics[0],
        });
    }
}