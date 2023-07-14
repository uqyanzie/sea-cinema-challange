import * as React from 'react';
import { Button, Modal, Typography, Box, Grid, Container } from '@mui/material';
import { Formik, Field, Form } from 'formik';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  width: {xs:"98%", sm:"80%"},
  border: '2px solid #000',
  boxShadow: 24,
  p: 0,
};

export default function ShowSeatPicker({open, onClose, showData}) {

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
            <Container maxWidth="md" sx={{padding:2, marginY:2, border: "solid 1px #000"}}>
            
            </Container>
        </Box>
      </Modal>
    </>
  );
}