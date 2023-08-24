import { AlertProvider, AuthProvider } from './context'
import { AppRouter } from './router'

export const FirstRouter = () => {
  return (
      <AuthProvider>
        <AlertProvider>
          <AppRouter />
        </AlertProvider>
      </AuthProvider>
  )
}
