import React from "react";
import { useNavigate } from "react-router-dom";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { PersonAddOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";

const HR = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/app/profile");
  };

  return (
    <div>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Header isDashboard={true} title={"HR PAGE"} subTitle={"Welcome to THE HR PAGE"} />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 10px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
            onClick={handleAddEmployee}
          >
            <PersonAddOutlined sx={{ mr: 1 }}/>
             ADD EMPLOYEE
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default HR;
