import React, { useContext, useState } from "react";
import NavBar from './NavBar';
import About from './About';
import Field from './Field';
import ButtonSubmit from './ButtonSubmit';
import { AuthContext } from "../context/AuthContext";
import api from "../config/api"; 
const EditProfile = () => {
  const { user, token } = useContext(AuthContext);

  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    address: user?.address || "",
    phone: user?.phone || "",
  });

  const [passwordData, setPasswordData] = useState({
    oldpassword: "",
    newpassword: "",
  });

  const [message, setMessage] = useState(""); 

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await api.patch("/users/update", profileData, {
            headers: { Authorization: `Bearer ${token}` },
          });      
        setMessage("Cập nhật thông tin thành công!");
    } catch (err) {
      console.error("Lỗi khi cập nhật thông tin:", err, token);
      setMessage("Có lỗi xảy ra khi cập nhật thông tin.");
    }
  };

  // Hàm xử lý lưu mật khẩu
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await api.patch("/users/update", passwordData, {
            headers: { Authorization: `Bearer ${token}` }, 
          });
        setMessage("Cập nhật mật khẩu thành công!");
    } catch (err) {
      console.error("Lỗi khi cập nhật mật khẩu:", err);
      setMessage("Có lỗi xảy ra khi cập nhật mật khẩu.");
    }
  };

  return (
    <div className="">
      <NavBar />
      <div className="py-10 bg-gradient-to-r from-amber-50 to-orange-200">
        <div className="container px-10 md:px-20 w-full mx-auto">
          <div className="bg-white mx-auto w-full rounded-3xl p-12">
            <div className="">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p className="font-bold text-3xl">Sửa thông tin</p>
                </div>

                {message && <p className="text-green-600">{message}</p>}

                {/* Form thông tin */}
                <form onSubmit={handleProfileSubmit} className="flex flex-col gap-3">
                  <p className="font-medium text-2xl">Thông tin</p>
                  <Field
                    label="Tên"
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleProfileChange}
                  />
                  <Field
                    label="Địa chỉ"
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                  />
                  <Field
                    label="SĐT"
                    type="number"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                  />
                  <ButtonSubmit name="Lưu" />
                </form>

                {/* Form mật khẩu */}
                <form onSubmit={handlePasswordSubmit} className="flex flex-col gap-3">
                  <p className="font-medium text-2xl">Mật khẩu</p>
                  <Field
                    label="Mật khẩu cũ"
                    type="password"
                    name="oldpassword"
                    value={passwordData.oldpassword}
                    onChange={handlePasswordChange}
                  />
                  <Field
                    label="Mật khẩu mới"
                    type="password"
                    name="newpassword"
                    value={passwordData.newpassword}
                    onChange={handlePasswordChange}
                  />
                  <ButtonSubmit name="Lưu mật khẩu" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default EditProfile;
