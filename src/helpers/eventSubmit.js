function handleSubmit(event) {
  event.preventDefault();
    const form = event.target;
    console.log(form)
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const phone = form.elements.phone.value;
  const address = form.elements.address.value;
  if (name === "" || email === "" || phone === '' || address === '') {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Address: ${address}`);
  form.reset();
}
export default handleSubmit;