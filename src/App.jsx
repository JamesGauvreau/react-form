import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

export default function App() {
  console.log(`jsx test`)
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  )
}
