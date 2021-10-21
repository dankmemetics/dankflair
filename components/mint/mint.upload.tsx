import styled from 'styled-components';
import { Primary, Background } from '../brand/brand.colors';
import { Button } from '../common/common.button';
import { Flair } from '../common/common.flair';

export const MintUploadStyles = styled.div`
    display: flex;
    align-items: center;
    padding: 90px 15px;
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
                <Flair
                    flairUrl="/images/flair1.gif"
                    nftUrl="/images/sample.png"
                />
            </div>
            <div className="options">
                <p className="label">
                    Image Content
                </p>

                <div className="buttons">
                    <Button label="Select NFT" width="calc(50% - 30px)" margin="15px"/>
                    <Button label="Upload Flair (.gif, .png)" width="calc(50% - 30px)" margin="15px"/>
                </div>

                <p className="label">
                    Clip Style (Overflow)
                </p>

                <div className="buttons small">
                    <Button label="Clipped" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
                    <Button label="Unclipped" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
                </div>

                <p className="label">
                    Border Style (if Clipped)
                </p>

                <div className="buttons small">
                    <Button label="Circle" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
                    <Button label="Square" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
                    <Button label="Rounded" width="auto" margin="15px" padding="5px 15px" height="40px" fontSize="14px"/>
                </div>
            </div>        
        </MintUploadStyles>
    )
}