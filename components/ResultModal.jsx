import { Box, Fade, Modal } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const ResultModal = ({ open, setOpen }) => {
    const router = useRouter();
    return (
        <Modal
            open={open}
            // open={true}
            onClose={() => { setOpen(false); router.reload() }}
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Fade
                in={open}
            // in={true}
            >
                <Box
                    sx={{
                        width: ['300px', '500px'],
                        height: ['350px', '400px'],
                        position: 'relative',
                        borderRadius: '30px',
                    }}
                    overflow={'hidden'}
                >
                    <Image 
                        src={'/meme.jpg'}
                        fill
                        style={{
                            objectFit: 'contain'
                        }}
                    />
                </Box>
            </Fade>
        </Modal>
    )
}

export default ResultModal