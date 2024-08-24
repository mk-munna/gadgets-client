import React, { useState, useEffect } from 'react';
import { getProducts } from '../../api'; // Ensure this API call is implemented correctly
import ProductCard from '../../Components/ProductCard';
import Pagination from '../../Components/Pagination';
import SkeletonLoader from '../../Components/SkeletonLoader';
import { FaLocationArrow, FaSearch } from 'react-icons/fa';
import { MdOutlinePhonelink } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { IoMdSearch } from "react-icons/io";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sort, setSort] = useState('');
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true); // Start loading
            const filters = {
                brand: brandFilter,
                category: categoryFilter,
                priceMin: priceRange[0],
                priceMax: priceRange[1],
            };

            const response = await getProducts(page, 12, search, filters, sort);
            setProducts(response.gadgets);
            setTotalPages(response.totalPages);
            setLoading(false); // Stop loading
        };
        fetchProducts();
    }, [page, search, brandFilter, categoryFilter, priceRange, sort]);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
        setSort("")
        setBrandFilter("")
        setCategoryFilter("")
        setPriceRange([0, 1000])
    };

    const handleBrandFilterChange = (e) => {
        setBrandFilter(e.target.value);
        setPage(1);
    };

    const handleCategoryFilterChange = (e) => {
        setCategoryFilter(e.target.value);
        setPage(1);

    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        setPage(1);
    };

    const handlePriceRangeChange = (e) => {
        setPriceRange([parseInt(e.target.value.split(',')[0]), parseInt(e.target.value.split(',')[1])]);
        setPage(1);
    };

    return (
        <div className='mx-4 lg:mx-auto'>
            <h2 className='md:text-[45px] text-[40px] lg:text-[53px] mt-10 font-primary font-semibold flex justify-center items-center gap-1'>
                <span className='text-primary md:text-[40px] text-4xl lg:text-[45px]'>GADGETS</span>.CO
            </h2>
            <p className='text-center '>
                Find, search, and purchase top gadgets effortlessly at GADGETS.CO
            </p>

            {/* Search Bar */}
            <div className='flex justify-center mt-12'>
                <div className='flex justify-between items-center bg-gray-100 rounded-full shadow-lg py-2 px-4 max-w-[776px] w-full'>
                    <div className='flex items-center bg-gray-100 rounded-l-full px-4 py-2'>
                        <MdOutlinePhonelink className='text-primary mr-2' />
                        <input
                            type='text'
                            className='bg-gray-100 flex-1 px-2 text-gray-700 focus:outline-none'
                            placeholder='Type the product name...'
                            onChange={handleSearch}
                            value={search}
                        />
                    </div>
                    <div className='md:flex hidden items-center bg-gray-100 px-4 py-2'>
                        <BiCategory className='text-primary mr-2' />
                        <select
                            className='bg-gray-100 text-gray-700 focus:outline-none'
                            onChange={handleBrandFilterChange}
                            value={brandFilter}
                        >
                            <option value="">All Brands</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Apple">Apple</option>
                            <option value="Xiaomi">Xiaomi</option>
                            <option value="Sony">Sony</option>
                        </select>
                    </div>
                    <div className='md:flex hidden items-center bg-gray-100 px-4 py-2'>
                        <BiCategory className='text-primary mr-2' />
                        <select
                            className='bg-gray-100 text-gray-700 focus:outline-none'
                            onChange={handleCategoryFilterChange}
                            value={categoryFilter}
                        >
                            <option value="">All Categories</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Tablets">Tablets</option>
                            <option value="Watch">Watch</option>
                            <option value="Buds">Buds</option>
                            <option value="Speaker">Speaker</option>
                        </select>
                    </div>

                    <button className='bg-[#448AFF] text-white p-2 rounded-full hover:bg-[#337ACC] focus:outline-none'>
                        <IoMdSearch />
                    </button>
                </div>
            </div>

            <div className='py-8'>
                <div className='flex text-xs md:text-base  flex-col md:flex-row  justify-center'>
                    <div className='flex justify-center -mt-2 mb-4'>
                        <div className='md:hidden flex items-center bg-gray-100 px-4 py-2'>
                            <BiCategory className='text-primary mr-2' />
                            <select
                                className='bg-gray-100 text-gray-700 focus:outline-none'
                                onChange={handleBrandFilterChange}
                                value={brandFilter}
                            >
                                <option value="">All Brands</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Apple">Apple</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Sony">Sony</option>
                            </select>
                        </div>
                        <div className='md:hidden flex items-center bg-gray-100 px-4 py-2'>
                            <BiCategory className='text-primary mr-2' />
                            <select
                                className='bg-gray-100 text-gray-700 focus:outline-none'
                                onChange={handleCategoryFilterChange}
                                value={categoryFilter}
                            >
                                <option value="">All Categories</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Tablets">Tablets</option>
                                <option value="Watch">Watch</option>
                                <option value="Buds">Buds</option>
                                <option value="Speaker">Speaker</option>
                            </select>
                        </div>

                    </div>
                    <div className='flex justify-center px-4 py-2 '>
                        <span className='text-primary mr-2'>Price Range:</span>
                        <select
                            className='text-gray-700 focus:outline-none'
                            onChange={handlePriceRangeChange}
                        >
                            <option value="0,1000">All Prices</option>
                            <option value="0,100">$0 - $100</option>
                            <option value="100,500">$100 - $500</option>
                            <option value="500,1000">$500 - $1000</option>
                        </select>
                    </div>

                    <div className='flex justify-center items-center px-4 py-2'>
                        <span className='text-primary mr-2'>Sort By:</span>
                        <select
                            className='text-gray-700 focus:outline-none'
                            onChange={handleSortChange}
                            value={sort}
                        >
                            <option value="">Default</option>
                            <option value="priceLowToHigh">Price: Low to High</option>
                            <option value="priceHighToLow">Price: High to Low</option>
                            <option value="dateNewest">Newest First</option>
                        </select>
                    </div>
                </div>
                <div className='px-8 mx-auto mt-10'>
                    <div className="product-list grid gap-8 lg:grid-cols-4 grid-cols-1 md:grid-cols-2">
                        {loading ? (
                            // Render skeleton loaders while loading
                            Array.from({ length: 12 }).map((_, index) => (
                                <SkeletonLoader key={index} />
                            ))
                        ) : (
                            // Render products once loaded
                            products.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        )}
                    </div>

                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={(newPage) => setPage(newPage)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
