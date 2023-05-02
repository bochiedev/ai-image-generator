// define my variables
const API_KEY = "";
const input = document.querySelector("input");
const submitButton = document.querySelector(".btn");
const imageSection = document.querySelector(".images-section");

const url = "https://api.openai.com/v1/images/generations";

// function to make a call to openai and get images
const getImages = async () => {
  // define options that will be used in fetch
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
    // make a call to openai using fetch
    const response = await fetch(url, options);

    // get the response
    const data = await response.json();

    // add images from response to the view
    data?.data.forEach((image) => {
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const imageElement = document.createElement("img");
      imageElement.setAttribute(src, image.url);
      imageContainer.append(imageElement);
      imageSection.append(imageContainer);
    });
  } catch (error) {
    // log the error if any
    console.error(error);
  }
};

// Listen for the generate button click and run get images function
submitButton.addEventListener("click", getImages);
