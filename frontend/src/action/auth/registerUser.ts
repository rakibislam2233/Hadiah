"use server";
export const registerUser = async (payload: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
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
