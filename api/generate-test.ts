import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone } = req.body;

  try {
    const sigmaUrl = 'https://alpha-server-oficial.sigma.st/api/chatbot/NKWP3q5DPR/8241Kg1mxd';
    
    // Simulando o envio de dados para a Sigma (baseado no comportamento padrão desse tipo de chatbot/API)
    // O usuário forneceu o link direto, geralmente esse link espera um POST com dados de lead
    const response = await fetch(sigmaUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        action: 'generate_test'
      }),
    });

    const data = await response.json();
    
    // Retornamos a resposta da Sigma para o nosso frontend
    return res.status(200).json(data);
  } catch (error) {
    console.error('Sigma API Error:', error);
    return res.status(500).json({ error: 'Failed to generate test' });
  }
}
