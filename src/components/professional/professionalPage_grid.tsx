import styled from "@emotion/styled";

const Grid = styled.div`
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 800px) {
        grid-template-columns: auto;
    }
`

export default Grid;