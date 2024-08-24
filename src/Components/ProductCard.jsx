import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="relative size-[280px] bg-gray-50 rounded-lg shadow-lg p-6 text-center overflow-hidden group">
            <div className="absolute top-4 left-4 bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-sm font-semibold">
                New
            </div>
            <img
                src={product.img}
                alt={product.name}
                className="mx-auto mt-5 size-28 group-hover:size-[120px] duration-300 object-cover mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
                {product.name}
            </h3>
            <div className='absolute bottom-[80px] left-0 right-0 text-sm py-2 px-2 transform translate-y-full group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                <p className="text-blue-500 text-sm font-semibold mb-1">
                    Product price: ${product.price}
                </p>
                <p className="text-gray-500 text-xs mb-4">
                    From ${product.price} before eligible trade-in.
                </p>
            </div>

            {/* Buy Now button */}
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-2 px-6 rounded-full translate-y-full group-hover:-translate-y-5 transition-transform duration-500 ease-in-out">
                Buy now
            </button>
        </div>
    );
};

export default ProductCard;
