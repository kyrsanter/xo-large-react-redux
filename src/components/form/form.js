import React from 'react';
import {reduxForm, Field} from 'redux-form';

class Form extends React.Component {





    render() {
        let {handleSubmit} = this.props;
        return (
            <section className="form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col">
                                            <h3>First player</h3>
                                            <label htmlFor="name_1">Name</label>
                                            <Field component="input" type="text" className="form-control" id="name_1" name="name_1"/>
                                            <label htmlFor="sign_1">Sign</label>
                                            <Field component="input" type="text" className="form-control" id="sign_1" name="sign_1"/>
                                            <label htmlFor="color_1">Color</label>
                                            <Field component="input" type="color" className="form-control" id="color_1" name="color_1"/>
                                        </div>
                                        <div className="col">
                                            <h3>Second player</h3>
                                            <label htmlFor="name_2">Name</label>
                                            <Field component="input" type="text" className="form-control" id="name_2" name="name_2"/>
                                            <label htmlFor="sign_2">Sign</label>
                                            <Field component="input" type="text" className="form-control" id="sign_2" name="sign_2"/>
                                            <label htmlFor="color_2">Color</label>
                                            <Field component="input" type="color" className="form-control" id="color_2" name="color_2"/>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center mt-2">
                                        <button className="btn btn-primary">Lets go</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default reduxForm({form: 'init'})(Form);
