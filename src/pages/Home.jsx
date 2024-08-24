import Template from "../components/Template";
import Booking from "../components/booking";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import AdminPage from "./Admin/AdminPage";
import DashboardPenyewa from "./Penyewa/DashboardPenyewa";


function Home() {
  const {role_id} = useSelector((state) => state.Auth.user)

  return (
    <>
    {role_id == 'admin' ? (
      <AdminPage/>
    ) : role_id == 'penyewa' ?(
      <DashboardPenyewa/>
    ): (
      <>
        <Navbar/>
        <Template />
        <Booking/>
      </>
    )}
    </>
  );
}

export default Home;
