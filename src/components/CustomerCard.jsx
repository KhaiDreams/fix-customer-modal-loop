import { useState } from 'react'
import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import ModalConfirm from './ModalConfirm'
const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
}) => {
    CustomerCard.propTypes = { name, lastname, email, avatar }

    const [openModal, setOpenModal] = useState(false)
    const handleToggleOpenModal = () => {
        setOpenModal(!openModal)
    }
    const handleConfirmModal = () => {
        console.log("ok")
    }
    const handleRemoveCustomer = () => {
        handleConfirmModal()
    }
    return (
        <>
            <Card sx={{ maxWidth: 345, bgcolor: '#DFD7BF', margin: '20px 0' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={avatar}>
                        </Avatar>
                    }
                    title={`${name} ${lastname}`}
                    subheader={email}
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="share" onClick={handleRemoveCustomer}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            <ModalConfirm
                open={openModal}
                onClose={handleToggleOpenModal}
                onConfirm={handleConfirmModal}
                title='Deseja remover esse cadastro?'
                message='Não será possível reverter essa ação.'
            />
        </>

    )
}
export default CustomerCard