
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
          <h1 className="text-xl font-bold text-purple-700">
            My Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Log Out
          </button>
        </header>

        <main className="mt-8 rounded-xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome, {user?.displayName || "User"}!
          </h2>

          <p className="mt-3 text-gray-600">
            You have successfully signed in to your account.
          </p>

          <div className="mt-6 rounded-lg bg-purple-50 p-5">
            <p className="font-medium text-purple-800">
              Account Information
            </p>

            <p className="mt-2 text-sm text-gray-700">
              Email: {user?.email || "Not available"}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

