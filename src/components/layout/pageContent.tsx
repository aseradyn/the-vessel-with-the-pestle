import styled from '@emotion/styled';

const StyledContent = styled.div`
    padding: 20px;
`

export const PageContent = (props: any) => {
    return (
        <StyledContent>
            {props.children}
        </StyledContent>
    )
}