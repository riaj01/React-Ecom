import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
    category: string,
}
interface fetchResponse{
    products:Product[];
}

const Sidebar = () => {
    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        setKeyword,
    }= useFilter();

    const [categories, setCategories] = useState<string[]>([]);
    const [keyWords] = useState<string[]>([
        "Apple",
        "Watch",
        "Fashion",
        "Trend",
        "Shoes",
        "Shirts",
    ]);

    

    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data: fetchResponse = await res.json();
            const uniqueCategory = Array.from(
                new Set(data.products.map(product => product.category))
            );
            setCategories(uniqueCategory); // ✅ Only set here
        } catch (error) {
            console.error("Error to fetching Data!", error);
        }
    };

    fetchData();
}, []);


    const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setMinPrice(value ? parseFloat(value) : undefined);
    }
    const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value;
        setMaxPrice(value ? parseFloat(value): undefined);
    }

    const handleRadioChange = (category: string)=>{
        setSelectedCategory(category);
    }
    const handleKeywordClick = (keyword: string)=>{
        setKeyword(keyword);
    }
    const handleResetFilters = ()=>{
        setSearchQuery('')
        setSelectedCategory('')
        setMinPrice(undefined)
        setMaxPrice(undefined)
        setKeyword('')
    }
    return (
        <div className="w-64 p-5 h-screen">
            <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>

            <section>
                <input type="text" className="border-2 rounded px-2 py-3 w-full sm:mb-0" placeholder="Search Products..." value={searchQuery} onChange={e=> setSearchQuery(e.target.value)} />

                <div className="flex justify-center mt-3 items-center">
                    <input type="text" className="border-2 px-5 mr-2 py-4 mb-3 w-full" placeholder="Min" value={minPrice ?? ''} onChange={handleMinPrice} />
                    <input type="text" className="border-2 px-5 mr-2 py-4 mb-3 w-full" placeholder="Max" value={maxPrice ?? ''} onChange={handleMaxPrice} />
                </div>
                {/* Categories Section */}
                <div className="mb-5">
                    <h2 className="text-xl font-semibold mb-3">Categories</h2>

                </div>
                <section>
                {categories.map((category, index)=>(
                    <label key={index} className="block mb-2">
                        <input type="radio" name="category" value={category} className="mr-2 w-[16px] h-[16px]" onChange={()=>handleRadioChange(category)} checked={selectedCategory===category}/>
                        {category.toUpperCase()}
                    </label>
                ))}
                </section>
                {/* KeyWords Section */}
                <div className="mb-5 mt-4">
                    <h2 className="text-xl font-semibold mb-3">Keyword</h2>
                    <div>
                        {keyWords.map((keyword, index)=>(
                            <button onClick={()=>handleKeywordClick(keyword)} key={index} className="block mb-2 py-2 px-4 w-full text-left border rounded hover:bg-gray-200">
                                {keyword.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
                <button onClick={handleResetFilters} className="w-full mb-[4rem] py-2 bg-black text-white rounded mt-5">Reset Filters</button>
            </section>
        </div>
    );
};

export default Sidebar;
