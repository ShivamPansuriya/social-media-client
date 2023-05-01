import { Box } from "@mui/material";
// import dotenv from "dotenv";

// dotenv.config()

const UserImage = ({ image, size = "60px" }) => {
  // const apikey = process.env.REACT_APP_APIKEY;

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://social-media-server1-4ouu.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;