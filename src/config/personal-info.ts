export const personalInfo = {
  name: "Trương Hoàng Long",
  email: "Long.truong1802@gmail.com",
  phone: "0355992689",
} as const;

export const personalContactLinks = {
  email: `mailto:${personalInfo.email}`,
  phone: `tel:${personalInfo.phone}`,
} as const;
