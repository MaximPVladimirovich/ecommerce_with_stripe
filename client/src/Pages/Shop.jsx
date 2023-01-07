import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '../features/store/categories-api';

const Shop = () => {
    const { data } = useGetCategoriesQuery();
    const navigate = useNavigate();

    if (!data) return <div>Loading</div>;

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Categories</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {
                    data.map((category, idx) => (
                        <div key={idx}>
                            <button className="category-button" onClick={() => navigate(`/shop/${category}`)}>{category.toUpperCase()}</button>
                        </div>
                    ))
                }
            </div>
            <Outlet />
        </div>
    );
}

export default Shop;