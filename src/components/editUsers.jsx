import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const UserForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        visa: '',
        isAdmin: false,
    });

    const [users, setUsers] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleToggleChange = (event) => {
        const { checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            isAdmin: checked,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUsers((prevUsers) => [...prevUsers, formData]);
        // Clear form data after submission
        setFormData({
            username: '',
            email: '',
            phone: '',
            visa: '',
            isAdmin: false,
        });
    };

    const handleDeleteUser = (index) => {
        setUsers((prevUsers) => {
            const newUsers = [...prevUsers];
            newUsers.splice(index, 1);
            return newUsers;
        });
    };

    const handleToggleAdmin = (index) => {
        setUsers((prevUsers) => {
            const newUsers = [...prevUsers];
            newUsers[index].isAdmin = !newUsers[index].isAdmin;
            return newUsers;
        });
    };

    return (
        <Grid className={"edit-users"} container spacing={2}>
            <Grid item xs={6}>
                <form  onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Visa"
                                name="visa"
                                value={formData.visa}
                                onChange={handleInputChange}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container alignItems="center">
                                <Grid item>User</Grid>
                                <Grid item>
                                    <Switch
                                        name="isAdmin"
                                        checked={formData.isAdmin}
                                        onChange={handleToggleChange}
                                        color="primary"
                                    />
                                </Grid>
                                <Grid item>Admin</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button type="submit" variant="contained" color="primary">
                        Add User
                    </Button>
                </form>
            </Grid>
            <Grid item xs={6}>
                <Table>
                    <TableBody>
                        {users.map((user, index) => (
                            <TableRow key={index}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>{user.visa}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={user.isAdmin}
                                        onChange={() => handleToggleAdmin(index)}
                                        color="primary"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="outlined"
                                        color="secondary"
                                        onClick={() => handleDeleteUser(index)}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                    <Button variant="outlined" color="primary" startIcon={<EditIcon />}>
                                        Edit
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

export default UserForm;
