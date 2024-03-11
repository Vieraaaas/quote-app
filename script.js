async function loadQuote(event) {
  event.preventDefault();

  try {
    const response = await fetch("https://dummy-apis.netlify.app/api/quote");

    if (response.ok) {
      const data = await response.json();
      renderQuote(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function renderQuote(data) {
  const quote = document.querySelector("#quote");
  quote.innerText = data.quote;

  const author = document.querySelector("#author");
  author.innerText = "-" + data.author;
}

document.querySelector("button").addEventListener("click", loadQuote);
