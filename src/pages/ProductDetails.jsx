import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Divider, Header, Image, Modal } from 'semantic-ui-react'

const ProductDetails = () => {

  const name = useParams()

  const [open, setOpen] = useState(true)
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header className='text-center'>Fruits and vegetable</Modal.Header>
        <Modal.Content image>
          <Image size='medium' src='https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F272%2Fpurina_pro_plan.jpg&w=640&q=75' wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your e-mail
              address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>



        </Modal.Content>


        <br />

        <div>
          <h2>Bangladesh is thw Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repudiandae consequatur qui inventore rem, necessitatibus eos libero ullam sit? Nihil. </h2>
        </div>
        <Divider />
      </Modal>
    </div>
  )
}

export default ProductDetails