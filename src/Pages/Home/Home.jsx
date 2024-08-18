import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api';
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/Pagination';
import { FaLocationArrow, FaQuestionCircle } from 'react-icons/fa';
import { MdEmail, MdOutlinePhonelink } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts(page, 10, search, filters, sort);
            setProducts(response.products);
            setTotalPages(Math.ceil(response.total / 10));
        };
        fetchProducts();
    }, [page, search, filters, sort]);

    return (
        <div>
            <h2 className='text-[53px] mt-10 font-primary font-semibold flex justify-center items-center gap-1'>
                <span className='text-primary text-[45px]'>GADGETS</span>.CO
            </h2>
            <p className='text-center '>
                Type the name of the Samsung Gadget and Search for
            </p>
            {/* search */}
            <div className='flex justify-center mt-12'>
                <div className='flex justify-between items-center bg-gray-100 rounded-full shadow-lg py-2 px-4 max-w-[776px]  w-full'>
                    <div className='flex items-center bg-gray-100 rounded-l-full px-4 py-2'>
                        <MdOutlinePhonelink className='text-primary mr-2' />
                        <input
                            type='text'
                            className='bg-gray-100 flex-1 px-2 text-gray-700 focus:outline-none'
                            placeholder='Type the product name...'
                        />
                    </div>
                    <div className='md:flex hidden items-center bg-gray-100 px-4 py-2'>
                        <BiCategory className='text-primary mr-2' />
                        <select className='bg-gray-100 focus:text-black text-gray-500 border-none select-none outline-none px-2' onChange={(e) => setSort(e.target.value)}>
                            <option className='bg-gray-100' value="">Select Brand</option>
                            <option className='bg-gray-100' value="priceLowToHigh">Price: Low to High</option>
                            <option className='bg-gray-100' value="priceHighToLow">Price: High to Low</option>
                            <option className='bg-gray-100' value="dateNewest">Newest First</option>
                        </select>
                    </div>
                    <button className='bg-[#448AFF] text-white p-2 rounded-full hover:bg-[#337ACC] focus:outline-none'>
                        <FaLocationArrow />
                    </button>
                </div>
            </div>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>

            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </div>
    );
};

export default Home;
