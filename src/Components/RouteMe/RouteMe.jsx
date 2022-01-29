import React from 'react';
import { useParams } from 'react-router-dom';
import { AxiosGet } from '../../utilities/Axios/Axios';

const RouteMe = () => {
    const { code } = useParams();
    React.useLayoutEffect(() => {
        AxiosGet(`/show/${code}`).then(
            res => {
                window.location = res.data.url;
            }
        )

    });
    return <div></div>
};

export default RouteMe;
