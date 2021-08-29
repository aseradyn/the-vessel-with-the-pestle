import styled from "@emotion/styled"
import { ThemeContext } from "../theme/themeContext";
import { useContext } from "react";

export const Card = (props: any) => {

    const {colors, useDarkMode} = useContext(ThemeContext);

    // remember to update Article as well - the <section> should be very similar to this
    
    const StyledDiv = styled.div`
        padding: 10px;
        background-color: ${useDarkMode ? "inherit" : colors.primary[100]};
        border: 1px solid ${useDarkMode ? colors.primary[400] : colors.primary[300]};
        max-width: 50em;

        h1, h2 {
            margin-top: 0px;
        }
    `

    return (
        <StyledDiv {...props}>{props.children}</StyledDiv>
    )

}