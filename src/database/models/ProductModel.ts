import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';

interface ProductAttributes {
    productCode: string,
    productName: string,
    productLine: string,
    productScale: string,
    productVendor: string,
    productDescription: string,
    quantityInStock: number,
    buyPrice: number,
    MSRP: number,
};

export interface ProductInput extends Optional<ProductAttributes, 'productCode'>{};
export interface ProductOutput extends Required<ProductAttributes>{};

class Product extends Model<ProductAttributes, ProductInput> {
    declare productCode: string;
    declare productName: string;
    declare productLine: string;
    declare productScale: string;
    declare productVendor: string;
    declare productDescription: string;
    declare quantityInStock: number;
    declare buyPrice: number;
    declare MSRP: number;
};

Product.init({
    productCode: { type: DataTypes.STRING, primaryKey: true, },
    productName: { type: DataTypes.STRING, },
    productLine: { type: DataTypes.STRING },
    productScale: { type: DataTypes.STRING },
    productVendor: { type: DataTypes.STRING },
    productDescription: { type: DataTypes.STRING },
    quantityInStock: { type: DataTypes.SMALLINT },
    buyPrice: { type: DataTypes.FLOAT },
    MSRP: { type: DataTypes.FLOAT },
}, {
    sequelize,
    modelName: 'products'
})

export default Product;