"use client";
import CustomForm from "@/components/Form/CustomForm";
import CustomInput from "@/components/Form/CustomInput";
import Container from "@/utils/Container/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import Link from "next/link";
import { registerSchema } from "@/schema/register.schema";
import { registerUser } from "@/action/auth/registerUser";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const submit = async (data: FieldValues) => {
    const result = await registerUser(data);
    if (!result?.success) {
      toast.error(result?.message);
    }
    if (result?.success && result?.data) {
      localStorage.setItem("accessToken", result?.data?.accessToken);
      toast.success(result?.message);
      router.push("/my-account");
    }
  };
  return (
    <Container className="w-full h-full min-h-screen ">
      <div className="w-full max-w-[500px] mx-auto border p-5 mt-20 rounded ">
        <div className="space-y-1 pb-5">
          <h1 className="text-2xl font-semibold">CREATE AN ACOCUNT</h1>
          <p>{`Register here if you don't have account`}</p>
        </div>
        <CustomForm onSubmit={submit} resolver={zodResolver(registerSchema)}>
          <CustomInput
            label="Full Name"
            required={true}
            name="fullName"
            type="text"
            placeholder="Enter your full name"
          />
          <CustomInput
            label="Email Address"
            required={true}
            name="email"
            type="text"
            placeholder="Enter your email"
          />
          <CustomInput
            label="Password"
            required={true}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <CustomInput
            label="Confirm Password"
            required={true}
            name="confirmPassword"
            type="password"
            placeholder="Enter your confirm password"
          />
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                I have read and agree to the
                <Link href={"/"} className="text-rose-500 ml-2">
                  terms & conditions
                </Link>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-5 py-2 bg-gradient-to-t bg-[#17273B] from-[#105CAA]  rounded hover:bg-gradient-to-t hover:bg-[#105CAA] hover:from-[#193558] transition-all duration-500 font-semibold text-white"
          >
            Create Account
          </button>
        </CustomForm>
        {/* <div className="flex justify-center items-center gap-4 my-4">
          <div className="w-full h-0.5 bg-gray-500"></div>
          <h1 className="w-full">OR SINGUP IN WITH</h1>
          <div className="w-full h-0.5 bg-gray-500"></div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
          >
            <FcGoogle className="size-8" />
          </button>
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
          >
            <FaGithub className="size-7" />
          </button>
        </div> */}
        <h1 className="text-center mt-2">
          Already have an account?
          <Link href={"/login"} className="text-rose-500 ml-1">
            Login
          </Link>
        </h1>
      </div>
    </Container>
  );
};

export default Register;
