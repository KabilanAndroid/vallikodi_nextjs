import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Dialog from "@mui/material/Dialog";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { FC } from "react";


type LoginDialogModelType = {
    open: boolean;
    handleClose: () => void;
    showPassword: boolean;
    handleClickShowPassword: () => void;
    handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleMouseUpPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;

}
const LoginDialogModel: FC<LoginDialogModelType> = (
    {
        open,
        handleClose,
        showPassword,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleMouseUpPassword,
    }
) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                slotProps={{
                    paper: {
                        className: "!rounded-2xl p-10  max-w-lg bg-white shadow-xl",
                    },
                }}
            >
                <div className="flex justify-center items-center">
                    <img src={"https://vallikodivanniarmatrimonial.in/frontend/img/vallikodi_new_logo.png"}></img>

                </div>
                <div className="flex justify-center items-center p-1 flex-col gap-3">
                    <p className="font-semibold text-2xl">Login</p>
                    <TextField className="w-100  flex flex-1 rounded-4xl" id="outlined-search" label="mobile number" type="search" />
                    <FormControl variant="outlined" className="w-100 rounded-4xl flex flex-1" >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            className="w-100 rounded-4xl flex flex-1"
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

                </div>
                <div className="flex flex-1 items-center justify-between flex-col gap-1 pt-2">
                    <div className="relative overflow-hidden  border border-secondary text-secondary rounded-4xl group w-100 items-center justify-center" >

                        <div className="relative flex items-center  justify-center overflow-hidden group pt-3 pb-3 ">
                            <p className="text-xl  m-0 relative z-10  group-hover:text-white transition-colors duration-300">
                                Login
                            </p>
                            <span className="absolute inset-0 bg-brand-secondary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                        </div>

                    </div>
                    <div className="flex items-center justify-center w-full">
                        <span className="mx-4 text-gray-500">OR</span>
                    </div>

                    <div className="relative overflow-hidden bg-brand-primary border border-secondary text-secondary rounded-4xl group w-100 items-center justify-center" >

                        <div className="relative flex items-center justify-center overflow-hidden group pt-3 pb-3 ">
                            <p className="text-xl  m-0 relative z-10  group-hover:text-brand-primary transition-colors duration-300">
                                Register
                            </p>
                            <span className="absolute inset-0 bg-white  -translate-x-full group-hover:translate-x-0  transition-transform duration-300 z-0" />
                        </div>

                    </div>

                </div>
            </Dialog>
        </div>
    )
}

export default LoginDialogModel;