import styled from "styled-components";
import React, { useRef, useContext } from "react";
import { auth } from "../util/firebase";
import { AuthContext } from "../util/AuthContext";
import AnimatedCard from "./../components/AnimatedTournamentCard";
export default function Login() {
  const user = useContext(AuthContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (err) {
      console.error(err);
    }
  };
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (err) {
      console.error(err);
    }
  };
  const signOut = async () => {
    await auth.signOut();
  };
  return (
    <FormContainer>
      {user ? (
        <div>
          {user.email} <button onClick={signOut}>Sign out</button>
        </div>
      ) : null}
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          ref={emailRef}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          ref={passwordRef}
        />
        <input type="button" value="Sign Up" onClick={createAccount} />
        <input type="button" value="Sign In" onClick={signIn} />
      </form>

      <AnimatedCard />
    </FormContainer>
  );
}

const FormContainer = styled.div`
  padding-left: 200px;

  form {
    margin-bottom: 12em;
  }
`;
