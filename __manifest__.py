{'name': 'Purchase Limit',
 'version': '16.0.1.0.0',
 'sequence': -1,
 'website': 'https://www.odoo.com/page/most_sold',
 'category': 'all',
 'installable': True,
 'application': True,
 'auto_install': False,
 'depends': ['base','point_of_sale'],
 'data': [
  'views/partner_inherit.xml',
 ],
 'assets':{
  'point_of_sale.assets':[
           'pos_purchase_limit/static/src/js/pos_inherit.js',
 ]
     }
 }