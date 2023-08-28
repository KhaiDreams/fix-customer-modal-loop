import { Typography } from "@mui/material";
const Home = ({ title }) => {
    Home.propTypes = title;
    return (
        <>
            <Typography variant="h2">{ title }</Typography>
        </>
    )
}

export default Home