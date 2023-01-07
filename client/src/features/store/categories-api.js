import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const categoriesUrl = 'https://fakestoreapi.com/products';
const categoryUrl = 'https://fakestoreapi.com/products/category'

const categoriesSlice = createApi({
    reducerPath: 'categories',
    baseQuery: fetchBaseQuery({
        baseUrl: categoriesUrl,
    }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/categories',
        }),
        getCategoryProducts: builder.query({
            query: category => `${categoryUrl}/${category}`,
        })
    })
});

export const { useGetCategoriesQuery, useGetCategoryProductsQuery } = categoriesSlice;
export default categoriesSlice;


