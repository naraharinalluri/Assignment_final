import React, { Component } from 'react';
import styles from "./formBody.module.css"
class FormBody extends Component {

    email = React.createRef()
    emailField = React.createRef()
    password = React.createRef()
    passwordField = React.createRef()
    emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/



    handleSubmit = e => {

        if (!this.email.current.value) {
            this.emailField.current.textContent = "Email is required"
            return
        }
        this.emailField.current.textContent = ""

        if (!this.emailPattern.test(this.email.current.value)) {
            this.emailField.current.textContent = "Email is invalid"
            return
        }
        this.emailField.current.textContent = ""

        if (!this.password.current.value) {
            this.passwordField.current.textContent = "Password is required"
            return
        }
        this.passwordField.current.textContent = ""

        if (this.emailPattern.test(this.email.current.value) && this.password.current.value) {

            window.location = '/LoginSuccessful';


        }

    }





    render() {
        return (

            <div id={styles.body_right} className="bod-right" >
                <h4 className={styles.eh4}>Get Started For Free</h4>
                <form action="auth" noValidate>

                    <div className="form-group">
                        <label className={styles.lab}>Email</label>
                        <input ref={this.email} type="text" id={styles.ebar} className="form-control" aria-describedby="helpId" />
                        <div ref={this.emailField} id="email-feedback" className="text-danger"></div>

                        <label className={styles.labp}>Password</label>
                        <input ref={this.password} type="password" className="form-control" name="" id={styles.pbar} placeholder="" required />
                        <div ref={this.passwordField} className="text-danger"></div>

                    </div>
                    <a onClick={e => { e.preventDefault(); this.handleSubmit(e) }} id={styles.sub_btn} className="btn" type="submit" value="Start coding now">Start coding now</a>
                </form>

                <br />
                <span className={styles.sp1}>By signing up for Codecademy, you agree to </span>
                <br />
                <span className={styles.sp2}>Codecademy's <a className={styles.anc} href="/">Terms of Service</a> &
                        <a className={styles.anc} href="/"> Privacy Policy</a>.</span>
                <br /><br />
                <span className={styles.sp3}>Or, use another account:</span>
                <div className="altlog">
                    <button id={styles.btnn} className="btn" >
                        <img className={styles.linkd} src="./linkd.png" alt="" />
                    </button>
                    <button id={styles.btnn} className="btn">
                        <img className={styles.linkd} src="./google.png" alt="" />
                    </button>
                    <button id={styles.btnn} className="btn">
                        <img className={styles.linkd} src="./facebook.png" alt="" />
                    </button>
                    <button id={styles.btnn} className="btn">
                        <img className={styles.linkd} src="./git.png" alt="" />
                    </button>
                </div>


            </ div>
        );
    }

}

export default FormBody;