import { ThemeProvider, Global } from '@emotion/react';
import { darkMode } from './styles/_themes';
import { globalCss } from './styles/_globalStyles';

import TitleBar from './components/TitleBar';

function App() {
  return (
    <ThemeProvider theme={darkMode}>
        <Global syles={globalCss}/>
          <TitleBar/>
    </ThemeProvider>
  );
}

export default App;
