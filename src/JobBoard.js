import { useState } from "react";

import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import CategoryMenu from "./CategoryMenu";
import BodySearch from "./BodySearch";
import JobList from "./JobList";

export default function JobBoard({ allJobs }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [];

  for (let job of allJobs) {
    if (!categories.includes(job.category)) {
      categories.push(job.category);
    }
  }

  return (
    <>
      <TopNav />
      <Box
        sx={{
          padding: "50px 10%",
          background: "#f1f2f4",
          height: "500px",
          display: "flex"
        }}
      >
        <Box sx={{ width: "20%", textAlign: "left", color: "gray" }}>
          <Typography
            sx={{ mb: "30px", fontWeight: "700" }}
            variant="h5"
            gutterBottom
          >
            Find Work
          </Typography>
          <Typography sx={{ fontWeight: "700" }} variant="h6" gutterBottom>
            Categories
          </Typography>
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </Box>
        <Box sx={{ width: "80%" }}>
          <BodySearch />
          <JobList
            jobs={allJobs.filter((job) => {
              if (!selectedCategory) {
                return true;
              }
              return job.category === selectedCategory;
            })}
          />
        </Box>
      </Box>
    </>
  );
}
