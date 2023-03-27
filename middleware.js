const checkTime = (req, res, next) => {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.send(
      "Le site est uniquement disponible pendant les heures de travail (du lundi au vendredi, de 9h à 17h)"
    );
  }
};

module.exports = { checkTime };
