import fs from "fs/promises";

import path from "path";

const productsDirectory = path.join(
  process.cwd(),
  "content",
  "products",
  "products.json"
);

export default async function handler(req, res) {
  const productsFile = await fs.readFile(productsDirectory);
  const products = await JSON.parse(productsFile);

  if (req.method === "POST") {
    const updatedProduct = req.body;

    if (!updatedProduct) {
      throw new Error("updated product error.");
    }
    let product = products.find((p) => p.id === updatedProduct.id);

    if (!product) {
      throw new Error("Product not found.");
    }
    const productIndex = products.findIndex((p) => p.id === updatedProduct.id);
    products[productIndex] = updatedProduct;

    const updatedProducts = await JSON.stringify(products);
    await fs.writeFile(productsDirectory, updatedProducts, (err) => {
      if (err) {
        throw new Error("Başaramadık.");
      }
    });

    res.status(200).json({ message: "Success" });
  } else {
    res.status(200).json(products);
  }
}
