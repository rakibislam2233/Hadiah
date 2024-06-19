"use server";

export const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/categories`, {
      cache: "no-store",
    });
    const categories = await res.json();
    return categories?.data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error?.message);
  }
};
