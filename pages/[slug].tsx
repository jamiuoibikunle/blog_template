import Main from "../components/slug/Main";
import { getPosts, getSinglePost } from "../requests";

const Home = ({ post }: any) => {
    return <Main post={post} />;
};

export async function getStaticPaths() {
    const { posts } = (await getPosts()) || [];

    const paths = posts.map((post: { slug: string }) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: any) {
    const post = await getSinglePost(params.slug);
    return {
        props: {
            post,
        },
    };
}

export default Home;
