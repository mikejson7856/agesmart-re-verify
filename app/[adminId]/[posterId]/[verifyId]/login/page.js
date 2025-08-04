"use client";
import LoginForm from "@/app/components/LoginForm";
import { useParams } from "next/navigation";
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
