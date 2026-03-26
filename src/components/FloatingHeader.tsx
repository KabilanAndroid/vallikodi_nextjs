"use client"

import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import Link from "next/link"
import React from "react";

export const FloatingHeader = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData as any).entries());
        const email = formJson.email;
        console.log(email);
        handleClose();
    };
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <div className="pl-10 pr-10 pt-5 pb-5">
            <div className="flex w-full h-20 bg-amber-50 rounded-4xl items-center justify-between p-10">
                <div className="flex justify-around gap-10">
                    <Link href="/home">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/gallery">Gallery</Link>

                </div>
                <div>
                    <Button variant="contained" color="success" onClick={handleClickOpen}>
                        Login
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            paper: {
                                className: "!rounded-2xl p-6 w-full max-w-lg bg-white shadow-xl",
                            },
                        }}
                    >
                        <div className="flex justify-center items-center">
                            <img src={"https://vallikodivanniarmatrimonial.in/frontend/img/vallikodi_new_logo.png"}></img>

                        </div>
                        <div className="flex justify-center items-center p-10 flex-col gap-8">
                            <h1 className="font-semibold text-2xl">Login</h1>
                            <TextField className="w-100 rounded-4xl" id="outlined-search" label="mobile number" type="search" />
                            <FormControl  variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    className="w-100 rounded-4xl"
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword ? 'hide the password' : 'display the password'
                                                }
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                onMouseUp={handleMouseUpPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <div className="bg-emerald-400">
                            <Button className="caret-black" >Login</Button>
                            </div>
                        </div>

                    </Dialog>
                </div>
            </div>
        </div>
    )
}