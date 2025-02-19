import NavBar from './NavBar'
import Button from './Button'
import About from './About'
import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";
import UserOrders from './UserOrders';

const Profile = () => {
    const { user } = useContext(AuthContext);
  
    return (
      <div>
        <NavBar />
        <div className="py-10 bg-gradient-to-r from-amber-50 to-orange-200">
          <div className="container px-10 md:px-20 w-full mx-auto">
            <div className="bg-white mx-auto w-full rounded-3xl p-12">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="font-bold text-3xl">{user.name}</p>
                  <Button 
                    name="Sửa thông tin"
                    href="/profile/edit"
                    type="a"
                    color="bg-amber-200"
                    textColor="text-black"
                  />
                </div>
                <div>
                  <p className="font-medium text-2xl">Thông tin</p>
                  <p className="text-amber-900">Địa chỉ: {user.address || "Trống"}</p>
                  <p className="text-amber-900">Email: {user.email || "Chưa cập nhật"}</p>
                  <p className="text-amber-900">SĐT: {user.phone || "Trống"}</p>
                  <p className="text-amber-900">
                    Quyền:{" "}
                    {(() => {
                      switch (user.role) {
                        case 0:
                          return "Quản trị viên";
                        case 1:
                          return "Nhân viên";
                        case 2:
                          return "Nhà cung cấp";
                        case 3:
                          return "Thành viên";
                        default:
                          return "Trống";
                      }
                    })()}
                  </p>
                </div>
                <UserOrders />
              </div>
            </div>
          </div>
        </div>
        <About />
      </div>
    );
  };
  
  export default Profile;
  