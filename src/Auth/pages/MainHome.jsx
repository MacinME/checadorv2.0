// Import React librarys and components
import { ModalUser} from '../components/index';
import { useNewModal } from "../Helpers/useNewModal";
import { RegisterDoc } from './index'
export const MainHome = ({ page }) => {




  return (
    <>
        <div className="main-section relative">
            
            <div className="container-section relative w-screen h-screen">
                {/* Main Page */}
                <RegisterDoc /> 
            </div>
        </div>
    </>
  )
}
