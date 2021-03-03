<!-- ###

    const regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
    const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g;
    const regName = /^([a-zA-Z-А-Яа-я]{6,16})$/;

    if (password === repeatPassword) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }

    if (regEmail.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }

    if (regPassword.test(password)) {
      if (password === repeatPassword) {
        setValidPassword(true);
      }
    } else {
      setValidPassword(false);
    }

    if (regName.test(firstName)) {
      setValidFirstName(true);
    } else {
      setValidFirstName(false);
    }
    if (regName.test(lastName)) {
      setValidLastName(true);
    } else {
      setValidLastName(false);
    } -->
