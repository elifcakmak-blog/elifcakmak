// pages/api/createCampaign.js

import SibApiV3Sdk from 'sib-api-v3-sdk';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Set up the API client
      const defaultClient = SibApiV3Sdk.ApiClient.instance;
      const apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = process.env.BREVO_API_KEY; // Store your Brevo API key in .env.local

      // Create an instance of the EmailCampaigns API
      const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
      const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

      // Define the campaign settings
      emailCampaigns.name = "Campaign sent via the API";
      emailCampaigns.subject = "My subject";
      emailCampaigns.sender = {
        name: "From name",
        email: "myfromemail@mycompany.com",
      };
      emailCampaigns.type = "classic";
      emailCampaigns.htmlContent = 'Congratulations! You successfully sent this example campaign via the Brevo API.';
      emailCampaigns.recipients = { listIds: [2, 7] };
      emailCampaigns.scheduledAt = '2018-01-01 00:00:01'; // Adjust this schedule as needed

      // Make the API call to create the campaign
      const data = await apiInstance.createEmailCampaign(emailCampaigns);

      // Return the response from Brevo
      res.status(200).json({ message: 'API called successfully', data });
    } catch (error) {
      console.error('Error creating campaign:', error);
      res.status(500).json({ error: 'Failed to create campaign' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
