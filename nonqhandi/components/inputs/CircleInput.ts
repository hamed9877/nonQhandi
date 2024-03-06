import styled from 'styled-components';
import { Color } from '../../styles/global/Color';



export const CircleInput = styled.input`
      border-radius: 50%;
    width: 3.75rem;
    height: 3.75rem;
    background-color:${Color.Transprant};
    border: none;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    -moz-appearance: textfield;
`;