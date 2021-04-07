import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="page-title light-gray">Contact</h2>
      <form
        action="https://formspree.io/Jeremiah.Schmutz@gmail.com"
        method="POST"
      >
        <div className="row">
          <div className="column">
            <h3 class="font-dark-navy">Name:</h3>
            <input type="text" name="name" id="name" placeholder="Jane Doe" />
          </div>
          <div className="column">
            <h3 class="font-dark-navy">Email:</h3>
            <input
              type="email"
              name="_replyto"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        <h3 class="font-dark-navy">Message</h3>
        <textarea name="message" id="message"></textarea>
        <br />
        <br />
        <input type="submit" value="Send" id="submit" />
      </form>
    </div>
  );
};

export default Contact;
