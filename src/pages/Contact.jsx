// import React from 'react';
// import lemons from '../assets/lemons.png'; 
// import Rl from '../assets/rl.png'; 
// import { useContactusMutation } from '../redux/contoctusApi';

// function Contact() {
//  const [contactus]= useContactusMutation()
//   return (
//     <div id='contactus' className ='flex items-center justify-center px-4 mb-24 sm:px-8 lg:px-20'>
//       <div className="relative w-full max-w-7xl">

 
//         <img className='block w-full h-auto sm:hidden' src={Rl} alt="Responsive" />

        
//         <img className='hidden w-full h-auto sm:block' src={lemons} alt="Lemons" />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 sm:px-8">

           
//             <div className="bg-[#659921D6] text-white p-6 sm:p-10 rounded-xl max-w-md w-full">
//               <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">
//                 Get in Touch with <span className="text-yellow-300">FreshFruitWala!</span>
//               </h1>
//               <p className="text-base sm:text-lg text-[#FFF4B8] leading-relaxed">
//                 We’d love to hear from you! Whether you have a query, need assistance, or just want to know more about our farm-fresh fruits, feel free to reach out.
//               </p>
//             </div>

            
//             <div className="w-full max-w-md p-6 text-white bg-green-800 sm:p-10 rounded-xl">
//               {['Name', 'Email', 'Contact No', 'Address'].map((placeholder, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={placeholder}
//                   className="w-full mb-4 p-3 rounded-lg bg-[linear-gradient(90deg,_rgba(50,100,10,0.8)_0%,_rgba(169,169,169,0.5)_100%)] text-green-900 placeholder-green-900 focus:outline-none"
//                 />
//               ))}
//               <button className="w-full py-3 font-bold text-green-900 transition duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500">
//                 Send Enquiry
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import React, { useState } from 'react';
import lemons from '../assets/lemons.png'; 
import Rl from '../assets/rl.png'; 
import { useContactusMutation } from '../redux/contoctusApi';

function Contact() {
  const [contactus] = useContactusMutation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;

    switch (placeholder) {
      case 'Name':
        setFormData({ ...formData, name: value });
        break;
      case 'Email':
        setFormData({ ...formData, email: value });
        break;
      case 'Contact No':
        setFormData({ ...formData, contact: value });
        break;
      case 'Address':
        setFormData({ ...formData, address: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    try {
      await contactus(formData).unwrap();
      alert('Enquiry Sent Successfully!');
      setFormData({ name: '', email: '', contact: '', address: '' });
    } catch (error) {
      alert('Something went wrong!');
      console.error(error);
    }
  };

  return (
    <div id='contactus' className='flex items-center justify-center px-4 mb-24 sm:px-8 lg:px-20 '>
 <div
  style={{ backgroundImage: `url(${lemons})` }}
  className="relative w-full max-w-7xl bg-cover bg-center min-h-[300px] rounded-lg sm:min-h-[400px] md:min-h-[500px]"
>

        <img className='block w-full h-auto sm:hidden' src={Rl} alt="Responsive" />
        {/* <img className='hidden w-full  sm:block h-full' src={lemons} alt="Lemons" /> */}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 sm:px-8">

            <div className="bg-[#659921D6] text-white p-6 sm:p-10 rounded-xl max-w-md w-full">
              <h1 className="mb-4 text-2xl font-semibold sm:text-3xl">
                Get in Touch with <span className="text-yellow-300">FreshFruitWala!</span>
              </h1>
              <p className="text-base sm:text-lg text-[#FFF4B8] leading-relaxed">
                We’d love to hear from you! Whether you have a query, need assistance, or just want to know more about our farm-fresh fruits, feel free to reach out.
              </p>
            </div>

            <div className="w-full max-w-md p-6 text-white bg-green-800 sm:p-10 rounded-xl">
              {['Name', 'Email', 'Contact No', 'Address'].map((placeholder, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={placeholder}
                  value={
                    placeholder === 'Name'
                      ? formData.name
                      : placeholder === 'Email'
                      ? formData.email
                      : placeholder === 'Contact No'
                      ? formData.contact
                      : formData.address
                  }
                  onChange={handleChange}
                  className="w-full mb-4 p-3 rounded-lg bg-[linear-gradient(90deg,_rgba(50,100,10,0.8)_0%,_rgba(169,169,169,0.5)_100%)] text-green-900 placeholder-green-900 focus:outline-none"
                />
              ))}
              <button
                onClick={handleSubmit}
                className="w-full py-3 font-bold text-green-900 transition duration-300 bg-yellow-400 rounded-lg hover:bg-yellow-500"
              >
                Send Enquiry
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
