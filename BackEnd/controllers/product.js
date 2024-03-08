import Product from "../models/product.js";
import Rating from "../models/rating.js";

export async function createProduct(req, res) {
  const { title, qte, category, description, price, picture } = req.body;
  const userId = req.userId;

  console.log(userId);
  if (!title || !qte || !category || !description || !price) {
    res.send({
      message: "Provide all values",
    });
  }

  try {
    const ProductCreated = await Product.create({
      title,
      qte,
      category,
      userId,
      description,
      price,
      picture,
    });
    res.send({
      message: "Product created with success",
      Product: ProductCreated,
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
}
export async function getAllProduct(req, res) {
  const products = await Product.find({});
  res.send(products);
}
export async function getProduct(req, res) {
  const oneproduct = await Product.findById(req.params.id);
  if (!oneproduct) {
    res.send({ message: "This product does not exist" });
  } else {
    res.send(oneproduct);
  }
}
export async function UpdateProduct(req, res) {
  const userId = req.userId;
  const ProductId = req.params.id;
  const newInfo = req.body;

  const UpdateProduct = await Product.findOneAndUpdate(
    {
      userId: userId,
      _id: ProductId,
    },
    newInfo
  );
  if (!UpdateProduct) {
    res.send({ message: "This product doent exist" });
  } else {
    res.send({ message: "Updated with success" });
  }
}
export async function deleteProduct(req, res) {
  const userId = req.userId;
  const ProductId = req.params.id;

  const deleteProduct = await Product.findOneAndDelete({
    userId: userId,
    _id: ProductId,
  });
  if (!deleteProduct) {
    res.send({ message: "This product doent exist" });
  } else {
    res.send({ message: "Deleted with success" });
  }
}

export async function rateProduct(req, res) {
  const userId = req.userId;
  const productId = req.params.id;
  const { rate } = req.body;
  await Rating.create({ userId, productId, rate });
  let sumRate = 0;
  const ratingOfProduct = await Rating.find({ productId });
  for (let i = 0; i < ratingOfProduct.length; i++) {
    sumRate = sumRate + ratingOfProduct[i].rate;
  }

  const finalRate = sumRate / ratingOfProduct.length;

  console.log(finalRate);

  const updatedProduct = await Product.findByIdAndUpdate(productId, {
    rate: finalRate,
  });
  res.send(updatedProduct);
}
