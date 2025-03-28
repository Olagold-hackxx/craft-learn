// import { Text, Heading, Img, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
// import CourseOverview from "../../components/CourseOverview";

// export default function BeadMakingCourseSection() {
//   return (
//     <>
//       {/* bead making course section */}
//       <div className="flex flex-col gap-5 px-5">
//         <Breadcrumb
//           separator={<Text className="h-[16px] w-[5px] text-[12px] font-normal !text-colors">/</Text>}
//           className="flex flex-wrap items-center gap-3"
//         >
//           <BreadcrumbItem>
//             <BreadcrumbLink href="#" className="lg:text-[13px]">
//               <Text size="textxl" as="p" className="text-[16px] font-normal !text-black-900">
//                 Home{" "}
//               </Text>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbItem isCurrentPage>
//             <BreadcrumbLink href="#" className="lg:text-[13px]">
//               <Text size="textxl" as="p" className="text-[16px] font-normal !text-black-900">
//                 Courses
//               </Text>
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//         </Breadcrumb>
//         <div className="mr-[18px] flex items-center gap-5 md:mr-0 md:flex-col">
//           <div className="relative h-[448px] flex-1 rounded-[16px] bg-gray-50_03 px-4 py-3.5 md:w-full md:flex-none md:self-stretch">
//             <Img
//               src="images/img_e9d9f543d6d501e.png"
//               alt="E9d9f543d6d501e"
//               className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[416px] flex-1 rounded-lg object-cover"
//             />
//             <div className="absolute bottom-[15px] left-0 right-0 mx-auto flex flex-1 flex-col items-start gap-4 rounded-bl-lg rounded-br-lg bg-gradient1 p-2">
//               <Heading size="heading3xl" as="h1" className="text-[24px] font-bold lg:text-[20px]">
//                 Bead Making
//               </Heading>
//               <Text size="textxl" as="p" className="w-full text-[16px] font-normal leading-6 lg:text-[13px]">
//                 Learn to craft beautiful beadwork using essential techniques and patterns. Create unique jewelry and
//                 accessories with precision.
//               </Text>
//             </div>
//           </div>
//           <div className="flex w-[42%] justify-center md:w-full"></div>
//                   <CourseOverview className="w-[34%]" />
//                   <CourseOverview
//                     estimatedDurationText="Skill Level"
//                     weeksCounterText="Beginner to Advanced"
//                     courseFormatText="Certification"
//                     className="w-[66%]"
//                   />
//                 </div>
//                 <div className="flex items-start gap-2 sm:flex-col">
//                   <div className="h-[24px] w-[20px] rounded-[3px] border-[0.51px] border-solid border-black-900" />
//                   <div className="flex flex-1 flex-col items-start gap-2 self-center sm:self-stretch">
//                     <Text size="textxs" as="p" className="text-[12px] font-normal">
//                       Learning Outcome
//                     </Text>
//                     <div className="flex flex-col items-start justify-center gap-1.5 self-stretch">
//                       <Text as="p" className="text-[14px] font-medium">
//                         Master various bead-making techniques
//                       </Text>
//                       <Text as="p" className="text-[14px] font-medium">
//                         Create custom bead accessories (bracelets, earrings, bags, etc.)
//                       </Text>
//                       <Text as="p" className="text-[14px] font-medium">
//                         Understand pricing, branding & selling beadwork
//                       </Text>
//                       <Text as="p" className="text-[14px] font-medium">
//                         Learn how to integrate Web3 into your craft business
//                       </Text>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
// </>
//   );
// }