import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import {toast} from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Link, withRouter} from "react-router-dom";
import s1 from '../../images/shape.png'
import autheticationService from "../../services/authentificationService";

import './style.scss';
import axios from "axios";

const LoginPage = (props) => {
    const [value, setValue] = useState({
        email: '',
        password: '',
        remember: true,
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({...value, remember: !value.remember});
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        let user = {username: value.email, password: value.password};

        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

        let loading = true;

            if (loading) {

                autheticationService.signin(user).then(res =>{

                        toast.success('Welcome '+value.email);
                        localStorage.setItem('token',res.data.token);
                        localStorage.setItem('role',res.data.role);
                        if (res.data.role === 'ROLE_COMPANY')
                            props.history.push('/AddJob');
                        else props.history.push('/Jobs');


                }).catch(error => {
                    toast.error('Bad credetials')
                });;


            }
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');


        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Username"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="Username"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction">
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler}/>}
                                    label="Remember Me"
                                />
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </Grid>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtnTheme" type="submit">Login</Button>
                            </Grid>

                            <p className="noteHelp">Don't have an account? <Link to="/signup">Create free account</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <img src={s1} alt=""/>
                </div>
            </Grid>
        </Grid>
    )
};

export default withRouter(LoginPage);