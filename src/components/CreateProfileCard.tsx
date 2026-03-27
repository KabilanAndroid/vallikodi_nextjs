"use client"
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { colors } from "../config/colors";
import React from "react";
import { Eye, EyeOff } from "lucide-react";


const CreateProfileCard = () => {


    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <div className="p-10">
            <div className="flex justify-center gap-20 flex-col lg:flex-row  md:flex-col sm:flex-col xl:flex-row 2xl:flex-row">
                <div className="flex justify-center items-center flex-col">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                        வள்ளிக்கொடி வன்னியர் குல சத்திரியர்
                    </p>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">திருமண தகவல் மையத்திற்கு, உங்களை</p>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">அன்புடன் வரவேற்கிறோம்.</p>
                </div>
                <div className=" bg-amber-50 rounded-4xl p-10">
                    <div className="flex justify-center flex-col items-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Create a Profile</h1>
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Find your perfect match</h1>
                    </div>
                    <div className="flex  gap-4 pt-4 pb-4 flex-col lg:flex-row  md:flex-col sm:flex-col xl:flex-row 2xl:flex-row">
                        <div className="flex flex-1">
                            <input
                                type="text"
                                value={""}
                                onChange={() => console.log('')}
                                placeholder="profile created for"
                                className="border-gray-400 border p-2 rounded-xl flex flex-1"
                            />
                        </div>
                        <div className="flex flex-1">
                            <input
                                type="text"
                                value={""}
                                onChange={() => console.log('')}
                                placeholder="name"
                                className="border-gray-400 border p-2 rounded-xl flex flex-1"
                            />
                        </div>
                    </div>
                    <div className="flex  gap-7 pt-4 pb-4 flex-col lg:flex-row  md:flex-col sm:flex-col xl:flex-row 2xl:flex-row">
                        <div className="flex flex-col  pt-0 ">
                            <h1>Gender</h1>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"

                            >
                                <FormControlLabel value="female" control={<Radio sx={{

                                    '&.Mui-checked': {
                                        color: colors.secondary,
                                    },
                                }} />} label="Female" />
                                <FormControlLabel value="male" control={<Radio sx={{

                                    '&.Mui-checked': {
                                        color: colors.secondary,
                                    },
                                }} />} label="Male" />
                            </RadioGroup>

                        </div>
                        <div className="flex flex-col pt-0 gap-1">
                            <h1>Mobile number</h1>
                            <input
                                type="text"
                                value={""}
                                onChange={() => console.log('')}
                                placeholder="Mobile number"
                                className="border-gray-400 border p-2 rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="relative flex w-full pt-2">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="border-gray-400 border p-3  rounded-xl w-full pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreateProfileCard;
