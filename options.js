module.exports = {
  port: process.env.PORT || 3000,
  corsOptions: { origin: "*" },
  sessionSecret: process.env.SESSION_SECRET || 'thesecretlifeofarabia'
}