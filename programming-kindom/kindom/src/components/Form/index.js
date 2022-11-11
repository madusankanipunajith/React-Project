import React from 'react'

function Form() {

    const [data, setData] = React.useState({});

    const handleSubmit = (event) => {
        console.log(data);

        event.preventDefault();
    }

    const handleChange = (event) => {
        //console.log(event.target.name, event.target.value);
        setData({ ...data, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div><input type="text" name="firstName" onChange={handleChange} /></div>
            <div><input type="text" name="lastName" onChange={handleChange} /></div>
            <div><input type="checkbox" name='isOk' onChange={handleChange} /></div>
            <button type='submit'>Submit</button>
        </form>

    )
}

export default Form