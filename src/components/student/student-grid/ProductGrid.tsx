import { Product } from '@/interfaces/product.interface';
import React from 'react'
import { ProductGridItem } from './ProductGridItem';

interface ProductGridProps {
    products: Product[];
}

export const ProductGrid = ({ products }: ProductGridProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                products.map(product => (
                    <ProductGridItem 
                        key={ product.slug }
                        product={ product }
                    />
                )) 
            }    
        </div>
    )
}
