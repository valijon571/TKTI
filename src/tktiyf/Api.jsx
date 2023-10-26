import { Link } from "react-router-dom";
import axios from "axios";
import { SystemStyle } from "./SystemStyle";
import { useEffect, useState } from "react";

const Api = () => {
  const [profile, setProfile] = useState({});
  const [check, setCHeck] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProfile();
    getCHeck();
  }, []);

  const getProfile = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get("http://kpiapi.gazon-tashkent.uz/api/v1/account/profile/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => {
        setProfile(r.data);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const getCHeck = () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios
      .get("http://kpiapi.gazon-tashkent.uz/api/v1/application/check-list/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((r) => {
        setCHeck(r.data);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <SystemStyle>
        <div className="container_to">
          {/* <Link to="/appi">Api</Link> */}
          {console.log(profile)}

          {/* <h1>TKTIYF</h1> */}
          {loading ? (
            <div>Yuklanmoqda.....</div>
          ) : (
            <div>
              <div className="hedr">
                <div>
                  <img
                    src={"http://kpi.gazon-tashkent.uz/logot.png"}
                    style={{ width: "80px" }}
                  />
                </div>
                <div>
                  <div className="image">
                    <img
                      src={
                        "http://kpiapi.gazon-tashkent.uz/media/User/1f3a545f-5201-437f-8eb0-68c9da00d1bb.png"
                      }
                      style={{ width: "80px" }}
                    />
                  </div>
                  {/* <div>{profile?.created_at}</div> */}
                  <div>{profile?.first_name}</div>
                  <div>{profile?.last_name}</div>
                  {/* <div>{profile?.middle_name}</div> */}
                  {/* <div>{profile?.partition?.id}</div>
                  <div>{profile?.partition?.name}</div>
                  <div>{profile?.position}</div>
                  <div>{profile?.role}</div>
                  <div>{profile?.total_ball}</div>
                  <div>{profile?.username}</div> */}
                </div>
              </div>
              <hr />
              <h3>Oy davomida bajarilgan ishlar (2 ta)</h3>
              <div>
                {check?.applications?.map((item, index) => (
                  <>
                    <div key={index}>
                      <div>{item?.ball}</div>
                      <div>{item?.created_at}</div>
                      <div>
                        {check?.historys?.map((item, index) => (
                          <div key={index}>
                            <img
                              src={`User/dddc9f84-4182-4f6f-8384-bdd8cfce35c3.jpg/${item?.avatar}`}
                              style={{ width: "80px" }}
                            />

                            <div>{item?.avatar}</div>
                            <div>{item?.ball}</div>
                            <div>{item?.created_at}</div>
                            <div>{item?.first_name}</div>
                            <div>{item?.id}</div>
                            <div>{item?.last_name}</div>
                            <div>{item?.position}</div>
                            <div>{item?.status}</div>
                          </div>
                        ))}
                      </div>
                      <div>{item?.is_rector_incentive}</div>
                      <div>{item?.partition__name}</div>
                      <div>{item?.work}</div>
                    </div>
                  </>
                ))}
                <hr />
                <p>
                  Copyright © Toshkent Kimyo Texnologiya Instituti Yangiyer
                  Filiali — 2023
                </p>
              </div>
            </div>
          )}
        </div>
      </SystemStyle>
    </>
  );
};
export default Api;
