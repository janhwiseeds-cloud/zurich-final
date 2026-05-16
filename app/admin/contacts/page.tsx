"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";

interface Contact {
  _id: string;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
}

export default function AdminContactsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isFetchingContacts, setIsFetchingContacts] = useState(false);
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/admin/contacts");
        if (res.ok) {
          setIsAuthenticated(true);
          fetchContacts();
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Logged in successfully");
        setIsAuthenticated(true);
        setPassword("");
        fetchContacts();
      } else {
        toast.error(data.error || "Invalid password");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchContacts = async () => {
    setIsFetchingContacts(true);
    try {
      const res = await fetch("/api/admin/contacts");
      const data = await res.json();
      if (res.ok) {
        setContacts(data.data || []);
      } else {
        toast.error(data.error || "Failed to fetch contacts");
      }
    } catch (err) {
      toast.error("An error occurred while fetching contacts.");
    } finally {
      setIsFetchingContacts(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setContacts([]);
    toast.success("Logged out");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg border border-green-200">
          <h1 className="text-3xl font-bold text-green-900 mb-2">Admin Login</h1>
          <p className="text-green-700 mb-6">Enter password to view contact submissions</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-green-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <Link href="/">
            <p className="mt-4 text-center text-green-600 hover:underline">Back to Home</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-green-900">Contact Submissions</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

        {isFetchingContacts ? (
          <div className="text-center py-12">
            <p className="text-green-700 text-lg">Loading contacts...</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center border border-green-200">
            <p className="text-green-700 text-lg">No contact submissions yet.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600 hover:shadow-xl transition"
              >
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-green-600 font-semibold uppercase">Name</p>
                    <p className="text-lg font-bold text-green-900">{contact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-semibold uppercase">Phone</p>
                    <p className="text-lg font-bold text-green-900">
                      <a
                        href={`tel:+91${contact.phone}`}
                        className="hover:text-green-600 transition"
                      >
                        +91 {contact.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-green-600 font-semibold uppercase">Date</p>
                    <p className="text-lg text-green-700">
                      {new Date(contact.createdAt).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
                <div className="border-t border-green-100 pt-4">
                  <p className="text-sm text-green-600 font-semibold uppercase mb-2">Message</p>
                  <p className="text-green-800 leading-relaxed">{contact.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/">
            <p className="text-green-600 hover:underline font-semibold">Back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
