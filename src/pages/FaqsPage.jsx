import React, { useState } from 'react'


import Faq from '../components/Faq.jsx'

const faqsElem = [
    {
        id: 1,
        qst: "How to contact with Customer Service?",
        ans: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!."
    },
    {
        id: 2,
        qst: "App installation failed, how to update system information?",
        ans: "Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum"
    },
    {
        id: 3,
        qst: "Website response taking time, how to improve?",
        ans: "At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum."
    },
    {
        id: 4,
        qst: "How do I create a account?",
        ans: "If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes."
    },

]

const FaqsPage = () => {

    return (
        <div className='w-full bg-background min-h-screen pt-36'>

            <h2 className='text-center font-bold text-5xl'>FAQ</h2>

            {
                faqsElem?.map((faq, i) => {
                    return <Faq key={i} id={faq.id} qst={faq.qst} ans={faq.ans} />
                })

            }

        </div>
    )
}

export default FaqsPage