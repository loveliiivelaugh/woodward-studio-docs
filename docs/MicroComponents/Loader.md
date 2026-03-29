
# Loader.tsx

## Overview

... Auto-generated description ...

### Dependencies

### Reference

### Usage

### Storybook

### source

```tsx
import { Box, CircularProgress } from "@mui/material";

const Loader = ({ error }: { error?: boolean }) => {
    console.log("Loader: ", error);
    return (
        <Box 
            sx={{ 
                height: "100vh", 
                width: "100vw", 
                background: "rgba(33,33,33,0.2)", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"
            }}
        >
            <CircularProgress color="inherit" />
        </Box>
    )
}

export default Loader
```
