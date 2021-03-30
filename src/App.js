import { ThemeProvider, Global} from '@emotion/react';
import { darkMode } from './styles/_themes';
import { globalCss } from './styles/_globalStyles';
import './styles/globals.css';

import TitleBar from './components/TitleBar';
import Clock from './components/Clock';
import Prompt from './components/Prompt';

function App() {
  return (
     <ThemeProvider theme={darkMode}>
        <Global styles={globalCss}/>
        <TitleBar/>
        <Clock/>
        <Prompt user='guest' dir='~'/>
    </ThemeProvider>
    );
}

export default App;
