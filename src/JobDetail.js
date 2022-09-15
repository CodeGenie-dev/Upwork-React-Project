import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Divider, Paper, Typography } from "@mui/material";
import TopNav from "./TopNav";
import { PrimaryButton, ThirdButton } from "./StyledComponents";
import { PRIMARY_GREEN } from "./StyledComponents";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function JobDetail({ jobDetail }) {
  let { id: idFromURL } = useParams();

  const [buttonText, setButtonText] = useState("Copy link");

  const selectedJob = jobDetail.find((job) => {
    return job.id === Number(idFromURL);
  });

  const jobURL = selectedJob.jobURL;

  const copy = () => {
    const copyText = document.getElementById("filled-disabled");
    copyText.disabled = false;
    copyText.select();
    document.execCommand("Copy");
    copyText.disabled = true;
    setButtonText("Copied!");
  };

  return (
    <Box>
      <TopNav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px 10%",
          maxWidth: "1000px",
          m: "auto"
        }}
      >
        <Box
          sx={{
            color: "gray",
            width: "70%",
            mr: "20px",
            minWidth: "550px",
            maxWidth: "700px"
          }}
        >
          <Typography
            sx={{ fontWeight: "700", mb: "30px" }}
            variant="h5"
            gutterBottom
          >
            {selectedJob.title}
          </Typography>
          <Divider />
          <Typography
            sx={{ mt: "30px", fontWeight: "600", color: PRIMARY_GREEN }}
            variant="subtitle2"
            gutterBottom
          >
            {selectedJob.category}
          </Typography>
          <Typography
            sx={{ mt: "15px", fontWeight: "700" }}
            variant="subtitle2"
            gutterBottom
          >
            Hourly: ${selectedJob.hourlyUSD}.00
          </Typography>
          <Typography
            sx={{ fontWeight: "500", mt: "15px" }}
            variant="subtitle2"
            gutterBottom
          >
            Posted {selectedJob.postedTime}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: "700",
              m: "15px 0 30px 0"
            }}
            gutterBottom
          >
            <img
              style={{ height: "15px", marginRight: "5px" }}
              src="https://assets.codepen.io/6060109/location-icon.png"
              alt="location"
            />
            {selectedJob.remote ? "Remote, " : "Non-remote, "}
            {selectedJob.location}
          </Typography>
          <Divider />
          <Typography sx={{ mt: "30px" }} variant="body2" gutterBottom>
            {selectedJob.description}
          </Typography>
          <Typography sx={{ m: "15px 0 30px" }} variant="body2" gutterBottom>
            Vestibulum rhoncus est pellentesque elit. Ridiculus mus mauris vitae
            ultricies. Pellentesque habitant morbi tristique senectus et netus.
            Adipiscing diam donec adipiscing tristique risus nec feugiat in
            fermentum. Etiam erat velit scelerisque in dictum non consectetur a
            erat.
          </Typography>
          <Divider />
        </Box>
        <Paper
          sx={{
            width: "30%",
            padding: "20px 15px",
            ml: "20px",
            maxWidth: "300px",
            minWidth: "250px",
            maxHeight: "500px"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <PrimaryButton variant="contained">Submit a Proposal</PrimaryButton>
            <ThirdButton sx={{ m: "15px 0 30px" }} variant="contained">
              <FavoriteBorderIcon
                sx={{
                  color: PRIMARY_GREEN,
                  mr: "5px",
                  height: "25px"
                }}
              />
              Save Job
            </ThirdButton>
          </Box>
          <Divider />
          <Box sx={{ color: "gray", p: "20px 20px" }}>
            <Typography
              sx={{ fontWeight: "700", mt: "15px" }}
              variant="subtitle2"
              gutterBottom
            >
              About the client
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                mt: "15px",
                display: "flex",
                alignItems: "center",
                p: "10px 0 5px"
              }}
              variant="subtitle2"
              gutterBottom
            >
              {selectedJob.paymentVerified ? (
                <>
                  <CheckCircleOutlineIcon
                    sx={{ color: PRIMARY_GREEN, mr: "5px", height: "20px" }}
                  />
                  Payment Verified
                </>
              ) : (
                <>
                  <CancelOutlinedIcon
                    sx={{ color: "red", mr: "5px", height: "20px" }}
                  />
                  Payment Not Verified
                </>
              )}
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                mt: "15px",
                display: "flex",
                alignItems: "center",
                p: "5px 0"
              }}
              variant="subtitle2"
              gutterBottom
            >
              <PlaceIcon
                sx={{ color: PRIMARY_GREEN, mr: "5px", height: "20px" }}
              />
              {selectedJob.location}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ color: "gray", p: "20px 20px" }}>
            <Typography
              sx={{ fontWeight: "700", mt: "15px" }}
              variant="subtitle2"
              gutterBottom
            >
              Job link
            </Typography>
            <TextField
              disabled
              id="filled-disabled"
              defaultValue={jobURL}
              sx={{ backgroundColor: "#f1f2f4", border: "none" }}
            />
            <Button
              sx={{ color: PRIMARY_GREEN, textTransform: "none", p: "5px 0" }}
              onClick={copy}
              variant="text"
            >
              {buttonText}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
