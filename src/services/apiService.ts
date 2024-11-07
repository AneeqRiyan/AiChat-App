// src/services/apiService.ts
export const getBotResponse = async (userInput: string): Promise<string> => {
  // Replace with actual API URL
  const response = await fetch('https://your-backend-api.com/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userInput }),
  });
  const data = await response.json();
  return data.reply;
};
