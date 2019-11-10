import React from 'react';
import Layout from '../components/Layout';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const Home = () => {
    // const { data, loading, error } = useQuery(HELLO_QUERY);
    // if (loading) return <div>Loading...</div>;

    return (
        <Layout>
            <div className="hero">
                <h1 className="title">Habit Tracker</h1>
                <div className="list"></div>
                <HabitForm />
                <HabitList />
            </div>

            <style jsx>{`
                .hero {
                    width: 100%;
                    color: #333;
                }
                .title {
                    margin-top: 0;
                    width: 100%;
                    padding-top: 80px;
                    line-height: 1.15;
                    font-size: 48px;
                }
                .title;
                .list {
                    max-width: 600px;
                    margin: 0 auto;
                }
            `}</style>
        </Layout>
    );
};

export default withApollo(Home);
