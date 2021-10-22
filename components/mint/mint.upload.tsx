import styled from 'styled-components';
import { Background, Card } from '../brand/brand.colors';
import { Button } from '../common/common.button';
import { Flair } from '../common/common.flair';

export const MintUploadStyles = styled.div`
    display: flex;
    align-items: center;
    margin: 60px 15px;
    padding: 30px;
    
    border-radius: 5px;
    box-shadow: 0 0 45px 15px rgba(0, 0, 0, 0.1);
    background: ${Card};
    

    @media (max-width: 640px) {
        padding: 30px 0;
        flex-wrap: wrap;
        flex-direction: column;
    }

    div.preview-frame {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        height: 100%;

        @media (max-width: 640px) {
            width: 100%;
        }

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

        @media (max-width: 640px) {
            width: 100%;
        }

        div.buttons {
            display: flex;
            flex-wrap: wrap;
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
                    <Button label="Select NFT" width="280px" margin="15px"/>
                    <Button label="Upload Flair (.gif, .png)" width="280px" margin="15px"/>
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