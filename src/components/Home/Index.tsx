import React, { useEffect, useState } from 'react'
import AppService from '../../services/appService';
import { ICategory } from '../../services/responses';
import Navbar from '../Navbar/Navbar'
import SelectList from '../SelectList/SelectList';
import tw from "twin.macro";

type Props = {}

const Index = (props: Props) => {
    const [categoriesData, setCategoriesData] = useState<Array<ICategory>>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCategoriesData();
    }, []);

    const getCategoriesData = async () => {
        try {
            const res = await AppService.getCategories();
            setCategoriesData(res);
            setLoading(false);
        } catch (error) {
            console.log(error, "error");
            setLoading(false);
        }
    };


    if (loading) return <p>loading..</p>

    const FilterSection = tw.div`flex flex-row mt-4 justify-between`;
    const Container = tw.div`m-10`;
    const ProductsText = tw.div`bg-white text-sm px-3 items-center flex rounded-md shadow-md`
    return (
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
                />
            </FilterSection>

        </Container>
    )
}

export default Index