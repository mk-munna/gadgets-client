import React from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination mt-16 flex gap-6 justify-center items-center">
            <button
                className={`w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <MdOutlineKeyboardArrowLeft className='text-white text-xl' />
            </button>

            {pageNumbers.map(number => (
                <button
                    key={number}
                    className={`w-8 h-8 flex items-center justify-center ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-full`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </button>
            ))}

            <button
                className={`w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <MdOutlineKeyboardArrowRight className='text-white text-xl' />
            </button>
        </div>
    );
};

export default Pagination;
