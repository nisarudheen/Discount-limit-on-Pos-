from odoo import models, fields


class PartnerPurchaseLimit(models.Model):
    _inherit = 'res.partner'

    purchase_limit = fields.Boolean(string='PurchaseLimit')
    company_id = fields.Many2one('res.company',
                                 default=lambda self: self.env.company,
                                 string="Company")
    currency_id = fields.Many2one('res.currency',
                                  default=lambda self: self.env.company.
                                  currency_id)
    amount = fields.Monetary(string='Limit')