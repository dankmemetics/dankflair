import { useState } from 'react';
import { CSSProperties } from 'styled-components';
import Link from 'next/link';
import styled from 'styled-components';
import { Primary, Primary3 } from '../brand/brand.colors';

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
    box-shadow: 0 0 15px 15px rgba(0, 0, 0, 0.1);
`;

export function Button({
    label,
    link = '',
    url = '',
    target = '',
    fontSize = '18px',
    width = '100%',
    height = '50px',
    bgColor = Primary3,
    hlColor = Primary,
    color = 'white',
    margin = '',
    padding = '',
}) {
    const [hover, setHover] = useState(false);

    const styleParams: CSSProperties = {
        fontSize,
        width,
        height,
        backgroundColor: hover ? hlColor : bgColor,
        color,
        margin,
        padding,
    };

    if (link) {
        return(
            <Link href={link}>
                <ButtonStyles style={styleParams} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
                    {label}
                </ButtonStyles>
            </Link>
        )
    } else if (url) {
        return(
            <ButtonStyles style={styleParams} href={url} target={target} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
                {label}
            </ButtonStyles>
        )
    } else {
        return(
            <ButtonStyles style={styleParams} onMouseEnter={e => setHover(true)} onMouseLeave={e => setHover(false)}>
                {label}
            </ButtonStyles>
        )
    }
}