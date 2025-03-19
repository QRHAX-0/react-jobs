import { ClipLoader } from "react-spinners";


const override = {
    display: "block"
    , margin: "100px auto"
}
const spinner = ({ loading }) => {
    return (
        <>
            <ClipLoader loading={loading} size={100} cssOverride={override} color="#4339ca" />
        </>
    )
}

export default spinner