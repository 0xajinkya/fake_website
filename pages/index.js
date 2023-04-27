import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import { Box } from '@mui/material'
import Main from '@/components/Main'
import ResultModal from '@/components/ResultModal'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        overflowX: 'hidden',
        maxHeight: '100vh',
        overflowY: 'hidden'
      }}
    >
      <Navbar />
      <Main open={open} setOpen={setOpen}/>
      <ResultModal open={open} setOpen={setOpen} />
    </Box>
  )
}
