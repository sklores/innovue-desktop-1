import { AuthProvider } from './auth/AuthProvider'
import { ClientContext } from './contexts/ClientContext'
import AppShell from './app/AppShell'

const client = {
  name: 'InnoVue Desktop',
}

function App() {
  return (
    <AuthProvider>
      <ClientContext.Provider value={client}>
        <AppShell>
          <p>Welcome to the InnoVue Desktop workspace.</p>
        </AppShell>
      </ClientContext.Provider>
    </AuthProvider>
  )
}

export default App
