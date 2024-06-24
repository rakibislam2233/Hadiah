"use server";
export const loginUser = async (payload: any) => {
  try {
    const res = await fetch(`https://hadiah-theta.vercel.app/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
