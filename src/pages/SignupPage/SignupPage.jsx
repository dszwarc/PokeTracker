import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Segment,
  } from "semantic-ui-react";
  
  import { useState } from "react";
  import userService from "../../utils/userService";
  import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
  
  // this is a hook that allows us to programatically navigate to a different route
  import { useNavigate } from "react-router-dom";
  import PageHeader from "../../components/PageHeader/PageHeader";
  
  export default function SignupPage({handleSignUpOrLogin}) {
  
    // navigate is a function that accepts a route to change too!
    const navigate = useNavigate()
  
    const [state, setState] = useState({
      username: "",
      email: "",
      password: "",
      passwordConf: "",
      bio: "",
    });
  
    const [error, setError] = useState("");
  
    function handleChange(e) {
      setState({
          ...state,
          // es6 computed property syntax
          [e.target.name]: e.target.value
      })
    }
  
    async function handleSubmit(e){
        e.preventDefault();
        //since we do not have a photo/file, we can just submit the state as signup
        try{
            await userService.signup(state);
            handleSignUpOrLogin();
            navigate('/');
        } catch(err){
            console.log(err, ' <-- this is the signup err')
            setError('Check terminal, error signing up')
        }
    }

    return (
      <>
      <PageHeader />
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="red" textAlign="center">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" /> Sign Up
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                name="username"
                placeholder="Trainer Name"
                value={state.username}
                onChange={handleChange}
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="passwordConf"
                type="password"
                placeholder="Confirm Password"
                value={state.passwordConf}
                onChange={handleChange}
                required
              />
              <Form.TextArea
                label="TRAINER GOAL"
                name="bio"
                value={state.bio}
                placeholder="What's your goal as a Pokemon Trainer?"
                onChange={handleChange}
              />
              <Button type="submit" className="btn">
                Signup
              </Button>
            </Segment>
            {error ? <ErrorMessage error={error} /> : null}
          </Form>
        </Grid.Column>
      </Grid>
      </>
    );
  }
  
