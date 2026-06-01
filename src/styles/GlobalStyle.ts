import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${({ theme }) => theme.colors.onSurfaceVariant};
    }

    html, body {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    body {
        font-family: var(--Pretendard-Variable), sans-serif;
        background-color: ${({ theme }) => theme.colors.surface};
        overflow-x: hidden;
    }

    a {
        all: unset;
    }

    input, textarea {
        outline: none;
        border: none;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;             
        margin: 0;         
    }

    button {
        cursor: pointer;
        outline: none;
        border: none;
        background-color: inherit;

        &:disabled {
            cursor: not-allowed;
        }
    }
`;
