import { AuthProvider } from './Auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

export const FirstRouter = () => {
  return (
      <AuthProvider>
          <AppRouter />
      </AuthProvider>
  )
}
