import { useAuthContext } from '~/context';

function Home() {
    const { user } = useAuthContext();
    return <div>{user._id}</div>;
}

export default Home;
