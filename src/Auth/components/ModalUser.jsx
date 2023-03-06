// Import components
import { SearchField, UserForm } from "../components/index";
import { HiOutlineX } from 'react-icons/hi';

import img1 from '../assets/p1.png';
import img2 from '../assets/p2.png';
import img3 from '../assets/p3.png';
import img4 from '../assets/p4.png';
import img5 from '../assets/p5.png';
import { UserBackground } from "./UserBackground";

export const ModalUser = ({ onShowModal, disUserModal }) => {

  return (
    <div className={ `modal-user absolute flex justify-center w-full h-screen z-99 overflow-hidden ${ disUserModal.className }` }>
        <div className="modal-container rounded-2xl w-screen bg-white my-5 mx-10 flex justify-between relative overflow-hidden">
          {/* users Scroll section */}
          <div className="w-1/3 rounded-tl-2xl rounded-bl-2xl ">
              <div className=" justify-center items-end mt-5 h-auto px-5">
                    <SearchField />
              </div>

              <div className="users-section flex flex-col gap-4 p-8 overflow-y-scroll h-full">
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img1 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Ahamd Ekstrom Bothman </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img2 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Steve Vaccaro </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img3 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Tiana Kenter </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img4 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Anika Levin </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img5 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Giana Torff </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img1 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Ahamd Ekstrom Bothman </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img2 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Steve Vaccaro </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img3 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Tiana Kenter </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img4 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Anika Levin </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img5 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Giana Torff </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img1 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Ahamd Ekstrom Bothman </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img2 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Steve Vaccaro </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img3 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Tiana Kenter </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img4 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Anika Levin </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img5 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Giana Torff </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img1 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Ahamd Ekstrom Bothman </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img2 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Steve Vaccaro </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img3 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Tiana Kenter </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img4 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Anika Levin </p>
                  </div>
                  <div className="users-section-profile flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img src={ img5 } alt="user profile" className="rounded-full" />
                    </div>
                    <p className="font-semibold"> Giana Torff </p>
                  </div>
              </div>
          </div>
          

          <div className="flex flex-col gap-44 py-10 w-full rounded-tr-2xl rounded-br-2xl px-16 bg-gray-200">
            {/* Form Component */}
            <UserBackground />

            {/* Personal Information */}
            {/* <PersonalInformation /> */}
          </div>

          <button className="btnModal-close rounded-tr-2xl text-2xl w-8 h-8 flex items-center justify-center text-white font-bold absolute" onClick={ () => onShowModal(disUserModal)  }>
            <HiOutlineX />
          </button>

        </div>
    </div>
  )
}
