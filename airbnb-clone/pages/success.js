import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function Success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your booking has been confirmed!
            </h1>
          </div>
          <p>
            We'll send a email confirmation once your booking has been approved by the Holiday Stays.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Success;