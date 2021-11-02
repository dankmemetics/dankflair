export interface FlairpediaI {
    name: string;
    description: string;
    dankRank: number;
    id: number;
    isFlair: boolean;
    burned: boolean;
    flair: {
        name?: string;
        id: number;
        suffix: string;
        clipStyle: number; // 0 - clipped, 1 - unclipped
        borderRadius: string; // 50% - circle
        burnable: boolean;
    }
    content: {
        name: string | null,
        contract: string | null;
        id: number | null;
        uri: string | null;
        offsetX: string | null;
        offsetY: string | null;
    }
}

export const flairpedia: FlairpediaI[] = [
    {
        name: 'Electric Flair',
        description: 'An electrifying flair that is sure to shock anyone that looks at it long enough. Electric Flair is one of the Dankest of the Dank Flairs when it comes to being rare, dank and exotic.',
        dankRank: 5,
        id: 0,
        isFlair: true,
        burned: false,
        flair: {
            id: 0,
            suffix: '.gif',
            clipStyle: 1,
            borderRadius: '50%',
            burnable: false,
        },
        content: {
            name: null,
            contract: null,
            id: null,
            uri: null,
            offsetX: null,
            offsetY: null,
        },
    }
]