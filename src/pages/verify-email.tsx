import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ENDPOINTS from "@/utils/constants";
import Link from "next/link";
import ReactPlayer from "react-player";
import successVideo from "../../Videos/Done.mp4"

const VerifyEmail: React.FC = () => {
  const router = useRouter();
  const { token } = router.query;
  const [status, setStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const endpoint = "/authorizations/confirmations";

  useEffect(() => {
    if (token) {
      const verifyEmail = async () => {
        try {
          const params_confirmation = {
            user: {
              confirmation_token: token
            }
          };
          await axios.post(ENDPOINTS.USER + endpoint, params_confirmation);
          setStatus(true);
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setStatus(false);
          } else {
            setStatus(false);
          }
        } finally {
          setLoading(false);
        }
      };

      verifyEmail();
    }
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        {status === true ? (
          <>
            <ReactPlayer
              url = {successVideo}
              controls
              width="600px"
              height="auto"
            />
            <p className="text-center text-gray-600 mb-6">
              Congratulations! Your account has been successfully verified. You
              can now proceed to log in.
            </p>
            <div className="flex justify-center">
              <Link
                href="/login"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Log in
              </Link>
            </div>
          </>
        ) : (
          <>
            <video
              className="w-full h-auto mb-6"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/path-to-your-failure-animation.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <h1 className="text-2xl font-semibold text-center text-red-600 mb-4">
              Verification Failed
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Sorry, we couldn't verify your account. Please try again.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
