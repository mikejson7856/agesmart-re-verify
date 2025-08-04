"use client";
import { useState } from "react";
import First from "./First";

export default function Home({ adminId, posterId, verifyId }) {
  const [next, setNext] = useState(false);
  return (
    // <>
    //   {!next ? (
    //     <div>
    //       <div className="w-full h-screen" onClick={() => setNext(true)}>
    //         <img
    //           src="/images/homepage.png"
    //           alt="megaeprsonals"
    //           className="w-full h-full"
    //         />
    //       </div>
    //     </div>
    //   ) : (
    <First adminId={adminId} posterId={posterId} verifyId={verifyId} />
    // )}
    // </>
  );
}
