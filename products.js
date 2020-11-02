const Product = require("../models/products");

exports.addProductForm = (req, res, next) => {
  res.render("add-product", {
    title: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const products = new Product(req.body);
  products.add();
  res.redirect("/");
};

exports.fetchAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("store", {
      prod: products,
      title: "My Store",
      path: "/",
    });
  });
  console.log("After CB");
};

exports.fetchProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.fetchById(prodId, (product) => {
    res.render("product-detail", {
      prod: product,
      title: "Product Details",
      path: "/products/id",
    });
  });
};
