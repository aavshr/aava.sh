import { ThemeProvider, Global} from '@emotion/react';
import { darkMode } from './styles/_themes';
import { globalCss } from './styles/_globalStyles';
import './styles/globals.css';

import TitleBar from './components/TitleBar';

function App() {
  return (
     <ThemeProvider theme={darkMode}>
        <Global styles={globalCss}/>
        <TitleBar/>
    </ThemeProvider>
    );
}

export default App;
