// import React from "react"
// import { createRoot } from 'react-dom/client'

// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             modalState: true
//         };

//         this.handleShow = this.handleShow.bind(this);
//     }

//     handleShow() {
//         this.setState({ modalState: !this.state.modalState });
//     }

//     render() {
//         return (
//             <div>
//                 <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
//                     <div className="modal-dialog" role="document">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">My Profile</h5>
//                                 <button type="button" className="close" onClick={this.handleShow}>
//                                     <span>&times;</span>
//                                 </button>
//                             </div>
//                             <div className="modal-body">...</div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" onClick={this.handleShow}>Close</button>
//                                 <button type="button" className="btn btn-primary">Save changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// createRoot(document.getElementById('root')).render(<App/>)



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
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Hello there!
                    </h3>
                    <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Thank you for checking out my project!
                    </p>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        This project was created on a MERN stack (MongoDB, Express, React and Node.js). This website was self-designed and is responsive!
                        
                    </p>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={closeModal} data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter the site!</button>
                </div>

    </div>



    </div>

    </Modal>
  );
};


export default PopupModal;



            // {/* Modal Section */}

            // <div>


            //     {/* <!-- Modal toggle --> */}
            //     <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            //     Toggle modal
            //     </button>

            //     {/* <!-- Main modal --> */}
            //     <div id="default-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            //         <div className="relative p-4 w-full max-w-2xl max-h-full">
            //             {/* <!-- Modal content --> */}
            //             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            //                 {/* <!-- Modal header --> */}
            //                 <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            //                     <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            //                         Terms of Service
            //                     </h3>
            //                     <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
            //                         <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            //                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            //                         </svg>
            //                         <span className="sr-only">Close modal</span>
            //                     </button>
            //                 </div>
            //                 {/* <!-- Modal body --> */}
            //                 <div className="p-4 md:p-5 space-y-4">
            //                     <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            //                         With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
            //                     </p>
            //                     <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            //                         The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
            //                     </p>
            //                 </div>
            //                 {/* <!-- Modal footer --> */}
            //                 <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            //                     <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
            //                     <button data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>



            // </div>



            // <h2>Popup Modal Content</h2>
            // <p>This is the content of your popup modal.</p>
            // <button onClick={closeModal}>Close Modal</button>