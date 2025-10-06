export const selectors = {
  urls: {
    admin: "/admin/index.php",
    client: "/client/index.php",
  },
  client: {
    pageTitle: "h1.page-header__title",
    dayButton: ".page-nav .page-nav__day",
    hallBlock: ".movie",
    seanceButton: ".movie-seances__time[href='#'][data-seance-id='225']",
    seanceButtonStalcer: ".movie-seances__time[href='#'][data-seance-id='217']",
    acceptButton: ".acceptin-button",
    ticketCost: "span.ticket__details.ticket__cost",
    ticketHall: "p:nth-child(3) span:nth-child(1)",
    seat: (row, col) => `div:nth-child(${row}) span:nth-child(${col})`,
  },
  admin: {
    pageTitle: "h1.page-header__title",
    emailInput: "input[name='email']",
    passwordInput: "input[name='password']",
    loginButton: "input.login__button",
    errorMessage: "Ошибка авторизации!",
    hallControl: "section[id='hall-control'] li:nth-child(16)",
  },
};
