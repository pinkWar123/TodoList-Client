import styles from './Login.module.scss';
import classname from 'classnames/bind';
import { Button, Col, Form, Row } from 'react-bootstrap';
import * as formik from 'formik';
import * as yup from 'yup';
import { IconButton } from '~/components/Button';
import { useNavigate } from 'react-router-dom';
import { LoginSocialFacebook } from 'reactjs-social-login';

import { loginRequest, profileRequest } from '~/services/requests';
import { useState } from 'react';
import schema from './schema';
import { useAuthContext } from '~/context';

const cx = classname.bind(styles);
const { Formik } = formik;

const REDIRECT_URI = window.location.href;

function Login() {
    const { user, setUser } = useAuthContext();
    const navigate = useNavigate();
    const handleLogin = async (username, password) => {
        const credentials = { username, password };
        const data = await loginRequest.authenticateLocalUser(credentials);
        if (data) {
            console.log(data);
            localStorage.setItem('access_token', data.token);
            localStorage.setItem('refresh_token', data.refreshToken);
            setUser(data.user);
            navigate('/');
        }
    };
    const handleSocialLogin = async (socialId, provider, name) => {
        const data = await loginRequest.authenticateSocialUser({ socialId, provider, name });
        localStorage.setItem('access_token', data.token);
        localStorage.setItem('refresh_token', data.refreshToken);
        setUser(data.user);
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
                                    <LoginSocialFacebook
                                        appId={process.env.REACT_APP_FACEBOOK_ID}
                                        fieldsProfile="id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                                        onLoginStart={() => alert('Login start')}
                                        onLogoutSuccess={() => alert('Logout success')}
                                        redirect_uri={REDIRECT_URI}
                                        onResolve={async ({ provider, data }) => {
                                            await handleSocialLogin(data.id, provider, data.name);
                                            navigate('/');
                                        }}
                                        onReject={(err) => console.log(err)}
                                    >
                                        <IconButton.FacebookButton />
                                    </LoginSocialFacebook>
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
//"https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3692071951121854&height=50&width=50&ext=1708340608&hash=Afq1zcETX7yW7GN07q2Z_8kmL5ETS1FXF1xRJgUXoBCI4g"
