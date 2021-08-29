import {useContext} from 'react';
import {ThemeContext} from '../theme/themeContext';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';



export type BreadcrumbsProps = {
    pathLinks?: {
        name: string
        path: string
    }[]
    currentPageName: string
}

type BreadcrumbLinkProps = {
    name: string
    path: string
}

const BreadcrumbLink = (props: BreadcrumbLinkProps) => {
    return (
        <>
            / &nbsp;
            <Link to={props.path}>{props.name}</Link>
            &nbsp;
        </>
    )
}


export const Breadcrumbs = (props: BreadcrumbsProps) => {

    const {colors} = useContext(ThemeContext);

    const Container = styled.div`
        font-size: 0.8em;
        display: grid;
        grid-template-columns: 2em auto;
        align-items: center;
    `

    return (
        <Container>
            <Link to="/" style={{color: colors.primary[400]}}><HomeTwoToneIcon /></Link> 
            <span>
                {props.pathLinks &&
                    props.pathLinks.map(x => 
                        <BreadcrumbLink name={x.name} path={x.path} />
                    )
                }
                / &nbsp;
                {props.currentPageName}
            </span>
        </Container>
       
    )
}