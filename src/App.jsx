import Nav from './sections/Nav';
import {Hero, Service, Transaction, Join, Footer} from './sections/index'
const App = () => {
  return (
    <main className="max-container bg-[#F4F0ED]">
      <Nav />
      <Hero />
      <Service />
      <Transaction />
      <Join />
      <Footer />
    </main>
  )
}

export default App