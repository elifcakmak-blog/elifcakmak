import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const answerQuestion = async (question: string, context: string) => {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/distilbert-base-cased-distilled-squad', // Replace with your desired model
      {
        inputs: {
          question: question,
          context: context, // Pass the website content as the context
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
      }
    );

    const answer = response.data.answer;
    return answer;
  } catch (error) {
    console.error('Error in Hugging Face API:', error);
    return 'Sorry, I couldn’t understand that. Could you please rephrase?';
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Example context (Replace this with the actual content of your website)
    const websiteContext = "I am Elif Cakmak, a web developer with expertise in Next.js and TypeScript.";

    try {
      const aiAnswer = await answerQuestion(message, websiteContext);
      res.status(200).json({ response: aiAnswer });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch AI response' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
