
// TODO: Cambiar a student interface
export interface Student {
    description: string;
    images: string[];
    inStock: number;
    phone: number;
    level: string;
    slug: string;
    tags: string[];
    name: string;
    type: ValidTypes;
    gender: Category;
}

export type Category = 'men'|'women'|'kid'|'unisex';
export type Level = 'A1'|'A2'|'B1'|'B2';
export type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';
