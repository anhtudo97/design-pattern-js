/** Giảm giá khi người dung đặt trước 1 sản phẩm của VINFAST
 * @param {*} originalPrice
 * @returns
 */
function preOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

/** Tiếp tục thêm tính năng khuyến mãi thông thường, ví dụ nêu giá gốc < 200 thì giảm 10%, còn > thì giảm 30
 * @param {*} originalPrice
 * @returns
 */
function promtionPrice(originalPrice) {
  return originalPrice < 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/** Giá mặc định
 * @param {*} originalPrice
 * @returns
 */
function defaultPrice(originalPrice) {
  return originalPrice;
}

const getPriceByPromotion = {
  preOrder: preOrderPrice,
  promotionPrice: promtionPrice,
  default: defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceByPromotion[typePromotion](originalPrice);
}

console.log('----->>>', getPrice(200, 'preOrder'));
