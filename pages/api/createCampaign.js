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
      apiKey.apiKey = process.env.BREVO_API_KEY; // API key from Brevo

      const apiInstance = new SibApiV3Sdk.ContactsApi();
      const contact = new SibApiV3Sdk.CreateContact();

      // Define the contact (subscriber)
      contact.email = email;
      contact.firstName = name;

      // Add contact to your Brevo list
      await apiInstance.createContact(contact);

      res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error('Error adding contact to Brevo:', error);
      res.status(500).json({ error: 'Failed to subscribe' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
