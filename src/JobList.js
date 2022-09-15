import { Box, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  return (
    <Paper>
      {jobs.map((job) => {
        return (
          <Box key={job.id}>
            <Box sx={{ padding: "20px", color: "gray" }}>
              <Link
                style={{
                  color: "gray",
                  textDecoration: "none",
                  cursor: "pointer"
                }}
                to={`/job/${job.id}`}
              >
                <Typography
                  sx={{ fontWeight: "700" }}
                  variant="h6"
                  gutterBottom
                >
                  {job.title}
                </Typography>
              </Link>
              <Typography
                sx={{ mt: "15px", fontWeight: "700" }}
                variant="subtitle2"
                gutterBottom
              >
                Hourly: ${job.hourlyUSD}.00
              </Typography>
              <Typography
                sx={{ fontWeight: "700" }}
                variant="subtitle2"
                gutterBottom
              >
                Posted {job.postedTime}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "700"
                }}
                gutterBottom
              >
                <img
                  style={{ height: "15px", marginRight: "5px" }}
                  src="https://assets.codepen.io/6060109/location-icon.png"
                  alt="location"
                />
                {job.remote ? "Remote, " : "Non-remote, "}
                {job.location}
              </Typography>
              <Typography sx={{ mt: "15px" }} variant="body2" gutterBottom>
                {job.description}
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
}
