import { currentView } from "../App";
interface HomeProps {
    nav: (cur: currentView) => void;
}
function Home({ nav }: HomeProps) {
    return (<>
        <button onClick={() => nav(currentView.Trips)}>All Trips</button>
        <button onClick={() => nav(currentView.LogIn)}>log in</button>
        <button onClick={() => nav(currentView.SignIn)}>Sign in</button>
    </>);
}
export default Home;