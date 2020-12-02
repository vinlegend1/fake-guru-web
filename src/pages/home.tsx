import { Card, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import React, { useContext, useEffect, useState } from 'react'
import Layout from 'src/components/Layout';
import { GetPostType } from 'src/types';
import { callPostsFromFollowed } from 'src/utils/calls/postCalls';
import { genUniqKeyForPosts } from 'src/utils/generateUniqueKey';
import { AuthContext } from '../context/authContext'

const Home = () => {
    const [posts, setPosts] = useState<GetPostType[] | null>(null);
    const { user } = useContext(AuthContext);

    const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }));

    const thing = async () => {
        const returnedPosts = await callPostsFromFollowed();
        if (!returnedPosts) {
            setPosts([]);
        } else {
            setPosts([...returnedPosts])
        }
    }
    useEffect(() => {
        thing();
    }, [])

    return (
        <Layout>
            {
                posts?.map(({ boardName, body, creatorId, title, boardId, postId, username }) => (
                    <Card variant="outlined" key={genUniqKeyForPosts(boardId, creatorId, postId)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>{boardName}</Typography>
                            <Typography variant="h5" component="h2">{title}</Typography>
                            <Typography color="textSecondary">{body}</Typography>
                            <Typography variant="body2" component="p">
                                {username}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
        </Layout>
    )
}

export default Home
