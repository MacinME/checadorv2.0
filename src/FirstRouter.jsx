import { AuthProvider } from './context'
import { AppRouter } from './router'

export const FirstRouter = () => {
  return (
      <AuthProvider>
          <AppRouter />
      </AuthProvider>
  )
}
