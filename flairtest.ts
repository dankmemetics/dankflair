export interface FlairTestI {
    id: number;
    suffix: string;
    contentType: string;
}

export const flairtest: FlairTestI[] = [
    {
        id: 0,
        suffix: '.png',
        contentType: 'image/png'
    }
]