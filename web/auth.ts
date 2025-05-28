// auth.ts
export async function auth() {
  return {
    user: {
      id: '123', // ✅ Add this
      name: 'John Doe',
    },
  };
}
