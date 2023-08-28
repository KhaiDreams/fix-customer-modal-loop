import { useState, useEffect } from "react"
import axios from "axios"
import CostumerCard from "../components/CustomerCard"
import { Grid, Typography } from "@mui/material"

const Customers = ({ title }) => {
    Customers.propTypes = title
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)
            })
    }, [])
    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <Grid container >
                {
                    customers.map(item => (
                        <Grid item xs={12} md={4} key="key">
                            <CostumerCard
                                key="key"
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                            />
                        </Grid>
                    ))
                }
            </Grid>

        </>
    )
}
export default Customers