export interface FlairI {
    id: number;
    name: string;
    description: string;
    dankRank: number;
    suffix: string;
    contentType: string;
    borderRadius: string;
    clipStyle: number; // 0 clipped (overflow: hidden;), 1 unclipped (overflow: visible;)
}

export interface FusionI {
    id: number;
    name: string;
    description: string;

    flair: FlairI;

    content: {
        id: number;
        contract: string;
        url: string;
        offsetX: string;
        offsetY: string;
        clipStyle: number;
    }
}

export const flairpedia: FlairI[] = [
    {
        id: 0,
        name: 'Electric Flair',
        description: 'An electrifying flair that is sure to shock anyone that looks at it long enough. Electric Flair is one of the Dankest of the Dank Flairs when it comes to being rare, dank and exotic.',
        dankRank: 5,
        suffix: '.gif',
        contentType: 'image/gif',
        borderRadius: '50%',
        clipStyle: 0,
    },
    {
        id: 1,
        name: 'Electric Flair',
        description: 'An electrifying flair that is sure to shock anyone that looks at it long enough. Electric Flair is one of the Dankest of the Dank Flairs when it comes to being rare, dank and exotic.',
        dankRank: 5,
        suffix: '.gif',
        contentType: 'image/gif',
        borderRadius: '50%',
        clipStyle: 0,
    },
    {
        id: 2,
        name: 'Electric Flair',
        description: 'An electrifying flair that is sure to shock anyone that looks at it long enough. Electric Flair is one of the Dankest of the Dank Flairs when it comes to being rare, dank and exotic.',
        dankRank: 5,
        suffix: '.gif',
        contentType: 'image/gif',
        borderRadius: '50%',
        clipStyle: 0,
    }
]