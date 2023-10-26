import { SystemStyle } from "./SystemStyle";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsEyeSlash } from "react-icons/bs";
import Logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

const System = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    user_not: false,
  });
  const [obj, setObj] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let t = true,
      err = {};
    if (!obj.username) {
      t = false;
      err = { ...err, username: true };
    }
    if (!obj.password) {
      t = false;
      err = { ...err, password: true };
    }
    if (t) {
      axios
        .post("http://kpiapi.gazon-tashkent.uz/api/v1/account/login/", {
          username: obj.username,
          password: obj.password,
        })
        .then((r) => {
          localStorage.setItem("token", r?.data?.tokens?.access ?? "");
          navigate("/appi");
        })
        .catch((e) => {
          console.log(e);
          if (e?.response?.status === 400) {
            setErrors((pV) => ({ ...pV, user_not: true }));
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
      setErrors(err);
    }
  };
  return (
    <>
      <SystemStyle>
        <div className="container">
          <div className="card">
            <div className="system">
              <div className="system_on">
                <img src={Logo} />
                <h2>KPI System</h2>
              </div>
              <div className="system_to">
                <div>
                  <h4>TIZIMGA KIRISH</h4>
                  <p>
                    Tizimga kirish uchun <span>admin</span> tomonidan berilgan
                    login va
                    <br /> parolni kiriting
                  </p>
                </div>
                <hr />
                <form onSubmit={onSubmit}>
                  <div className="login">
                    <label>Login</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      placeholder="Loginni kiriting"
                      value={obj?.username}
                      onChange={(e) => {
                        setObj({ ...obj, username: e.target.value });
                        setErrors({ ...errors, username: false });
                      }}
                    />
                    {errors?.username ? (
                      <div style={{ color: "red" }}>Loginni kiriting</div>
                    ) : null}
                  </div>
                  <div className="parol">
                    <label>Parol</label>
                    <br />
                    <div className="input">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Parolni kiriting"
                        value={obj?.password}
                        onChange={(e) => {
                          setObj({ ...obj, password: e.target.value });
                          setErrors({ ...errors, password: false });
                        }}
                      />
                      <div className="icon">
                        {showPassword ? (
                          <button>
                            <div onClick={() => setShowPassword(false)}>
                              <BsEyeSlash />
                            </div>
                          </button>
                        ) : (
                          <div onClick={() => setShowPassword(true)}>
                            <AiOutlineEye
                              onClick={() => setShowPassword(true)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    {errors?.password ? (
                      <div style={{ color: "red" }}>Parol kiriting</div>
                    ) : null}
                    {errors?.user_not === true ? (
                      <div style={{ color: "red" }}>
                        Tizimga kirib bo'lmadi. Login va parolni tekshirish
                      </div>
                    ) : null}
                  </div>
                  <div className="submit">
                    {loading ? (
                      "Yuborilmoqda"
                    ) : (
                      <button type="submit">Kirish</button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SystemStyle>
    </>
  );
};

export default System;
