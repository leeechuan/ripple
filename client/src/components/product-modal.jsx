import React from 'react';
import Modal from 'react-modal';

const ProductModal = ({ isOpen, closeModal, product }) => {



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Product Modal"
    >

    <div>


            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow ">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-300">
                    <h3 className="text-xl font-semibold text-gray-900">
                        {product && product.name}
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
                    <p className="text-base leading-relaxed text-gray-500 italic">
                        {product && product.description}
                    </p>
                    <p className="text-base leading-relaxed text-gray-500">
                        {product && product.para}
                        
                    </p>
                </div>


    </div>



    </div>

    </Modal>
  );
};


export default ProductModal;