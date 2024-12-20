
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    const apiKey = process.env.BREVO_API_KEY;  // Store your API key in .env.local for security

    try {
      const response = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          email,
          attributes: {
            FIRSTNAME: name,
          },
          listIds: [parseInt(process.env.BREVO_LIST_ID, 10)],  // Replace with your list ID
        }),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Subscribed successfully!' });
      } else {
        const errorData = await response.json();
        res.status(400).json({ message: errorData.message || 'Error subscribing' });
      }
    } catch{
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
