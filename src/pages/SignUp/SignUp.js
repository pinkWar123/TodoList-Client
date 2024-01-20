import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import * as formik from 'formik';

import { signupSchema } from '~/utils/schema';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { path } from '~/configs';
import { useNavigate } from 'react-router-dom';
import { signUp } from '~/services/requests/profileRequest';

const cx = classNames.bind(styles);
const { Formik } = formik;
function SignUp() {
    const navigate = useNavigate();

    const handleSignUp = async ({ username, password, firstName, lastName }) => {
        const data = await signUp({ username, password, firstName, lastName });
        console.log(data);
        if (data) {
            navigate('/login');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Formik
                validationSchema={signupSchema}
                initialValues={{
                    username: '',
                    password: '',
                    firstName: '',
                    lastName: '',
                }}
                onSubmit={(val) => console.log(val)}
            >
                {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.firstName && errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.lastName && errors.lastName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                            </Form.Group>
                        </Row>

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

                        <Button className={cx('btn')} variant="warning" onClick={() => handleSignUp(values)}>
                            Sign up
                        </Button>

                        <div className={cx('last-text-wrapper')}>
                            <span>Not a member?</span>
                            <span className={cx('signup-text')} onClick={() => navigate(path.login)}>
                                Login
                            </span>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default SignUp;
