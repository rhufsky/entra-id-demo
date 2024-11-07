"use client";
import { signOutAction } from "@/serveractions/authActions";

/**
 * `LogoutButton` is a React functional component that renders a button
 * which, when clicked, triggers the sign-out action for the user.
 *
 * @returns {JSX.Element} A button element styled with Tailwind CSS classes.
 *
 * @example
 * ```tsx
 * import LogoutButton from './LogoutButton';
 *
 * function App() {
 *   return (
 *     <div>
 *       <LogoutButton />
 *     </div>
 *   );
 * }
 * ```
 */
export default function LogoutButton() {
  const handleClick = async () => {
    signOutAction();
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}
