"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider,
useQuery} from '@tanstack/react-query'

const queryClient = new QueryClient();
type Props = {
    children :React.ReactNode;
}

const LayoutContainer = ({children}: Props) => {
  return (
   <ThemeProvider attribute='class'>
    <QueryClientProvider client={queryClient}>{children} </QueryClientProvider>

   </ThemeProvider>
  )
}

export default LayoutContainer