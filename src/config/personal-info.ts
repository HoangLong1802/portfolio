export const personalInfo = {
  name: "Truong Hoang Long",
  email: "Long.truong1802@gmail.com",
  phone: "0355992689",
  github: "https://github.com/HoangLong1802",
  portfolio: "https://portfolio-liart-one-77.vercel.app/",
} as const;

export const personalContactLinks = {
  email: `mailto:${personalInfo.email}`,
  phone: `tel:${personalInfo.phone}`,
} as const;
