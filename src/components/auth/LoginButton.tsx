"use client";
import signInAction from "@/serveractions/authActions";

/**
 * A button component that triggers the sign-in action when clicked.
 *
 * @component
 * @example
 * // Usage example:
 * <LoginButton />
 *
 * @returns {JSX.Element} A styled button element that initiates the sign-in process.
 */
export default function LoginButton() {
  const handleClick = async () => {
    signInAction();
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Login
    </button>
  );
}
