export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email } = req.body;
  
      const apiKey = process.env.BREVO_API_KEY;  // Store your API key in .env.local for security
      const listId = 3;  // Hardcoded list ID 3
  
      try {
        // Step 1: Check if the contact already exists
        const checkResponse = await fetch(`https://api.brevo.com/v3/contacts/email/${email}`, {
          method: 'GET',
          headers: {
            'api-key': apiKey,
          },
        });
  
        let contactExists = false;
        let contactId = null;
  
        if (checkResponse.ok) {
          const checkData = await checkResponse.json();
          contactExists = true;
          contactId = checkData.id;  // Store the contact ID for deletion if needed
        } else if (checkResponse.status !== 404) {
          const errorData = await checkResponse.json();
          console.error('Error checking contact:', errorData);
          return res.status(500).json({ message: 'Server error when checking contact status.' });
        }
  
        // Step 2: If the contact exists, delete it
        if (contactExists) {
          const deleteResponse = await fetch(`https://api.brevo.com/v3/contacts/${contactId}`, {
            method: 'DELETE',
            headers: {
              'api-key': apiKey,
            },
          });
  
          if (!deleteResponse.ok) {
            const errorData = await deleteResponse.json();
            console.error('Error deleting contact:', errorData);
            return res.status(500).json({ message: 'Error deleting existing contact before adding new one.' });
          }
        }
  
        // Step 3: Subscribe the contact to the list (ID 3)
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
            listIds: [listId],  // Hardcoded list ID 3
          }),
        });
  
        if (response.ok) {
          return res.status(200).json({ message: 'Subscribed successfully!' });
        } else {
          const errorData = await response.json();
          console.error('Error subscribing contact:', errorData);
          return res.status(400).json({ message: errorData.message || 'Error subscribing' });
        }
  
      } catch (error) {
        console.error('Server error while subscribing:', error);
        return res.status(500).json({ message: 'Server error, please try again later.' });
      }
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  