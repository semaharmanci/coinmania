import * as yup from "yup";

const passwordRules =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçerli bir email giriniz')
    .required('Zorunlu alan'),
  age: yup
    .number()
    .positive()
    .min(18, '18 yaşından kküçükler giremez')
    .max(100, "Yaşınız 100'den büyük olamaz")
    .required('Zorunlu alan'),
  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter olmalı')
    .matches(passwordRules, 'Lütfen daha güçlü bir şifre giriniz')
    .required('Zorunlu alan'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password')],
      'Şifre eşleşmiyor'
    )
    .required('Zorunlu Alan'),
  terms: yup
    .boolean()
    .isTrue('Koşulları kabul etmeden devam edemezsiniz.'),
});