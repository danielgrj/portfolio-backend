const transport = require('./../config/nodeMailer');

exports.sendMail = async (req, res) => {
  const { name, email: to, message: text } = req.body;

  try {
    await transport.sendMail({
      from: `"Daniel Garcia" <${process.env.EMAIL}>`,
      to,
      subject: 'Your message was sent',
      text: 'I will get in touch with you as soon as possible.',
      html: `<p>Hello, ${name}.</p>
      <p>I will get in touch with you as soon as possible.</p>
      <p>Daniel Garcia</p>
    `
    });

    await transport.sendMail({
      from: `"Profile page" <${process.env.EMAIL}`,
      to: process.env.N_EMAIL,
      subject: 'A new request was made',
      text,
      html: `<h1>${name}, sent you a request</h1>
      <p>${text}</p>
      <p>Reply as soon as possible, perro</p>
      ${to}
    `
    });
    res.status(200).send({ msg: 'ok' });
  } catch (e) {
    res.status(500).send({ msg: 'Message was not sent' });
  }
};
