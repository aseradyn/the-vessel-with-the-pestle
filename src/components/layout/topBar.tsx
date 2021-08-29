import {useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import {ThemeContext} from '../theme/themeContext';
import {ColorModeControl} from '../theme/colorModeControl';

export default function TopBar() {

    const {colors, useDarkMode} = useContext(ThemeContext);

    const MyBar = styled.div`
        position: sticky;
        top: 0px;
        border-bottom: 1px solid ${useDarkMode ? colors.primary[400] : colors.primary[200]};
        background-color: ${useDarkMode ? colors.gray[700] : colors.primary[100]};
        color: ${useDarkMode ? colors.primary[300] : colors.primary[500]};
        padding: 5px;
        box-shadow: 0px 5px 10px ${useDarkMode ? colors.primary[400] : colors.primary[500]};
    `

    const Layout = styled.div`
        padding: 5px 15px;
        display: grid;
        grid-template-columns: 12em auto 10em;
        align-items: center;

        .quip-wrapper {
            justify-self: end;
        }

        .quip {
          font-size: 0.8em;
            @media only screen and (max-width: 650px) {
                display: none;
            }
        }
    `

  return (
      <MyBar>
        <Layout>
          <Typography variant="h6" component="div" sx={{ justifySelf: 'start', fontFamily: 'SteelworksVintageDemo', fontSize: '2em' }}>
            Jill.Menning
          </Typography>
          <span className="quip-wrapper"><Typography className="quip">
            Serial hobbyist. Plotter and schemer.
          </Typography></span>
          <ColorModeControl />
        </Layout>
      </MyBar>
  );
}