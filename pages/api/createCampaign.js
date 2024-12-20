import SibApiV3Sdk from 'sib-api-v3-sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
      const defaultClient = SibApiV3Sdk.ApiClient.instance;
      const apiKey = defaultClient.authentications['api-key'];
      apiKey.apiKey = process.env.BREVO_API_KEY;

      const apiInstance = new SibApiV3Sdk.EmailCampaignsApi();
      const emailCampaigns = new SibApiV3Sdk.CreateEmailCampaign();

      emailCampaigns.name = `Campaign for ${name}`;
      emailCampaigns.subject = `Welcome, ${name}`;
      emailCampaigns.sender = {
        name: "Elif Çakmak",
        email: "newsletter@effortless.quest",
      };
      emailCampaigns.type = "classic";
      emailCampaigns.htmlContent = `<p>Hi ${name},</p><p>Thanks for subscribing! We'll keep you updated with our latest content.</p>`;
      emailCampaigns.recipients = {
        listIds: [3],
      };
      emailCampaigns.scheduledAt = new Date(new Date().getTime() + 3600000).toISOString();

      const data = await apiInstance.createEmailCampaign(emailCampaigns);

      res.status(200).json({ message: 'Campaign created successfully', data });
    } catch (error) {
      console.error('Error creating campaign:', error.response ? error.response.body : error.message);
      res.status(500).json({
        error: 'Failed to create campaign',
        details: error.response ? error.response.body : error.message,
      });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

