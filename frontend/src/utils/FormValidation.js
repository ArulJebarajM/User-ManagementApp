function validateForm(user) {
  const errors = {};

  if (!user.name.trim()) {
    errors.name = "Name is required.";
  } else if (user.name.trim().length < 3) {
    errors.name =
      "Name must contain at least 3 characters.";
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!user.email.trim()) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(user.email)) {
    errors.email =
      "Enter a valid email address.";
  }

  if (!user.age) {
    errors.age = "Age is required.";
  } else if (
    Number(user.age) < 18 ||
    Number(user.age) > 100
  ) {
    errors.age =
      "Age must be between 18 and 100.";
  }

  return errors;
}

export default validateForm;