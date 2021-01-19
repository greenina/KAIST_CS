import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { ProjectInput } from './ProjectInput';
import { ProjectTextArea } from './ProjectTextArea';
// import { ImgFileUpload } from './ImgFileUpload';
class ContactForm extends React.Component {
// state = {
// imageState: false
// }
render() {
const {
handleSubmit,
pristine,
submitting,
submitCb,
valid,
// SetImage,
loading
} = this.props;
return (
<form onSubmit={handleSubmit(submitCb).bind(this)}
onClick={this.resetValues}>
<Field
name="email"
type="email"
label='이메일 주소'
className='form-control'
component={ProjectInput}
/>
<Field
name="title"
type="text"
label='제목'
className='form-control'
component={ProjectInput}
/>
<Field
name="message"
type="text"
label='내용'
rows='6'
className='form-control'
component={ProjectTextArea}
/>
{/* <Field
name="image"
label='Image'
className='form-control'
component={ImgFileUpload}
props={{
changedImage: (e) => {
SetImage(e);
this.setState({
imageState: true
})
},
checkImageState: (e) => {
if (e === 'selected') {
this.setState({
imageState: true
});
} else {
this.setState({
imageState: false
});
}
},
}}
key={this.props.key}
/> */}
{
loading ?
<button
className='btn btn-primary'
type="button"
disabled={true}
>
Sending...
</button>
:
<button
className='btn btn-primary'
type="submit"
// disabled={!valid || pristine || submitting || !this.state.imageState}
disabled={!valid || pristine || submitting}
>
Send
</button>
}
</form>
)
}
}
const validate = values => {
const errors = {};
if (!values.email) {
errors.email = '이메일 주소를 입력해주세요';
}
if (!values.title) {
errors.title = '제목을 입력해주세요';
}
if (!values.message) {
errors.message = '내용을 입력해주세요';
}
return errors;
}
export default reduxForm({
form: 'ContactForm',
validate
})(ContactForm)