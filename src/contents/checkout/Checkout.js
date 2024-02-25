import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';


const Checkout = () => {
  return (
    
    <div className='bg-slate-100 min-h-screen'>
      <div className='md:flex md:mx-32'>
       
       <div className=' my-12 md:flex-1 space-y-3'>

          <div className='flex items-center cursor-pointer'>
              <Accordion className='w-full'>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header" >
              <Typography>1. LOGIN OR SIGNUP</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className='space-y-3 ' >
              <div className='w-'>
              <TextField id="standard-basic" label="Enter Email ID or Phone No." variant="standard" /></div>
                <div className=' '>
                <Button variant="outlined">Continue Checkout</Button>
                </div>
              </div>
              </Typography>
              </AccordionDetails>
              </Accordion>
            </div>
        
            <div className='flex items-center cursor-pointer '>
                <Accordion  className='w-full'>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header">
                  <Typography>2. DELIVERY ADDRESS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className='space-y-3'>
                    <div className='flex gap-3'>
                  <div><TextField id="outlined-basic" label="Name" variant="outlined" /></div>
                  <div><TextField id="outlined-basic" label="10 digit Mobile Number" variant="outlined" /></div>
                  </div>
                  <div className='flex gap-3'>
                  <div> <TextField id="outlined-number" label="Pincode" type="number" InputLabelProps={{ shrink: true, }}/></div>
                  <div><TextField id="outlined-basic" label="Locality" variant="outlined" /></div>
                  </div>
                <div className=''>
                    <TextField id="outlined-multiline-flexible" label="Address (Area or Street)" multiline maxRows={4} className=' md:w-[400px]' />
                    </div> 
                    <div className='flex gap-3'>
                      <div><TextField required id="outlined-required" label="District" defaultValue="Haridwar" /> </div>
                      <div><TextField id="outlined-basic" label="State" variant="outlined" /> </div>
                    </div>
                    <div className='flex gap-3'>
                      <div><TextField id="outlined-basic" label="Landmark (Optional)" variant="outlined" />  </div>
                      <div><TextField id="outlined-basic" label="Alternate Phone Number" variant="outlined" />  </div>
                    </div>
                  <div className='flex gap-3'>
                  <div><Button variant="outlined" size="large" >
                    Save And Deliver Here
                  </Button></div> 
                  <div><Button variant="text">Cancel</Button></div>
                    </div>
                    </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
            </div>

          <div className='flex items-center cursor-pointer '>
            
            <Accordion  className='w-full'>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography>3. PAYMENTS OPTIONS</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className=''>
              <FormGroup>
                <div>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="UPI" /></div>
              <div>
            <FormControlLabel required control={<Checkbox />} label="Credit/ Debit /ATM Card" /></div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Net Banking" /></div>
            <div>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Cash On Delivery" /></div>
          </FormGroup></div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>  
       </div>
       </div>

       

{/* ------------------------------------half------------------------------------------------------------- */}
       <div className='flex-2 my-12 '>
        <div className='flex items-center mx-3 gap-2'>
          <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_5f9216.png'
          alt='logo' 
          className='h-[30px]'>
          </img>
          <div className='md:flex'>
         <p>Safe and Secure Payments.</p>
         <p>Easy Returns.</p>
         </div>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Checkout
