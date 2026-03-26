import TextField from "@mui/material/TextField";


const CreateProfileCard = () => {
    return (
        <div className="p-10">
            <div className="flex flex-row justify-center gap-20 ">
                <div className="flex justify-center flex-col">
                    <p className="text-4xl">வள்ளிக்கொடி வன்னியர் குல சத்திரியர்</p>
                    <p className="text-4xl">திருமண தகவல் மையத்திற்கு, உங்களை</p>
                    <p className="text-4xl">அன்புடன் வரவேற்கிறோம்.</p>
                </div>
                <div className=" bg-amber-50 rounded-4xl p-10">
                    <div className="flex justify-center flex-col items-center">
                        <h1 className="text-4xl">Create a Profile</h1>
                        <h1 className="text-4xl">Find your perfect match</h1>
                    </div>
                    <div className="flex flex-row">
                        <div className="p-10">
                            <TextField sx={{
                                width: 180,
                                "& .MuiInputBase-root": {
                                    height: 40,
                                },
                            }} id="outlined-search" label="Search field" type="search" />
                        </div>
                        <div className="p-10">
                            <TextField sx={{
                                width: 180,
                                "& .MuiInputBase-root": {
                                    height: 40,
                                },
                            }} id="outlined-search" label="Search field" type="search" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreateProfileCard;
