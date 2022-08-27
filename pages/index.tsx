import { createContext } from "react";
import Main from "../components/home/Main";
import { getPosts } from "../requests";

const Posts = createContext<any | null>(null);

const Home = ({ posts }: any) => {
    return (
        <Posts.Provider value={{ posts }}>
            <Main />
        </Posts.Provider>
    );
};

export async function getStaticProps() {
    const { posts } = (await getPosts()) || [];
    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
}

export default Home;
export { Posts };
