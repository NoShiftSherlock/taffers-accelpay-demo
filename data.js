/* Taffer's Browned Butter Bourbon demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://shop.taffers.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "taffers",
 "brand": "Taffer's Browned Butter Bourbon",
 "storeName": "Taffer's Browned Butter Bourbon",
 "orderPrefix": "TAF",
 "catalog": {
  "taffers-browned-butter-bourbon": {
   "name": "Taffer's Browned Butter Bourbon",
   "short": "Taffer's Browned Butter Bourbon",
   "size": "750ML",
   "tag": "flavored bourbon",
   "price": 4099,
   "image": "assets/p-taffers-browned-butter-bourbon.png",
   "gallery": [
    "assets/p-taffers-browned-butter-bourbon.png"
   ],
   "lead": "",
   "specs": "",
   "desc": [
    "A rich, bold bourbon whiskey with notes of vanilla and toffee balanced by a full body, Taffer’s Browned Butter Bourbon lives up to the warm promise of its name. It beckons with the carefully caramelized flavor of browned butter, a wildly transformative ingredient beloved and toiled over by chefs around the world.",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "taffers-browned-butter-bourbon"
 ],
 "defaultHandle": "taffers-browned-butter-bourbon",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
