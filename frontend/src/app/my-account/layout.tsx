import Sidebar from "@/components/Page/MyAccount/Sidebar/Sidebar";
import Container from "@/components/Shared/Container/Container";
import { ReactNode } from "react";

const MyAccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Container className="w-full flex gap-5 px-3 my-5">
        <Sidebar/>
        <div className="w-[75%] bg-white rounded p-5">{children}</div>
      </Container>
    </>
  );
};

export default MyAccountLayout;
