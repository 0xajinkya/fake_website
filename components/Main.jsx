import { Box, Button, Checkbox, FormControlLabel, FormGroup, InputBase, TextField, Typography } from '@mui/material'
import React from 'react'

const Main = ({open, setOpen}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true)
    }
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'flex-start',
                pt: '200px',
            }}
        >
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}
                onSubmit={handleSubmit}
            >
                <Typography
                    sx={{
                        fontSize: '12px',
                        color: 'grey',
                        pl: '5px'
                    }}
                >
                    Enter your PNR number
                </Typography>
                <InputBase
                    sx={{
                        border: '1px solid grey',
                        width: ['300px'],
                        borderRadius: '30px',
                        px: '20px'
                    }}
                    required
                />
                <Button
                    type='submit'
                    sx={{
                        color: 'white',
                        backgroundColor: 'green',
                        mt: '20px',
                        border: '1px solid green',
                        ":hover": {
                            backgroundColor: 'white',
                            color: 'green',
                        }
                    }}
                    // onClick={() }
                >
                    Show Result
                </Button>
            </form>
        </Box>
    )
}

export default Main
