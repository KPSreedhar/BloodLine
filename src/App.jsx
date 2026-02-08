import { HashRouter } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import { AppProvider } from './context/AppContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <HashRouter>
      <AppProvider>
        <PageLayout>
          <AppRoutes />
        </PageLayout>
      </AppProvider>
    </HashRouter>
  )
}

export default App
