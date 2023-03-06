odoo.define('pos_purchase_limit.validation', function(require) {
    'use strict';
    const PaymentScreen = require('point_of_sale.PaymentScreen');
    const Registries = require('point_of_sale.Registries');
    const ErrorPopup = require('point_of_sale.ErrorPopup');
    const validation = PaymentScreen =>
        class extends PaymentScreen {
            async validateOrder(isForceValidate) {
                if (this.env.pos.selectedOrder.partner == null){
                this.showPopup('ErrorPopup',{
                    title:'Select Customer',
                    body: 'Please Select Customer',
                });
                }else if (this.env.pos.selectedOrder.partner.amount <= this.env.pos.selectedOrder.selected_paymentline.amount ){
                this.showPopup('ErrorPopup',{
                    title:'Purchase Limit',
                    body: 'Customer Purchase Limit Is '+ this.env.pos.selectedOrder.partner.amount +
                    ' \n Differance of limit&total: ' + (this.env.pos.selectedOrder.selected_paymentline.amount - this.env.pos.selectedOrder.partner.amount)
                    });
                }
                else{
                    await super.validateOrder(isForceValidate);
                    }
            }
        };

    Registries.Component.extend(PaymentScreen, validation);
    return PaymentScreen;
});