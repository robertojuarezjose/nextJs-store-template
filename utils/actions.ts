import db from '@/utils/db';
import { redirect } from 'next/navigation';

export const fetchFeaturedProducts =  () => {
    return db.product.findMany({
        where: {
            featured: true,

        },

    });

}

export const fetchAllProducts = ({ search = '' }: { search: string }) => {
    return db.product.findMany({
        where: {
            OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { company: { contains: search, mode: 'insensitive' } },
            ],
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
};

export const fetchSingleProduct = async (productId: string) => {
    const product = await db.product.findUnique({
        where: {
            id: productId,
        },
    });
    if (!product) {
        redirect('/products');
    }
    return product;
};