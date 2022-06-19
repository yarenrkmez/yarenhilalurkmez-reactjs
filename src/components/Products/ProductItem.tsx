import React from 'react';
import tw from "twin.macro";
import { IProduct } from '../../services/responses';


type Props = {
    item: IProduct
}

const Container = tw.div`bg-white rounded-lg shadow-md m-4`;
const ProductImg = tw.img`p-8 rounded-t-lg h-4/5`;
const ProductBodyContainer = tw.div`px-5 pb-5`;
const ProductName = tw.h5`text-xl font-semibold tracking-tight text-gray-900`;
const ProductBody = tw.div`flex justify-between items-center`;
const PriceText = tw.span`text-3xl font-bold text-gray-900`;
const DetailButton = tw.button`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`;


const ProductItem = ({ item }: Props) => {
    const {
        avatar,
        name,
        price
    } = item;

    return (
        <Container className='max-w-2xs'>
            <ProductImg src={avatar} alt={`product-${name}`} />
            <ProductBodyContainer>
                <ProductName>
                    {name}
                </ProductName>

                <ProductBody>
                    <PriceText>${price}</PriceText>
                    <DetailButton>Detail</DetailButton>
                </ProductBody>

            </ProductBodyContainer>
        </Container>
    )
}

export default ProductItem