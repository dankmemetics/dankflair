import styled from 'styled-components';
import { Primary } from '../brand/brand.colors';

export const BadgeStyles = styled.a`
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    margin: 0 15px;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
`;

export function Badge({
    label,
    bgColor = Primary,
    color = 'white',
    url = '',
    target = '',
}) {
    if (url) {
        return(
            <BadgeStyles href={url} target={target} style={{ backgroundColor: bgColor, color }}>
                {label}
            </BadgeStyles>
        )
    } else {
        return(
            <BadgeStyles style={{ backgroundColor: bgColor, color }}>
                {label}
            </BadgeStyles>
        )
    }
}