import React from "react";

import { supabase } from "./supabaseClient";

export default function App() {
  async function signIn() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "github",
    });

    console.log({ user, session, error });
  }

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => signIn()}>Sign in with GitHub</button>
    </main>
  );
}
