export default {
  auth: {
    secret: 'change_me',
    admin: {
      username: '',
      password: '', // plain:secret || sha256:2bb80d53...
    },
  },
  contact: {
    recipientEmailAddress: '',
    nodemailerTransportOptions: {
      // See: https://nodemailer.com/smtp/
    },
  },
}