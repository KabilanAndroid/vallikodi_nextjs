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
import LoginDialogModel from "./Dialog/loginDialogModel";

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
        <div className="pl-10 pr-1 pt-5 pb-5">
            <div className="flex w-full h-20 bg-amber-50 rounded-4xl items-center justify-between p-10">
                <div className="flex flex-1 justify-between items-center">
                    <div>
                        <img src={"https://vallikodivanniarmatrimonial.in/frontend/img/vallikodi_new_logo.png"}></img>
                    </div>
                    <div className="flex flex-row gap-5">
                        <Link className="text-xl" href="/home">Home</Link>
                        <Link className="text-xl" href="/about">About</Link>
                        <Link className="text-xl" href="/gallery">Gallery</Link>
                    </div>
                    <div>
                        <button className="relative overflow-hidden px-6 py-2 border border-primary text-primary  group" onClick={handleClickOpen}>
                            <span className="relative z-10  text-c group-hover:text-white transition">
                                Login
                            </span>

                            <span className="absolute inset-0 bg-brand-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                        </button>
                    </div>
                </div>
                <LoginDialogModel 
                open={open} 
                handleClose={handleClose} 
                showPassword={showPassword} 
                handleClickShowPassword={handleClickShowPassword} 
                handleMouseDownPassword={handleMouseDownPassword} 
                handleMouseUpPassword={handleMouseUpPassword }/>
            </div>
        </div>
    )
}