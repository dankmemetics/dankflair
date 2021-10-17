import styled from 'styled-components';
import { Primary, Background } from '../brand/brand.colors';

export const MintUploadStyles = styled.div`
    display: flex;
    align-items: center;
    padding: 90px 0;
    border-bottom: 2px solid white;

    div.preview-frame {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        height: 100%;

        div.frame {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Background};
            width: 256px;
            height: 256px;
            border-radius: 180px;
            overflow: hidden;
            margin: 15px;

            img.flair {
                position: absolute;
                left: 0;
                top: 0;
            }
            
            img.nft {
                position: relative;
                left: 5px;
                height: 100%;
            }
        }
    }

    div.options {
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        div.buttons {
            display: flex;
            align-items: center;
            width: 100%;

            &.small {
                a.button {
                    font-size: 16px;
                    font-weight: 600;
                    padding: 10px 25px;
                    width: auto;
                }
            }
        }

        a.button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${Primary};
            padding: 15px;
            margin: 15px;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            width: calc(50% - 30px);
        }

        p.label {
            font-size: 14px;
            font-weight: bold;
            width: 100%;
            padding: 5px 15px;
        }
    }
`;

export function MintUpload() {
    return(
        <MintUploadStyles>
            <div className="preview-frame">
                <div className="frame">
                    <img src="/images/flair1.gif" className="flair"/>
                    <img src="/images/sample.png" className="nft"/>
                </div>
            </div>
            <div className="options">
                <p className="label">
                    Image Content
                </p>

                <div className="buttons">
                    <a className="button">
                        Select NFT
                    </a>
                    <a className="button">
                        Upload Flair (.gif, .png)
                    </a>
                </div>

                <p className="label">
                    Clip Style (Overflow)
                </p>

                <div className="buttons small">
                    <a className="button">
                        Clipped
                    </a>
                    <a className="button">
                        Unclipped
                    </a>
                </div>

                <p className="label">
                    Border Style (if Clipped)
                </p>

                <div className="buttons small">
                    <a className="button">
                        Circle
                    </a>
                    <a className="button">
                        Square
                    </a>
                    <a className="button">
                        Rounded
                    </a>
                </div>
            </div>        
        </MintUploadStyles>
    )
}