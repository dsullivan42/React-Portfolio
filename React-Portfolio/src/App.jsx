import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'


function App() {
  const [currentTab, setCurrentTab] = useState('about')

  const renderTab = () => {

    if (currentTab === "About") {
      return <About />
    }
    if (currentTab === "Contact")
      return <Contact />
    if (currentTab === "Portfolio")
      return <Portfolio />
    if (currentTab === "Resume")
      return <Resume />
    return <About />
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-container">
          <div className="App-header-left">
            <div className="App-header-left-name">
              <h1>Daniel Sullivan's Portfolio</h1>
            </div>
            <div className="App-header-left-links">
              <ul>
                <li>
                  <button onClick={() => setCurrentTab('About')}>About</button>
                </li>
                <li>
                  <button onClick={() => setCurrentTab('Contact')}>Contact</button>
                </li>
                <li>
                  <button onClick={() => setCurrentTab('Portfolio')}>Portfolio</button>
                </li>
                <li>
                  <button onClick={() => setCurrentTab('Resume')}>Resume</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main>
        {renderTab()}
      </main>
      <footer></footer>
    </div>
  )
}

export default App
