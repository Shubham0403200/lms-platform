// import React, { useState } from "react";
// import { PhoneCall } from "lucide-react";

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       {!isOpen && (
//         <div className="absolute bottom-12 right-0 bg-blue-600 text-white text-xs md:text-sm px-4 py-2 rounded-lg shadow-lg animate-bounce z-50 w-[10rem]">
//           Need help? Chat with us!
//         </div>
//       )}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="bg-green-600 hover:bg-green-700 rounded-full p-4 shadow-lg fixed bottom-6 right-6 z-50"
//       >
//         <PhoneCall className="w-5 h-5 text-white" />
//       </button>
//       {isOpen && (
//         <div className="fixed bottom-16 right-6 md:w-[600px] w-[80%] h-[80%] bg-white shadow-2xl rounded-lg overflow-hidden z-40">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 z-50"
//           >
//             ✖
//           </button>
//           <iframe
//             src="https://interfaces.zapier.com/embed/chatbot/cm5o0gyqc000bslkpe3esg59m"
//             className="w-full h-full"
//             allow="clipboard-write *"
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;
