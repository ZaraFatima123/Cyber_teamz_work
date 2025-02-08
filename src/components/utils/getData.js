export const answerQuery = async (query) => {
  const prompt = `${query}`;
  console.log(process.env.REACT_APP_API_KEY);
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    let text = data["candidates"][0]["content"]["parts"][0]["text"];
    return text.split("\n").join("<br>");
  } catch (error) {
    console.error(error);
  }
};
