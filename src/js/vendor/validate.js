import JustValidate from "just-validate";

document.addEventListener("DOMContentLoaded", function () {
  let validation = new JustValidate(".contacts__form");

  validation
    .addField(".name", [
      {
        rule: "required",
        errorMessage: "Вы не ввели имя",
      },
      {
        rule: "minLength",
        value: 2,
        errorMessage: "Длина должна быть не менее двух букв",
      },
    ])

    .addField(".mail", [
      {
        rule: "required",
        errorMessage: "Вы не ввели email",
      },
      {
        rule: "email",
        errorMessage: "Введите email в формате example@mail.com",
      },
    ]);
});

document.addEventListener("DOMContentLoaded", function () {
  let validation = new JustValidate(".about__form");

  validation.addField(".mail", [
    {
      rule: "required",
      errorMessage: "Вы не ввели email",
    },
    {
      rule: "email",
      errorMessage: "Введите email в формате example@mail.com",
    },
  ]);
});
