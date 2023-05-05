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
  import PageHeader from "../../components/Header/Header";
  
  export default function Signup({handleSignUpOrLogin}) {
  
    // navigate is a function that accepts a route to change too!
    const navigate = useNavigate()
  
    const [state, setState] = useState({
      username: "",
      email: "",
      password: "",
      passwordConf: "",
      bio: "",
    });
  
    // profile image
    const [selectedFile, setSelectedFile] = useState('')
  
    const [error, setError] = useState("");
  
    function handleChange(e) {
      setState({
          ...state,
          // es6 computed property syntax
          [e.target.name]: e.target.value
      })
    }
  
    return (
      <>
      <PageHeader />
      <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="purple" textAlign="center">
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
                label="bio"
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
  
