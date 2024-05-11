import { ClerkProvider, SignOutButton } from '@clerk/nextjs'
import React from 'react';

export default function Home() {
  return (
    <div>
      <ClerkProvider>
        <SignOutButton />
      </ClerkProvider>
      <h1>test app</h1>
      <p>Testing clerk integration</p>
    </div>
  );
}
