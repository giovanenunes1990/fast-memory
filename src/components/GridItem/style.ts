import { type } from 'os';
import styled from 'styled-components';

type ContainerProps = {
    showBg: boolean;
}
type IconProps = {
    opacity?: number;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBg ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`;

export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1};
`;