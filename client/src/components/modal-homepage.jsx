import React from 'react';
import Modal from 'react-modal';

const PopupModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >

    <div>


            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow ">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Hello there!
                    </h3>
                    <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-base leading-relaxed text-gray-500">
                        Thank you for checking out my project!
                    </p>
                    <p className="text-base leading-relaxed text-gray-500">
                        This project was created on a MERN stack (MongoDB, Express, React and Node.js), is self-designed and is responsive!
                        
                    </p>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                    <button onClick={closeModal} data-modal-hide="default-modal" type="button" className="text-white bg-red-800 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Enter the site!</button>
                </div>

    </div>



    </div>

    </Modal>
  );
};


export default PopupModal;