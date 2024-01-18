import styles from './Login.module.scss';
import classname from 'classnames/bind';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import { IconButton } from '~/components/Button';
import { useNavigate } from 'react-router-dom';

import * as loginRequest from '~/services/requests';
import { setCookie } from '~/utils';

const cx = classname.bind(styles);
const { Formik } = formik;

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

function Login() {
    const navigate = useNavigate();
    const handleLogin = async (username, password) => {
        const credentials = { username, password };
        const data = await loginRequest.authenticateLocalUser(credentials);
        if (data) {
            // setCookie('token', data.token, 1);
            console.log(data);
            navigate('/');
        }
    };

    return (
        <div style={{ backgroundColor: 'blue' }}>
            <div className={cx('wrapper')}>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        username: '',
                        password: '',
                    }}
                    onSubmit={(val) => console.log(val)}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    required
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.username && errors.username}
                                    placeholder="name@example.com"
                                />
                                <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.password && errors.password}
                                    placeholder="name@example.com"
                                />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>

                            <Row>
                                <Col className="col-5">
                                    <hr />
                                </Col>
                                <Col style={{ textAlign: 'center' }}>Or</Col>
                                <Col className="col-5">
                                    {' '}
                                    <hr />
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-6">
                                    <IconButton.FacebookButton />
                                </Col>
                                <Col className="col-6">
                                    <IconButton.GoogleButton />
                                </Col>
                            </Row>

                            <Button
                                className={cx('btn')}
                                variant="warning"
                                onClick={() => handleLogin(values.username, values.password)}
                            >
                                Login
                            </Button>

                            <div className={cx('last-text-wrapper')}>
                                <span>Not a member?</span>
                                <span className={cx('signup-text')}>Signup now</span>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Login;
