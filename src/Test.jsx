import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import "./styles.css";

export default function Test() {
    console.log('SKELETON!');
    return (
        <Stack className="skele" spacing={1}>


            <Skeleton variant="rounded" width={300} height={450} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />
            <Skeleton variant="rounded" width={500} height={60} />

        </Stack>
    );
}