import { Nav, Footer, Home, About, NotFound, GithubProvider, AlertProvider, Alert, User } from './import.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <GithubProvider>

      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Nav title={"GitHub Finder"} />
            <main className='container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/user/:login' element={<User />} />
                <Route exact path='/notfound' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>



        </Router>
      </AlertProvider >
    </GithubProvider>
  )
}

export default App
