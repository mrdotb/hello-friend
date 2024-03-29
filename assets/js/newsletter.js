const newsletterList = document.querySelectorAll(".newsletter");

newsletterList.forEach($newsletter => {
  const $form = $newsletter.querySelector("form");
  const $email = $newsletter.querySelector("input")
  const $result = $newsletter.querySelector("p.result")
  const url = DEV_MODE ? "https://mrdotb-workers.mrdotb.workers.dev/api/subscribe" : "/api/subscribe";

  $form.addEventListener("submit", event => {
    event.preventDefault();
    const email = $email.value;

    const response = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email
      })
    });

    response.then(response => {
      if (response.status === 200 || response.status === 201) {
        $result.textContent = "Thanks for subscribing, please check your inbox for a confirmation email.";
        setTimeout(() => $result.textContent = "", 4000)
      } else {
        $result.textContent = response.error;
      }
    })
  })
});
