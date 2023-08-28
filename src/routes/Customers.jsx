import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomerCard from "../components/CustomerCard";
import { Grid, Typography } from "@mui/material";
import ModalConfirm from "../components/ModalConfirm";

const Customers = ({ title }) => {
    const [customers, setCustomers] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data;
                setCustomers(data);
            });
    }, []);

    const handleToggleOpenModal = () => {
        setOpenModal(!openModal);
    };

    const handleConfirmModal = () => {
        console.log("ok");
    };

    return (
        <>
            <Typography variant="h2">{title}</Typography>
            <Grid container>
                {
                    customers.map(item => (
                        <Grid item xs={12} md={4} key={item.id}>
                            <CustomerCard
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                onOpenModal={handleToggleOpenModal}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            <ModalConfirm
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={handleConfirmModal}
                title='Deseja remover esse cadastro?'
                message='Não será possível reverter essa ação.'
            />
        </>
    );
};

export default Customers;
