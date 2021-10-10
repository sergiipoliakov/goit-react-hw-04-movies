import Container from '@mui/material/Container';

export default function SimpleContainer({ children }) {
  return (
    <>
      <Container maxWidth="lg">{children}</Container>
    </>
  );
}
