const API_KEY = "";
const input = document.querySelector("input");
const submitButton = document.querySelector("#submit-btn");
const url = "https://api.openai.com/v1/images/generations";

const getImages = async () => {
  let options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt: input.value,
      n: 4,
      size: "1024x1024",
    }),
  };

  try {
    const response = await fetch(url, options);

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

submitButton.addEventListener("click", getImages);
