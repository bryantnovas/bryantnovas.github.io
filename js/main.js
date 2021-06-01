(function () {
  emailjs.init("user_uKcIVrbv0X3284crL71qL");
})();

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    // generate the contact number value
    const template_params = {
      reply_to: event.target._replyto.value,
      from_name: event.target.name.value,
      to_name: "Bryant",
      message_html: event.target.message.value
    };
    const service_id = "default_service";
    const template_id = "template_M17EVZPM";
    await emailjs.send(service_id, template_id, template_params);
    alert("Message Sent: I'll get back to you soon!");
    document.querySelector('#contact-form form').reset()
  });
};