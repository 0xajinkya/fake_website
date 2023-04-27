import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <Box
            sx={{
                width: '100vw'
            }}
        >
            <Box
                sx={{
                    display: ['none', 'flex'],
                    px: ['0px', '150px']
                }}
            >
                <Image
                    src={'/ssbtpng.png'}
                    width={600}
                    height={70}
                />
            </Box>
            <Box
                sx={{
                    display: ['flex', 'none'],
                    px: ['30px', '150px'],
                }}
            >
                <Image
                    src={'/ssbtpng.png'}
                    width={300}
                    height={50}
                />
            </Box>
            <Box
                sx={{
                    backgroundColor: 'orange',
                    height: '60px',
                    maxWidth: '100vw',
                    overflowX: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    px: '25px',
                    gap: '20px',
                    justifyContent: 'space-between'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        px: '25px',
                        gap: '20px'
                    }}
                >
                    <Typography
                    >
                        SSBTs
                    </Typography>

                    <Typography
                    sx={{
                        display: ['none', 'flex']
                    }}
                    >
                        Home
                    </Typography>
                    <Typography
                    sx={{
                        display: ['none', 'flex']
                    }}
                    >
                        Student Portal
                    </Typography>
                    <Typography
                    sx={{
                        display: ['none', 'flex']
                    }}
                    >
                        Library Management
                    </Typography>
                </Box>
                <Typography>
                    Login
                </Typography>
            </Box>
        </Box>
    )
}

export default Navbar
