import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';

interface OrderAttributes {
    orderNumber: number,
    orderDate: string,
    requiredDate: string,
    shippedDate: string,
    status: string,
    comments: string,
    customerNumber: number,
};

export interface OrderInput extends Optional<OrderAttributes, 'orderNumber'>{};
export interface OrderOutput extends Required<OrderAttributes>{};

class Order extends Model<OrderAttributes, OrderInput> {
    declare orderNumber: number;
    declare orderDate: string;
    declare requiredDate: string;
    declare shippedDate: string;
    declare status: string;
    declare comments: string;
    declare customerNumber: number;
};

Order.init({
    orderNumber: { type: DataTypes.INTEGER, primaryKey: true, },
    orderDate: { type: DataTypes.STRING },
    requiredDate: { type: DataTypes.STRING },
    shippedDate: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    comments: { type: DataTypes.STRING },
    customerNumber: { type: DataTypes.INTEGER },
}, {
    sequelize,
    modelName: 'orders'
})

export default Order;