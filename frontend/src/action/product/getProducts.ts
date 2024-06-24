"use server";

const getProducts = async () => {
  const result = await fetch(`${process.env.BACKEND_URL}/api/v1/products`);
  const data = await result.json();
  console.log(data)
  return data?.data;
};
