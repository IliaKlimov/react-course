import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "100px auto",
    borderColor: "red"
}

const Spinner = ({loading}) => (
    <ClipLoader
        color="#36d7b7"
    loading={loading}
    cssOverride={override}/>
);

export default Spinner;