import * as yup from 'yup';
const schema = yup.object().shape({
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

export default schema;
