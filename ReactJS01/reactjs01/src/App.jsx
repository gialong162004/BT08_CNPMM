import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import axios from "./util/axios.customize"
import { useContext, useEffect } from "react"
import { AuthContext } from "./components/context/auth.context";
import { Spin} from "antd";

function App() {

  const { setAuth, appLoading, setAppLoading } = useContext (AuthContext);

  useEffect(() => {
  const fetchAccount = async () => {
      setAppLoading(true);
      const res = await axios.get('/v1/api/user');
      if (res && !res.message) {
        setAuth({
          isAuthenticated: true,
          user: {
            email: res.email,
            name: res.name
          }
        })
      }
      setAppLoading(false);
    }

    fetchAccount()
  }, [])



  return (
    <div>
      {appLoading === true ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)"
        }}>

          <Spin />
          
        </div>
        :
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }}
          >
            <Header />
          </div>

          <div style={{ marginTop: "64px" }}>
            <Outlet />
          </div>
        </>
      }
    </div>
  )
}
export default App