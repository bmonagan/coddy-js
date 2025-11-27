function transformData(products) {
  return products.map(product => {
    return {
      name: product.name.toUpperCase(),
      price: Number((product.price * 0.85).toFixed(2)),
      onSale: true
    };
  });
}
