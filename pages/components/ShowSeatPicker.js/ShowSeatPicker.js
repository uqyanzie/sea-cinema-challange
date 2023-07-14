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
    const seats = [];

    for (let i = 1; i <= 64; i++) {
        seats.push(   
            <label style={{width:"40px"}}>
                <Field value={values} type="checkbox" name="seatNums" style={{width:"20px"}}/>
                {i}
            </label>   
        )
    }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box sx={style}>
            <Container maxWidth="md" sx={{padding:2, marginY:2, border: "solid 1px #000"}}>
            <Formik
                initialValues={{
                    seatNums: [],
                }}
                onSubmit={async (values) => {
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                }}
            >
           {    ({values}) => (
                <Form>
                <div id="checkbox-group">Checked</div>
                        <div role="group">
                            {seats}    
                        </div>  
                    
                </Form>
           ) 
                
            }
            </Formik>
            </Container>
            
        </Box>
      </Modal>
    </>
  );
}