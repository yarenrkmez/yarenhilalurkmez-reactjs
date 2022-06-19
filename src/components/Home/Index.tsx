import React, { useEffect, useState } from 'react'
import AppService from '../../services/appService';
import { ICategory, IProduct } from '../../services/responses';
import Navbar from '../Navbar/Navbar'
import SelectList from '../SelectList/SelectList';
import tw from "twin.macro";
import ProductItem from '../Products/ProductItem';
import ProductList from '../Products/ProductList';
import plusIcon from '../../assets/icons/plus.svg';
import { PlusIcon } from '../../assets/icons';

type Props = {}

const FilterSection = tw.div`flex flex-row mt-4 justify-between`;
const Container = tw.div`m-10`;
const ProductsText = tw.div`bg-white text-sm px-3 items-center flex rounded-md shadow-md`;
const ProductsContainer = tw.div`flex mt-4`;
const AddProductButton = tw.button`px-4 py-2 text-center bg-blue-900 rounded-full items-center`;
const StickyBottomContainer = tw.div`sticky bottom-0 flex justify-end w-full`

const Index = (props: Props) => {
    const [categoriesData, setCategoriesData] = useState<Array<ICategory>>();
    const [products, setProducts] = useState<Array<IProduct>>();
    const [allProducts, setAllProducts] = useState<Array<IProduct>>();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = async () => {
        const results = await Promise.allSettled([
            AppService.getCategories(),
            AppService.getProducts()
        ]);
        results.forEach((result, index) => {
            if (result.status = 'fulfilled') {
                if (index === 0) {
                    setCategoriesData((result as any).value);
                } else {
                    setProducts((result as any).value);
                    setAllProducts((result as any).value);
                }
            }
            setLoading(false);
        })
    }

    const filterProducts = (filteredBy: string) => {
        if (filteredBy === 'Categories') {
            setProducts(allProducts);
        } else {
            setProducts(allProducts?.filter(item => item.category === filteredBy));
        }
    }

    if (loading) return <p>loading..</p>

    return (
        <>
            <Container>
                <Navbar />
                <FilterSection className=''>
                    <ProductsText>
                        <span>Apple Watch,Samsung,Mackbook Pro...</span>
                    </ProductsText>
                    <SelectList
                        id="categories-select-list"
                        optionList={categoriesData!}
                        optionListPlaceholder="Categories"
                        getSelectedVal={(val) => filterProducts(val as any)}
                    />
                </FilterSection>

                <ProductsContainer>
                    <ProductList products={products!} />
                </ProductsContainer>

            </Container>
            <StickyBottomContainer>
                <AddProductButton>
                   <PlusIcon
                   fill="white"
                   strokeWidth={20}
                   stroke="white"
                   />
                </AddProductButton>
            </StickyBottomContainer>
        </>

    )
}

export default Index