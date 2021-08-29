import styled from "@emotion/styled"
import { ThemeContext } from "../theme/themeContext";
import { useContext } from "react";

const Article = (props: any) => {

    const {colors, useDarkMode} = useContext(ThemeContext);

    // remember to update Card as well - the <section> should be very similar to that

    const StyledDiv = styled.div`

        max-width: 50em;

        section {
            /* This should match Card */

            padding: 10px;
            background-color: ${useDarkMode ? "inherit" : colors.primary[100]};
            border: 1px solid ${useDarkMode ? colors.primary[400] : colors.primary[300]};

            h1, h2 {
                margin-top: 0px;
            }
            
            /* This is unique to Article */

            margin-bottom: 20px;
        }
    `

    return (
        <StyledDiv {...props}>{props.children}</StyledDiv>
    )

}

export default Article;