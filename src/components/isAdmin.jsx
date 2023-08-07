import React from 'react';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const YourComponent = ({ isAdmin }) => {
  return (
      <>
      {isAdmin ? (
        <>
          <Link to="/admin">
            <div>
              <div>
                <AdminPanelSettingsIcon />
              </div>
              <div>Admin Panel</div>
            </div>
          </Link>
          <Link to="/users">
            <div>
              <div>
                <SupervisorAccountIcon />
              </div>
              <div>Admin Users</div>
            </div>
          </Link>
        </>
      ) : (
        <div>
          {/* Some other content if isAdmin is false */}
        </div>
      )}
      </>
  );
};

export default YourComponent;