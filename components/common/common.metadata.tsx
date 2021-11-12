import Head from 'next/head';

export interface MetadataI {
    title?: string;
    description?: string;
    image?: string;
}

export const defaultTitle = `Dank Flair`;
export const defaultDescription = `Buy, Mint and Trade Dank Flair for your NFTs`;
export const defaultImage = `https://dankflair.cloud/images/metadata.jpg`;

export function Metadata({ title, description, image }: MetadataI) {
    return(
        <Head>
            <title>{title ? title : defaultTitle}</title>
            <meta name="description" content={description ? description : defaultDescription} />
            
            <meta name="twitter:card" content="summary"/> 
            <meta name="twitter:site" content="@dankmemetics"/>
            <meta name="twitter:title" content={title ? title : defaultTitle}/>
            <meta name="twitter:description" content={description ? description : defaultDescription}/>
            <meta name="twitter:creator" content="@dankmemetics"/>
            <meta name="twitter:image" content={image ? image : defaultImage}/>

            <meta property="og:type" content="article" />
            <meta property="og:title" content={title ? title : defaultTitle} />
            <meta property="og:url" content="https://dankflair.cloud" />
            <meta property="og:image" content={image ? image : defaultImage} />
            <meta property="og:description" content={description ? description : defaultDescription} />
            <meta property="og:site_name" content="Dank Flair" />
        </Head>
    )
}