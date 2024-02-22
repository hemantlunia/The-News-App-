// myapi news key = 8c8ac5c26b4144f3a58bab98ff8b73f7
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';


const App = () => {
  const [progress, setProgress] = useState(10)
  let pageSize = 12;
  let apiKey = process.env.REACT_APP_NEWS_API

  // state = {
  //   progress:10
  // }
  // setProgress=(progress)=>{
  //     setState({progress:progress})
  // }

  return (
    <>
      <div>
        {/* <h1 className='container text-center bg-light'>  Bubu</h1> */}
        <Router>
          <NavBar />
          <LoadingBar
            color='blue'
            height={3}
            progress={progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>


            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='us' category='general' />} />
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country='in' category='sports' />} />
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={pageSize} country='in' category='business' />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' pageSize={pageSize} country='in' category='entertainment' />} />
            <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={pageSize} country='in' category='general' />} />
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country='in' category='health' />} />
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country='in' category='science' />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country='in' category='technology' />} />
            {/* <Route path = '/contact'element= {<Footer/>}/> */}

          </Routes>
          <Footer />
        </Router>
      </div>

    </>
  )
}

export default App
