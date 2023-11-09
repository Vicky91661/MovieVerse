import React from "react";

import Curousel from "../../../components/curousel/Curousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <>
            {data?.results?.length > 0 ? <Curousel
                title={title}
                data={data?.results}
                loading={loading}
                endpoint={mediaType}
            /> :null}
        </>
        
    );
};

export default Similar;