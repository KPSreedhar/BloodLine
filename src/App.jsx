import { BrowserRouter } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import { AppProvider } from './context/AppContext'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <PageLayout>
          <AppRoutes />
        </PageLayout>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
