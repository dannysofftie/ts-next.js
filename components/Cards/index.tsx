import { Button, Card } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Fragment } from 'react';

const iconStyle = {
    borderRadius: '49%',
    height: 130,
    width: 130,
};

const customCardStyle = {
    borderRadius: 10,
    border: '0.2px solid rgba(0,0,0,0.3)',
    height: '100%',
    margin: 2,
};

export const FeaturedCard = (props) => {
    const params = {
        title: props['title'],
        icon: props['icon'],
        description: props['description'],
    };

    return (
        <Card>
            <div className='content-flex-centered'>
                <Title level={3}>{params.title}</Title>
                <Button style={iconStyle}>{params.icon}</Button>
                <p>{params.description}</p>
            </div>
        </Card>
    );
};

export const CustomCard = (props) => {
    // card logic here

    return (
        <Fragment>
            <section style={customCardStyle}></section>
        </Fragment>
    );
};
