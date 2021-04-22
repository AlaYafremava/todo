import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import List from './components/List/List'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <main className="forFooter">
        <Router>
          <Header />
          <section className="container pt-3">
            <List />
          </section>
          <Footer />
        </Router>
      </main>
    </Provider>
  )
}

export default App
