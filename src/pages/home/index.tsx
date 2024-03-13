import PostForm from 'components/posts/PostForm';
import PostBox from 'components/posts/PostBox';


export interface PostProps {
    id: string;
    email: string;
    content: string;
    createdAt: string;
    uid: string;
    profileUrl?: string;
    likes?: string;
    likeCount?: number;
    comments?: any;
}

const posts: PostProps[] = [
    {
        id: "1",
        email: "test@test.com",
        content: "1내용입니다",
        createdAt: "2023-08-21",
        uid: "123121",
    },
    {
        id: "2",
        email: "test2@test.com",
        content: "2내용입니다",
        createdAt: "2023-08-22",
        uid: "123122",
    },
    {
        id: "3",
        email: "test3@test.com",
        content: "3내용입니다",
        createdAt: "2023-08-23",
        uid: "123123",
    },
    {
        id: "4",
        email: "test4@test.com",
        content: "4내용입니다",
        createdAt: "2023-08-24",
        uid: "123124",
    }
]

export default function HomePage() {
    const handleDelete = () => {

    };

    return (
        <div className="home">
            <div className="home__title">Home</div>
            <div className="home__tabs">
                <div className="home__tab home__tab--active">For You</div>
                <div className="home__tab">Following</div>
            </div>
           <PostForm />
            {/* Tweet posts */}
            <div className='post'>
                {posts?.map((post) => (
                   <PostBox post={post} key={post.id}/>
                ))}
            </div>
        </div>
    );
}