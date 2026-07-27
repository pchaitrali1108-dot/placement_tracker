const axios = require("axios");
const FormData = require("form-data");

const AI_SERVICE_URL =
  process.env.AI_SERVICE_URL || "http://127.0.0.1:8000";

const screenResume = async (fileBuffer, originalName, jobDescription) => {
  const formData = new FormData();

  formData.append("file", fileBuffer, {
    filename: originalName,
    contentType: "application/pdf",
  });

  formData.append("job_description", jobDescription);

  const response = await axios.post(
    `${AI_SERVICE_URL}/api/v1/screen-resume`,
    formData,
    {
      headers: {
        ...formData.getHeaders(),
      },
    }
  );

  return response.data;
};

module.exports = {
  screenResume,
};