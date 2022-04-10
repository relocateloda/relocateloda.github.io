import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect, useRef, useState } from "react";
import { Form, Message, Schema, toaster } from "rsuite";
import { getCategories } from "../../utils/apiCalls/firebaseRequests";
const { ArrayType, StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    skills: ArrayType()
        .minLength(2, 'Please select at least 2 types of Skills.')
        .isRequired('This field is required.'),
    status: ArrayType()
        .minLength(2, 'Please select at least 2 types of Status.')
        .isRequired('This field is required.'),
    level: NumberType().min(5, 'This field must be greater than 5')
});

const Field = React.forwardRef((props, ref) => {
    const { name, message, label, accepter, error, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-10`} ref={ref} className={error ? 'has-error' : ''}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} errorMessage={error} {...rest} />
            <Form.HelpText>{message}</Form.HelpText>
        </Form.Group>
    );
});

const SendOffer = () => {
    const [categories, setCategories] = useState(null);
    useEffect(() => getCategories(setCategories), []);
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        code: "",
        contact_person: "",
        description: "",
        img: "",
        name: "",
        phone: "",
        proposal: "",
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            toaster.push(<Message type="error">Error</Message>);
            return;
        }
        toaster.push(<Message type="success">Success</Message>);
    };

    const handleSendNew = async () => {
       const collectionRef = collection(db, "other_proposals")
        const payload = {
           name: "234",
           phone: "234" ,
           img: "23423" ,
           contact_person: "234234",
           code: "234",
           description: "234",
           proposal: "234234",
        }
       const docRef = await addDoc(collectionRef, payload);
       // console.log(docRef.id);
   }
    return (
        <Form
            ref={formRef}
            onChange={setFormValue}
            onCheck={setFormError}
            formValue={formValue}
            model={model}
        >
            <Field name="number" label="Number" accepter={InputNumber} error={formError.number} />
            <Field
                name="skills"
                label="Skills"
                accepter={CheckboxGroup}
                error={formError.skills}
                inline
            >
                <Checkbox value={'Node.js'}>Node.js</Checkbox>
                <Checkbox value={'CSS3'}>CSS3</Checkbox>
                <Checkbox value={'Javascript'}>Javascript</Checkbox>
                <Checkbox value={'HTML5'}>HTML5</Checkbox>
            </Field>

            <Field
                name="browser"
                label="Browser"
                accepter={RadioGroup}
                error={formError.browser}
                inline
            >
                <Radio value={'Chrome'}>Chrome</Radio>
                <Radio value={'FireFox'}>FireFox</Radio>
                <Radio value={'IE'}>IE</Radio>
            </Field>

            <Field
                name="status"
                label="Status"
                accepter={CheckPicker}
                error={formError.status}
                style={{ display: 'inline-block', width: 200 }}
                data={[
                    { label: 'Todo', value: 'todo' },
                    { label: 'Open', value: 'open' },
                    { label: 'Close', value: 'close' },
                    { label: 'Error', value: 'error' },
                    { label: 'Processing', value: 'processing' },
                    { label: 'Done', value: 'done' }
                ]}
            />

            <Field
                accepter={Slider}
                min={0}
                max={20}
                name="level"
                label="Level"
                style={{ width: 200, margin: '10px 0' }}
                errorMessage={formError.level}
            />

            <Field
                accepter={DatePicker}
                name="createDate"
                label="Create Date"
                errorMessage={formError.createDate}
            />

            <Form.Group>
                <Button appearance="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Group>
        </Form>
    )
}

export default SendOffer