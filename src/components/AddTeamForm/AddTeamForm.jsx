import {useState} from 'react';

import {Button, Form, Segment} from 'semantic-ui-react';

export default function AddTeamForm({handleAddTeam}){
    const [state, setState]=useState({
        name: '',
        description: ''
    });

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        handleAddTeam(state);
    }

    return (
		<Segment>
			<Form onSubmit={handleSubmit}>
				<Form.Input 
					placeholder='Your Pokemon Team Name'
					required
					name="name"
					onChange={handleChange}
				/>
				<Form.Input 
					name='description'
					placeholder="Describe your team!"
					onChange={handleChange}
				/>
				<Button type="submit">Create Team</Button>
			</Form>
		</Segment>
	)
}