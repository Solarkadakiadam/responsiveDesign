import { ProductModel } from "../models/product-model.js";

export async function getAllProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const resData = await response.json();

  if (!resData) {
    throw new Error("Something went wrong!.");
  }

  let productsList = [];

  resData.map((p) => {
    const newProduct = new ProductModel(
      p.id,
      p.name,
      p.image,
      p.description,
      p.count,
      p.price
    );
    productsList.push(newProduct);
  });

  productsList = await JSON.parse(JSON.stringify(productsList));

  return productsList;
}

export async function updateProduct(updatedProduct) {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data);
    }
  } catch (error) {
    throw error;
  }
}
