import { Dashboard } from '../components';
import { UserProvider } from '../context';

export const DashboardPage = () => {
  return (
    <UserProvider>    
      <div className="main-section relative">
          <div className="container-section relative w-screen h-screen">
              <Dashboard /> 
          </div>
      </div>
    </UserProvider>
  )
}
