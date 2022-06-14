export default function ErrorPage({ status, message }) {
  return (
    <main>
      Error: {message}, {status}
    </main>
  );
}
