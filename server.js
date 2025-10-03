const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const app = express();

// Replace with your allowed frontend origin (GitHub Pages URL)
const FRONTEND_ORIGIN = "https://amit-rajput2007.github.io/SinglePage";

// Use CORS middleware
app.use(
  cors({
    origin: "https://amit-rajput2007.github.io", // Correct origin
    methods: ["GET", "POST"], // Allow specific methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
    credentials: true, // (Optional) Allow cookies and credentials if required
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Replace the following with your Salesforce Connected App configuration
const CLIENT_ID = "3MVG9XgkMlifdwVAPP1QzilrWxN4vxXanUxrP_wtiJKJMqA6GnZ1u41eQ.oP_8lPeh80GlG4byc0QpN3U2.84"; // Salesforce Connected App Consumer Key
const CLIENT_SECRET = "6718620B8A4513CE318C18A789951D47EB0B18E931298F428B9C90F10DE44B56"; // Salesforce Connected App Consumer Secret
const REDIRECT_URI = "https://amit-rajput2007.github.io/SinglePage"; // Your GitHub Pages URL
const TOKEN_URL = "https://login.salesforce.com/services/oauth2/token"; // Salesforce Token Endpoint

// Token exchange endpoint
app.post("/exchange-token", async (req, res) => {
  const authorizationCode = req.body.code;

  try {
    // Exchange authorization code for access token
    const response = await axios.post(TOKEN_URL, null, {
      params: {
        grant_type: "authorization_code",
        code: authorizationCode,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
      },
    });

    // Send the access token back to the client
    res.json({ accessToken: response.data.access_token });
  } catch (error) {
    console.error("Error exchanging authorization code for access token:", error.response.data);
    res.status(500).json({ error: error.response.data });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});