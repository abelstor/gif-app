import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
        display: block;
        text-align: center;
        width: 100%;
        font-size: 1.5rem;
        font-weight: bold;
        color: #fff;
        background-color: #000;
        padding: 1rem 0;
    }

    ol {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 0;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            list-style: none;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: background 0.2s;

            img {
                width: 100%;
                height: 280px;
                object-fit: cover;
                border-radius: 0.25rem;
            }
        }
    }
`