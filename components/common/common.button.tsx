import Link from 'next/link';
import styled from 'styled-components';
import { Primary } from '../brand/brand.colors';

export const ButtonStyles = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Primary};
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
`;

export function Button({
    label,
    link = '',
    url = '',
    target = '',
    fontSize = '18px',
    width = '100%',
    height = '50px',
    bgColor = Primary,
    color = 'white',
    margin = '',
    padding = '',
}) {
    const styleParams = { fontSize, width, height, backgroundColor: bgColor, color, margin, padding };

    if (link) {
        return(
            <Link href={link}>
                <ButtonStyles style={styleParams}>
                    {label}
                </ButtonStyles>
            </Link>
        )
    } else if (url) {
        return(
            <ButtonStyles style={styleParams} href={url} target={target}>
                {label}
            </ButtonStyles>
        )
    } else {
        return(
            <ButtonStyles style={styleParams}>
                {label}
            </ButtonStyles>
        )
    }
}