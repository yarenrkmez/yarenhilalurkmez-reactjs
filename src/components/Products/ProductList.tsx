import React from 'react'
import tw from 'twin.macro';
import { IProduct } from '../../services/responses';
import ProductItem from './ProductItem';

type Props = {
    products: Array<IProduct>
}

const Container = tw.div`flex flex-wrap justify-center`;

const ProductList = ({ products }: Props) => {

    return (
        <Container>
            {products.map((item, index) =>
                <ProductItem
                    key={`products-${item.id}-${index}`}
                    item={item}
                />
            )

            }
        </Container>
    )
}

export default ProductList