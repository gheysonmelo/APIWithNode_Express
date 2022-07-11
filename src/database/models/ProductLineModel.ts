import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';

interface ProductLineAttributes {
    productLine: string,
    textDescription: string,
    htmlDescription: string,
    image: string,
};

export interface ProductLineInput extends Optional<ProductLineAttributes, 'productLine'>{};
export interface ProductLineOutput extends Required<ProductLineAttributes>{};

class ProductLine extends Model<ProductLineAttributes, ProductLineInput> {
    declare productLine: string;
    declare textDescription: string;
    declare htmlDescription: string;
    declare image: string;
};

ProductLine.init({
    productLine: { type: DataTypes.STRING, primaryKey: true, },
    textDescription: { type: DataTypes.STRING, },
    htmlDescription: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'productlines'
})

export default ProductLine;