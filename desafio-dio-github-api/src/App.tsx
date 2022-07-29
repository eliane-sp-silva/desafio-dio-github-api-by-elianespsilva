import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'
import usePersistedState from './utils/usePersistedState.ts';
import { GlobalCSS } from './global/global'
import Navbar from './components/Navbar/index.tsx';
import light from './global/themes/light'
import dark from './global/themes/dark'
import Layout from './components/layout'
import NoSearch from './components/no-search'
import Profile from './components/profile'
import Repositories from './components/repositories'
import useGithub from './hooks/github-hooks'
import Footer from './components/footer';


const App = () => {
  const [theme, setTheme] = usePersistedState <DefaultTheme> ('theme',light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const { githubState } = useGithub()
  return (
    <ThemeProvider theme={theme}>
    <GlobalCSS />
      <Navbar toggleTheme={toggleTheme} />
      <Layout>
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
              ) : (
                <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        ) : (
          <NoSearch />
          )}
      </Layout>
      <Footer />
      </ThemeProvider>
  )
}

export default App
