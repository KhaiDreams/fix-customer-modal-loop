import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
    onOpenModal,
}) => {
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
                    <IconButton aria-label="share" onClick={onOpenModal}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default CustomerCard;
