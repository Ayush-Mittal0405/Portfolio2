export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload: Partial<ContactPayload>) {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    errors.message = "Please write a message with at least 10 characters.";
  }

  return {
    data: { name, email, message },
    errors,
    valid: Object.keys(errors).length === 0,
  };
}
