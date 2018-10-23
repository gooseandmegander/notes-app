import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { post_note } from '../../actions';

import { Form, Input } from 'reactstrap';
import './CreateNewNote.css';

class CreateNewNote extends Component {
    state = {
        fields: {
            title: '',
            content: ''
        },
    };

    render() {
        return (
            <div className='newNote'>
                {this.props.redirect ? <Redirect to='/' /> : ''}
                <h2 className='my-3 py-3'>Create New Note:</h2>
                <Form method='post' className='form'>
                    <div>
                        <Input placeholder='Note Title'
                            type='text'
                            name='title'
                            value={this.state.fields.title}
                            onChange={this.handleNewNote}
                            bsSize='lg'
                            className='form-control col-7 my-3 py-3'
                        />
                    </div>
                    <div>
                        <Input placeholder='Note Content'
                            type='textarea'
                            name='content'
                            data-provide="markdown"
                            value={this.state.fields.content}
                            onChange={this.handleNewNote}
                            className='form-control mt-3'
                            style={{ height: 390 }}
                        />
                    </div>
                    <Link to='/' onClick={this.submitNewNote} className='link m-0 mt-3'>Save</Link>
                </Form>
            </div>
        )
    } // end render

    handleNewNote = event => {
        // event.preventDefault();
        const { name, value } = event.target;
        const fields = this.state.fields;
        fields[name] = value;
        this.setState({ fields });
    }

    submitNewNote = event => {
        event.preventDefault();
        const { title, content } = this.state.fields;
        const note = { title, content };
        this.props.post_note(note);
        this.setState({
            Redirect: true,
            fields: {
                title: '',
                content: ''
            }
        });
    }
}

const mapStateToProps = state => {
    return {
        redirect: state.redirect,
    }
}

export default connect(mapStateToProps, { post_note })(CreateNewNote);