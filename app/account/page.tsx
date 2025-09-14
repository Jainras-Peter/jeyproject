"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, CreditCard, Settings, LogOut, Package } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  // Mock user data; replace with actual data source later
  const [user] = useState({
    name: "Jerinka",
    email: "jerinka@gmail.com",
    phone: "+91 12345 67890",
    address: "123, Main Street, Chennai, TamilNadu"
  });

  return (
    <main className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
        <User size={28} />
        <span>Account Details</span>
      </h1>

      <div className="space-y-4">
        {/* Personal Information */}
        <div className="p-4 bg-gray-50 rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Personal Information</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <User size={20} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-gray-800">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800">{user.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={20} className="text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium text-gray-800">{user.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="p-4 bg-gray-50 rounded-md space-y-2">
          <Link href="/orders" className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded transition">
            <Package size={20} className="text-blue-600" />
            <span className="font-medium text-gray-700">Your Orders</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded transition">
            <CreditCard size={20} className="text-green-600" />
            <span className="font-medium text-gray-700">Payment Methods</span>
          </Link>
          <Link href="#" className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded transition">
            <Settings size={20} className="text-yellow-600" />
            <span className="font-medium text-gray-700">Settings</span>
          </Link>
          <Link href="/logout" className="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded transition text-red-600">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
