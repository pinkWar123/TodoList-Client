import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .min(6, 'Too short')
        .max(20, 'Too long')
        .required('You have to provide a username'),
    password: yup
        .string()
        .min(6, 'Too short')
        .max(20, 'Too long')
        .required('You have to provide a password'),
});

const signupSchema = yup.object().shape({
    username: yup
        .string()
        .min(6, 'Too short')
        .max(20, 'Too long')
        .required('You have to provide a username'),
    password: yup
        .string()
        .min(6, 'Too short')
        .max(20, 'Too long')
        .required('You have to provide a password'),
    firstName: yup
        .string()
        .max(20, 'too long')
        .required('You must provide a first name'),
    lastName: yup
        .string()
        .max(50, 'too long')
        .required('You must provide a last name'),
});

export { loginSchema, signupSchema };
