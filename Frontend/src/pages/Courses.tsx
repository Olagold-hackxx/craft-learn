// =import { Img, CheckBox, Text, Button, Heading } from "../../components";
// import CourseSection from "./CourseSection";
// import CurriculumOverviewSection from "./CurriculumOverviewSection";

// export default function CoursesPage() {
//   return (
//     <>
      
//             <div className="flex flex-1 flex-col gap-5 bg-gray-200_a8_01 py-5">
//               {/* bead making course section */}
//               <CourseSection />
//               <div className="mx-5 flex gap-5 md:mx-0 md:flex-col">
//                 <div className="flex-1 rounded-[16px] bg-gray-50_03 py-6 md:self-stretch md:px-5 sm:py-4">
//                   {/* curriculum overview section */}
//                   <CurriculumOverviewSection />
//                 </div>
//                 <div className="flex w-[32%] flex-col gap-8 rounded-[16px] bg-gray-50_03 px-6 md:w-full md:px-5">
//                   <div className="mt-6 flex flex-col items-start justify-center gap-1.5">
//                     <Heading
//                       as="h6"
//                       className="text-[20px] font-semibold lg:text-[17px]"
//                     >
//                       Start learning today!
//                     </Heading>
//                     <Text
//                       size="textxs"
//                       as="p"
//                       className="w-[84%] text-[12px] font-normal leading-4 lg:w-full md:w-full"
//                     >
//                       Gain hands-on expertise and industry-recognized
//                       certification. Elevate your skills and stand out in your
//                       field!
//                     </Text>
//                   </div>
//                   <div className="flex items-start justify-between gap-5 sm:flex-col">
//                     <div className="flex flex-1 flex-col gap-4 sm:self-stretch"></div>
//                     <div className="flex flex-col items-start gap-5 border-b border-solid border-gray-600_77 py-2">
//                       <Text
//                         size="textxs"
//                         as="p"
//                         className="text-[12px] font-medium !text-gray-600_01"
//                       >
//                         Free Plan (Get Started for Free!)
//                       </Text>
//                       <div className="flex flex-col items-start gap-3 self-stretch">
//                         <CheckBox
//                           name="accesstobeginne"
//                           label="Access to beginner modules (Module 1-3)"
//                           id="accesstobeginne"
//                           className="gap-2 text-[12px] text-blue_gray-900"
//                         />
//                         <CheckBox
//                           name="stepbystepvideo"
//                           label="Step-by-step video tutorials"
//                           id="stepbystepvideo"
//                           className="gap-2 text-[12px] text-blue_gray-900"
//                         />
//                         <CheckBox
//                           name="nocertification"
//                           label="No certification"
//                           id="nocertification"
//                           className="gap-2 text-[12px] text-blue_gray-900"
//                         />
//                       </div>
//                       <Button
//                         shape="round"
//                         className="mb-2 min-w-[188px] rounded-[16px] !border px-[15px]"
//                       >
//                         Start Learning for Free
//                       </Button>
//                     </div>
//                     <div className="mb-4 flex flex-col items-start gap-5">
//                       <Text
//                         size="textxs"
//                         as="p"
//                         className="text-[12px] font-medium !text-gray-600_01"
//                       >
//                         Premium Plan (Unlock Full Access!)
//                       </Text>
//                       <div className="flex flex-col items-start gap-3 self-stretch">
//                         <Text
//                           size="textxs"
//                           as="p"
//                           className="text-[12px] font-normal"
//                         >
//                           Everything in Free Plan PLUS:
//                         </Text>
//                         <CheckBox
//                           name="advancedbeadmak"
//                           label="Advanced bead-making techniques"
//                           id="advancedbeadmak"
//                           className="gap-2 text-[12px] text-blue_gray-900_01"
//                         />

//                         <CheckBox
//                           name="handsonprojects"
//                           label="Hands-on projects with expert feedback"
//                           id="handsonprojects"
//                           className="gap-2 text-[12px] text-blue_gray-900_01"
//                         />
//                         <CheckBox
//                           name="nftcertificatio"
//                           label="NFT certification upon completion"
//                           id="nftcertificatio"
//                           className="gap-2 text-[12px] text-blue_gray-900_01"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col self-center rounded bg-gray-200_02">
//                     <Img
//                       src="images/img_arrow_up.svg"
//                       alt="Arrowup"
//                       className="mb-[410px] h-[10px] rounded-tl rounded-tr"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
