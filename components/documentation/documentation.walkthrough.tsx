import Link from 'next/link';
import styled from 'styled-components';
import { Flair } from '../common/common.flair';

export const DocumentationWalkthroughStyles = styled.div`
    padding: 30px 15px 90px 15px;

    @media (max-width: 1128px) {
        padding: 30px 30px 90px 30px;
    }

    h3 {
        font-family: Arvo;
        font-size: 24px;
        font-weight: 400;
    }

    div.accent {
        width: 320px;
        max-width: 100%;
        height: 2px;
        background: white;
        margin: 5px 0 15px 0;

        &.long {
            width: 420px;
        }
    }

    p {
        font-size: 18px;
        line-height: 2;
        padding: 15px 0;
    }

    a {
        color: white;
        font-weight: bold;
    }

    ul {
        li {
            font-size: 18px;
            padding: 5px 0;
        }
    }

    div.flair-wrapper {
        display: flex;
        align-items: center;

        p {
            width: calc(100% - 210px);
            margin: 0 15px 0 0;
        }

        @media (max-width: 1128px) {
            flex-wrap: wrap;
            justify-content: center;
            padding: 30px 0;

            p {
                width: 100%;
            }
        }
    }
`;

export function DocumentationWalkthrough() {
    return(
        <DocumentationWalkthroughStyles>
            <h3>Minting Parameters</h3>
            <div className="accent"/>
            <p>
                There are several required parameters. In order to mint a new Dank Flair you need the following:
            </p>

            <ul>
                <li>Name</li>
                <li>Description</li>
                <li>A Dank Flair NFT</li>
                <li>An NFT that is a .jpg, .png or .gif</li>
            </ul>

            <p>
                However there are additional parameters that are very important in order to make sure the NFT looks good in the frame. The following
                optional additional parameters include:
            </p>

            <ul>
                <li>Width of the NFT</li>
                <li>Height of the NFT</li>
                <li>Border Radius</li>
                <li>X Position</li>
                <li>Y Position</li>
            </ul>

            <h3>Designing your Fusion NFT</h3>
            <div className="accent long"/>

            <div className="flair-wrapper">
                <p>
                    A large part of the novelty of Dank Flair comes from designing your NFT to look good with the Dank Flair. The following is an example Crypto Punk
                    using the Gold Standard NFT with a width of 80 (80%). And a border radius of 50%.
                </p>
                <Flair
                    flairUrl="/flair/5.png"
                    nftUrl="/test/1.png"
                    width={180}
                    height={180}
                    mintWidth={80}
                    mintBorder={"50%"}
                />
            </div>

            <div className="flair-wrapper">
                <p>
                    Keep in mind, if you don't modify the design. And keep it all to the default settings. The mint will end up looking like this.
                    Which, to my personal taste. Doesn't look as good as the above design. Something to keep in mind, and, the mint page provides real time
                    previews of your NFT so you don't have to sweat worrying what it will look like post mint.
                </p>
                <Flair
                    flairUrl="/flair/5.png"
                    nftUrl="/test/1.png"
                    width={180}
                    height={180}
                />
            </div>

            <div className="flair-wrapper">
                <p>
                    For posteriority sake. Let's take a look at this ape. We've set the width to 70% however, it doesn't look good with the square .jpg the image comes in. We need to modify
                    it so that it has a rounded border so it looks good.
                </p>
                <Flair
                    flairUrl="/flair/20.png"
                    nftUrl="/test/2.png"
                    width={180}
                    height={180}
                    mintWidth={70}
                />
            </div>

            <div className="flair-wrapper">
                <p>
                    By changing the border radius to 50%. It fits perfectly on the Dank Flair. Making it much more aesthetically pleasing to look at compared to the above example.
                </p>
                <Flair
                    flairUrl="/flair/20.png"
                    nftUrl="/test/2.png"
                    width={180}
                    height={180}
                    mintWidth={70}
                    mintBorder="50%"
                />
            </div>

            <div className="flair-wrapper">
                <p>
                    Let's take a look at another example. A Crypto Punk. We've set the width to 40% this time. And it does not look nearly as good as the first example.
                </p>
                <Flair
                    flairUrl="/flair/5.png"
                    nftUrl="/test/1.png"
                    width={180}
                    height={180}
                    mintWidth={40}
                    mintBorder="50%"
                />
            </div>

            <div className="flair-wrapper">
                <p>
                    We've set the X attribute to -10 (-10%) and the Y attribute to 18 (18%). This is the equivalent to "left" and "top" in CSS. In turn, by making this modification. We've made sure
                    the crypto punk fits perfectly snug on the Dank Flair's border.
                </p>
                <Flair
                    flairUrl="/flair/5.png"
                    nftUrl="/test/1.png"
                    width={180}
                    height={180}
                    mintWidth={40}
                    mintBorder="50%"
                    mintX={-10}
                    mintY={18}
                />
            </div>

            <h3>Conclusion</h3>
            <div className="accent long"/>

            <p>
                This summarizes everything you need to know about Dank Flair NFTs and creating a Dank Fusion NFT using Dank Flairs. There will be more features coming in the future.
                And we are also looking to ensure that the projects images are immutable and decentralized too. Be sure to check out <Link href="/mint">the mint page</Link> if you do
                have a Dank Flair and happy minting!
            </p>
            
        </DocumentationWalkthroughStyles>
    )
}