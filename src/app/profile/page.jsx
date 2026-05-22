"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import React from "react";

import { LuMail, LuUser, LuCalendar, LuLogOut } from "react-icons/lu";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    
    const user = session?.user;
   
  const handleLogout = async () => {
    await authClient.signOut();
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Please Login First</h1>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 shadow-xl border border-gray-100 rounded-2xl">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <Avatar className="w-28 h-28 text-3xl">
              <Avatar.Image
                src={user?.image}
                alt={user?.name}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <div>
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <p className="text-gray-500 mt-1">{user?.email}</p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <Button  color="primary" variant="flat">
                  Edit Profile
                </Button>

                <Button color="danger" variant="flat" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t my-8"></div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-50 p-5 rounded-xl border">
              <div className="flex items-center gap-3">
                <LuUser className="text-xl text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <h3 className="font-semibold" >{user?.name}</h3>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border">
              <div className="flex items-center gap-3">
                <LuMail className="text-xl text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <h3 className="font-semibold">{user?.email}</h3>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border">
              <div className="flex items-center gap-3">
                <LuCalendar className="text-xl text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">Account Status</p>
                  <h3 className="font-semibold">Active</h3>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border">
              <div className="flex items-center gap-3">
                <LuLogOut className="text-xl text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">User ID</p>
                  <h3 className="font-semibold text-xs break-all">
                    {user?.id}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
