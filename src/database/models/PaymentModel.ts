import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';

interface PaymentAttributes {
    customerNumber: number,
    checkNumber: string,
    paymentDate: string,
    amount: number,
};

export interface PaymentInput extends Optional<PaymentAttributes, 'checkNumber'>{};
export interface PaymentOutput extends Required<PaymentAttributes>{};

class Payment extends Model<PaymentAttributes, PaymentInput> {
    declare customerNumber: number;
    declare checkNumber: string;
    declare paymentDate: string;
    declare amount: number;
};

Payment.init({
    customerNumber: { type: DataTypes.INTEGER },
    checkNumber: { type: DataTypes.STRING,  primaryKey: true, },
    paymentDate: { type: DataTypes.STRING },
    amount: { type: DataTypes.FLOAT },
}, {
    sequelize,
    modelName: 'payments'
})

export default Payment;